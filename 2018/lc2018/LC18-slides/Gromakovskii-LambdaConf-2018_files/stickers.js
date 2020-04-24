define(["require","exports","tslib","spectrum_comments/comment_editor/core/class_decorators","spectrum_comments/comment_editor/layers/scaffold","spectrum_comments/comment_editor/core/types","draft-js"],function(t,e,r,n,o,a,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(e,t),e.prototype.initStyle=function(t){var e=t.innerProps.evt,r=this.splitStickers(e.metadata).stickers;if(r.length){var n=r[0],o=i.ContentState.createFromText("").createEntity("sticker","IMMUTABLE",n),a=o.getLastCreatedEntityKey();return i.AtomicBlockUtils.insertAtomicBlock(i.EditorState.createWithContent(o),a,"*")}},e.prototype.postStyles=function(t){var e=t.innerProps,n=e.evt,o=e.value,a=this.getStickerMetadata(i.convertToRaw(n.getCurrentContent())),s=this.splitStickers(o.metadata).other;return r.__assign({},o,{metadata:s.concat(a)})},e.prototype.getStickerMetadata=function(t){var e=t.blocks,n=e.reduce(function(e,n){var o=e.metadata,a=e.pos,i=n.entityRanges;return{metadata:o.concat(i.filter(function(e){return"sticker"===t.entityMap[e.key].type}).map(function(e){var n=t.entityMap[e.key].data;return r.__assign({type:"sticker"},n)})),pos:a+n.text.length}},{metadata:[],pos:0}),o=n.metadata;n.pos;return o},e.prototype.splitStickers=function(t){return t.reduce(function(t,e){return"sticker"===e.type?{stickers:t.stickers.concat([e]),other:t.other}:{stickers:t.stickers,other:t.other.concat([e])}},{stickers:[],other:[]})},r.__decorate([n.plug(o.into.draft.on.init.update.editorState)],e.prototype,"initStyle",null),r.__decorate([n.plug(o.into.comment.on.post.update.content)],e.prototype,"postStyles",null),e})(a.BaseLayer);e.StickerLayer=s});
//# sourceMappingURL=stickers.min.js-vfln_OHNU.map