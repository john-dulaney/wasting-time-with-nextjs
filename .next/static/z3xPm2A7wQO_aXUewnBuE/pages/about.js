(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{109:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var a in o.open(t.method||"get",e,!0),t.headers)o.setRequestHeader(a,t.headers[a]);function i(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,a,i){t.push(a=a.toLowerCase()),n.push([a,i]),r[a]=(e=r[a])?e+","+i:i}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:i,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(i())},o.onerror=r,o.send(t.body||null)})}},207:function(e,t,n){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=n(244),{page:e.exports.default}})},216:function(e,t,n){e.exports=window.fetch||(window.fetch=n(109).default||n(109))},244:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(40),i=n(20),s=n(9),u=n.n(s),l=function(){return o.a.createElement("main",{className:"jsx-4292328785"},o.a.createElement("p",{className:"jsx-4292328785"},"Error loading page, This is most likely a result of an attempt to use client routing to server rendered content. This will be fixed soon."),o.a.createElement(u.a,{styleId:"4292328785",css:[".jsx-4292328785{margin-top:80px;padding:30px;}"]}))};n(216);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var n,s,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,r["Component"]),n=t,u=[{key:"getInitialProps",value:function(){return{isServer:"undefined"==typeof window}}}],(s=[{key:"render",value:function(){return o.a.createElement("main",null,this.props.isServer?o.a.createElement(i.a,null):o.a.createElement(l,null),o.a.createElement("section",null,o.a.createElement("p",null," ",this.props.isServer?o.a.createElement(a.a,null):o.a.createElement(l,null))))}}])&&f(n.prototype,s),u&&f(n,u),t}();t.default=h},40:function(e,t,n){"use strict";var r=n(9),o=n.n(r),a=n(0),i=n.n(a);t.a=function(){return i.a.createElement("main",{className:"jsx-4292328785"},"I am software developer John Dulaney. I am currently enrolled in a full stack software development program at the Nashville Software School. A short little bio: I was born November 22nd, 1988 in Knoxville Tennessee and have been living between East and middle TN my whole life, save the 5 years I attended a military academy in Missouri (Wentworth Military Academy). I graduated and Commissioned as an officer in the National Guard from there and soon attended the University of Missouri where a car accident ended my Army career and left me in a wheelchair. I have since returned to the Nashville area and attend Nashville Software School. I am proudly part of NSS Cohort 22, a class learning full stack JS/AngularJS front end with a C#/.NET focused backend.",i.a.createElement(o.a,{styleId:"4292328785",css:[".jsx-4292328785{margin-top:80px;padding:30px;}"]}))}}},[[207,1,0]]]);