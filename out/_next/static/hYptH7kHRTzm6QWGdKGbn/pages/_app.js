(window.webpackJsonp=window.webpackJsonp||[]).push([["f496"],{"1TCz":function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),l=n("a7VT"),u=n("Tit0"),i=n("q1tI"),c=n.n(i),s=n("8Bbg"),f=n.n(s),p=n("m/Pd"),d=n.n(p),h=n("YFqc"),v=n.n(h),m=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-0 fixed-top"},c.a.createElement(v.a,{href:"/"},c.a.createElement("a",{className:"navbar-brand"},"Treasured Footsteps")),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(v.a,{href:"/"},c.a.createElement("a",{className:"nav-item nav-link active"},"Home")),c.a.createElement(v.a,{href:"/about"},c.a.createElement("a",{className:"nav-item nav-link"},"About")),c.a.createElement(v.a,{href:"/about"},c.a.createElement("a",{className:"nav-item nav-link"},"Contact"))),c.a.createElement(v.a,{href:"/login"},c.a.createElement("a",{className:"nav-item nav-link ml-auto text-secondary"},"Login"))))};n("+eM2");n.d(t,"default",function(){return b});var y=function(e){function t(){return Object(a.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement("title",null,"Treasured Footsteps"),c.a.createElement("meta",{charSet:"utf-8"}),c.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),c.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.8.1/css/all.css",integrity:"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf",crossorigin:"anonymous"})),c.a.createElement(m,null),c.a.createElement("div",null,e))}}]),t}(c.a.Component),b=function(e){function t(){return Object(a.default)(this,t),Object(o.default)(this,Object(l.default)(t).apply(this,arguments))}return Object(u.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return c.a.createElement(s.Container,null,c.a.createElement(y,null,c.a.createElement(t,n)))}}]),t}(f.a)},"8Bbg":function(e,t,n){e.exports=n("B5Ud")},"9Jkg":function(e,t,n){e.exports=n("oh+g")},B5Ud:function(e,t,n){"use strict";var a=n("KI45"),r=a(n("eVuF")),o=a(n("UXZV")),l=a(n("/HRN")),u=a(n("WaGi")),i=a(n("ZDA2")),c=a(n("/+P4")),s=a(n("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=f(n("q1tI")),h=p(n("17x9")),v=n("Bu4q"),m=n("nOHt"),y=function(e){function t(){return(0,l.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"getChildContext",value:function(){return{router:m.makePublicRouterInstance(this.props.router)}}},{key:"componentDidCatch",value:function(e){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,a=e.pageProps,r=E(t);return d.default.createElement(b,null,d.default.createElement(n,(0,o.default)({},a,{url:r})))}}],[{key:"getInitialProps",value:function(e){var t=e.Component,n=(e.router,e.ctx);try{return r.default.resolve(v.loadGetInitialProps(t,n)).then(function(e){return{pageProps:e}})}catch(a){return r.default.reject(a)}}}]),t}(d.Component);y.childContextTypes={router:h.default.object},t.default=y;var b=function(e){function t(){return(0,l.default)(this,t),(0,i.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.scrollToHash()}},{key:"componentDidUpdate",value:function(){this.scrollToHash()}},{key:"scrollToHash",value:function(){var e=window.location.hash;if(e=!!e&&e.substring(1)){var t=document.getElementById(e);t&&setTimeout(function(){return t.scrollIntoView()},0)}}},{key:"render",value:function(){return this.props.children}}]),t}(d.Component);t.Container=b;var g=v.execOnce(function(){0});function E(e){var t=e.pathname,n=e.asPath,a=e.query;return{get query(){return g(),a},get pathname(){return g(),t},get asPath(){return g(),n},back:function(){g(),e.back()},push:function(t,n){return g(),e.push(t,n)},pushTo:function(t,n){g();var a=n?t:null,r=n||t;return e.push(a,r)},replace:function(t,n){return g(),e.replace(t,n)},replaceTo:function(t,n){g();var a=n?t:null,r=n||t;return e.replace(a,r)}}}t.createUrl=E},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){var e=n("1TCz");return{page:e.default||e}}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("KI45"),r=a(n("9Jkg")),o=a(n("/HRN")),l=a(n("WaGi")),u=a(n("ZDA2")),i=a(n("/+P4")),c=a(n("N9n2")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("CxY0"),d=s(n("q1tI")),h=(f(n("17x9")),s(n("nOHt"))),v=n("Bu4q");function m(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var y=function(e){function t(){var e,n,a,r,l;return(0,o.default)(this,t),(e=(0,u.default)(this,(0,i.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:m(e),as:m(t)}},a=null,r=null,l=null,function(e,t){if(e===a&&t===r)return l;var o=n(e,t);return a=e,r=t,l=o,o}),e.linkClicked=function(t){var n=t.currentTarget,a=n.nodeName,r=n.target;if("A"!==a||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),l=o.href,u=o.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(l)){var i=window.location.pathname;l=p.resolve(i,l),u=u?p.resolve(i,u):l,t.preventDefault();var c=e.props.scroll;null==c&&(c=u.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](l,u,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),l={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(l.href=r||a),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=h.Router._rewriteUrlForNextExport(l.href)),d.default.cloneElement(o,l)}}]),t}(d.Component);t.default=y},"oh+g":function(e,t,n){var a=n("WEpk"),r=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}}},[["GcxT","5d41","9da1","ad9d"]]]);