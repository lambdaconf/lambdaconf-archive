define(["require","exports","tslib","react","spectrum_comments/comment_editor/core/editor_component","spectrum_comments/comment_editor/components/sticker_component"],function(t,e,n,o,r,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n.__extends(e,t),e.prototype.render=function(){var t=this.props,e=t.block,r=t.contentState,i=r.getEntity(e.getEntityAt(0)).getData();return"sticker"===i.type?o.createElement(c.StickerComponent,n.__assign({sticker:i},this.props)):null},e})(r.EditorComponent);e.AtomicBlockComponent=i});
//# sourceMappingURL=atomic_block_component.min.js-vfl-6ZXyw.map