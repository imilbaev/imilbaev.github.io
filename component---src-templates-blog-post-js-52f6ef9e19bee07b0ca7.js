(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4M6O":function(t,e,n){"use strict";n("rE2o"),n("ioFf"),n("RW0V"),n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b");var i=n("5NKs");e.__esModule=!0,e.insertScript=function(t,e,n){var i=window.document.createElement("script");return i.async=!0,i.src=t,i.id=e,n.appendChild(i),i},e.removeScript=function(t,e){var n=window.document.getElementById(t);n&&e.removeChild(n)},e.debounce=function(t,e,n){var i;return function(){var r=this,o=arguments,a=function(){i=null,n||t.apply(r,o)},s=n&&!i;window.clearTimeout(i),i=setTimeout(a,e),s&&t.apply(r,o)}},e.isReactElement=o,e.shallowComparison=function(t,e){var n=new Set(Object.keys(t),Object.keys(e)),i=Array.isArray(n),r=0;for(n=i?n:n[Symbol.iterator]();;){var a;if(i){if(r>=n.length)break;a=n[r++]}else{if((r=n.next()).done)break;a=r.value}var s=a;if(t[s]!==e[s]&&!o(t[s]))return!0}return!1};var r=i(n("q1tI"));function o(t){return!!r.default.isValidElement(t)||!!Array.isArray(t)&&t.some((function(t){return r.default.isValidElement(t)}))}},ORnI:function(t,e,n){"use strict";var i=n("5NKs");e.__esModule=!0,e.default=void 0;var r=i(n("VUT9"));e.Disqus=r.default;var o=i(n("qASQ"));e.CommentCount=o.default;var a=r.default;e.default=a},VUT9:function(t,e,n){"use strict";var i=n("5NKs");e.__esModule=!0,e.default=void 0;var r=i(n("j8BX")),o=i(n("uDP2")),a=i(n("XEEL")),s=i(n("q1tI")),d=i(n("17x9")),u=n("4M6O"),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="imilbaev-ru",e.config?n.config=e.config:n.config={identifier:e.identifier,url:e.url,title:e.title},n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var t=this.config;window.disqus_config=function(){this.page.identifier=t.identifier,this.page.title=t.title,this.page.url=t.url},(0,u.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},n.cleanInstance=function(){(0,u.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=window.document.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)},n.render=function(){var t=this.props,e=(t.config,(0,o.default)(t,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},e,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},e}(s.default.Component);e.default=l,l.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),identifier:d.default.string,title:d.default.string,url:d.default.string}},qASQ:function(t,e,n){"use strict";var i=n("5NKs");e.__esModule=!0,e.default=void 0;var r=i(n("j8BX")),o=i(n("uDP2")),a=i(n("XEEL")),s=i(n("q1tI")),d=i(n("17x9")),u=n("4M6O"),l=(0,u.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(t){function e(e){var n;return(n=t.call(this,e)||this).shortname="imilbaev-ru",n}(0,a.default)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(t){return this.props!==t&&(0,u.shallowComparison)(this.props,t)},n.componentDidUpdate=function(){this.loadInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,u.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,u.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var t=this.props,e=t.config,n=t.placeholder,i=(0,o.default)(t,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":e.identifier,"data-disqus-url":e.url},i,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),n)},e}(s.default.Component);e.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:d.default.shape({identifier:d.default.string,title:d.default.string,url:d.default.string}),placeholder:d.default.string}},yihx:function(t,e,n){"use strict";n.r(e),n.d(e,"query",(function(){return u}));var i=n("q1tI"),r=n.n(i),o=n("Wbzz"),a=n("ORnI"),s=n.n(a),d=n("Bl7J"),u="1894344448";e.default=function(t){var e=t.data,n=t.pageContext,i=e.markdownRemark,a=i.frontmatter,u=a.title,l=a.date,c=a.tags,f=a.slug,m=i.html,p=n.next,h=n.prev;return r.a.createElement(d.a,null,r.a.createElement("div",{className:"post"},r.a.createElement("h1",null,u),r.a.createElement("div",{className:"date"},l),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}}),c.length&&r.a.createElement("ul",{className:"tags"},c.map((function(t,e){return r.a.createElement("li",{key:e},r.a.createElement(o.Link,{to:"tags/"+t},t))}))),h&&r.a.createElement(o.Link,{to:h.frontmatter.path},h.frontmatter.title," »"),p&&r.a.createElement(o.Link,{to:p.frontmatter.path},"« ",p.frontmatter.title),r.a.createElement(s.a,{identifier:f,title:u})))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-52f6ef9e19bee07b0ca7.js.map