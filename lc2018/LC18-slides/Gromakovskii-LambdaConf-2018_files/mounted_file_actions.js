define(["require","exports","tslib","react","modules/clean/react/file_viewer/logging","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/more_dropdown","modules/clean/react/file_viewer/open_button/open_button","modules/clean/react/file_viewer/share_helpers","modules/clean/react/title_bar/controls_container","modules/clean/react/user_notifications/dropdown","modules/clean/sharing/api/client","modules/clean/sharing/delete_link_modal","modules/clean/react/size_class/constants","modules/core/i18n","modules/core/browser_detection","modules/clean/react/paper/utils","modules/clean/react/paper/open_in_paper_button","modules/clean/web_timing_logger","modules/clean/react/app_actions/app_actions_menu","modules/clean/react/app_actions/app_actions_store"],function(e,t,n,a,i,o,r,s,l,c,u,p,d,h,f,_,m,C,w,S,k){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=n.__importDefault(a),l=n.__importStar(l);var I=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={linkMetadata:null},t.cancelGetSharedLinkInfo=function(){},t.handleShareClick=function(){l.share(t.props.file,t.props.user,null,"PREVIEW_PAGE"),i.logUserAction(o.UserAction.Share,o.UserActionContext.TitleBarMain)},t.removeShareLink=function(){var e=new p.ShareApiClient({userId:t.props.user.id}),n=t.state.linkMetadata,a=n.name,i=n.url;d.deleteLinkWithConfirm({client:e,contentName:a,onCancel:null,onDeleteLink:function(){return t.setState({linkMetadata:null})},url:i})},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.setupShare(this.props),this.getAppActions(this.props.file),this.setState({openInPaperButtonVariant:m.getOpenInPaperButtonVariant({file:this.props.file,user:this.props.user})})},t.prototype.componentWillUnmount=function(){this.cancelGetSharedLinkInfo()},t.prototype.componentWillReceiveProps=function(e){e.file!==this.props.file&&(this.cancelGetSharedLinkInfo(),this.setState({linkMetadata:null}),this.setupShare(e),this.getAppActions(e.file))},t.prototype.setupShare=function(e){return n.__awaiter(this,void 0,void 0,function(){var t,a,i;return n.__generator(this,function(n){switch(n.label){case 0:return t=!1,this.cancelGetSharedLinkInfo=function(){t=!0},a=new p.ShareApiClient({userId:e.user.id}),[4,a.sharedLinkInfo({fileIdOrPath:e.file.fq_path})];case 1:return i=n.sent(),t||this.setState({linkMetadata:i}),this.cancelGetSharedLinkInfo=function(){},[2]}})})},t.prototype.getAppActions=function(e){return n.__awaiter(this,void 0,void 0,function(){var t;return n.__generator(this,function(n){switch(n.label){case 0:return[4,w.waitForTTI()];case 1:return n.sent(),[4,k.getAppActionsStore().getActionsForFile(e,this.props.user.id)];case 2:return t=n.sent(),this.setState({actionCategories:t}),[2]}})})},t.prototype.logUserActionInTitleBarFactory=function(e){return function(){return i.logUserAction(e,o.UserActionContext.TitleBarMain)}},t.prototype.render=function(){var e=!!this.state.linkMetadata&&this.state.linkMetadata.link_permissions.can_revoke,t=this.props,i=t.file,l=t.sizeClass,p=t.shouldDisplayActionButtons,d=t.user,w=l===h.SizeClass.Small,k={allowRemoveLink:e,isPrivate:!0,file:i,onClickShareLink:this.handleShareClick,onRemoveShareLink:this.removeShareLink,sizeClass:l,user:d,showOpenInPaper:this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Ellipsis&&!w};if(l!==h.SizeClass.Large){var I=null;return p&&!_.is_mobile_or_tablet()&&l!==h.SizeClass.Small&&(I=this.state.actionCategories?a.default.createElement("div",{className:"control__button"},a.default.createElement(S.AppActionsMenu,{file:i,actionCategories:this.state.actionCategories,user:d,showAsButtonIfDownloadOnly:!0,hasOpenInPaperSupport:this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Dropdown,telemetryContext:{surface:"previews"},showEduTooltip:!0})):a.default.createElement(s.OpenButton,{file:i,location:o.FileViewerPane.TitleBar,user:d})),a.default.createElement(c.TitleBarControlsContainer,null,I,a.default.createElement(r.MoreDropdown,n.__assign({},k)))}var g;return p&&(g=[a.default.createElement("button",{className:"share-button button-primary control__button",onClick:this.handleShareClick,key:0},f._("Share"))],this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Button&&g.push(a.default.createElement(C.OpenInPaperButton,{key:"openinpaper",file:i,user:d,hideCallout:!1})),this.state.actionCategories?g.push(a.default.createElement("div",{className:"control__button"},a.default.createElement(S.AppActionsMenu,{file:i,actionCategories:this.state.actionCategories,user:d,showAsButtonIfDownloadOnly:!0,hasOpenInPaperSupport:this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Dropdown,telemetryContext:{surface:"previews"},showEduTooltip:!0}))):g.push(a.default.createElement(s.OpenButton,{file:i,location:o.FileViewerPane.TitleBar,user:d,key:2,sizeClass:this.props.sizeClass,hasOpenInPaperSupport:this.state.openInPaperButtonVariant===m.OpenInPaperButtonVariant.Dropdown}))),a.default.createElement(c.TitleBarControlsContainer,null,g,a.default.createElement(r.MoreDropdown,n.__assign({},k)),a.default.createElement("div",{className:"react-title-bar__divider"}),a.default.createElement(u.UserNotificationsDropdown,{isPagelet:!1,onClick:this.logUserActionInTitleBarFactory(o.UserAction.ClickNotifications)}))},t})(a.default.Component);t.MountedFileActions=I});
//# sourceMappingURL=mounted_file_actions.min.js-vflVEJDD8.map