define(["require","exports","tslib","external/classnames","react","modules/clean/react/sprite","modules/clean/static_urls","spectrum/icon_document"],function(e,t,a,l,o,r,s,i){"use strict";function c(e){var t=e.className,a=e.disabled,c=e.iconName,n=e.onClick,m=e.spriteGroup,d=e.spriteName,u=e.spectrumIconName,p=e.tooltip;return o.default.createElement("div",{className:l.default(t,"toolbar-button-entry"),onMouseUp:n},o.default.createElement("div",{className:"toolbar-tooltip"},o.default.createElement("div",{className:"toolbar-tooltip-container"},o.default.createElement("div",{className:"toolbar-tooltip-pointer-border"})),o.default.createElement("div",{className:"toolbar-tooltip-container"},o.default.createElement("div",{className:"toolbar-tooltip-body"},p)),o.default.createElement("div",{className:"toolbar-tooltip-container"},o.default.createElement("div",{className:"toolbar-tooltip-pointer"}))),o.default.createElement("button",{className:t+"-button","aria-label":p},void 0!==c?o.default.createElement("img",{src:s.static_url("/static/images/previews/toolbar/"+c+".svg"),alt:p,className:l.default({disabled:a})}):void 0!==d?o.default.createElement(r.Sprite,{group:m,name:d,alt:p,className:l.default({disabled:a})}):o.default.createElement(i.IconDocument,{name:u})))}Object.defineProperty(t,"__esModule",{value:!0}),l=a.__importDefault(l),o=a.__importDefault(o),t.PreviewToolbarButton=c});
//# sourceMappingURL=preview_toolbar_button.min.js-vflHD6Q6j.map