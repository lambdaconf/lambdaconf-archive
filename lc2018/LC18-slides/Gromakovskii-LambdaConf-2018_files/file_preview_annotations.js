define(["require","exports","tslib","external/lodash","modules/clean/annotations/annotation","modules/clean/comments/revisions","modules/clean/comments/store","modules/clean/comments/utils","modules/clean/keycode","modules/clean/react/file_comments/logger","modules/constants/comments_panel","modules/core/exception"],function(t,n,e,o,i,a,r,s,l,c,h,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),o=e.__importStar(o),a=e.__importStar(a),r=e.__importDefault(r),s=e.__importStar(s),c=e.__importDefault(c),h=e.__importStar(h);var d=["annotation-hidden","annotation-placed","annotation-start-drag","annotation-end-drag","page-rendered","annotation-ui-click","annotation-ui-enter","annotation-ui-leave","annotation-enter","annotation-leave","scale-change","scroll","on-keydown","reset-file-feedback-ui","mouse-up"],v=function(t){return t=t.replace(/(\-\w)/g,function(t){return t[1].toUpperCase()}),t.slice(0,1).toUpperCase()+t.slice(1)},A=h.ALLOW_ANNOTATION_GHOST,p=(function(){function t(t){var n=t.prevState,e=t.state,o=t.interfaceController,i=t.actionCreators;this.onStateChange=this.onStateChange.bind(this),this.onAnnotationHidden=this.onAnnotationHidden.bind(this),this.onAnnotationPlaced=this.onAnnotationPlaced.bind(this),this.onAnnotationStartDrag=this.onAnnotationStartDrag.bind(this),this.onAnnotationEndDrag=this.onAnnotationEndDrag.bind(this),this.onAnnotationUiClick=this.onAnnotationUiClick.bind(this),this.onAnnotationUiEnter=this.onAnnotationUiEnter.bind(this),this.onAnnotationUiLeave=this.onAnnotationUiLeave.bind(this),this.onScaleChange=this.onScaleChange.bind(this),this.onScroll=this.onScroll.bind(this),this.onOnKeydown=this.onOnKeydown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onResetFileFeedbackUi=this.onResetFileFeedbackUi.bind(this),this.prevState=n,this.state=e,this.interfaceController=o,this.actionCreators=i}return t.create=function(n){return new t({prevState:{activityKeys:[],hasEphemeral:!1},state:{ephemeralAnnotation:null,commentActivityByKey:{},canAnnotate:!1,regionCreationEnabled:!1,viewingAnnotationConversation:!1},interfaceController:null,actionCreators:n})},t.prototype.setState=function(t){return o.assignIn(this.state,t),this.performUpdateIfNecessary()},t.prototype.getStateFromStores=function(){var t,n=r.default.state.showResolvedComments;return t=s.shouldShowExistingAnnotations()?r.default.state.activity.comment_activities.filter(function(t){return t.comment.resolved,null!=(null!=t.comment.comment_metadata?t.comment.comment_metadata.annotation:void 0)}):{},{activityKey:null!=r.default.state.activity?r.default.state.activity.activity_key:void 0,actorId:r.default.state.actorId,activityContext:r.default.state.viewing.context,revision:r.default.state.viewing.revision,commentActivityByKey:o.keyBy(t,"activity_key"),ephemeralAnnotation:null!=r.default.state.createAnnotation?r.default.state.createAnnotation.annotation:void 0,canAnnotate:s.canAnnotate(),regionCreationEnabled:s.isRegionCreationEnabled(),showResolved:n,viewingAnnotationConversation:null!=r.default.state.viewAnnotation}},t.prototype.onStateChange=function(){if(null!=r.default.state.activity){var t=this.getStateFromStores();return o.isEqual(t.revision,this.state.revision)||(t=e.__assign({},t,{regionCreationEnabled:!1})),this.setState(t)}},t.prototype.mount=function(t){return u.assert(null!=t,"Interface controller must not be null"),u.assert(!this.isMounted(),"FilePreviewAnnotations instance is already mounted"),this.prevState={},this.interfaceController=t,this.onStateChange(r.default.state),this.unsubscribeStore=r.default.listen(this.onStateChange),this.addAnnotationEventListeners(),this.performUpdateIfNecessary()},t.prototype.unmount=function(){return u.assert(this.isMounted(),"FilePreviewAnnotations instance is not mounted"),this.unsubscribeStore(),this.disableAnnotationCreation(),this.removeAnnotationEventListeners(),this.interfaceController=null,window.clearTimeout(this.annotationBubbleTimer)},t.prototype.isMounted=function(){return null!=this.interfaceController},t.prototype.enableAnnotationCreation=function(){return this.interfaceController.dispatchEvent("enable-annotation-creation")},t.prototype.disableAnnotationCreation=function(){return this.interfaceController.dispatchEvent("disable-annotation-creation")},t.prototype.enableRegionCreation=function(){return this.interfaceController.dispatchEvent("enable-region-creation")},t.prototype.disableRegionCreation=function(){return this.interfaceController.dispatchEvent("disable-region-creation")},t.prototype.addAnnotationEventListeners=function(){var t=this;return d.forEach(function(n){var e="on"+v(n),o=t[e];if(null!=o)return t.interfaceController.addListener(n,o)})},t.prototype.removeAnnotationEventListeners=function(){var t=this;return d.forEach(function(n){var e="on"+v(n),o=t[e];if(null!=o)return t.interfaceController.removeListener(n,o)})},t.prototype.onAnnotationHidden=function(t){return this.actionCreators.stopAnnotationCreation()},t.prototype.onAnnotationPlaced=function(t){var n=i.Annotation.createAnnotationFromDict(t.annotation);return this.actionCreators.startAnnotationCreation({annotation:n}),c.default.log_annotation_event(h.FILE_ACTIVITY_LOG_EVENT_TYPE.CLIENT_ANNOTATION_PLACED,this.state.activityKey,null,this.state.actorId,this.state.activityContext,null!=t.annotation?t.annotation:void 0)},t.prototype.onAnnotationStartDrag=function(t){return this.actionCreators.hideAnnotationConversation(),this.actionCreators.hideAnnotationInput()},t.prototype.onAnnotationEndDrag=function(t){this.actionCreators.hideAnnotationConversation();var n=i.Annotation.createAnnotationFromDict(t.annotation);return this.actionCreators.startAnnotationCreation({annotation:n}),c.default.log_annotation_event(h.FILE_ACTIVITY_LOG_EVENT_TYPE.CLIENT_ANNOTATION_DRAGGED,this.state.activityKey,null,this.state.actorId,this.state.activityContext,null!=t.annotation?t.annotation:void 0)},t.prototype.onAnnotationUiClick=function(t){var n=t.commentActivity.activity_key;return this.actionCreators.revealAnnotationInPreview(n),this.actionCreators.revealCommentInPane({activityKey:n,expandConversation:!1}),c.default.log_annotation_event(h.FILE_ACTIVITY_LOG_EVENT_TYPE.CLIENT_ANNOTATION_UI_CLICKED,this.state.activityKey,null!=t.commentActivity?t.commentActivity.activity_key:void 0,this.state.actorId,this.state.activityContext)},t.prototype.onAnnotationUiEnter=function(t){if(null==this.state.ephemeralAnnotation&&(null==r.default.state.viewAnnotation||!r.default.state.viewAnnotation.replyFocused))return this.actionCreators.showAnnotationConversation({activityKey:t.commentActivity.activity_key,annotation:i.Annotation.createAnnotationFromDict(t.annotation)}),c.default.log_annotation_event(h.FILE_ACTIVITY_LOG_EVENT_TYPE.CLIENT_ANNOTATION_UI_HOVER,this.state.activityKey,null!=t.commentActivity?t.commentActivity.activity_key:void 0,this.state.actorId,this.state.activityContext)},t.prototype.onAnnotationUiLeave=function(t){var n=this;if(this.actionCreators.updateAnnotationUiHover(!1),null==this.state.ephemeralAnnotation&&(null==r.default.state.viewAnnotation||!r.default.state.viewAnnotation.replyFocused)){var e=function(){if(n.isMounted()&&!(null!=r.default.state.viewAnnotation?r.default.state.viewAnnotation.conversationHover:void 0)&&!(null!=r.default.state.viewAnnotation?r.default.state.viewAnnotation.annotationHover:void 0))return n.actionCreators.hideAnnotationConversation()};return window.setTimeout(e,50)}},t.prototype.onScaleChange=function(t){return this.actionCreators.stopAnnotationCreation(),this.actionCreators.hideAnnotationConversation()},t.prototype.onScroll=function(t){var n=this;this.actionCreators.hideAnnotationInput(),this.actionCreators.hideAnnotationConversation(),window.clearTimeout(this.annotationBubbleTimer);var e=o.partial(function(t){if(null!=(null!=t?t.annotation:void 0)){var e=i.Annotation.createAnnotationFromDict(t.annotation);return n.actionCreators.startAnnotationCreation({annotation:e})}return n.actionCreators.showAnnotationInput()},t);return this.annotationBubbleTimer=window.setTimeout(e,150)},t.prototype.onOnKeydown=function(t){if(s.normalizedKeyCode.apply(t)===l.KeyCode.ESC)return this.actionCreators.stopAnnotationCreation()},t.prototype.onMouseUp=function(t){if(null!=this.state.viewingAnnotationConversation)return this.actionCreators.hideAnnotationConversation()},t.prototype.onResetFileFeedbackUi=function(t){return this.actionCreators.stopAnnotationCreation(),this.actionCreators.hideAnnotationConversation()},t.prototype._savePrevState=function(){return this.prevState={activityKeys:Object.keys(null!=this.state.commentActivityByKey?this.state.commentActivityByKey:{}),hasEphemeral:null!=this.state.ephemeralAnnotation,canAnnotate:this.state.canAnnotate,regionCreationEnabled:this.state.regionCreationEnabled,viewingAnnotationConversation:this.state.viewingAnnotationConversation}},t.prototype._removeAnnotation=function(t){return this.interfaceController.dispatchEvent("remove-annotation",{commentActivity:{activity_key:t}})},t.prototype._updateAnnotations=function(t){for(var n=[],e=0,o=0,i=Array.from(t);o<i.length;o++){var r=i[o];if(r.comment.hasMetadata()&&r.comment.comment_metadata.hasAnnotationData()&&(e+=1,this.state.showResolved||!r.comment.resolved)){var s=r.comment.comment_metadata,l=s.annotation,c=s.revision,h=a.isRevisionEqual(this.state.revision,c);if(A||null!=c&&h){var u=A&&null!=c&&!h;n.push({annotation:l,commentActivity:r,options:{isGhostAnnotation:u,isAnnotationNumberingEnabled:!0,annotationNumber:e}})}}}return this.interfaceController.dispatchEvent("update-annotations",{annotations:n})},t.prototype.performUpdateIfNecessary=function(){if(this.isMounted()){if(o.isEmpty(this.state.commentActivityByKey))this.interfaceController.dispatchEvent("remove-all-annotations");else{o.difference(null!=this.prevState.activityKeys?this.prevState.activityKeys:[],Object.keys(this.state.commentActivityByKey)).forEach(this._removeAnnotation,this),this._updateAnnotations(o.values(this.state.commentActivityByKey))}return this.prevState.hasEphemeral&&null==this.state.ephemeralAnnotation&&this.interfaceController.dispatchEvent("hide-annotation"),this.prevState.canAnnotate!==this.state.canAnnotate&&(this.state.canAnnotate?this.enableAnnotationCreation():this.disableAnnotationCreation()),this.prevState.regionCreationEnabled!==this.state.regionCreationEnabled&&(this.state.regionCreationEnabled?this.enableRegionCreation():this.disableRegionCreation()),this.prevState.viewingAnnotationConversation!==this.state.viewingAnnotationConversation&&(this.state.viewingAnnotationConversation?this.disableRegionCreation():this.state.regionCreationEnabled&&this.enableRegionCreation()),this._savePrevState()}},t})();n.default=p});
//# sourceMappingURL=file_preview_annotations.min.js-vflTBOb1K.map