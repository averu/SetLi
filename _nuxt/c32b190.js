(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{252:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{selectedFonts:this.$store.state.parameter.font.TextStrokeWidth,optionFonts:[{id:1,name:"1px"},{id:2,name:"3px"},{id:3,name:"6px"}]}},methods:{changeTextStrokeWidth:function(e){this.$store.commit("parameter/changeTextStrokeWidth",e.target.value)}}},l=n(44),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{staticClass:"flex text-left"},[n("div",{staticClass:"w-full lg:w-1/2"},[e._v("Text Stroke Width")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFonts,expression:"selectedFonts"}],staticClass:"w-full lg:w-1/2",on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedFonts=t.target.multiple?n:n[0]},e.changeTextStrokeWidth]}},e._l(e.optionFonts,(function(t){return n("option",{key:t.id,domProps:{value:t.name}},[e._v("\n        "+e._s(t.name)+"\n      ")])})),0)])])}),[],!1,null,null,null);t.default=component.exports}}]);