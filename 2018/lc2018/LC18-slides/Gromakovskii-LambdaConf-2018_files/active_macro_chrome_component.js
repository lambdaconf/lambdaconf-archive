define(["require","exports","tslib","react","spectrum_comments/comment_editor/core/editor_component"],function(e,t,r,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(t,e),t.prototype.getPosition=function(){var e=this.props.scrollClassName,t=this.status.macro.macroRef;if(!t)return{};for(var r=t.getBoundingClientRect(),o=t.offsetParent;o&&!o.classList.contains(e);)o=o.offsetParent;if(!o)throw new Error("Couldn't find scroll element");var n=o.getBoundingClientRect();return{top:r.bottom-n.top}},t.prototype.render=function(){var e=this.status.macro,t=e.active,r=e.macroRef,n=e.isVisible;if(!(t&&t.chrome&&r&&n))return o.createElement("div",null);var i=t.chrome;return o.createElement("div",{className:"active-macro-chrome",style:this.getPosition()},o.createElement(i,null))},t})(n.EditorComponent);t.ActiveMacroChromeComponent=i});
//# sourceMappingURL=active_macro_chrome_component.min.js-vflzeItuY.map