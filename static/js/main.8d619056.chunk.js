(this.webpackJsonpleezer=this.webpackJsonpleezer||[]).push([[0],{24:function(e,n,t){},25:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(0),a=t.n(o),i=t(14),s=t.n(i),c=(t(24),t(4)),d=t(18),l=t(2),p=(t(25),t(3)),u=t(10),b=t(5),j={phase:"start",points:0,errors:0,timeMillis:100,totalTimeMillis:6e4,word:"",restWords:[]};function m(e,n){var t=e.phase,r=e.points,o=e.errors,a=e.totalTimeMillis,i=e.timeMillis,s=e.restWords;switch(n.type){case"start":return function(e){var n=Object(b.shuffle)(Object(b.uniq)(Object(b.flatMap)(e,(function(e){return e.words})))),t=Object(u.a)(n);return{phase:"play",points:0,errors:0,timeMillis:100,totalTimeMillis:6e4,word:t[0],restWords:t.slice(1)}}([n.dictionary]);case"restart":return Object(c.a)(Object(c.a)({},e),{},{phase:"start"});case"tick":if("play"!==t)return e;var d=i+n.intervalMillis;return d>=a?Object(c.a)(Object(c.a)({},e),{},{phase:"finish"}):Object(c.a)(Object(c.a)({},e),{},{timeMillis:d});case"fail":case"pass":var l=Object(u.a)(s),p=l[0],j=l.slice(1);return Object(c.a)(Object(c.a)({},e),{},{phase:j.length>0?t:"finish",points:r+("pass"===n.type?1:0),errors:o+("fail"===n.type?1:0),word:p,restWords:j})}}var h=t(32),f=[{name:"kern start",words:["ik","mik","sik","mis","sis","sim","kim","kik","is"]},{name:"kern een",words:["kip","raak","vis","vaar","ver","raap","aap","rem","paar","maar","raar","rek"]},{name:"kern twee",words:["pet","pit","tip","tim","tem","in","vin","tin","tik","kit","kaak","taak","kaat","maat","met","meet","eet","een","nee","neem","mis","mes","mees","meen","boot","boon","boom","oom","room","pit","poot","noot","toon","teen"]},{name:"kern drie",words:["aan","baan","baas","beek","beer","beet","beet","bek","ben","bes","boom","boon","boor","boos","den","den","dij","dijk","dik","dip","doe","doek","doen","doet","doop","een","eet","en","haan","haar","haas","heen","heer","hees","hen","hes","hij","hijs","hik","hip","hoe","hoek","hoes","hoop","hoor","ijs","in","kaas","keer","kees","ken","kijk","koe","koek","koen","koor","koos","maak","maak","maar","maat","mee","meen","mees","men","mep","mes","min","naam","naar","nee","neem","neer","nek","nek","nep","noor","noot","peer","pees","pim","pit","poes","poot","raam","raas","ree","rek","rep","rij","rijk","rijm","rijp","rik","rit","roe","roep","room","roos","sis","soep","teek","teen","teer","tijn","tijs","tik","tin","tip","toon","toos","vaak","vaar","vaas","vee","veer","ven","vet","vin","zeem","zeer","zij","zijn","zoen","zoet","zoek"]}];function v(){var e=Object(l.a)(["\n  margin: 40px 0;\n  button {\n    width: 80%;\n    color: white;\n    font-size: 2em;\n    border-radius: 10px;\n    padding: 20px 40px;\n    margin: 20px 0;\n    background-color: green;\n  }\n"]);return v=function(){return e},e}var k=Object(p.a)((function(e){var n=e.dispatch,t=e.className;return Object(r.jsx)("div",{className:t,children:f.map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){return n({type:"start",dictionary:e})},children:e.name})})}))})}))(v());function O(){var e=Object(l.a)(["\n  height: 5px;\n  border: solid 1px grey;\n  border-radius: 5px;\n  background-color: white;\n\n  & div {\n    transform-origin: left;\n    height: 5px;\n    background-color: grey;\n  }\n"]);return O=function(){return e},e}var g,x=Object(p.a)((function(e){var n=e.className,t=e.progressPercent;return Object(r.jsx)("div",{className:n,children:Object(r.jsx)("div",{className:"fill",style:{transform:"scale(".concat(t/100,", 1)")}})})}))(O());!function(e){e[e.Onvoldoende=0]="Onvoldoende",e[e.Matig=1]="Matig",e[e.Voldoende=2]="Voldoende",e[e.RuimVoldoende=3]="RuimVoldoende",e[e.Goed=4]="Goed",e[e.ZeerGoed=5]="ZeerGoed"}(g||(g={}));function w(e,n){return e<=9?g.Onvoldoende:e<=13?g.Matig:e<=17?g.Voldoende:e<=22?g.RuimVoldoende:e<=32?g.Goed:g.ZeerGoed}var N=t.p+"static/media/star.da902792.svg";function y(){var e=Object(l.a)(["\n  height: 50px;\n\n  img {\n    height: 50px;\n  }\n"]);return y=function(){return e},e}var z=Object(p.a)((function(e){var n=e.count,t=e.className;return Object(r.jsx)("div",{className:t,children:Object(b.range)(n).map((function(){return Object(r.jsx)("img",{src:N,alt:"star"})}))})}))(y());function M(){var e=Object(l.a)(["\n  min-width: 10vw;\n  // background-color: #675caf;\n  border-radius: 10px;\n  color: green;\n  font-weight: bold;\n  padding: 15px;\n\n  & div.points {\n    margin-bottom: 15px;\n  }\n\n  & span {\n    margin-left: 20px;\n    color: red;\n    font-size: 50%;\n  }\n"]);return M=function(){return e},e}var P=Object(p.a)((function(e){var n=e.points,t=e.className,o=e.errors,a=e.children;return Object(r.jsxs)("div",{className:t,children:[Object(r.jsx)(z,{count:w(n)}),Object(r.jsxs)("div",{className:"points",children:[n," punten",Object(r.jsxs)("span",{children:[o," fout"]})]}),a]})}))(M());function C(){var e=Object(l.a)(["\n  font-size: 1.6em;\n\n  .controls {\n    margin-bottom: 30vh;\n  }\n\n  .word {\n    font-size: 2em;\n    margin-bottom: 14vh;\n  }\n\n  button {\n    color: white;\n    font-size: 1em;\n    transform: rotate(180deg);\n    border-radius: 10px;\n    padding: 10px 20px;\n    margin: 20px;\n  }\n\n  button.pass {\n    background-color: green;\n  }\n\n  button.fail {\n    background-color: red;\n  }\n"]);return C=function(){return e},e}var G=Object(p.a)((function(e){var n=e.word,t=e.className,o=e.points,a=e.errors,i=e.timeProgressPercent,s=e.dispatch;return Object(r.jsxs)("div",{className:t,children:[Object(r.jsxs)("div",{className:"controls",children:[Object(r.jsx)("button",{className:"pass",onClick:function(){return s({type:"pass"})},children:"goed"}),Object(r.jsx)("button",{className:"fail",onClick:function(){return s({type:"fail"})},children:"fout"})]}),Object(r.jsx)("div",{className:"word",children:n}),Object(r.jsx)(P,{points:o,errors:a,children:Object(r.jsx)(x,{progressPercent:i})})]})}))(C());function T(){var e=Object(l.a)(["\n  font-size: 2em;\n\n  h1 {\n    color: purple;\n  }\n\n  .points {\n    margin-top: 10px;\n    color: gold;\n  }\n\n  .errors {\n    color: pink;\n    font-size: 50%;\n    margin: 20px 0;\n  }\n\n  button {\n    width: 80%;\n    color: white;\n    font-size: 1em;\n    border-radius: 10px;\n    padding: 20px 40px;\n    margin: 20px 0;\n    background-color: green;\n  }\n"]);return T=function(){return e},e}var V=Object(p.a)((function(e){var n=e.dispatch,t=e.points,o=e.errors,a=e.className;return Object(r.jsxs)("div",{className:a,children:[Object(r.jsx)("h1",{children:"klaar!"}),Object(r.jsx)(z,{count:w(t)}),Object(r.jsxs)("div",{className:"points",children:[t," punten"]}),Object(r.jsxs)("div",{className:"errors",children:[o," fout"]}),Object(r.jsx)("button",{onClick:function(){return n({type:"restart"})},children:"nog een keer"})]})}))(T());function F(){var e=Object(l.a)(["\n  text-align: center;\n  min-height: 70vh;\n  padding: 30px;\n"]);return F=function(){return e},e}var R=p.a.div(F());function W(){var e=Object(o.useReducer)(m,j),n=Object(d.a)(e,2),t=n[0],a=n[1];Object(h.a)((function(){return a({type:"tick",intervalMillis:100})}),"play"===t.phase?100:null);var i=100-t.timeMillis/t.totalTimeMillis*100;return Object(r.jsxs)(R,{children:["start"===t.phase&&Object(r.jsx)(k,{dispatch:a}),"play"===t.phase&&Object(r.jsx)(G,Object(c.a)(Object(c.a)({},t),{},{dispatch:a,timeProgressPercent:i})),"finish"===t.phase&&Object(r.jsx)(V,Object(c.a)(Object(c.a)({},t),{},{dispatch:a}))]})}var Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),a(e),i(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root")),Z()}},[[30,1,2]]]);
//# sourceMappingURL=main.8d619056.chunk.js.map