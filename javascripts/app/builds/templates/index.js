Ember.TEMPLATES.index=Ember.Handlebars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),t=e.createTextNode("      ");e.appendChild(a,t);var t=e.createElement("div");e.setAttribute(t,"class","release"),e.setAttribute(t,"title","Release Builds"),e.appendChild(a,t);var t=e.createTextNode("\n");return e.appendChild(a,t),a},render:function(e,a,t){var r=a.dom;r.detectNamespace(t);var d;return a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r),d}}}(),a=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),t=e.createTextNode("      ");e.appendChild(a,t);var t=e.createElement("div");e.setAttribute(t,"class","beta"),e.setAttribute(t,"title","Beta Builds"),e.appendChild(a,t);var t=e.createTextNode("\n");return e.appendChild(a,t),a},render:function(e,a,t){var r=a.dom;r.detectNamespace(t);var d;return a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r),d}}}(),t=function(){return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),t=e.createTextNode("      ");e.appendChild(a,t);var t=e.createElement("div");e.setAttribute(t,"class","canary"),e.setAttribute(t,"title","Canary Builds"),e.appendChild(a,t);var t=e.createTextNode("\n");return e.appendChild(a,t),a},render:function(e,a,t){var r=a.dom;r.detectNamespace(t);var d;return a.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r),d}}}();return{isHTMLBars:!0,revision:"Ember@1.11.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var a=e.createDocumentFragment(),t=e.createElement("div");e.setAttribute(t,"class","features section");var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","feature");var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d);var d=e.createElement("h2"),n=e.createTextNode("Release");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d);var d=e.createElement("p"),n=e.createTextNode("Release builds have been hardened through our multi-tiered release process. These builds are perfect for use in production environments.");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n  ");e.appendChild(r,d),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","feature");var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d);var d=e.createElement("h2"),n=e.createTextNode("Beta");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d);var d=e.createElement("p"),n=e.createTextNode("Beta builds will incorporate new features that are ready for more review. They will include new features that have been more thoroughly tested. We do not recommend using Beta builds in production.");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n  ");e.appendChild(r,d),e.appendChild(t,r);var r=e.createTextNode("\n  ");e.appendChild(t,r);var r=e.createElement("div");e.setAttribute(r,"class","feature");var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d);var d=e.createElement("h2"),n=e.createTextNode("Canary");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d);var d=e.createElement("p"),n=e.createTextNode("Canary builds are the bleeding edge of Ember development. Please do not use these builds unless you are absolutely certain that you need fixes and/or features not available in the Release or Beta builds.");e.appendChild(d,n),e.appendChild(r,d);var d=e.createTextNode("\n  ");e.appendChild(r,d),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n\n");e.appendChild(a,t);var t=e.createElement("hr");e.appendChild(a,t);var t=e.createTextNode("\n\n");e.appendChild(a,t);var t=e.createElement("h3"),r=e.createTextNode("Versioning and Deprecations");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n\n");e.appendChild(a,t);var t=e.createElement("p"),r=e.createTextNode("Periodically, various APIs in Ember.js may be deprecated. Ember.js uses ");e.appendChild(t,r);var r=e.createElement("a");e.setAttribute(r,"href","http://semver.org"),e.setAttribute(r,"title","Semantic Versioning");var d=e.createTextNode("Semantic Versioning");e.appendChild(r,d),e.appendChild(t,r);var r=e.createTextNode(" to indicate these changes. As new releases of Ember and Ember Data are released, be sure to review the ");e.appendChild(t,r);var r=e.createElement("a");e.setAttribute(r,"href","/deprecations");var d=e.createTextNode("deprecation guides");e.appendChild(r,d),e.appendChild(t,r);var r=e.createTextNode(" alongside the current version of the ");e.appendChild(t,r);var r=e.createElement("a");e.setAttribute(r,"href","http://guides.emberjs.com");var d=e.createTextNode("documentation guides");e.appendChild(r,d),e.appendChild(t,r);var r=e.createTextNode(" as they may often be more in line with the channel you are using.");e.appendChild(t,r),e.appendChild(a,t);var t=e.createTextNode("\n");return e.appendChild(a,t),a},render:function(r,d,n){var i=d.dom,l=d.hooks,c=l.block;i.detectNamespace(n);var h;d.useFragmentCache&&i.canClone?(null===this.cachedFragment&&(h=this.build(i),this.hasRendered?this.cachedFragment=h:this.hasRendered=!0),this.cachedFragment&&(h=i.cloneNode(this.cachedFragment,!0))):h=this.build(i);var s=i.childAt(h,[0]),p=i.createMorphAt(i.childAt(s,[1]),1,1),o=i.createMorphAt(i.childAt(s,[3]),1,1),u=i.createMorphAt(i.childAt(s,[5]),1,1);return c(d,p,r,"link-to",["release"],{},e,null),c(d,o,r,"link-to",["beta"],{},a,null),c(d,u,r,"link-to",["canary"],{},t,null),h}}}());