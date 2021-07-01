(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{115:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){},124:function(e,t,c){},125:function(e,t,c){},126:function(e,t,c){},233:function(e,t,c){},235:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(12),s=c.n(n),o=(c(115),c(28)),i=c.n(o),l=c(43),d=c(14),u=c(9),j=(c(117),c(276)),b=c(277),h=c(278),f=c(269),p=c(271),v=c(272),O=c(266),x=(c(118),c(3)),m=Object(O.a)({root:{background:"#ffffff",border:0,borderRadius:6,height:100,width:200,boxShadow:" -5px 3px 82px -6px rgba(\t144, 202, 249,0.);"}});var g=function(e){var t=e.title,c=e.cases,a=e.total,r=e.onClick,n=e.active,s=e.isGrey,o=e.isGreen,i=e.isRed,l=m();return Object(x.jsx)(f.a,{className:"statCard \n      ".concat(n&&"statChange","\n      "),onClick:r,children:Object(x.jsx)(p.a,{className:l.root,children:Object(x.jsxs)("div",{className:"\n      ".concat(n&&"div-Change","\n      "),children:[Object(x.jsx)(v.a,{color:"textSecondary",className:"statTitle",children:t}),Object(x.jsxs)("h1",{className:"statCases ".concat(!s&&!i&&"statGreen","\n           ").concat(!s&&!o&&"statRed"),style:{font:"16px"},children:["+",c]}),Object(x.jsxs)(v.a,{color:"textPrimary",className:"statTotal",children:["+",a," Total"]})]})})})},y=c(274),C=c(275),N=c(280),w=(c(124),c(279)),k=c(273),S=c(18),T=c.n(S),R=(c(125),c(75),{cases:{rgb:"rgb(102, 102, 102)",half_op:"rgb(102, 102, 102,0.5)",multiplier:300},recovered:{rgb:"rgba(65, 199, 65,0.7)",half_op:"rgba(65, 199, 65,1)",multiplier:400},deaths:{rgb:"rgb(255, 60, 60)",half_op:"rgb(255, 60, 60,0.5)",multiplier:1e3}}),I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(x.jsx)(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],pathOptions:{color:"".concat(R[t].half_op),fillColor:"".concat(R[t].rgb)},radius:Math.sqrt(e[t])*R[t].multiplier,children:Object(x.jsx)(k.a,{minWidth:"auto",children:Object(x.jsxs)("div",{className:"popup-container",children:[Object(x.jsx)("div",{className:"flag-container",children:Object(x.jsx)("img",{src:"".concat(e.countryInfo.flag)})}),Object(x.jsxs)("div",{className:"stats-container",children:[Object(x.jsx)("div",{className:"map-name",children:e.country}),Object(x.jsxs)("div",{className:"map-cases",children:["Cases:",Object(x.jsx)("div",{style:{color:"gray"},children:T()(e.cases).format("0,0")})]}),Object(x.jsxs)("div",{className:"map-recovered",children:["Recovered:",Object(x.jsx)("div",{style:{color:"green "},children:T()(e.recovered).format("0,0")})]}),Object(x.jsxs)("div",{className:"map-deaths",children:["Deaths:",Object(x.jsx)("div",{style:{color:"red"},children:T()(e.deaths).format("0,0")})]})]})]})})})}))};function z(e){var t=e.center,c=e.zoom;e.countries,e.caseType;return Object(y.a)().setView(t,c),0}var A=function(e){var t=e.center,c=e.zoom,a=e.countries,r=e.caseType;return Object(x.jsx)("div",{className:"map",children:Object(x.jsxs)(C.a,{center:t,zoom:c,children:[Object(x.jsx)(z,{center:t,zoom:c}),Object(x.jsx)(N.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),I(a,r)]})})};c(126);var D=function(e){var t=e.countries;return Object(x.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(x.jsxs)("tr",{children:[Object(x.jsxs)("td",{children:[" ",t," "]}),Object(x.jsx)("td",{children:Object(x.jsxs)("strong",{children:[" ",T()(c).format("0,0")," "]})})]})}))})},F=c(10),G=function(e){var t=Object(F.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},M=c(2),E=c(102),L=(c(233),["casesType"]),_={maintainAspectRatio:!1,elements:{point:{radius:2}},legend:{display:!1},tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return T()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e){return T()(e).format("0a")}}}]}},P=function(e,t){var c,a=[];for(var r in e.cases){if(c){var n={x:r,y:e[t][r]-c};a.push(n)}c=e[t][r]}return a};var W,Y=function(e){var t=e.casesType,c=void 0===t?"cases":t,r=(Object(M.a)(e,L),Object(a.useState)({})),n=Object(d.a)(r,2),s=n[0],o=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=P(e,c);o(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(x.jsx)("div",{className:"graph-fill",children:(null===s||void 0===s?void 0:s.length)>0&&Object(x.jsx)(E.a,{data:{datasets:[{label:[],fill:"start",borderColor:"rgba(204, 16, 52, 1)",backgroundColor:"rgba(204,16,52,0.2)",data:s}]},options:_})})},B=function(e){return e?"".concat(T()(e).format("0.0a")):"+0"},J=Object(O.a)({root:(W={background:"#90caf9",border:0,borderRadius:3,color:"#27313A",height:80,width:280},Object(u.a)(W,"borderRadius",6),Object(u.a)(W,"boxShadow"," -5px 3px 82px -6px rgba(\t144, 202, 249,0.);"),W)});var V=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)("worldwide"),s=Object(d.a)(n,2),o=(s[0],s[1]),u=Object(a.useState)([]),v=Object(d.a)(u,2),O=v[0],m=v[1],y=Object(a.useState)({}),C=Object(d.a)(y,2),N=C[0],w=C[1],k=Object(a.useState)([]),S=Object(d.a)(k,2),T=S[0],R=S[1],I=Object(a.useState)({lat:40.3,lng:10}),z=Object(d.a)(I,2),F=z[0],M=z[1],E=Object(a.useState)(2.4),L=Object(d.a)(E,2),_=L[0],P=L[1],W=Object(a.useState)("cases"),V=Object(d.a)(W,2),q=V[0],H=V[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){w(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=G(e);R(c),m(e),r(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(l.a)(i.a.mark((function e(t){var c,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,a="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(a).then((function(e){return e.json()})).then((function(e){o(c),w(e),M([e.countryInfo.lat,e.countryInfo.long]),P(5)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=J();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)("header",{className:"App-header",children:[Object(x.jsx)("h1",{style:{color:"#90caf9"},s:!0,children:"COVID-19 Tracker"}),Object(x.jsx)(j.a,{className:"App-dropdown",children:Object(x.jsxs)(b.a,{select:!0,label:"Select",variant:"filled",onChange:K,className:Q.root,helperText:"Select Your Country",children:[Object(x.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(x.jsx)(h.a,{value:e.value,children:e.name})}))]})})]})}),Object(x.jsxs)("div",{className:"stats",children:[Object(x.jsx)(g,{isGrey:!0,active:"cases"===q,onClick:function(e){return H("cases")},title:"Coronavirus Cases",cases:B(N.todayCases),total:B(N.cases)}),Object(x.jsx)(g,{isGreen:!0,active:"recovered"===q,onClick:function(e){return H("recovered")},title:"Coronavirus Recovered",cases:B(N.todayRecovered),total:B(N.recovered)}),Object(x.jsx)(g,{isRed:!0,active:"deaths"===q,onClick:function(e){return H("deaths")},title:"Coronavirus Deaths",cases:B(N.todayDeaths),total:B(N.deaths)})]}),Object(x.jsx)(A,{center:F,zoom:_,countries:O,caseType:q}),Object(x.jsxs)("div",{className:"live",children:[Object(x.jsx)(f.a,{className:"live-card",children:Object(x.jsxs)(p.a,{children:[Object(x.jsx)("h3",{children:"Live Cases by Country"}),Object(x.jsx)(D,{countries:T})]})}),Object(x.jsx)(f.a,{className:"live-graph",children:Object(x.jsxs)(p.a,{children:[Object(x.jsxs)("h3",{style:{textTransform:"capitalize"},children:["Worldwide New ",q]}),Object(x.jsx)(Y,{className:"graph-fill",casesType:q})]})}),Object(x.jsx)("div",{children:Object(x.jsx)("br",{})})]})]})},q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,282)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),r(e),n(e),s(e)}))};s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(V,{})}),document.getElementById("root")),q()}},[[235,1,2]]]);
//# sourceMappingURL=main.c7ff66bc.chunk.js.map