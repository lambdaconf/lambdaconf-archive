define(["require","exports","tslib","react","spectrum_comments/comment_avatar","spectrum_comments/comment_editor/components/readonly_editor_container","spectrum_comments/comment_editor/components/readonly_draft_component"],function(e,t,n,r,o,a,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.author,c=e.children,s=e.annotation,i=this.props.commentAvatarComponent,d=void 0===i?o.CommentAvatar:i;return r.createElement(a.ReadonlyEditorContainer,n.__assign({},this.props),r.createElement("div",{className:"sc-comment-renderer-inner"},r.createElement("div",{className:"sc-comment-avatar"},r.createElement(d,{user:t})),c,r.createElement("div",null,r.createElement(m.ReadonlyDraftComponent,{annotation:s,readOnly:!0}))))},t})(r.Component);t.CommentRenderer=c});
//# sourceMappingURL=comment_renderer.min.js-vflrBOcG3.map