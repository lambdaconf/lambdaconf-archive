define(["require","exports","tslib","react","modules/clean/react/title_bar/title_bar_title","external/classnames","esignature_prototype/utils","esignature_prototype/components/title_bar/esignature_title_bar_title"],function(e,t,l,o,i,a,r,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),o=l.__importDefault(o),a=l.__importDefault(a),t.TitleBarBase=function(e){var t=e.canClose,l=e.className,n=e.closeTitle,c=e.closeUrl,u=e.controls,d=e.customLogoUrl,_=e.file,m=e.isSigningMode,f=e.isSendForSignatureMode,g=e.areAllFieldsCompleted,p=e.onClose,S=e.overrideIcon,T=e.shouldShowIcon,b=e.sizeClass,h=e.title;return o.default.createElement("div",{className:a.default("react-title-bar",l)},g?null:o.default.createElement(i.TitleBarTitle,{canClose:!!t,closeTitle:n,closeUrl:c,customLogoUrl:d,file:_,isSigningMode:m,isSendForSignatureMode:f,onClose:p,overrideIcon:S,shouldShowIcon:T,sizeClass:b},r.shouldShowFileTitle(b,f,m)?h:null),f||m?o.default.createElement(s.EsignatureTitleBarTitle,{isSendForSignatureMode:f}):null,o.default.createElement("div",{className:"react-title-bar__action-wrap"},u))},t.TitleBarBase.defaultProps={shouldShowIcon:!0}});
//# sourceMappingURL=base.min.js-vflK3mzF7.map