_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"+h/P":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var r=n("nKUr"),o=n("q1tI");function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n("o0o1"),s=n.n(a),l=n("HaE+"),u=n("DDH5");function d(){var e=Object(o.useState)([]),t=e[0],n=e[1],c=Object(o.useState)(null),a=c[0],d=c[1];Object(o.useEffect)((function(){u.c.ref("images").listAll().then((function(e){var t=[],r=[];e.items.forEach(function(){var e=Object(l.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.push(n.getDownloadURL());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Promise.all(t).then((function(e){e.forEach((function(e){r.push({link:e,name:""})})),n(r)}))}))}),[]);function f(e){var r={link:e,name:""},o=[].concat(i(t),[r]);return n(o),alert("add  "+e),o}return Object(r.jsx)("div",{id:"modal_overlay",className:"absolute inset-0 bg-black bg-opacity-30 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0",children:Object(r.jsxs)("div",{id:"modal",className:"pacity-0 transform relative w-10/12 md:w-3/4 h-1/2 md:h-3/4 bg-white rounded shadow-lg transition-opacity transition-transform duration-300",children:[Object(r.jsx)("button",{onclick:"openModal(false)",className:"absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-2xl w-10 h-10 rounded-full focus:outline-none text-white",children:"\u2717"}),Object(r.jsx)("div",{className:"px-4 py-3 border-b border-gray-200",children:Object(r.jsx)("h2",{className:"text-xl font-semibold text-gray-600",children:"Gallery"})}),Object(r.jsxs)("div",{className:"w-full p-3",children:[Object(r.jsx)("button",{onClick:function(){document.getElementById("imgele").click()},children:"Add Image"}),Object(r.jsx)("input",{type:"file",id:"imgele",onChange:function(e){if(e.target.files[0]){var t=e.target.files[0];d(t)}}}),Object(r.jsx)("button",{onClick:function(){u.c.ref("images/".concat(a.name)).put(a).on("state_changed",(function(e){}),(function(e){console.log(e)}),(function(){u.c.ref("images").child(a.name).getDownloadURL().then((function(e){f(e)}))}))},children:"Upload"}),Object(r.jsx)("div",{className:"grid grid-cols-4 gap-4",children:t.map((function(e){return Object(r.jsx)("div",{className:"w-50 h-50 object-cover round",children:Object(r.jsx)("img",{src:e.link,alt:e.name})})}))})]}),Object(r.jsxs)("div",{className:"absolute bottom-0 left-0 px-4 py-3 border-t border-gray-200 w-full flex justify-end items-center gap-3",children:[Object(r.jsx)("button",{className:"bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white focus:outline-none",children:"Save"}),Object(r.jsx)("button",{onclick:"openModal(false)",className:"bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white focus:outline-none",children:"Close"})]})]})})}function f(){return Object(r.jsx)("div",{children:Object(r.jsx)(d,{})})}},UL0h:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/images",function(){return n("+h/P")}])}},[["UL0h",0,2,4,7,1,5]]]);