(window.webpackJsonp=window.webpackJsonp||[]).push([[5,6,7,8,9,10],{245:function(t,e,n){"use strict";n.r(e);var l=n(246),o=n.n(l);for(var r in l)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return l[t]}))}(r);e.default=o.a},246:function(t,e){},249:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{selectedFonts:this.$store.state.parameter.font.fontFamily,optionFonts:[{id:1,name:"Inter"},{id:2,name:"Hachi Maru Pop"},{id:3,name:"Potta One"}]}},methods:{changeFontFamily:function(t){this.$store.commit("parameter/changeFontFamily",t.target.value)}}},o=n(44),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex text-left"},[n("div",{staticClass:"w-full lg:w-1/2"},[t._v("Font Family")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFonts,expression:"selectedFonts"}],staticClass:"w-full lg:w-1/2",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedFonts=e.target.multiple?n:n[0]},t.changeFontFamily]}},t._l(t.optionFonts,(function(e){return n("option",{key:e.id,domProps:{value:e.name}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{selectedFonts:this.$store.state.parameter.font.fontSize,optionFonts:[{id:1,name:"16px"},{id:2,name:"32px"},{id:3,name:"48px"}]}},methods:{changeFontSize:function(t){this.$store.commit("parameter/changeFontSize",t.target.value)}}},o=n(44),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex text-left"},[n("div",{staticClass:"w-full lg:w-1/2"},[t._v("Font Size")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFonts,expression:"selectedFonts"}],staticClass:"w-full lg:w-1/2",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedFonts=e.target.multiple?n:n[0]},t.changeFontSize]}},t._l(t.optionFonts,(function(e){return n("option",{key:e.id,domProps:{value:e.name}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports},251:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{selectedFonts:this.$store.state.parameter.font.color,optionFonts:[{id:1,name:"white"},{id:2,name:"blue"},{id:3,name:"gray"}]}},methods:{changeFontColor:function(t){this.$store.commit("parameter/changeFontColor",t.target.value)}}},o=n(44),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex text-left"},[n("div",{staticClass:"w-full lg:w-1/2"},[t._v("Font Color")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFonts,expression:"selectedFonts"}],staticClass:"w-full lg:w-1/2",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedFonts=e.target.multiple?n:n[0]},t.changeFontColor]}},t._l(t.optionFonts,(function(e){return n("option",{key:e.id,domProps:{value:e.name}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{selectedFonts:this.$store.state.parameter.font.TextStrokeWidth,optionFonts:[{id:1,name:"1px"},{id:2,name:"3px"},{id:3,name:"6px"}]}},methods:{changeTextStrokeWidth:function(t){this.$store.commit("parameter/changeTextStrokeWidth",t.target.value)}}},o=n(44),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex text-left"},[n("div",{staticClass:"w-full lg:w-1/2"},[t._v("Text Stroke Width")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFonts,expression:"selectedFonts"}],staticClass:"w-full lg:w-1/2",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedFonts=e.target.multiple?n:n[0]},t.changeTextStrokeWidth]}},t._l(t.optionFonts,(function(e){return n("option",{key:e.id,domProps:{value:e.name}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports},253:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{selectedFonts:this.$store.state.parameter.font.TextStrokeColor,optionFonts:[{id:1,name:"white"},{id:2,name:"blue"},{id:3,name:"gray"}]}},methods:{changeTextStrokeColor:function(t){this.$store.commit("parameter/changeTextStrokeColor",t.target.value)}}},o=n(44),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("label",{staticClass:"flex text-left"},[n("div",{staticClass:"w-full lg:w-1/2"},[t._v("Text Stroke Color")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFonts,expression:"selectedFonts"}],staticClass:"w-full lg:w-1/2",on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedFonts=e.target.multiple?n:n[0]},t.changeTextStrokeColor]}},t._l(t.optionFonts,(function(e){return n("option",{key:e.id,domProps:{value:e.name}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),0)])])}),[],!1,null,null,null);e.default=component.exports},256:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return o}));var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"text-gray-700"},[n("li",{staticClass:"justify-between my-3 items-center"},[n("ParametersFontFamily")],1),t._v(" "),n("li",{staticClass:"justify-between my-3 items-center"},[n("ParametersFontSize")],1),t._v(" "),n("li",{staticClass:"justify-between my-3 items-center"},[n("ParametersFontColor")],1),t._v(" "),n("li",{staticClass:"justify-between my-3 items-center"},[n("ParametersTextStrokeWidth")],1),t._v(" "),n("li",{staticClass:"justify-between my-3 items-center"},[n("ParametersTextStrokeColor")],1)])])},o=[]},257:function(t,e,n){"use strict";n.r(e);var l=n(256),o=n(245);for(var r in o)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(r);var c=n(44),component=Object(c.a)(o.default,l.a,l.b,!1,null,null,null);e.default=component.exports,installComponents(component,{ParametersFontFamily:n(249).default,ParametersFontSize:n(250).default,ParametersFontColor:n(251).default,ParametersTextStrokeWidth:n(252).default,ParametersTextStrokeColor:n(253).default})}}]);