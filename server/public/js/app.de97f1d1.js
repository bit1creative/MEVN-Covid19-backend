(function(t){function e(e){for(var r,n,i=e[0],c=e[1],l=e[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-b9ce4b08":"23122b31","chunk-d59151c4":"4d6b7401"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={"chunk-b9ce4b08":1,"chunk-d59151c4":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-b9ce4b08":"8a266de6","chunk-d59151c4":"12850adb"}[t]+".css",o=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[t],m.parentNode.removeChild(m),a(s)},m.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){n[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=o[t]=[e,a]}));e.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=o[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}o[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="../server/public/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"199c":function(t,e){},"23be":function(t,e,a){"use strict";var r=a("199c"),n=a.n(r);e["default"]=n.a},"3dfd":function(t,e,a){"use strict";var r=a("449b"),n=a("23be"),o=(a("034f"),a("2877")),s=Object(o["a"])(n["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},"449b":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},n=[]},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=a("3dfd"),o=a("8c4f"),s=a("f13c"),i=a.n(s),c=(a("ba8c"),a("ecee")),l=a("c074"),u=a("ad3d"),d=a("f2d1"),m=a("b702"),f=(a("d3b7"),a("3ca3"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-page"},[a("Header"),a("home-page-content"),a("Footer")],1)}),h=[],p=a("981c"),b=a("b2c8"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Content")},v=[],C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-pink-50 dark:bg-dark-mode-bg2 py-6 md:py-12"},[a("div",{staticClass:"sm:w-full mx-auto"},[a("div",{staticClass:"text-center mx-auto select-none"},[a("h1",{staticClass:"text-3xl md:text-4xl font-medium mb-2 py-4 text-gray-200 bg-main-color dark:bg-dark-mode-main-color dark:text-gray-100"},[t._v(" COVID-19 ")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#overview",duration:500,easing:"ease-in-out"},expression:"{\n                    element: '#overview',\n                    duration: 500,\n                    easing: 'ease-in-out',\n                }"}],attrs:{href:""}},[a("button",{staticClass:"animate-pulse rounded-sm text-gray-500 py-4 dark:text-gray-200 px-6 text-xl focus:outline-none"},[t._v(" Read About"),a("br"),a("font-awesome-icon",{staticClass:"animate-bounce mt-2",attrs:{icon:["fas","arrow-down"]}})],1)])]),t._m(0),t._m(1),a("div",{staticClass:"bg-main-color dark:bg-dark-mode-bg3 text-gray-200 text-center h-18 mx-auto mb-4 mt-8 text-2xl"},[a("router-link",{staticClass:"flex justify-center py-4 mx-auto w-5/12 sm:w-4/12 md:w-3/12 select-none",attrs:{to:"/stats"}},[a("span",{staticClass:"pr-5 dark:text-gray-200"},[t._v("View Stats")]),a("div",{staticClass:"pt-1"},[a("font-awesome-icon",{staticClass:"absolute dark:text-gray-200",attrs:{icon:["far","chart-bar"]}}),a("font-awesome-icon",{staticClass:"absolute animate-ping opacity-70 dark:text-dark-mode-main-color dark:opacity-40",attrs:{icon:["far","chart-bar"]}})],1)])],1)])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative flex justify-center overflow-hidden w-full h-44 sm:h-64 lg:h-112"},[a("img",{staticClass:"shadow w-full object-cover",attrs:{src:"https://www.who.int/images/default-source/health-topics/coronavirus/gettyimages-1203376093.tmb-1366v.png?Culture=en&sfvrsn=6e0c1bc7_6%201366w",alt:"photo of people wearing mask"}}),a("div",{staticClass:"absolute invisible md:visible bottom-0 left-10 bg-pink-50 dark:bg-dark-mode-bg2 w-4/12 h-1/4 text-left text-bottom border dark:border-dark-mode-secondary-color select-none",attrs:{id:"overview"}},[a("span",{staticClass:"absolute flex h-3 w-3 -right-1 -top-1"},[a("span",{staticClass:"absolute inline-flex rounded-full h-3 w-3 dark:bg-dark-mode-secondary-color"}),a("span",{staticClass:"animate-ping inline-flex h-full w-full rounded-full dark:bg-dark-mode-secondary-color opacity-75"})]),a("div",{staticClass:"absolute w-full h-full overflow-hidden"},[a("span",{staticClass:"absolute text-7xl lg:text-9xl font-sans text-main-color opacity-20 dark:opacity-30 dark:text-dark-mode-main-color font-bold ml-10 md:ml-8 lg:ml-32 mb-6 lg:mb-10 bottom-0"},[t._v(" Overview ")]),a("span",{staticClass:"absolute text-7xl lg:text-9xl font-sans text-main-color opacity-30 dark:opacity-20 dark:text-dark-mode-main-color font-bold -ml-32 lg:-ml-72 -mb-2 lg:-mb-4 bottom-0"},[t._v(" Overview ")]),a("span",{staticClass:"absolute text-3xl lg:text-5xl font-sans text-main-color dark:text-dark-mode-main-color font-light ml-4 lg:ml-8 mb-2 lg:mb-4 bottom-0"},[t._v(" Overview ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md:flex md:flex-wrap mx-2 mt-6 md:mt-12 md:w-11/12 lg:w-9/12 md:mx-auto"},[a("div",{staticClass:"md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center"},[a("span",{staticClass:"w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"}),a("h5",{staticClass:"text-xl dark:text-gray-200 font-medium uppercase mb-4"},[t._v(" Virus ")]),a("p",{staticClass:"text-gray-600 dark:text-gray-400"},[t._v(" Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment. Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness. ")])]),a("div",{staticClass:"md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center"},[a("span",{staticClass:"w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"}),a("h5",{staticClass:"text-xl dark:text-gray-200 font-medium uppercase mb-4"},[t._v(" Prevention ")]),a("p",{staticClass:"text-gray-600 dark:text-gray-400"},[t._v(" The best way to prevent and slow down transmission is to be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. ")])]),a("div",{staticClass:"md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-0 text-center"},[a("span",{staticClass:"w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"}),a("h5",{staticClass:"text-xl dark:text-gray-200 font-medium uppercase mb-4"},[t._v(" Spread ")]),a("p",{staticClass:"text-gray-600 dark:text-gray-400"},[t._v(" The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow). ")])]),a("div",{staticClass:"md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-16 text-center"},[a("span",{staticClass:"w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"}),a("h5",{staticClass:"text-xl dark:text-gray-200 font-medium uppercase mb-4"},[t._v(" Most common symptoms ")]),a("div",{staticClass:"flex justify-between"},[a("div"),a("ul",{staticClass:"list-disc list-inside text-left text-gray-600 dark:text-gray-400 dark:border-dark-mode-secondary-color"},[a("li",[t._v("fever.")]),a("li",[t._v("dry cough.")]),a("li",[t._v("tiredness.")])]),a("div")])]),a("div",{staticClass:"md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-16 text-center"},[a("span",{staticClass:"w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:border-dark-mode-secondary-color"}),a("h5",{staticClass:"text-xl dark:text-gray-200 font-medium uppercase mb-4"},[t._v(" Less common symptoms ")]),a("div",{staticClass:"flex justify-between"},[a("div"),a("ul",{staticClass:"list-disc list-inside text-left text-gray-600 dark:text-gray-400"},[a("li",[t._v("aches and pains.")]),a("li",[t._v("sore throat.")]),a("li",[t._v("diarrhoea.")]),a("li",[t._v("conjunctivitis.")]),a("li",[t._v("headache.")]),a("li",[t._v("loss of taste or smell.")]),a("li",[t._v(" a rash on skin, or discolouration of fingers or toes. ")])]),a("div")])]),a("div",{staticClass:"md:w-1/3 md:px-4 xl:px-6 mt-8 md:mt-16 text-center"},[a("span",{staticClass:"w-20 border-t-2 border-solid border-indigo-200 inline-block mb-3 dark:dark-mode-secondary-color"}),a("h5",{staticClass:"text-xl dark:text-gray-200 font-medium uppercase mb-4"},[t._v(" Serious symptoms ")]),a("div",{staticClass:"flex justify-between"},[a("div"),a("ul",{staticClass:"list-disc list-inside text-left text-gray-600 dark:text-gray-400"},[a("li",[t._v(" difficulty breathing or shortness of breath. ")]),a("li",[t._v("chest pain or pressure.")]),a("li",[t._v("loss of speech or movement.")])]),a("div")])])])}],y={name:"Content",components:{}},T=y,x=a("2877"),k=Object(x["a"])(T,C,_,!1,null,"36a2ec0f",null),w=k.exports,E={name:"HomePageContent",components:{Content:w}},R=E,O=Object(x["a"])(R,g,v,!1,null,"6f90edff",null),S=O.exports,D={name:"Home",components:{HomePageContent:S,Footer:b["a"],Header:p["a"]}},A=D,U=Object(x["a"])(A,f,h,!1,null,null,null),N=U.exports,j=[{path:"/",redirect:"/",name:"Home",component:N},{path:"/stats",name:"StatsPage",component:function(){return a.e("chunk-b9ce4b08").then(a.bind(null,"a59d"))}},{path:"/country",name:"UsersCountryData",component:function(){return a.e("chunk-d59151c4").then(a.bind(null,"eba7"))}}],L=new o["a"]({mode:"history",base:"../server/public/",routes:j}),M=L,G=a("2f62"),P=a("3835"),Y=a("1da1"),H=(a("fb6a"),a("4de4"),a("4fad"),a("99af"),a("96cf"),a("d4ec")),I=a("bee2"),V=(a("159b"),a("bc3a")),B=a.n(V),q="api/covid-19",$=function(){function t(){Object(H["a"])(this,t)}return Object(I["a"])(t,null,[{key:"getDate",value:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("".concat(q,"/date"));case 2:return a=t.sent,r=null===a||void 0===a||null===(e=a.data[0])||void 0===e?void 0:e.date,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getTotalCovidData",value:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(){var e,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("".concat(q,"/total"));case 2:return a=t.sent,r=null===a||void 0===a||null===(e=a.data[0])||void 0===e?void 0:e.globalData,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getDataForCountries",value:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("".concat(q,"/countries"));case 2:return a=t.sent,r=a.data,n={},r[0].countriesData.forEach((function(t){return n[t.CountryCode]=t[e]})),t.abrupt("return",n);case 7:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}(),F=$,z=function(){return{totalData:null,cardsDataError:null}},W={GET_TOTAL_DATA:function(t){return t.totalData},GET_CARDS_DATA_ERROR:function(t){return t.cardsDataError}},Z={getTotalData:function(t){return Object(Y["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,r=t.getters,null!==r["GET_CARDS_DATA_ERROR"]&&a("CARDS_DATA_ERROR_EVENT",null),F.getTotalCovidData().then((function(t){a("SET_TOTAL_DATA",t)})).catch((function(t){console.log(t),a("CARDS_DATA_ERROR_EVENT",t)}));case 3:case"end":return e.stop()}}),e)})))()}},J={SET_TOTAL_DATA:function(t,e){for(var a=Object.entries(e).filter((function(t){var e=Object(P["a"])(t,1),a=e[0];return"Date"!==a})).sort().slice(3),r=Object.entries(e).filter((function(t){var e=Object(P["a"])(t,1),a=e[0];return"Date"!==a})).sort().slice(0,3),n=0;n<a.length;n++)a[n]=a[n].concat(r[n]);t.totalData=a},CARDS_DATA_ERROR_EVENT:function(t,e){t.cardsDataError=null===e?e:e.message}},K={namespacing:!0,state:z,getters:W,actions:Z,mutations:J},Q=(a("1276"),a("ac1f"),function(){return{countryData:{},date:null,chartMapError:null,dateError:null,chartDataIsLoading:!1}}),X={GET_COUNTRY_DATA:function(t){return t.countryData},GET_DATE:function(t){return t.date},GET_CHART_MAP_ERROR:function(t){return t.chartMapError},GET_DATE_ERROR:function(t){return t.dateError},GET_CHART_DATA_LOADING_STATUS:function(t){return t.chartDataIsLoading}},tt={getCountryData:function(t,e){return Object(Y["a"])(regeneratorRuntime.mark((function a(){var r,n,o,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=t.commit,n=t.dispatch,o=t.getters,s=t.rootGetters,r("SET_LOADING_STATUS",!0),s["GET_TOTAL_DATA"]||n("getTotalData",{},{root:!0}),null!==o["GET_CHART_MAP_ERROR"]&&r("CHARTMAP_ERROR_EVENT",null),o["GET_DATE"]||n("getDate"),F.getDataForCountries(e).then((function(t){null!==o["GET_DATE_ERROR"]&&n("getDate"),r("SET_COUNTRY_DATA",t),r("SET_LOADING_STATUS",!1)})).catch((function(t){console.log(t),r("CHARTMAP_ERROR_EVENT",t)}));case 6:case"end":return a.stop()}}),a)})))()},getDate:function(t){return Object(Y["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.commit,r=t.getters,F.getDate().then((function(t){null!==r["GET_DATE_ERROR"]&&a("DATE_ERROR_EVENT",null),a("SET_DATE",t)})).catch((function(t){console.log(t.stack),a("DATE_ERROR_EVENT",t)}));case 2:case"end":return e.stop()}}),e)})))()}},et={SET_COUNTRY_DATA:function(t,e){t.countryData=e},SET_DATE:function(t,e){t.date=e},CHARTMAP_ERROR_EVENT:function(t,e){t.chartMapError=null===e?e:e.stack.split("\n")||e},DATE_ERROR_EVENT:function(t,e){t.dateError=null===e?e:e.message},SET_LOADING_STATUS:function(t,e){t.chartDataIsLoading=e}},at={namespacing:!0,state:Q,getters:X,actions:tt,mutations:et},rt=function(){return{hideContacts:!0}},nt={GET_HIDE_CONTACTS_STATE:function(t){return t.hideContacts}},ot={showContacts:function(t){var e=t.commit;e("SHOW_CONTACTS")},hideContacts:function(t){var e=t.commit;e("HIDE_CONTACTS")}},st={SHOW_CONTACTS:function(t){t.hideContacts&&(t.hideContacts=!1)},HIDE_CONTACTS:function(t){t.hideContacts||(t.hideContacts=!0)}},it={namespacing:!0,state:rt,getters:nt,actions:ot,mutations:st},ct=(a("13d5"),a("b64b"),a("caad"),a("b0c0"),"api"),lt=function(){function t(){Object(H["a"])(this,t)}return Object(I["a"])(t,null,[{key:"getCountry",value:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("".concat(ct,"/ip"));case 2:return e=t.sent,a=e.data,t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),t}(),ut=lt;function dt(t){return Object.entries(t["GET_USERS_COUNTRY_DATA"])[Object.entries(t["GET_USERS_COUNTRY_DATA"]).length-1][1]}function mt(t){return Object.entries(t["GET_USERS_COUNTRY_DATA"])[Object.entries(t["GET_USERS_COUNTRY_DATA"]).length-1][0]}var ft=function(){return{usersCountry:null,usersCountryCode:null,usersCountryError:null,usersCountryDataError:null,usersCountryData:null,usersCountryDataIsLoading:!1}},ht={GET_USERS_COUNTRY:function(t){return t.usersCountry},GET_USERS_COUNTRY_CODE:function(t){return t.usersCountryCode},GET_USERS_COUNTRY_ERROR:function(t){return t.usersCountryError},GET_USERS_COUNTRY_DATA_ERROR:function(t){return t.usersCountryDataError},GET_USERS_COUNTRY_DATA:function(t){return t.usersCountryData},GET_USERS_COUNTRY_TOTAL_DATA:function(t,e){return t.usersCountryData?dt(e):null},GET_USERS_DATE:function(t,e){return t.usersCountryData?mt(e):null},GET_USERS_COUNTRY_DATA_LOADING_STATUS:function(t){return t.usersCountryDataIsLoading}},pt={getUsersCountry:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,r=e.getters,n=e.dispatch,ut.getCountry().then((function(t){null!==r["GET_USERS_COUNTRY_ERROR"]&&a("USERS_COUNTRY_ERROR_EVENT",null),a("SET_USERS_COUNTRY",t.country),a("SET_USERS_COUNTRY_CODE",t.country_code)})).then((function(){return n("getUsersCountryData")})).catch((function(t){a("USERS_COUNTRY_ERROR_EVENT",t)}));case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getUsersCountryData:function(){var t=Object(Y["a"])(regeneratorRuntime.mark((function t(e){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,r=e.getters,a("SET_USERS_COUNTRY_DATA_LOADING_STATUS",!0),B.a.get("https://api.covid19api.com/country/"+r["GET_USERS_COUNTRY_CODE"]).then((function(t){var e={};t.data.forEach((function(t){e[t.Date.substring(0,10)]=Object.keys(t).filter((function(t){return["Confirmed","Deaths","Recovered","Active"].includes(t)})).reduce((function(e,a){return e[a]=t[a],e}),{})})),a("SET_USERS_COUNTRY_DATA",e),a("SET_USERS_COUNTRY_DATA_LOADING_STATUS",!1)})).catch((function(t){a("SET_USERS_COUNTRY_DATA",null),a("USERS_COUNTRY_DATA_ERROR_EVENT",t)}));case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),userChangedCountry:function(t,e){var a=t.getters,r=t.commit,n=t.dispatch;e in[a["GET_USERS_COUNTRY_CODE"],a["GET_USERS_COUNTRY"]]||(null!==a["GET_USERS_COUNTRY_ERROR"]&&r("USERS_COUNTRY_ERROR_EVENT",null),r("SET_USERS_COUNTRY",e.name),r("SET_USERS_COUNTRY_CODE",e.code),n("getUsersCountryData"))}},bt={SET_USERS_COUNTRY:function(t,e){t.usersCountry=e},SET_USERS_COUNTRY_CODE:function(t,e){t.usersCountryCode=e},SET_USERS_COUNTRY_DATA:function(t,e){t.usersCountryData=e},USERS_COUNTRY_ERROR_EVENT:function(t,e){t.usersCountryError=null===e?e:e.message},USERS_COUNTRY_DATA_ERROR_EVENT:function(t,e){null===e?t.countryDataError=e:t.usersCountryDataError=e.name+e.message},SET_USERS_COUNTRY_DATA_LOADING_STATUS:function(t,e){t.usersCountryDataIsLoading=e}},gt={namespacing:!0,state:ft,getters:ht,actions:pt,mutations:bt},vt=function(){return{theme:{}}},Ct={GET_THEME:function(t){return t.theme}},_t={initTheme:function(t){var e=t.commit,a=!!localStorage.theme&&localStorage.theme,r=window.matchMedia("(prefers-color-scheme: dark)").matches;e("SET_THEME",a||(r?"dark":"light"))},toggleTheme:function(t){var e=t.commit;switch(localStorage.theme){case"light":e("SET_THEME","dark");break;case"dark":e("SET_THEME","light");break}}},yt={SET_THEME:function(t,e){t.theme=e,localStorage.theme=e}},Tt={namespacing:!0,state:vt,getters:Ct,actions:_t,mutations:yt};r["a"].use(G["a"]);var xt=new G["a"].Store({strict:!1,modules:{ChartMapModule:at,CardsDataModule:K,ContactsShowState:it,UsersCountryDataModule:gt,Theme:Tt}}),kt=xt;c["c"].add(l["d"],l["a"],l["f"],l["g"],d["b"],d["a"],d["c"],d["d"],m["a"],l["c"],l["b"],l["e"],l["h"],l["i"],l["j"]),r["a"].component("font-awesome-icon",u["a"]),r["a"].use(o["a"]),r["a"].use(i.a),r["a"].config.productionTip=!1,new r["a"]({router:M,store:kt,render:function(t){return t(n["default"])}}).$mount("#app")},"5f12":function(t,e,a){"use strict";a("8c3e")},"85ec":function(t,e,a){},"8c3e":function(t,e,a){},"981c":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-2 select-none",attrs:{id:"header"}},[a("nav",{staticClass:"bg-white dark:bg-dark-mode-bg py-2 md:py-4"},[a("div",{staticClass:"container px-4 mx-auto md:flex md:items-center md:w-9/12"},[a("div",{staticClass:"flex justify-between items-center"},[a("router-link",{staticClass:"font-bold text-xl text-main-color dark:text-dark-mode-title",attrs:{to:"/"}},[t._v("COVID-19")]),a("button",{staticClass:"border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden outline-none",on:{click:function(e){t.navbarClass="hidden"==t.navbarClass?"flex":"hidden"}}},[a("font-awesome-icon",{attrs:{icon:["fas","bars"]}})],1)],1),a("div",{staticClass:"md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 text-center",class:t.navbarClass},[a("span",{staticClass:"md:hidden border border-main-color dark:border-dark-mode-main-color dark:border-opacity-90"}),a("router-link",{staticClass:"p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-dark-mode-bg2 dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200",attrs:{to:"/"}},[t._v("Home")]),a("router-link",{staticClass:"p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-dark-mode-bg2 dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200",attrs:{to:"/stats"}},[t._v("Statistics")]),a("div",{staticClass:"p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 dark:text-gray-500 dark:hover:bg-dark-mode-bg2 dark:hover:text-gray-300 transition-colors duration-300 active:text-white active:bg-indigo-200 cursor-pointer",on:{click:t.showContacts}},[t._v(" Contacts ")]),a("theme-switcher")],1)])]),a("contacts"),a("scroll-top-btn",{staticClass:"z-40"})],1)},n=[],o=a("5530"),s=a("2f62"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#header",duration:750,easing:"ease-out"},expression:"{\n            element: '#header',\n            duration: 750,\n            easing: 'ease-out',\n        }"}],attrs:{href:""}},[a("button",{staticClass:"fixed bottom-5 right-3 md:right-5 focus:outline-none text-3xl text-gray-100 flex items-center justify-center h-14 w-14 bg-main-color opacity-70 rounded-full dark:bg-dark-mode-main-color dark:text-white dark:opacity-90 z-50",class:t.scrollUpBtnClass},[a("font-awesome-icon",{staticClass:"md:hover:animate-bounce md:hover:mb-0",class:[t.margin,{"md:animate-bounce":t.atTheBottomOfThePage}],attrs:{icon:["fas","chevron-up"]}})],1)])])},c=[],l={name:"ScrollTopBtn",data:function(){return{scrollUpBtnClass:"hidden",atTheBottomOfThePage:!1,margin:"mb-1"}},methods:{handleScroll:function(){var t=this;window.onscroll=function(){if(window.scrollY<=200&&"hidden"!=t.scrollUpBtnClass)return t.scrollUpBtnClass="hidden";if(window.scrollY>200){if("block"!=t.scrollUpBtnClass)return t.scrollUpBtnClass="block";var e=window.innerHeight+window.scrollY>document.body.scrollHeight-50;if(e){if(t.atTheBottomOfThePage&&"md:mb-0"==t.margin)return;return t.atTheBottomOfThePage=!0,void(t.margin="mb-1 md:mb-0")}return t.atTheBottomOfThePage=!1,void(t.margin="mb-1")}}}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},u=l,d=a("2877"),m=Object(d["a"])(u,i,c,!1,null,"513d240c",null),f=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contacts"}},[a("div",{staticClass:"fixed top-0 left-0 h-full w-full bg-white dark:bg-dark-mode-secondary-color bg-opacity-60 dark:bg-opacity-30 z-10 animate-appear",class:{hidden:t.hideContacts},on:{click:t.toggleHideContactsAnimation}}),a("div",{staticClass:"fixed top-0 right-0 h-full bg-pink-50 dark:bg-dark-mode-bg3 z-10 animate-slidein transition-width ease-in-out duration-1000",class:t.contactsW},[a("div",{staticClass:"h-3/4 w-full top-0 right-0 absolute"},[a("div",{staticClass:"h-full w-full absolute"},[a("div",{staticClass:"bg-pink-100 dark:bg-dark-mode-bg2 dark:opacity-60 h-full w-full opacity-70"}),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[a("path",{staticClass:"fill-pink-100 dark:fill-dark-mode-bg2 opacity-70 dark:opacity-60",attrs:{d:"M0,224L120,197.3C240,171,480,117,720,96C960,75,1200,85,1320,90.7L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"}})])]),a("div",{staticClass:"h-full w-full absolute"},[a("div",{staticClass:"bg-pink-200 dark:bg-dark-mode-bg2 dark:opacity-100 h-4/6 opacity-60"}),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[a("path",{staticClass:"fill-pink-200 dark:fill-dark-mode-bg2 opacity-60 dark:opacity-100",attrs:{d:"M0,128L120,154.7C240,181,480,235,720,256C960,277,1200,267,1320,261.3L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"}})])]),a("div",{staticClass:"h-full w-full absolute"},[a("div",{staticClass:"bg-main-color dark:bg-dark-mode-bg h-3/6 opacity-30 dark:opacity-60"}),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[a("path",{staticClass:"fill-main-color dark:fill-dark-mode-bg opacity-30 dark:opacity-60",attrs:{d:"M0,256L120,224C240,192,480,128,720,117.3C960,107,1200,149,1320,170.7L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"}})])]),a("div",{staticClass:"h-full w-full absolute"},[a("div",{staticClass:"bg-main-color dark:bg-dark-mode-bg h-1/6 opacity-50 dark:opacity-80"}),a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[a("path",{staticClass:"fill-main-color dark:fill-dark-mode-bg opacity-50 dark:opacity-80",attrs:{d:"M0,160L120,181.3C240,203,480,245,720,224C960,203,1200,117,1320,74.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"}})])])]),a("div",{staticClass:"pt-1 md:pt-0 flex flex-col md:flex-row-reverse justify-center h-full text-center text-3xl text-gray-900 dark:text-gray-300 text-opacity-90 transition-opacity duration-1000",class:t.iconsOpacity,attrs:{id:"contacts"}},[a("a",{staticClass:"mb-12 md:-ml-12 transition-margin ease-in-out duration-300",class:t.iconLinkedInPos,attrs:{href:"https://www.linkedin.com/in/ivan-hrytsenko-4a9912208/",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"absolute z-10",attrs:{icon:["fab","linkedin"]}}),a("font-awesome-icon",{staticClass:"text-main-color absolute mt-1 ml-1 opacity-10",attrs:{icon:["fab","linkedin"]}})],1),a("a",{staticClass:"md:-ml-12 transition-margin ease-in-out duration-500",class:t.iconFacebookPos,attrs:{href:"https://www.facebook.com/profile.php?id=100013248375974",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"absolute z-10",attrs:{icon:["fab","facebook-square"]}}),a("font-awesome-icon",{staticClass:"absolute text-main-color mt-1 ml-1 opacity-10",attrs:{icon:["fab","facebook-square"]}})],1),a("a",{staticClass:"md:-ml-12 transition-margin ease-in-out duration-700",class:t.iconTelegramPos,attrs:{href:"http://t.me/bit1creative",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"absolute z-10",attrs:{icon:["fab","telegram"]}}),a("font-awesome-icon",{staticClass:"absolute text-main-color mt-1 ml-1 opacity-10",attrs:{icon:["fab","telegram"]}})],1),a("a",{staticClass:"md:-ml-12 transition-margin ease-in-out duration-1000",class:t.iconTwitterPos,attrs:{href:"https://twitter.com/bit1creative",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{staticClass:"absolute z-10",attrs:{icon:["fab","twitter-square"]}}),a("font-awesome-icon",{staticClass:"absolute text-main-color mt-1 ml-1 opacity-10",attrs:{icon:["fab","twitter-square"]}})],1)])])])},p=[],b={name:"Contacts",data:function(){return{contactsW:"w-0",iconsOpacity:"block",iconLinkedInPos:"ml-64 md:-mt-8",iconFacebookPos:"ml-72 -my-12",iconTelegramPos:"ml-80 -my-12",iconTwitterPos:"ml-96 -my-12"}},methods:Object(o["a"])({toggleHideContactsAnimation:function(){this.hideContactsPage()}},Object(s["b"])({hideContactsPage:"hideContacts"})),computed:Object(o["a"])({},Object(s["c"])({hideContacts:"GET_HIDE_CONTACTS_STATE"})),watch:{hideContacts:function(t){var e=this;this.contactsW=t?"w-0":"w-5/12",t||(this.iconsOpacity="block");var a=t?0:400;setTimeout((function(){e.iconsOpacity=t?"opacity-0 ease-slow-in-quick-out":"opacity-100 ease-slow-in-quick-out",e.iconLinkedInPos=t?"ml-64 md:-mt-8":"-ml-8 md:mt-12",e.iconFacebookPos=t?"ml-72 md:-my-12":"-ml-8 my-12",e.iconTelegramPos=t?"ml-80 md:-my-12":"-ml-8 my-12",e.iconTwitterPos=t?"ml-96 md:-my-12":"-ml-8 my-12"}),a),t&&setTimeout((function(){e.iconsOpacity="hidden"}),800)}}},g=b,v=Object(d["a"])(g,h,p,!1,null,null,null),C=v.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center justify-center w-full px-2 py-4 md:py-0"},[a("label",{staticClass:"flex items-center cursor-pointer"},[a("div",{staticClass:"relative"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.isDarkMode,expression:"isDarkMode"}],staticClass:"sr-only",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isDarkMode)?t._i(t.isDarkMode,null)>-1:t.isDarkMode},on:{change:function(e){var a=t.isDarkMode,r=e.target,n=!!r.checked;if(Array.isArray(a)){var o=null,s=t._i(a,o);r.checked?s<0&&(t.isDarkMode=a.concat([o])):s>-1&&(t.isDarkMode=a.slice(0,s).concat(a.slice(s+1)))}else t.isDarkMode=n}}}),a("div",{staticClass:"line w-10 h-4 bg-yellow-200 dark:bg-blue-200 rounded-full shadow-inner"}),a("div",{staticClass:"dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition text-center align-middle inline-block"},[t.isDarkMode?a("font-awesome-icon",{staticClass:"inline-block text-base align-middle mb-0.5 md:mb-1 text-blue-400",attrs:{icon:["fas","moon"]}}):t._e(),t.isDarkMode?t._e():a("font-awesome-icon",{staticClass:"inline-block text-base align-middle mb-0.5 md:mb-1 text-yellow-500",attrs:{icon:["fas","sun"]}})],1)])])])},y=[],T={name:"ThemeSwitcher",data:function(){return{isDarkMode:null}},methods:Object(o["a"])({},Object(s["b"])(["toggleTheme"])),computed:Object(o["a"])({},Object(s["c"])({theme:"GET_THEME"})),watch:{isDarkMode:function(t,e){null!==e&&this.toggleTheme()}},created:function(){this.isDarkMode="dark"==this.theme}},x=T,k=(a("5f12"),Object(d["a"])(x,_,y,!1,null,null,null)),w=k.exports,E={name:"Header",components:{ScrollTopBtn:f,Contacts:C,ThemeSwitcher:w},data:function(){return{navbarClass:"hidden"}},methods:Object(o["a"])({showContacts:function(){this.showContacts()}},Object(s["b"])(["showContacts","initTheme"])),computed:Object(o["a"])({},Object(s["c"])({theme:"GET_THEME"})),watch:{theme:function(t){"light"===t?(document.querySelector("html").classList.remove("dark"),document.body.classList.remove("dark")):(document.querySelector("html").classList.add("dark"),document.body.classList.add("dark"))}},beforeMount:function(){this.initTheme()}},R=E,O=Object(d["a"])(R,r,n,!1,null,"43afb6a3",null);e["a"]=O.exports},b2c8:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-white dark:bg-dark-mode-bg",attrs:{id:"footer"}},[a("div",{staticClass:"container flex items-center justify-center md:block mx-auto md:px-4 lg:px-16"},[t._m(0),a("div",{staticClass:"pt-1 flex justify-center",attrs:{id:"contacts"}},[a("a",{staticClass:"text-linkedin pr-2 text-xl",attrs:{href:"https://www.linkedin.com/in/ivan-hrytsenko-4a9912208/",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1),a("a",{staticClass:"text-facebook pr-2 text-xl",attrs:{href:"https://www.facebook.com/profile.php?id=100013248375974",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook-square"]}})],1),a("a",{staticClass:"text-telegram pr-2 text-xl",attrs:{href:"http://t.me/bit1creative",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{attrs:{icon:["fab","telegram"]}})],1),a("a",{staticClass:"text-twitter pr-2 text-xl",attrs:{href:"https://twitter.com/bit1creative",target:"_blank",rel:"noopener noreferrer"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter-square"]}})],1)])]),t._m(1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center pr-4 pt-1 text-gray-500 dark:text-gray-400"},[a("span",[t._v("© 2021 Ivan Hrytsenko")]),a("br")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center pb-1 select-none"},[a("b",{staticClass:"block font-thin text-xs text-gray-400 dark:text-gray-500"},[t._v(" For Non-Commercial usage only. "),a("br"),a("a",{attrs:{href:"https://www.who.int/health-topics/coronavirus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Main page source")])])])}],o={name:"Footer"},s=o,i=a("2877"),c=Object(i["a"])(s,r,n,!1,null,"adc70e46",null);e["a"]=c.exports},ba8c:function(t,e,a){}});