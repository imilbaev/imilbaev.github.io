(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4M6O":function(t,e,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var i=n("5NKs");e.__esModule=!0,e.insertScript=function(t,e,n){var i=window.document.createElement("script");return i.async=!0,i.src=t,i.id=e,n.appendChild(i),i},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var i;return function(){var o=this,r=arguments,a=function(){i=null,n||t.apply(o,r)},s=n&&!i;window.clearTimeout(i),i=setTimeout(a,e),s&&t.apply(o,r)}},e.isReactElement=r,e.shallowComparison=function(t,e){var n=new Set(Object.keys(t),Object.keys(e)),i=Array.isArray(n),o=0;for(n=i?n:n[Symbol.iterator]();;){var a;if(i){if(o>=n.length)break;a=n[o++]}else{if((o=n.next()).done)break;a=o.value}var s=a;if(t[s]!==e[s]&&!r(t[s]))return!0}return!1};var o=i(n("q1tI"));function r(t){return!!o.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return o.default.isValidElement(t)}))}},ORnI:function(t,e,n){"use strict";var i=n("5NKs");e.__esModule=!0,e.default=void 0;var o=i(n("VUT9"));e.Disqus=o.default;var r=i(n("qASQ"));e.CommentCount=r.default;var a=o.default;e.default=a},VUT9:function(t,e,n){"use strict";var i=n("5NKs");e.__esModule=!0,e.default=void 0;var o=i(n("j8BX")),r=i(n("uDP2")),a=i(n("XEEL")),s=i(n("q1tI")),d=i(n("17x9")),u=n("4M6O"),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="imilbaev",e.config?n.config=e.config:n.config={identifier:e.identifier,url:e.url,title:e.title},n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var t=this.config;window.disqus_config=function(){this.page.identifier=t.identifier,this.page.title=t.title,this.page.url=t.url},(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,r.default)(t,["config"]));return s.default.createElement("div",(0,o.default)({id:"disqus_thread"},e,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},e}(s.default.Component);e.default=l,l.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),identifier:d.default.string,title:d.default.string,url:d.default.string}},qASQ:function(t,e,n){"use strict";var i=n("5NKs");e.__esModule=!0,e.default=void 0;var o=i(n("j8BX")),r=i(n("uDP2")),a=i(n("XEEL")),s=i(n("q1tI")),d=i(n("17x9")),u=n("4M6O"),l=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="imilbaev",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,i=(0,r.default)(t,["config","placeholder"]);return s.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},e}(s.default.Component);e.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}},yihx:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return u}));var i=n("q1tI"),o=n.n(i),r=n("Wbzz"),a=n("ORnI"),s=n.n(a),d=n("Bl7J"),u="2556482025";e.default=function(t){var e=t.data,n=t.pageContext,i=e.markdownRemark,a=i.frontmatter,u=a.title,l=a.date,c=a.tags,f=a.slug,m=i.html,p=n.next,h=n.prev;return o.a.createElement(d.a,null,o.a.createElement("div",{className:"post"},o.a.createElement("h1",null,u),o.a.createElement("div",{className:"date"},l),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}),c.length&&o.a.createElement("ul",{className:"tags"},c.map((function(t,e){return o.a.createElement("li",{key:e},o.a.createElement(r.Link,{to:"tags/"+t},t))}))),h&&o.a.createElement(r.Link,{to:h.frontmatter.path},h.frontmatter.title," »"),p&&o.a.createElement(r.Link,{to:p.frontmatter.path},"« ",p.frontmatter.title),o.a.createElement(s.a,{identifier:f,title:u})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-ac1927a27325b186f651.js.map