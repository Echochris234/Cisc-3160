(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),o=(t(28),t(12)),i=t(13),u=t(15),m=t(14),s=t(9),v=t(2);var p=function(e){return r.a.createElement("div",null,"A little info about us.")};var h=t(38),d=t(37);function b(e){return console.log(e.image),r.a.createElement("div",null,r.a.createElement(h.a,{style:{width:"18rem"}},r.a.createElement(h.a.Img,{variant:"top",src:e.image.hdurl}),r.a.createElement(h.a.Body,null,r.a.createElement(h.a.Title,null,e.image.copyright),r.a.createElement(h.a.Text,null,e.image.explanation))))}var E=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={images:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.nasa.gov/planetary/apod?api_key=ou2bvWawMCbcGuXaqdVlHtlDMahcnKi4Kgg7aRnm&count=4&thumbs=true").then((function(e){return e.json()})).then((function(a){e.setState({images:a})})).catch((function(a){e.setState({images:[]})}))}},{key:"render",value:function(){return this.state.images.map((function(e){return r.a.createElement("div",null,r.a.createElement(d.a,null,r.a.createElement(b,{image:e})))}))}}]),t}(r.a.Component);t(34);function f(e){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3"},r.a.createElement(s.b,{className:"navbar-brand",to:"/"},"3160 Labs"),r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{className:"nav-link",to:"/display"},"Display Image")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.c,{className:"nav-link",to:"/about-us"},"About Us"))))}var g=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(s.a,null,r.a.createElement(f,null),r.a.createElement("div",{className:"container-fluid text-center"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/display",component:E}),r.a.createElement(v.a,{path:"/about-us",component:p})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.ae546f18.chunk.js.map