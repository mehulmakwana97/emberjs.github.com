var App=Ember.Application.create({rootElement:"#builds-application"});App.Router.map(function(){this.route("release"),this.route("beta"),this.route("canary"),this.route("tagged")}),App.Router.reopen({notifyGoogleAnalytics:function(){var e=this.get("url");/^\//.test(e)||(e="/"+e),_gaq.push(["_trackPageview","/builds"+e])}.on("didTransition")}),App.CopyClipboardComponent=Ember.Component.extend({tagName:"span",hasFlash:ZeroClipboard.detectFlashSupport(),didInsertElement:function(){var e=new ZeroClipboard(this.$("button"),{moviePath:"/images/ZeroClipboard.swf",trustedDomains:["*"],allowScriptAccess:"always"});e.on("mousedown",function(e,t){Em.run.later(this,function(){$(this).removeClass("loading"),$(this).removeAttr("disabled")},1e3),Em.run.next(this,function(){$(this).addClass("loading"),$(this).attr("disabled","disabled")})}),this.$("input").on("click",function(){$(this).select()})}}),App.S3Bucket=Ember.Object.extend({files:[],isLoading:!1,queryUseSSL:!0,objectUseSSL:!1,delimiter:"/",bucket:"builds.emberjs.com",endpoint:"s3.amazonaws.com",delimiterParameter:function(){var e=this.getWithDefault("delimiter","").toString();return e?"delimiter="+e:""}.property("delimiter"),markerParameter:function(){return"marker="+this.getWithDefault("marker","").toString()}.property("marker"),maxKeysParameter:function(){return"max-keys="+this.getWithDefault("maxKeys","").toString()}.property("maxKeys"),prefixParameter:function(){return"prefix="+this.getWithDefault("prefix","").toString()}.property("prefix"),queryProtocol:function(){return this.get("queryUseSSL")?"https://":"http://"}.property("queryUseSSL"),queryBaseUrl:function(){return this.get("queryProtocol")+this.get("endpoint")+"/"+this.get("bucket")}.property("queryProtocol","endpoint","bucket"),objectProtocol:function(){return this.get("objectUseSSL")?"https://":"http://"}.property("objectUseSSL"),objectBaseUrl:function(){return this.get("objectProtocol")+this.get("bucket")}.property("objectProtocol","bucket"),queryParams:function(){return this.get("delimiterParameter")+"&"+this.get("markerParameter")+"&"+this.get("maxKeysParameter")+"&"+this.get("prefixParameter")}.property("delimiterParameter","markerParameter","maxKeysParameter","prefixParameter"),queryUrl:function(){return this.get("queryBaseUrl")+"?"+this.get("queryParams")}.property("queryBaseUrl","queryParams"),filesPresent:function(){return this.get("files").length}.property("files.@each"),filterFiles:function(e){var t=this.get("files");return t.filter(function(t){return t.get("name").indexOf(e+".")!==-1})},load:function(){var e=this,t=this.get("objectBaseUrl");this.set("isLoading",!0),Ember.$.get(this.get("queryUrl"),function(n){e.set("isLoading",!1),e.set("response",n);var r=n.getElementsByTagName("Contents"),i=r.length,s=[];for(var o=0;o<i;o++){var u=r[o].getElementsByTagName("Size")[0].firstChild.data,a=r[o].getElementsByTagName("Key")[0].firstChild.data,f=new Date(r[o].getElementsByTagName("LastModified")[0].firstChild.data);s.push(App.S3File.create({name:a,size:u,lastModified:f,relativePath:a,baseUrl:t}))}e.set("files",s.sort(function(e,t){return t.lastModified-e.lastModified}))})}.observes("queryUrl").on("init")}),App.S3File=Ember.Object.extend({scriptTag:function(){var e=Handlebars.Utils.escapeExpression(this.get("url"));return(new Handlebars.SafeString('<script src="'+e+'"></script>')).toString()}.property("url"),url:function(){return this.get("baseUrl")+"/"+this.get("relativePath")}.property("baseUrl","relativePath")}),App.Project=Ember.Object.extend(),App.Project.reopenClass({FIXTURES:[{projectName:"Ember",projectFilter:"ember",projectRepo:"emberjs/ember.js",channel:"tagged"},{projectName:"Ember Data",projectFilter:"ember-data",projectRepo:"emberjs/data",channel:"tagged"},{projectName:"Ember",projectFilter:"ember",projectRepo:"emberjs/ember.js",lastRelease:"1.3.0",futureVersion:"1.3.1",channel:"release",date:"2014-01-06",changelogPath:"CHANGELOG.md"},{projectName:"Ember",projectFilter:"ember",projectRepo:"emberjs/ember.js",lastRelease:"1.4.0-beta.1",futureVersion:"1.4.0-beta.2",finalVersion:"1.4.0",channel:"beta",cycleEstimatedFinishDate:"2014-02-10",date:"2014-01-06",nextDate:"2014-01-13",changelogPath:"CHANGELOG.md"},{projectName:"Ember Data",projectFilter:"ember-data",projectRepo:"emberjs/data",lastRelease:"1.0.0-beta.4",futureVersion:"1.0.0-beta.5",channel:"beta",date:"2013-12-19",changelogPath:"CHANGELOG.md"},{projectName:"Ember",projectFilter:"ember",projectRepo:"emberjs/ember.js",channel:"canary"},{projectName:"Ember Data",projectFilter:"ember-data",projectRepo:"emberjs/data",channel:"canary"}],all:function(e){var t;return e?t=this.FIXTURES.filterBy("channel",e):t=this.FIXTURES,t.map(function(e){return App.Project.create(e)})},find:function(e,t){var n=this.all(e);return t?n.filterBy("projectName",t):n}}),App.BuildCategoryMixin=Ember.Mixin.create({renderTemplate:function(){this.render("build-list")}}),App.ApplicationController=Ember.ObjectController.extend({isIndexActive:function(){return this.isActiveChannel("index")}.property("currentRouteName"),isTaggedActive:function(){return this.isActiveChannel("tagged")}.property("currentRouteName"),isChannelsActive:function(){var e=this;return!["index","tagged"].some(function(t){return t===e.get("currentRouteName")})}.property("currentRouteName"),isReleaseActive:function(){return this.isActiveChannel("release")}.property("currentRouteName"),isBetaActive:function(){return this.isActiveChannel("beta")}.property("currentRouteName"),isCanaryActive:function(){return this.isActiveChannel("canary")}.property("currentRouteName"),isActiveChannel:function(e){return this.get("currentRouteName").indexOf(e)!==-1}}),App.ProjectsMixin=Ember.Mixin.create({projects:function(){var e=App.Project.find(this.get("channel")),t=this.get("model"),n=this;return e.forEach(function(e){if(e.channel==="beta"){e.isEmberBeta=e.projectName==="Ember",[1,2,3,4,5].forEach(function(t){var n=e.lastRelease.split("."),r=parseInt(n[n.length-1],10);e["beta"+t+"Completed"]=t<=r,e["isBeta"+t]=t===r});var r=App.Project.find("release",e.projectName)[0];r&&(e.lastStableVersion=r.lastRelease,e.lastStableDate=r.date)}e.files=t.filterFiles(e.projectFilter),e.description=n.description(e),e.lastReleaseDebugUrl=n.lastReleaseUrl(e.projectFilter,e.channel,e.lastRelease,".js"),e.lastReleaseProdUrl=n.lastReleaseUrl(e.projectFilter,e.channel,e.lastRelease,".prod.js"),e.lastReleaseMinUrl=n.lastReleaseUrl(e.projectFilter,e.channel,e.lastRelease,".min.js"),e.channel==="canary"?e.lastRelease="latest":e.changelog!=="false"&&(e.lastReleaseChangelogUrl="https://github.com/"+e.projectRepo+"/blob/v"+e.lastRelease+"/"+e.changelogPath)}),e}.property("channel","model"),description:function(e){var t=e.lastRelease,n=e.futureVersion,r;return this.get("channel")==="tagged"?r="":t?r="The builds listed below are incremental improvements made since "+t+" and may become "+n+".":n?r="The builds listed below are not based on a tagged release. Upon the next release cycle they will become "+n+".":r="The builds listed below are based on the most recent development.",new Handlebars.SafeString(r)},lastReleaseUrl:function(e,t,n,r){return t==="canary"?"http://builds.emberjs.com/canary/"+e+r:"http://builds.emberjs.com/tags/v"+n+"/"+e+r}}),App.CanaryRoute=Ember.Route.extend(App.BuildCategoryMixin,{model:function(){return App.S3Bucket.create({title:"Canary Builds",prefix:"canary/"})}}),App.CanaryController=Ember.ObjectController.extend(App.ProjectsMixin,{templateName:"buildList",channel:"canary"}),App.BetaRoute=Ember.Route.extend(App.BuildCategoryMixin,{model:function(){return App.S3Bucket.create({title:"Beta Builds",prefix:"beta/"})}}),App.BetaController=Ember.ObjectController.extend(App.ProjectsMixin,{templateName:"buildList",channel:"beta"}),App.ReleaseRoute=Ember.Route.extend(App.BuildCategoryMixin,{model:function(){return App.S3Bucket.create({title:"Release Builds",prefix:"release/"})}}),App.ReleaseController=Ember.ObjectController.extend(App.ProjectsMixin,{templateName:"buildList",channel:"release"}),App.TaggedRoute=Ember.Route.extend(App.BuildCategoryMixin,{model:function(){var e=App.S3Bucket.create({title:"Tagged Release Builds",prefix:"tags/",delimiter:""});return e}}),App.TaggedController=Ember.ObjectController.extend(App.ProjectsMixin,{channel:"tagged"}),Ember.Handlebars.helper("format-bytes",function(e){return(e/1024).toFixed(2)+" KB"}),Ember.Handlebars.helper("format-date-time",function(e,t,n){return n||(n=t,t=null),t?moment(e).format(t):moment(e).fromNow()}),Ember.Handlebars.helper("isHiDPIScreen",function(){return window.getDevicePixelRatio()>1});