define(["require","exports","tslib","external/classnames","external/create-react-class","react","external/react-dom","external/react-dom-factories","external/prop-types","external/react-addons-pure-render-mixin","jquery","modules/clean/comments/components/ui_constants","modules/clean/comments/lib/click_outside","modules/clean/datetime","modules/clean/react/file_comments/conversation_or_input_card"],function(t,e,n,o,i,r,s,a,u,l,c,p,d,m,h){"use strict";function v(t,e){return void 0!==t&&null!==t?e(t):void 0}Object.defineProperty(e,"__esModule",{value:!0}),o=n.__importDefault(o),i=n.__importDefault(i),r=n.__importDefault(r),s=n.__importStar(s),a=n.__importStar(a),u=n.__importStar(u),l=n.__importStar(l),c=n.__importDefault(c),m=n.__importStar(m);var _=i.default({displayName:"AnnotationCommentsListUIBubble",mixins:[l],propTypes:{user:u.object,activity:u.object,x:u.number.isRequired,y:u.number.isRequired,annotation:u.object,commentActivity:u.object,position:u.string,maxHeight:u.number,replyText:u.string,onMouseEnter:u.func,onMouseLeave:u.func,onConversationExpand:u.func,actionCreators:u.object.isRequired},getDefaultProps:function(){return{maxHeight:p.DEFAULT_ANNOTATION_COMMENT_INPUT_MAX_HEIGHT}},getInitialState:function(){return{button_disabled:!0,show_post_button:!1,initial_text:""}},onConversationExpand:function(){return this._scrollToBottom(),"function"==typeof this.props.onConversationExpand?this.props.onConversationExpand():void 0},onReplyInputBlur:function(){return this.props.actionCreators.updateAnnotationReplyFocused(!1)},onReplyInputFocus:function(){return this.props.actionCreators.updateAnnotationReplyFocused(!0)},_handleOutsideClick:function(t){return this.props.actionCreators.hideAnnotationConversation()},onCancelComment:function(){return this.props.actionCreators.cancelAnnotationComment()},onAddReply:function(t,e){return this.props.actionCreators.addReply({targetActivityKey:e.activity_key,body:{text:t}})},_getReplyCommentInput:function(){return v(null!=this.refs.conversationCard?this.refs.conversationCard.refs.threadedCommentActivityUI:void 0,function(t){return t.refs.commentInput})},_getRawReplyInput:function(){return v(this._getReplyCommentInput(),function(t){return t.getRawCommentInput()})||""},_saveReplyDraft:function(){var t,e=this._getRawReplyInput();return t=e.length>0&&e!==v(this._getReplyCommentInput(),function(t){return t.getPlaceholderText()})?e:null,this.props.actionCreators.updateAnnotationReplyText({activityKey:this.props.commentActivity.activity_key,text:t})},_getRevisionDateTime:function(){var t=this._getRevision();if(null!=t.when&&!isNaN(new Date(null!=t.when)))return""+m.ago(new Date(1e3*t.when))},_getRevision:function(){return this.props.commentActivity.comment.comment_metadata.revision},_isOnOldRevision:function(){return!1},_scrollToBottom:function(){var t=s.findDOMNode(this.refs.annotationBubbleField);return c.default(t).animate({scrollTop:t.scrollHeight},{duration:300})},_renderConversation:function(){var t={ref:"threadedCommentActivityUI",key:"annotation_bubble_threaded_"+this.props.commentActivity.activity_key,activity:this.props.activity,commentActivity:this.props.commentActivity,user:this.props.user,shouldUseSimpleModals:!1,shouldHidePhotoAvatars:!1,shouldAutoLinkify:!0,shouldShowPostText:!0,onReplyInputFocus:this.onReplyInputFocus,onReplyInputBlur:this.onReplyInputBlur,replyText:this.props.replyText,onCommentExpanded:this.onConversationExpand,isInAnnotationBubble:!0,onCancelComment:this.onCancelComment,onInputChange:this._saveReplyDraft,onAddComment:this.onAddReply};return r.default.createElement(h.ConversationCard,{ref:"conversationCard",shouldInitiallyShowNotifyHint:!1,initialUsersToNotify:null!=this.props.commentActivity?this.props.commentActivity.users_to_notify:void 0,commentProps:t,actionCreators:this.props.actionCreators})},_renderComments:function(){var t={"comments-holder":!0},e={maxHeight:this.props.maxHeight};return a.div({className:"annotation-bubble__field",ref:"annotationBubbleField",style:e},this._isOnOldRevision()?a.div({className:"annotation-bubble__field__old-revision"},"On older revision, updated "+this._getRevisionDateTime()):void 0,a.div({className:o.default(t)},a.div({className:"comment-list"},this._renderConversation())))},render:function(){var t={"annotation-bubble-container":!0,"annotation-bubble-invisible-border":!0},e={left:this.props.x-25};return this.props.position.indexOf("bottom")>=0?e.bottom=this.props.y-25:e.top=this.props.y-25,r.default.createElement(d.ClickOutside,{onClickOutside:this._handleOutsideClick},a.div({onMouseOver:this.onMouseOver,onMouseLeave:this.props.onMouseLeave,onMouseEnter:this.props.onMouseEnter,className:o.default(t),style:e},a.div({className:"annotation-bubble bubble-dropdown "+this.props.position},this._renderComments(),a.div({className:"bubble-arrow-border"}),a.div({className:"bubble-arrow"}))))}});e.default=_});
//# sourceMappingURL=annotation_comments_list_ui_bubble.min.js-vflz-xktl.map