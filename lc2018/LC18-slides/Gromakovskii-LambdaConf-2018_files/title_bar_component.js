define(["require","exports","tslib","esignature_prototype/data/selectors","react","external/react-redux","modules/clean/filepath","modules/clean/react/css_timing","modules/clean/file_store/utils","spectrum/file_icon","modules/clean/react/title_bar/base","modules/clean/react/file_viewer/title_bar/controls","modules/clean/react/file_viewer/title_bar/title","modules/clean/react/file_viewer/title_bar/title_breadcrumb","modules/constants/python","modules/core/i18n","external/classnames"],function(e,i,t,s,n,o,l,r,a,d,u,c,f,p,m,g,h){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),n=t.__importDefault(n),m=t.__importStar(m),h=t.__importDefault(h);var S=(function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i.isSharedFile=function(){return!!i.props.sharedLinkInfo},i.isMountedFile=function(){return!i.isSharedFile()},i.closeButtonTitle=function(){if(i.isMountedFile()){var e=void 0;if(i.props.isVersionHistoryMode)e=g._("Version history");else if(i.props.fileViewOrigin===m.FileViewOriginType.RECENTS)e=g._("Recents");else if(i.props.fileViewOrigin===m.FileViewOriginType.HOME)e=g._("Home");else{if(i.props.fileViewOrigin===m.FileViewOriginType.PHOTOS||i.props.fileViewAction===m.FileViewActionType.SEARCH)return g._("Close");var t=i.props.file;a.isBrowseFile(t)&&t.fq_path&&(e=l.filename(l.parent_dir(t.fq_path)))}if(e)return g._("Back to %(folder)s").format({folder:e})}return g._("Close")},i}return t.__extends(i,e),i.prototype.componentDidMount=function(){var e=this.props.onMount;e&&e()},i.prototype.render=function(){var e=this.props,i=e.canClose,t=e.canRestoreRevision,s=e.closeUrl,o=e.file,l=e.fileSubpath,r=e.hidePageChrome,m=e.isSeenStatesEnabled,g=e.isVersionHistoryMode,S=e.isViewingFileSubpath,_=e.maxFilenameEmLength,F=e.onClose,M=e.onRestoreRevision,C=e.sharedLinkInfo,b=e.sharePermission,v=e.shareToken,y=e.sizeClass,w=e.user,V=e.isSigningMode,T=e.isSendForSignatureMode,E=e.areAllFieldsCompleted,R=C?C.ownerTeamLogo:void 0,k=r?n.default.createElement("div",{className:"file-icon"},n.default.createElement(d.FileIcon,{path:a.getFilename(o)})):null,A=!(!b||0!==b.canViewMetadataRoles.length);return n.default.createElement(u.TitleBarBase,{canClose:i&&!r,className:h.default({"esignature-title-bar":T||V,"esignature-title-bar-complete":E}),closeTitle:this.closeButtonTitle(),customLogoUrl:R,file:o,isSigningMode:V,isSendForSignatureMode:T,areAllFieldsCompleted:E,closeUrl:s,onClose:F,overrideIcon:k,shouldShowIcon:!S,sizeClass:y,title:E?void 0:S?n.default.createElement(p.TitleBreadcrumb,{file:o,fileSubpath:l,sizeClass:y}):n.default.createElement(f.Title,{file:o,maxFilenameEmLength:_,sharedLinkInfo:C,shouldDisplayStarred:!r,shouldDisplayMetadata:!r,sizeClass:y,user:w}),controls:[r||V||T?null:n.default.createElement(c.SeenStates,{key:"seen-states",file:o,isSeenStatesEnabled:m,isVersionHistoryMode:g,isViewingFileSubpath:S,isViewMetadataDisabled:A,sharedLinkInfo:C,user:w,sizeClass:y}),r?null:n.default.createElement(c.FileActions,{key:"file-actions",canRestoreRevision:t,file:o,isSharedFile:this.isSharedFile(),isVersionHistoryMode:g,onRestoreRevision:M,sharedLinkInfo:C,sharePermission:b,shareToken:v,shouldDisplayActionButtons:!S,sizeClass:y,user:w,isSigningMode:V,isSendForSignatureMode:T})]})},i.defaultProps={canClose:!1,canRestoreRevision:!1,isSeenStatesEnabled:!0,isVersionHistoryMode:!1,isSendForSignatureMode:!1,isSigningMode:!1},i})(n.default.Component);i._TitleBar=S;var _=function(e){return{isSendForSignatureMode:s.getIsSendForSignatureMode(e),isSigningMode:s.getIsSigningMode(e),areAllFieldsCompleted:s.getAreAllFieldsCompleted(e)}},F=o.connect(_,{})(S),M=r.requireCssWithComponent(F,["/static/css/react_title_bar-vflI9e9Dq.css"]);i.TitleBar=M});
//# sourceMappingURL=title_bar_component.min.js-vfluFhGmj.map