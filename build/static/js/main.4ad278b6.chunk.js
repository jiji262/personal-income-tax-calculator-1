(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){"use strict";var n=function(e,t){if(t<=Math.min.apply(null,e))return 0;if(t>Math.max.apply(null,e))return e.length;for(var a=0,n=0,r=e.length;n<r;n++)if(e[n]>=t){a=n;break}return a},r=a(26),c=a(36);function o(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:5e3,o=+(+e*a).toFixed(2),i=+((+t+r+c)*a).toFixed(2),s=+(+t*a).toFixed(2),l=o-i,u=n([0,36e3,144e3,3e5,42e4,66e4,96e4],l),d=[0,3,10,20,25,30,35,45][u],m=[0,0,2520,16920,31920,52920,85920,181920][u],h=+(l*d/100-m).toFixed(2);return{taxRate:d,quickDeduction:m,tax:h,afterTax:+((+e-+t)*a-h).toFixed(2),income:o,totalDeduction:i,totalInsurance:s}}function i(e,t,a){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4?arguments[4]:void 0,i=r.c[a],s=i.MIBases,l=i.EIBases,u=i.UIBases,d=i.EIRates,m=i.MIRates,h=i.UIRates,f=i.addMI;return+(Object(c.a)(e,s)*m[0]+f+Object(c.a)(e,l)*d[0]+Object(c.a)(e,u)*h[0]+t*o*Number(n)).toFixed(2)}function s(e){var t=[0,3e3,12e3,25e3,35e3,55e3,8e4],a=[0,3,10,20,25,30,35,45],r=[0,0,210,1410,2660,4410,7160,15160];if(!(arguments.length>1&&void 0!==arguments[1])||arguments[1]){var c=n(t,e/12),o=a[c],i=r[c],s=+(e*o/100-i).toFixed(2);return{tax:s,income:e,taxRate:o,quickDeduction:i,afterTax:e-s}}for(var l,u,d,m=0,h=0,f=a.length;m<f;m++){var p=+((e-r[m])/(1-a[m]/100)/12).toFixed(2);if(n(t,p)===m){h=m;break}}return{taxRate:u=a[h],quickDeduction:d=r[h],afterTax:e,income:l=+((e-d)/(1-u/100)).toFixed(2),tax:+(l-e).toFixed(2)}}a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return s})},26:function(e,t,a){"use strict";a.d(t,"e",function(){return c}),a.d(t,"d",function(){return o}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return l});var n=0;function r(e,t,a,r){var c;return n+=1,c=e?t?"\u8d85\u8fc7".concat(e,",000\u81f3").concat(t,",000\u7684\u90e8\u5206"):"\u4e0d\u8d85\u8fc7".concat(e,",000\u7684\u90e8\u5206"):"\u8d85\u8fc7".concat(t,",000\u7684\u90e8\u5206"),{id:n,income:c,taxRate:a,deduction:r}}var c=[r(36,0,3,0),r(36,144,10,2520),r(144,300,20,16920),r(300,420,25,31920),r(420,660,30,52920),r(660,960,35,85920),r(0,960,45,181920)],o=[r(3,0,3,0),r(3,12,10,210),r(12,25,20,1410),r(25,35,25,2660),r(35,55,30,4410),r(55,80,35,7160),r(0,80,45,15160)],i=[[.05,"5%"],[.06,"6%"],[.07,"7%"],[.08,"8%"],[.09,"9%"],[.1,"10%"],[.11,"11%"],[.12,"12%"]],s=[{city:"\u5317\u4eac",IBases:[5869,31884],MIBases:[5869,31884],EIBases:[5869,31884],UIBases:[5869,31884],CIBase:[5869,31884],WIIBase:[5869,31884],HACBases:[5869,31884],addMI:3,HACRates:[.12,.12],EIRates:[.08,.16],MIRates:[.02,.09],UIRates:[.005,.005],WIIRates:[0,.004],CIRates:[0,.008]},{city:"\u897f\u5b89",IBases:[3632,24212],MIBases:[4618,23089],EIBases:[4711,23556],UIBases:[4618,23089],HACBases:[1950,27770],addMI:1.6,HACRates:[.12,.12],EIRates:[.08,.16],MIRates:[.02,.08],UIRates:[.003,.007]},{city:"\u676d\u5dde",IBases:[3957,19783],MIBases:[3957,19783],EIBases:[3957,19783],UIBases:[3957,19783],CIBase:[3957,19783],WIIBase:[3957,19783],HACBases:[2280,36675],addMI:0,HACRates:[.12,.12],EIRates:[.08,.16],MIRates:[.02,.99],UIRates:[.005,.005],WIIRates:[0,.002],CIRates:[0,0]},{city:"\u4e0a\u6d77",IBases:[6520,34188],MIBases:[6520,34188],EIBases:[6520,34188],UIBases:[6520,34188],CIBase:[6520,34188],WIIBase:[6520,34188],HACBases:[2590,34188],addMI:0,HACRates:[.07,.07],EIRates:[.08,.16],MIRates:[.02,.1],UIRates:[.005,.005],WIIRates:[0,.01],CIRates:[0,0]},{city:"\u5e7f\u5dde",IBases:[4588,24930],MIBases:[7214,36072],EIBases:[4588,24930],UIBases:[2300,36072],HACBases:[2300,36072],addMI:0,HACRates:[.05,.12],EIRates:[.08,.14],MIRates:[.02,.0545],UIRates:[.002,.0048],WIIRates:[0,.004]},{city:"\u6df1\u5733",IBases:[2360,27927],MIBases:[5585,27927],EIBases:[2200,19014],UIBases:[2200,2200],CIBase:[2200,27927],WIIBase:[2200,19014],HACBases:[2200,38892],addMI:0,HACRates:[.05,.12],EIRates:[.08,.15],MIRates:[.02,.062],UIRates:[.003,.007],WIIRates:[0,.0014],CIRates:[0,.0045]},{city:"\u5b81\u6ce2",IBases:[3539,17694],MIBases:[3539,17694],EIBases:[3539,17694],UIBases:[3539,17694],CIBase:[3539,17694],WIIBase:[3539,17694],HACBases:[2010,27237],addMI:0,HACRates:[.08,.08],EIRates:[.08,.14],MIRates:[.02,.08],UIRates:[.005,.005],WIIRates:[0,.0014],CIRates:[0,.0067]},{city:"\u82cf\u5dde",IBases:[3368,16842],MIBases:[3368,16842],EIBases:[3368,16842],UIBases:[3368,16842],HACBases:[3030,23700],addMI:5,HACRates:[.08,.08],EIRates:[.08,.16],MIRates:[.02,.07],UIRates:[.005,.005]},{city:"\u65e0\u9521",IBases:[2788,18171],MIBases:[2788,18171],EIBases:[2788,18171],UIBases:[2788,18171],HACBases:[2020,23100],addMI:0,HACRates:[.08,.08],EIRates:[.08,.19],MIRates:[.02,.079],UIRates:[.005,.005]},{city:"\u6210\u90fd",IBases:[2697,16179],MIBases:[3236,16179],EIBases:[2697,16179],UIBases:[3236,16179],HACBases:[1780,21498],addMI:0,HACRates:[.06,.06],EIRates:[.08,.16],MIRates:[.02,.065],UIRates:[.004,.006]},{city:"\u5357\u4eac",IBases:[3368,16842],MIBases:[3368,16842],EIBases:[3368,16842],UIBases:[3368,16842],HACBases:[2020,27700],addMI:0,HACRates:[.06,.06],EIRates:[.08,.16],MIRates:[.02,.09],UIRates:[.005,.005]}],l=["\u5317\u4eac","\u897f\u5b89","\u676d\u5dde","\u4e0a\u6d77","\u5e7f\u5dde","\u6df1\u5733","\u5b81\u6ce2","\u82cf\u5dde","\u65e0\u9521","\u6210\u90fd","\u5357\u4eac"]},36:function(e,t,a){"use strict";function n(e,t){var a=+e,n=t[0],r=t[1];return a>=n?a<=r?a:r:n}a.d(t,"a",function(){return n})},5453:function(e,t,a){e.exports=a(5634)},5633:function(e,t,a){},5634:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=a(177),s=a(17),l=a(72),u=a.n(l),d=a(71),m=a.n(d),h=a(178),f=a.n(h),p=a(108),I=a.n(p),v=a(109),b=a.n(v),y=a(5640),g=a(5637),C=a(5638),E=a(46),B=a(32),O=a(33),R=a(34),x=a(35),j=a(23),A=a(11),w=a(5),H=a(172),T=a.n(H),M=a(21),k=a(5639),W=a(111),S=a(114),P=a.n(S),U=a(5636),N=a(36),F=a(19),_=a(26);function D(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(j.a)(e);if(t){var r=Object(j.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(x.a)(this,a)}}var L,q,J=function(e){var t=e.classes,a=e.label,n=e.value,c=e.city;return r.a.createElement("span",null,r.a.createElement("span",{className:t.span},c),a,r.a.createElement("span",{className:t.span},n))},Y=function(e){return r.a.createElement(U.a,Object.assign({to:"/city"},e))},$=function(e){Object(R.a)(a,e);var t=D(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleClick=function(t){var a=e.props,n=a.monthIncome,r=a.insurance,c=a.additional;if(n&&r){t.preventDefault();var o=Object(F.b)(n,r,12,+c),i=new Array(12).fill(1).map(function(e,t){if(!t){var a=Object(F.b)(n,r,1,+c);return{tax:a.tax,income:a.income,afterTax:a.afterTax}}var o=Object(F.b)(n,r,t+1,+c),i=Object(F.b)(n,r,t,+c),s=+(o.tax-i.tax).toFixed(2),l=+n;return{tax:s,income:l,afterTax:+(l-s-+r).toFixed(2)}});e.props.history.push("/result"),e.props.switchType(1),e.props.compute(Object(M.a)({},o,{aMonthTax:i,insurance:r,additional:12*+c}))}},e.handleMonthCal=function(t){var a=e.props,n=a.monthInput,r=n.month,c=n.data,o=a.compute,i=c[r],s=i.monthIncome,l=i.insurance,u=i.additional,d=[];if(!r){var m=Object(F.b)(s,l,1,+u),h=m.tax,f=m.income,p=m.afterTax;return d=[{tax:h,income:f,afterTax:p}],o(Object(M.a)({},m,{aMonthTax:d,insurance:l,additional:u})),e.props.history.push("/result"),void e.props.switchType(1)}var I=0,v=0,b=0;c.some(function(e,t){return t===r+1||(I+=+e.monthIncome,v+=+e.insurance,b+=+e.additional,!1)});for(var y=function(e){if(0===e){var t=Object(F.b)(c[0].monthIncome,c[0].insurance,1,+c[0].additional),a=t.tax,n=t.income,r=t.afterTax,o=t.totalInsurance;return d.push({tax:a,income:n,afterTax:r,insurance:o}),"continue"}var i=0,s=0,l=0,u=0,m=0,h=0;c.some(function(t,a){return a===e+1||(i+=+t.monthIncome,s+=+t.insurance,l+=+t.additional,!1)}),c.some(function(t,a){return a===e||(u+=+t.monthIncome,m+=+t.insurance,h+=+t.additional,!1)});var f=Object(F.b)(i,s,1,l,5e3*(e+1)),p=Object(F.b)(u,m,1,h,5e3*e),I=+c[e].monthIncome?+(f.tax-p.tax).toFixed(2):0,v=+c[e].monthIncome,b=+(v-I-+c[e].insurance).toFixed(2);d.push({tax:I,income:v,afterTax:b,insurance:c[e].insurance})},g=0;g<r+1;g++)y(g);var C=Object(F.b)(I,v,1,b,5e3*(r+1));o(Object(M.a)({},C,{aMonthTax:d,insurance:v,additional:b})),e.props.history.push("/result"),e.props.switchType(1)},e.handleChange=function(t){return function(a){var n,r=e.props,c=r.cityIdx,o=r.writeInput,i=r.writeMonthInput,s=r.selectMonth,l=r.IBase,u=r.HACBase,d=r.HACRate,m=r.checkProvident,h=r.mode,f=r.monthInput,p=f.month,I=f.data[p],v=I.IBase,b=I.HACBase,y=I.checkProvident,g=I.HACRate,C=_.c[c],E=C.IBases,B=C.HACBases;if("checkProvident"===t){var O=a.target.checked;return n=Object(F.c)(h?v:l,h?b:u,c,O,h?g:d),void(h?i({checkProvident:O,insurance:n}):o({checkProvident:O,insurance:n}))}if("mode"!==t){var R=a.target.value;if("month"!==t){if("monthIncome"===t){var x=Object(N.a)(R,E),j=Object(N.a)(R,B);return n=Object(F.c)(x,j,c,m,d),void(h?i(Object(A.a)({IBase:x,HACBase:j,insurance:n},t,R)):o(Object(A.a)({IBase:x,HACBase:j,insurance:n},t,R)))}if("HACRate"===t)return n=Object(F.c)(h?v:l,h?b:u,c,h?y:m,R),void(h?i(Object(A.a)({insurance:n},t,R)):o(Object(A.a)({insurance:n},t,R)));h?i(Object(A.a)({},t,R)):o(Object(A.a)({},t,R))}else s(R)}else{var w=a.target.checked;o(Object(A.a)({},t,w))}}},e.handleBlur=function(t){return function(a){var n,r,c=e.props,o=c.cityIdx,i=c.HACBase,s=c.checkProvident,l=c.HACRate,u=c.IBase,d=c.writeInput,m=c.writeMonthInput,h=c.mode,f=c.monthInput,p=f.month,I=f.data,v=_.c[o],b=v.IBases,y=v.HACBases,g=I[p],C=g.IBase,E=g.HACBase,B=g.checkProvident,O=g.HACRate,R=Object(N.a)(h?"IBase"===t?C:E:e.props[t],"IBase"===t?b:y),x="IBase"===t?Object(F.c)(R,h?E:i,o,h?B:s,h?O:l):Object(F.c)(h?C:u,R,o,h?B:s,h?O:l);h?m((n={},Object(A.a)(n,t,R),Object(A.a)(n,"insurance",x),n)):d((r={},Object(A.a)(r,t,R),Object(A.a)(r,"insurance",x),r))}},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.mode,n=e.cityIdx,c=e.monthIncome,o=e.insurance,i=e.IBase,s=e.HACBase,l=e.additional,u=e.checkProvident,d=e.HACRate,m=e.monthInput,h=m.month,f=m.data,p=e.nextMonth,I=e.copy,v=f[h],b=v.monthIncome,y=v.insurance,g=v.IBase,C=v.HACBase,E=v.checkProvident,B=v.HACRate,O=v.additional,R=_.c[n],x=R.city,j=R.IBases,A=R.HACBases;return r.a.createElement(w.i,{container:!0,spacing:24,component:"form",onSubmit:this.handleClick},r.a.createElement(w.i,{item:!0,xs:12},r.a.createElement(w.b,{size:"small",variant:"contained",fullWidth:!0,classes:{label:t.btnLabel},component:Y},r.a.createElement(W.d,{color:"inherit"}),x)),r.a.createElement(w.i,{item:!0,xs:12,md:6},r.a.createElement(w.h,{control:r.a.createElement(w.u,{color:"primary",checked:a,onChange:this.handleChange("mode")}),label:"\u6708\u5ea6\u6a21\u5f0f",labelPlacement:"start"})),a&&r.a.createElement(w.i,{item:!0,xs:12,md:6},r.a.createElement(w.g,{fullWidth:!0},r.a.createElement(w.k,{htmlFor:"month"},"\u9009\u62e9\u6708\u4efd"),r.a.createElement(w.s,{inputProps:{name:"month",id:"month"},value:h,onChange:this.handleChange("month")},new Array(12).fill("").map(function(e,t){return r.a.createElement(w.o,{value:t,key:t},"".concat(t+1,"\u6708"))})))),r.a.createElement(w.i,{item:!0,xs:12,md:6},r.a.createElement(w.C,{required:!0,id:"monthIncome",label:"\u6708\u6536\u5165(\u5143)",fullWidth:!0,type:"tel",value:a?b:c,onChange:this.handleChange("monthIncome")})),r.a.createElement(w.i,{item:!0,xs:12,md:6},r.a.createElement(w.C,{required:!0,id:"insurance",label:"\u4e94\u9669\u4e00\u91d1(\u5143)",fullWidth:!0,helperText:"*\u6839\u636e\u7f34\u7eb3\u57fa\u6570\u8ba1\u7b97\uff0c\u53ef\u624b\u52a8\u4fee\u6539",type:"tel",value:a?y:o,onChange:this.handleChange("insurance")})),r.a.createElement(w.i,{item:!0,xs:12,md:6},r.a.createElement(w.C,{id:"IBase",label:"\u793e\u4fdd\u7f34\u7eb3\u57fa\u6570(\u5143)",value:a?g:i,fullWidth:!0,helperText:r.a.createElement(J,{classes:t,city:x,label:"\u793e\u4fdd\u7f34\u7eb3\u57fa\u6570\u8303\u56f4\uff1a",value:"".concat(j[0],"-").concat(j[1])}),type:"tel",onChange:this.handleChange("IBase"),onBlur:this.handleBlur("IBase")})),r.a.createElement(w.i,{item:!0,xs:12,md:6},r.a.createElement(w.C,{id:"HACBase",label:"\u516c\u79ef\u91d1\u7f34\u7eb3\u57fa\u6570(\u5143)",value:a?C:s,onChange:this.handleChange("HACBase"),onBlur:this.handleBlur("HACBase"),fullWidth:!0,disabled:a?!E:!u,helperText:r.a.createElement(J,{classes:t,city:x,label:"\u516c\u79ef\u91d1\u7f34\u7eb3\u57fa\u6570\u8303\u56f4\uff1a",value:"".concat(A[0],"-").concat(A[1])}),type:"tel"})),r.a.createElement(w.i,{item:!0,xs:12,md:6},r.a.createElement(w.C,{id:"additional",label:"\u4e13\u9879\u9644\u52a0\u6263\u9664(\u5143/\u6708)",value:a?O:l,onChange:this.handleChange("additional"),fullWidth:!0,type:"tel",helperText:"*\u4e13\u9879\u9644\u52a0\u6263\u9664\u8bf7\u5728\u4e2a\u4eba\u6240\u5f97\u7a0eAPP\u4e2d\u7533\u62a5\u67e5\u770b"})),r.a.createElement(w.i,{item:!0,xs:12,md:6},r.a.createElement(w.h,{control:r.a.createElement(w.c,{value:"checkProvident",checked:a?E:u,onChange:this.handleChange("checkProvident")}),label:"\u6c47\u7f34\u4f4f\u623f\u516c\u79ef\u91d1"}),r.a.createElement(w.g,{className:t.formControl,disabled:!u},r.a.createElement(w.k,{htmlFor:"HACRate"},"\u6bd4\u4f8b"),r.a.createElement(w.s,{value:a?B:d,onChange:this.handleChange("HACRate"),inputProps:{name:"HACRate",id:"HACRate"}},_.b.map(function(e){return r.a.createElement(w.o,{value:e[0],key:e[1]},e[1])})))),a&&r.a.createElement(r.a.Fragment,null,!!h&&r.a.createElement(w.i,{item:!0,xs:12,md:4},r.a.createElement(w.b,{variant:"contained",fullWidth:!0,onClick:I},"\u590d\u5236\u4e0a\u6708\u6570\u636e")),11!==h&&r.a.createElement(w.i,{item:!0,xs:12,md:4},r.a.createElement(w.b,{variant:"contained",fullWidth:!0,color:"secondary",onClick:p},"\u4e0b\u4e2a\u6708")),r.a.createElement(w.i,{item:!0,xs:12,md:4},r.a.createElement(w.b,{variant:"contained",fullWidth:!0,color:"primary",onClick:this.handleMonthCal},"\u67e5\u770b\u672c\u6708\u4e2a\u7a0e"))),!a&&r.a.createElement(w.i,{item:!0,xs:12,md:4},r.a.createElement(w.b,{variant:"contained",fullWidth:!0,color:"primary",type:"submit"},"\u8ba1\u7b97")))}}]),a}(n.Component),z=Object(s.withStyles)(function(e){return{span:{color:P.a[500]},btnLabel:{justifyContent:"flex-start"},formControl:{marginLeft:e.spacing.unit}}})($),X=function(e){return function(t){t({type:"COMPUTE",payload:e}),localStorage.setItem("result",JSON.stringify(e))}},G=function(e){return function(t){t({type:"SWITCH_TYPE",payload:e}),localStorage.setItem("type",e)}},Q=(L={},Object(A.a)(L,"COMPUTE",function(e,t){return Object(M.a)({},e,{result:t.payload})}),Object(A.a)(L,"SWITCH_TYPE",function(e,t){return Object(M.a)({},e,{type:t.payload})}),L),V={type:+localStorage.getItem("type")||1,result:JSON.parse(localStorage.getItem("result"))||{aMonthTax:[]}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,a=Q[t.type];return a?a(e,t):e},Z=a(70),ee=a(54),te=a.n(ee),ae=(q={},Object(A.a)(q,"WRITE_MONTH_INPUT",function(e,t){return te.a.$merge(e,["data",e.month],t.payload)}),Object(A.a)(q,"SELECT_MONTH",function(e,t){return te.a.$set(e,"month",t.payload)}),Object(A.a)(q,"NEXT_MONTH",function(e){return te.a.$set(e,"month",e.month+1)}),Object(A.a)(q,"COPY",function(e){return te.a.$merge(e,["data",e.month],e.data[e.month-1])}),q),ne=+localStorage.getItem("cityIdx")||0,re={month:+localStorage.getItem("month")||0,data:JSON.parse(localStorage.getItem("data"))||new Array(12).fill({monthIncome:"",insurance:"",IBase:"",HACBase:"",additional:"",checkProvident:!0,HACRate:_.c[ne].HACRates[0]})},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0,a=ae[t.type];return a?a(e,t):e},oe={compute:X,switchType:G,writeInput:Z.d,writeMonthInput:function(e){return function(t,a){t(function(e){return{type:"WRITE_MONTH_INPUT",payload:e}}(e)),localStorage.setItem("data",JSON.stringify(a().monthInput.data))}},selectMonth:function(e){return function(t){t(function(e){return{type:"SELECT_MONTH",payload:e}}(e)),localStorage.setItem("month",e)}},nextMonth:function(){return function(e,t){e({type:"NEXT_MONTH"}),localStorage.setItem("month",t().monthInput.month)}},copy:function(){return function(e,t){e({type:"COPY"}),localStorage.setItem("data",JSON.stringify(t().monthInput.data))}}},ie=Object(k.a)(Object(E.b)(function(e){return Object(M.a)({},e.input,{monthInput:e.monthInput,result:e.calc.result})},oe)(z));function se(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(j.a)(e);if(t){var r=Object(j.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(x.a)(this,a)}}var le={forward:"\u5e94\u53d1\u5e74\u7ec8\u5956(\u5143)",reverse:"\u7a0e\u540e\u6240\u5f97(\u5143)"},ue=function(e){Object(R.a)(a,e);var t=se(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={mode:"forward",bonus:""},e.handleChange=function(t){return function(a){e.setState(Object(A.a)({},t,a.target.value))}},e.handleClick=function(t){var a=e.state,n=a.bonus,r=a.mode;n&&(t.preventDefault(),e.props.history.push("/result"),e.props.switchType(2),e.props.compute(Object(F.a)(+n,"forward"===r)))},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this.state,t=e.mode,a=e.bonus;return r.a.createElement(w.i,{container:!0,spacing:24,component:"form",justify:"flex-end"},r.a.createElement(w.i,{item:!0,xs:12},r.a.createElement(w.r,{name:"mode",value:this.state.mode,onChange:this.handleChange("mode"),row:!0},r.a.createElement(w.h,{value:"forward",control:r.a.createElement(w.q,null),label:"\u6b63\u7b97\u7a0e\u540e"}),r.a.createElement(w.h,{value:"reverse",control:r.a.createElement(w.q,null),label:"\u53cd\u63a8\u7a0e\u524d"}))),r.a.createElement(w.i,{item:!0,xs:12},r.a.createElement(w.C,{required:!0,id:"bonus",label:le[t],fullWidth:!0,type:"tel",value:a,onChange:this.handleChange("bonus")})),r.a.createElement(w.i,{item:!0,xs:12,md:4},r.a.createElement(w.b,{variant:"contained",fullWidth:!0,color:"primary",type:"submit",onClick:this.handleClick},"\u8ba1\u7b97")))}}]),a}(n.Component),de=Object(s.withStyles)(function(e){return{}})(ue),me={compute:X,switchType:G},he=Object(k.a)(Object(E.b)(function(e){return{}},me)(de));function fe(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(j.a)(e);if(t){var r=Object(j.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(x.a)(this,a)}}var pe=function(e){Object(R.a)(a,e);var t=fe(a);function a(){var e;Object(B.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:0},e.handleChange=function(t,a){e.setState({value:a})},e.handleChangeIndex=function(t){e.setState({value:t})},e}return Object(O.a)(a,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,n=e.matchesDwonSm;return r.a.createElement("div",{className:t.root},r.a.createElement(w.a,{position:"static",color:"default"},r.a.createElement(w.B,{value:this.state.value,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:n?"fullWidth":"standard"},r.a.createElement(w.v,{label:"\u5e74\u5ea6\u4e2a\u7a0e"}),r.a.createElement(w.v,{label:"\u5e74\u7ec8\u5956"}))),r.a.createElement(T.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:this.state.value,onChangeIndex:this.handleChangeIndex},r.a.createElement("main",{className:t.layout},r.a.createElement(w.p,{className:t.paper,elevation:2},r.a.createElement(ie,null))),r.a.createElement("main",{className:t.layout},r.a.createElement(w.p,{className:t.paper,elevation:2},r.a.createElement(he,null)))))}}]),a}(n.Component),Ie=Object(s.withStyles)(function(e){return{root:{flexGrow:1},layout:Object(A.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:Object(A.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:6*e.spacing.unit,marginBottom:6*e.spacing.unit,padding:3*e.spacing.unit})}},{withTheme:!0})(pe);function ve(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(j.a)(e);if(t){var r=Object(j.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(x.a)(this,a)}}var be=function(e){Object(R.a)(a,e);var t=ve(a);function a(){return Object(B.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.Component),ye=Object(k.a)(be),ge=a(37),Ce=a(176),Ee=function(e){return Object(ge.c)(Object(M.a)({calc:K,input:Z.a,monthInput:ce},e))},Be=Ee,Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[Ce.a],a=ge.d;var n=Object(ge.e)(Be(),e,a.apply(void 0,[ge.a.apply(void 0,t)].concat([])));return n.asyncReducers={},n}(),Re=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,5643))}),xe=Object(n.lazy)(function(){return a.e(4).then(a.bind(null,5644))});var je=Object(s.withTheme)()(function(e){var t=e.theme,a=Object(i.unstable_useMediaQuery)(t.breakpoints.down("sm"));return r.a.createElement(y.a,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},r.a.createElement(g.a,{exact:!0,path:"/",render:function(e){return r.a.createElement(Ie,Object.assign({},e,{matchesDwonSm:a}))}}),r.a.createElement(g.a,{path:"/result",render:function(e){return r.a.createElement(Re,e)}}),r.a.createElement(g.a,{path:"/city",render:function(e){return r.a.createElement(xe,e)}})))}),Ae=Object(s.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:f.a,secondary:I.a,error:b.a,contrastThreshold:3,tonalOffset:.2}});function we(){return r.a.createElement(s.MuiThemeProvider,{theme:Ae},r.a.createElement(u.a,null),r.a.createElement(E.a,{store:Oe},r.a.createElement(C.a,{basename:"/personal-income-tax-calculator/"},r.a.createElement(ye,null,r.a.createElement(je,null)))))}a(5633);var He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(r.a.createElement(we,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/personal-income-tax-calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/personal-income-tax-calculator","/service-worker.js");He?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Te(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):Te(t,e)})}}()},70:function(e,t,a){"use strict";a.d(t,"c",function(){return i}),a.d(t,"b",function(){return s}),a.d(t,"d",function(){return l});var n,r=a(11),c=a(21),o=a(26),i=function(e){return{type:"WRITE_INPUT",payload:e}},s=function(e){return function(t,a){t(function(e){return{type:"SWITCH_CITY",payload:e}}(e)),localStorage.setItem("cityIdx",e)}},l=function(e){return function(t,a){t(i(e)),localStorage.setItem("mode",a().input.mode)}},u=(n={},Object(r.a)(n,"WRITE_INPUT",function(e,t){return Object(c.a)({},e,t.payload)}),Object(r.a)(n,"SWITCH_CITY",function(e,t){return Object(c.a)({},e,{cityIdx:t.payload})}),n),d=+localStorage.getItem("cityIdx")||0,m="true"===localStorage.getItem("mode")||!1,h={monthIncome:"",insurance:"",IBase:"",HACBase:"",additional:"",checkProvident:!0,HACRate:o.c[d].HACRates[0],cityIdx:d,mode:m};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=u[t.type];return a?a(e,t):e}}},[[5453,1,2]]]);