define(["require","exports","tslib","esignature_prototype/components/esignature_toolbar_section","esignature_prototype/constants","esignature_prototype/data/actions","esignature_prototype/data/selectors","external/keymaster","react","external/react-redux","external/classnames","jquery","external/lodash","modules/clean/analytics","modules/clean/react/previews/pdf_viewer/event_emitter","modules/clean/keycode","modules/clean/react/css_timing","modules/clean/react/file_viewer/logging","modules/clean/previews/util","modules/clean/react/file_viewer/constants","modules/clean/react/file_viewer/full_screen_helpers","modules/clean/react/file_viewer/sidebar_helpers","modules/clean/react/keyboard_binding/keyboard_binding_connector","modules/clean/react/previews/constants","modules/clean/react/previews/frame_messenger_host","modules/clean/react/previews/preview_toolbar_button","modules/clean/react/previews/preview_toolbar_page_indicator","modules/clean/react/size_class/constants","modules/core/dom","modules/core/exception","modules/core/i18n","modules/clean/react/previews/toolbar_flip_buttons"],function(e,t,o,n,r,i,s,a,l,u,p,c,d,y,g,m,h,f,T,b,w,P,v,C,_,S,K,F,E,M,B,I){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a=o.__importDefault(a),l=o.__importDefault(l),p=o.__importDefault(p),c=o.__importDefault(c),d=o.__importStar(d),T=o.__importStar(T),E=o.__importStar(E);var O={};O[m.KeyCode.ESC]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.ENTER]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.SPACE]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.PAGE_UP]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.PAGE_DOWN]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.LEFT]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.UP]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.RIGHT]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.DOWN]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.EQUALS]={altKey:!0,ctrlKey:!0,metaKey:!0},O[70]={altKey:!1,ctrlKey:!0,metaKey:!0},O[80]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.PLUS_EQUALS_FF]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.MINUS_FF]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.PLUS_EQUALS_FF_GERMAN]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.MINUS_FF_MAC]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.PLUS_CHROME]={altKey:!0,ctrlKey:!0,metaKey:!0},O[m.KeyCode.MINUS_CHROME]={altKey:!0,ctrlKey:!0,metaKey:!0};var A,N={ENABLE_REGION_CREATION:"enable-region-creation",FULLSCREEN:"fullscreen",PAGE_DOWN:"page-down",PAGE_INDICATOR:"page-indicator",PAGE_UP:"page-up",PRINT:"print",SIDEBAR:"sidebar",ZOOM_IN:"zoom-in",ZOOM_OUT:"zoom-out"},U=(Z={},Z[b.DocType.default]=[],Z[b.DocType.pdf]=[C.PreviewToolbarButtonType.Sidebar,C.PreviewToolbarButtonType.PageIndicator,C.PreviewToolbarButtonType.ZoomIn,C.PreviewToolbarButtonType.ZoomOut,C.PreviewToolbarButtonType.PageUp,C.PreviewToolbarButtonType.PageDown,C.PreviewToolbarButtonType.Fullscreen,C.PreviewToolbarButtonType.Print,C.PreviewToolbarButtonType.EnableRegionCreation],Z[b.DocType.ppt]=[C.PreviewToolbarButtonType.Sidebar,C.PreviewToolbarButtonType.PageIndicator,C.PreviewToolbarButtonType.ZoomIn,C.PreviewToolbarButtonType.ZoomOut,C.PreviewToolbarButtonType.PageUp,C.PreviewToolbarButtonType.PageDown,C.PreviewToolbarButtonType.Fullscreen,C.PreviewToolbarButtonType.Print,C.PreviewToolbarButtonType.EnableRegionCreation],Z[b.DocType.spreadsheet]=[C.PreviewToolbarButtonType.ZoomIn,C.PreviewToolbarButtonType.ZoomOut,C.PreviewToolbarButtonType.Fullscreen,C.PreviewToolbarButtonType.Print],Z[b.DocType.html]=[C.PreviewToolbarButtonType.FlipControls,C.PreviewToolbarButtonType.Fullscreen,C.PreviewToolbarButtonType.Print],Z),D=(H={},H[b.DocType.default]=[],H[b.DocType.pdf]=[C.PreviewToolbarButtonType.PageIndicator],H[b.DocType.ppt]=[C.PreviewToolbarButtonType.PageIndicator],H[b.DocType.spreadsheet]=[],H[b.DocType.html]=[],H);(function(e){e.ClearMouseTracking="clear-mouse-tracking",e.EnableRegionCreation="enable-region-creation",e.EnterFullscreen="enter-fullscreen",e.ExitViewerFullscreen="exit-viewer-fullscreen",e.PageDown="page-down",e.PageUp="page-up",e.SetCurrentPage="set-current-page",e.PreviewToolbarMounted="preview-toolbar-mounted",e.Print="print",e.ScreenDown="screen-down",e.ScreenUp="screen-up",e.ScrollDown="scroll-down",e.ScrollLeft="scroll-left",e.ScrollRight="scroll-right",e.ScrollUp="scroll-up",e.ZoomIn="zoom-in",e.ZoomOut="zoom-out"})(A||(A={}));var x=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleClick=function(){var e=t.props,o=e.isSidebarOpen,n=e.onClick,r=e.onSidebarClose,i=e.onSidebarOpen;o&&r?r():i&&i(),n&&n()},t}return o.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,o=e.isSidebarOpen;return l.default.createElement(S.PreviewToolbarButton,{className:N.SIDEBAR,disabled:t,iconName:o?"sidebar_hide":"sidebar_show",tooltip:o?B._("Hide sidebar"):B._("Show sidebar"),onClick:this.handleClick})},t})(l.default.PureComponent),k=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.previewOpen=!1,t.state={currentPage:1,visible:!1,fadingOut:!1,disabledButtons:{}},t.onPageIndicatorFocused=function(){t.setState({pageIndicatorFocused:!0})},t.onPageIndicatorBlurred=function(){t.setState({pageIndicatorFocused:!1})},t.handleMessageFromChild=function(e){var o={input_method:"child-message",file_ext:t.props.fileExtension},n={context:b.UserActionContext.Unknown};switch(e.action){case"page-change":var r=e.parameters,i=t.isToolbarReadyToShow(),s=t.sanitizePageNumber(r.current_page),a=t.sanitizePageNumber(t.props.pagesCount||r.pages_count);if(s<=0||a<=0)break;var l={pageUp:s<=1,pageDown:s>=a,print:!t.canPrint()};t.setState({currentPage:s,disabledButtons:l},function(){!i&&t.isToolbarReadyToShow()&&(t.fadeIn(),t.startIdleTimeout())});break;case"idle-mouse":t.state.hovering||t.state.pageIndicatorFocused||t.fadeOut(),y.PreviewActivityLogger.log("idle-mouse",o);break;case"active-mouse":t.fadeIn();break;case"exit-parent-fullscreen":t.setFullScreen(!1,n);break;case"keydown":t.onKeydown(e.parameters);break;case"get-keydown-keys-handled-by-parent":t.postKeysHandledByParent()}},t.onSidebarClose=function(){"function"==typeof t.props.onSidebarClose&&t.props.onSidebarClose(b.UserActionContext.Toolbar)},t.onSidebarOpen=function(){"function"==typeof t.props.onSidebarOpen&&t.props.onSidebarOpen(b.UserActionContext.Toolbar)},t.onMouseEnterToolbar=function(){t.frameMessenger.postMessageToChildren(A.ClearMouseTracking),t.setState({hovering:!0}),t.clearIdleTimeout()},t.onMouseLeaveToolbar=function(){t.setState({hovering:!1})},t.onKeydown=function(e){var o=!1;if(t.frameMessenger.childIsValidated()&&"dbmodal"!==a.default.getScope()&&!E.focus_in_input()&&!E.is_input(e.target)){if(null!=e.target){var n=c.default("#file-comments");if(1!==n.length&&(n=c.default("#photo-comments")),1===n.length&&(e.target===n[0]||c.default.contains(n[0],e.currentTarget)))return}var r={input_method:"keydown",file_ext:t.props.fileExtension,extra:JSON.stringify({keycode:e.keyCode})},i={context:b.UserActionContext.Keyboard},s=e.keyCode;return t.props.docType!==b.DocType.ppt&&[m.KeyCode.EQUALS,m.KeyCode.PLUS_EQUALS_FF,m.KeyCode.PLUS_CHROME,m.KeyCode.PLUS_EQUALS_FF_GERMAN].indexOf(s)>-1?(t.zoomIn(i),o=!0):t.props.docType!==b.DocType.ppt&&[m.KeyCode.MINUS_FF_MAC,m.KeyCode.MINUS_FF,m.KeyCode.MINUS_CHROME].indexOf(s)>-1?(t.zoomOut(i),o=!0):s===m.KeyCode.LEFT?(t.scrollLeft(r),o=!0):s===m.KeyCode.RIGHT?(t.scrollRight(r),o=!0):s===m.KeyCode.PAGE_UP?(t.props.docType===b.DocType.ppt?t.pageUp(r):t.screenUp(r),o=!0):[m.KeyCode.SPACE,m.KeyCode.PAGE_DOWN].indexOf(s)>-1?(t.props.docType===b.DocType.ppt?t.pageDown(r):t.screenDown(r),o=!0):s===m.KeyCode.UP?(t.props.docType===b.DocType.ppt?t.pageUp(r):t.scrollUp(r),o=!0):s===m.KeyCode.DOWN?(t.props.docType===b.DocType.ppt?t.pageDown(r):t.scrollDown(r),o=!0):70!==s||e.ctrlKey||e.metaKey?70===s&&(e.ctrlKey||e.metaKey)?t.searchInline(i):80===s?(t.printDocument(i),o=!0):s===m.KeyCode.ESC?(t.isViewerFullscreen()?t.exitFullscreen(i):t.props.afterFileViewerExit&&!t.isAnnotationBubbleShown()&&t.exitPreview(r),o=!0):s===m.KeyCode.ENTER&&t.state.pageIndicatorFocused===!0&&t.onPageIndicatorBlurred():(t.isViewerFullscreen()?t.exitFullscreen(i):t.enterFullscreen(i),o=!0),o&&null!=e.preventDefault&&e.preventDefault(),!o}},t.onIdleTimeout=function(){t.clearIdleTimeout(),t.fadeOut()},t.pageChange=function(e,o){t.frameMessenger.postMessageToChildren(A.SetCurrentPage,o),t.logUserAction(b.UserAction.PageChange,e.context)},t.pageUp=function(e){t.logAndPostMessage(A.PageUp,"page-up",e)},t.pageDown=function(e){t.logAndPostMessage(A.PageDown,"page-down",e)},t.screenUp=function(e){t.logAndPostMessage(A.ScreenUp,"screen-up",e)},t.screenDown=function(e){t.logAndPostMessage(A.ScreenDown,"screen-down",e)},t.scrollUp=function(e){t.logAndPostMessage(A.ScrollUp,"scroll-up",e)},t.scrollDown=function(e){t.logAndPostMessage(A.ScrollDown,"scroll-down",e)},t.scrollRight=function(e){t.logAndPostMessage(A.ScrollRight,"scroll-right",e)},t.scrollLeft=function(e){t.logAndPostMessage(A.ScrollLeft,"scroll-left",e)},t}return o.__extends(t,e),t.prototype.reset=function(){this.clearAllTimeouts(),this.setState({currentPage:0,visible:!1,fadingOut:!1,disabledButtons:{}})},t.prototype.setFullScreen=function(e,t){e?w.enterFullScreen(t.context):w.exitFullScreen(t.context)},t.prototype.isViewerFullscreen=function(){return this.props.isFullscreen||w.isBrowserFullscreen()},t.prototype.postKeysHandledByParent=function(){this.frameMessenger.postMessageToChildren("keydown-keys-handled-by-parent",{keycodes:O})},t.prototype.onPreviewOpen=function(){return!!this.previewOpen||(c.default(document).on("keydown",this.onKeydown),this.previewOpen=!0,!0)},t.prototype.onPreviewClose=function(){return!this.previewOpen||(c.default(document).off("keydown",this.onKeydown),this.reset(),this.frameMessenger.resetOriginsForPosting(),this.previewOpen=!1,!0)},t.prototype.componentDidMount=function(){this.props.frameMessenger?this.frameMessenger=this.props.frameMessenger:this.frameMessenger=new _.PreviewFrameMessengerHost,this.frameMessenger.configureChildMessaging(T.getIframeQuery(),this.handleMessageFromChild,["page-change","idle-mouse","active-mouse","exit-parent-fullscreen","keydown","child-focus","get-keydown-keys-handled-by-parent"]),this.frameMessenger.startListening(),this.postKeysHandledByParent(),this.onPreviewOpen(),this.frameMessenger.postMessageToChildren(A.PreviewToolbarMounted),this.fadeIn(),this.startIdleTimeout(),g.eventEmitter.emit("toolbar-mounted")},t.prototype.componentWillUnmount=function(){this.clearAllTimeouts(),this.onPreviewClose(),this.frameMessenger.stopListening()},t.prototype.canPrint=function(){return!(this.props.sharePermission&&this.props.sharePermission.canPrintRoles&&0===this.props.sharePermission.canPrintRoles.length)},t.prototype.showButton=function(e){var t=this.props.sizeClass===F.SizeClass.Small?D[this.props.docType]:U[this.props.docType];return this.props.isSendForSignatureMode?t=r.ESIGNATURE_SEND_FOR_SIGNATURE_MODE_TOOLBAR_CONFIGURATION:this.props.isSigningMode&&(t=r.ESIGNATURE_SIGNING_MODE_TOOLBAR_CONFIGURATION),Array.isArray(t)&&t.includes(e)},t.prototype.shouldShowToolbarFlipButtons=function(){var e=this.props,t=e.count,o=e.index;return null!=t&&null!=o&&t>1},t.prototype.render=function(){var e,t=this,o=this.props,r=o.count,i=o.docType,s=o.fileExtension,a=o.index,u=o.onClickNext,c=o.onClickPrevious,y=o.isArchiveFile,g=o.isFullscreen,m=o.isHidden,h=o.isSidebarOpen,f=o.pagesCount,T=o.shouldDisplayRegionCreationButton,w=o.sizeClass,_=i===b.DocType.ppt?B._("Previous slide"):B._("Page up"),F=i===b.DocType.ppt?B._("Next slide"):B._("Page down");e=this.canPrint()?B._("Print"):B._("Printing is turned off for this file.");var E={input_method:"click",file_ext:s},M={context:b.UserActionContext.Toolbar},O=function(e){return function(){e(),t.frameMessenger.postMessageToChildren(A.ClearMouseTracking)}};return l.default.createElement("div",{className:p.default("preview-toolbar-overlay-container",{hide:(!this.state.visible||m)&&!this.props.isSendForSignatureMode,fadeout:this.state.fadingOut&&!this.props.isSendForSignatureMode})},l.default.createElement(v.KeyboardBindingConnector,{allKeyCallback:this.onKeydown}),l.default.createElement("div",{className:"preview-toolbar-overlay",onMouseEnter:this.onMouseEnterToolbar,onMouseLeave:this.onMouseLeaveToolbar},l.default.createElement("div",{className:"preview-toolbar-content"},this.showButton(C.PreviewToolbarButtonType.FlipControls)&&this.shouldShowToolbarFlipButtons()?l.default.createElement(I.ToolbarFlipButtons,{index:a,count:r,onClickPrevious:c,onClickNext:u}):null,this.showButton(C.PreviewToolbarButtonType.Sidebar)&&P.isSidebarEnabled(i,w,g)?l.default.createElement(x,{isSidebarOpen:h,onSidebarClose:this.onSidebarClose,onSidebarOpen:this.onSidebarOpen}):null,this.showButton(C.PreviewToolbarButtonType.PageUp)?l.default.createElement(S.PreviewToolbarButton,{disabled:this.state.disabledButtons.pageUp,className:N.PAGE_UP,spriteGroup:"web",spriteName:"up",tooltip:_,onClick:O(function(){return t.pageUp(E)})}):null,this.showButton(C.PreviewToolbarButtonType.PageIndicator)?l.default.createElement(K.PageIndicator,{className:N.PAGE_INDICATOR,currentPageIndex:this.state.currentPage,focused:!!this.state.pageIndicatorFocused,pageCount:f,sizeClass:w,onPageIndicatorBlured:this.onPageIndicatorBlurred,onPageIndicatorFocused:this.onPageIndicatorFocused,onPageNumberUpdated:d.partial(this.pageChange,M)}):null,this.showButton(C.PreviewToolbarButtonType.PageDown)?l.default.createElement(S.PreviewToolbarButton,{disabled:this.state.disabledButtons.pageDown,className:N.PAGE_DOWN,spriteGroup:"web",spriteName:"down",tooltip:F,onClick:O(function(){return t.pageDown(E)})}):null,this.showButton(C.PreviewToolbarButtonType.ZoomOut)?l.default.createElement(S.PreviewToolbarButton,{className:N.ZOOM_OUT,spriteGroup:"web",spriteName:"zoomout",tooltip:B._("Zoom out"),onClick:O(function(){return t.zoomOut(M)})}):null,this.showButton(C.PreviewToolbarButtonType.ZoomIn)?l.default.createElement(S.PreviewToolbarButton,{className:N.ZOOM_IN,spriteGroup:"web",spriteName:"zoom",tooltip:B._("Zoom in"),onClick:O(function(){return t.zoomIn(M)})}):null,this.showButton(C.PreviewToolbarButtonType.Fullscreen)?l.default.createElement(S.PreviewToolbarButton,{className:N.FULLSCREEN,spriteGroup:"web",spriteName:"fullscreen",tooltip:B._("Fullscreen"),onClick:O(function(){return t.toggleFullscreen(M)})}):null,this.showButton(C.PreviewToolbarButtonType.Print)&&!y?l.default.createElement(S.PreviewToolbarButton,{disabled:!this.canPrint(),className:N.PRINT,spriteGroup:"web",spriteName:"print",tooltip:e,onClick:this.canPrint()?O(function(){return t.printDocument(M)}):function(){}}):null,this.showButton(C.PreviewToolbarButtonType.EnableRegionCreation)&&T?l.default.createElement(S.PreviewToolbarButton,{className:N.ENABLE_REGION_CREATION,spriteGroup:"web",spriteName:"ic_comment_area_large",tooltip:B._("Comment on specific areas"),onClick:O(function(){return t.onRegionCreationClick()})}):null,this.showButton(C.PreviewToolbarButtonType.Sidebar)&&this.props.isSendForSignatureMode?l.default.createElement(n.EsignatureToolbarSection,{enterFieldCreationMode:this.props.enterFieldCreationMode}):null)))},t.prototype.sanitizePageNumber=function(e){return null==e?0:isNaN(e)?0:e},t.prototype.fadeOut=function(){this.state.fadingOut||this.clearFadeTimeout(),this.setState({fadingOut:!0,tooltipClass:void 0}),this.props.onToolbarHide&&this.props.onToolbarHide(),this.startFadeTimeout()},t.prototype.fadeIn=function(){this.clearIdleTimeout(),this.isViewerFullscreen()||this.isToolbarReadyToShow()&&(this.clearFadeTimeout(),this.setState({visible:!0,fadingOut:!1}),this.props.onToolbarShow&&this.props.onToolbarShow())},t.prototype.isAnnotationBubbleShown=function(){return c.default(".annotation-bubble-container .bubble-dropdown").length>0},t.prototype.startFadeTimeout=function(){var e=this;this.fadeTimeout=setTimeout(function(){e.fadeTimeout=void 0,e.setState({visible:!1,fadingOut:!1})},400)},t.prototype.clearFadeTimeout=function(){this.fadeTimeout&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=void 0)},t.prototype.startIdleTimeout=function(){this.clearIdleTimeout(),this.idleTimeout=setTimeout(this.onIdleTimeout,1500)},t.prototype.clearIdleTimeout=function(){null!=this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=void 0)},t.prototype.clearAllTimeouts=function(){this.clearFadeTimeout(),this.clearIdleTimeout()},t.prototype.isToolbarReadyToShow=function(){return!!this.state.currentPage&&!!this.props.pagesCount},t.prototype.logData=function(e,t){return"string"==typeof t.input_method?y.PreviewActivityLogger.log(e,t):M.assert(!1,"logData not correctly formed"),"string"==typeof t.input_method},t.prototype.logUserAction=function(e,t){f.logUserAction(e,t)},t.prototype.logAndPostMessage=function(e,t,o){this.logData(t,o)&&this.frameMessenger.postMessageToChildren(e)},t.prototype.zoomIn=function(e){this.frameMessenger.postMessageToChildren(A.ZoomIn),this.logUserAction(b.UserAction.ZoomIn,e.context)},t.prototype.zoomOut=function(e){this.frameMessenger.postMessageToChildren(A.ZoomOut),this.logUserAction(b.UserAction.ZoomOut,e.context)},t.prototype.toggleFullscreen=function(e){this.isViewerFullscreen()?this.exitFullscreen(e):this.enterFullscreen(e)},t.prototype.enterFullscreen=function(e){this.setFullScreen(!0,e)},t.prototype.exitFullscreen=function(e){this.setFullScreen(!1,e)},t.prototype.exitPreview=function(e){if(this.logData("exit-preview",e))return"function"==typeof this.props.afterFileViewerExit?this.props.afterFileViewerExit():void 0},t.prototype.printDocument=function(e){this.frameMessenger.postMessageToChildren(A.Print,{context:e.context})},t.prototype.searchInline=function(e){this.logUserAction(b.UserAction.InlineSearch,e.context)},t.prototype.onRegionCreationClick=function(){this.props.onRegionCreationClick&&this.props.onRegionCreationClick()},t})(l.default.Component);t._PreviewToolbar=k;var R=function(e){return{isSendForSignatureMode:s.getIsSendForSignatureMode(e),isSigningMode:s.getIsSigningMode(e)}},L={enterFieldCreationMode:i.enterFieldCreationMode},G=u.connect(R,L)(k);G.defaultProps={isSidebarOpen:!1,docType:b.DocType.default};var z=h.requireCssWithComponent(G,["/static/css/preview_toolbar-vflxsPO3V.css"]);t.PreviewToolbar=z;var Z,H});
//# sourceMappingURL=preview_toolbar.min.js-vflV5eE0K.map