define(["require","exports","tslib","spectrum_comments/comment_editor/core/class_decorators","spectrum_comments/comment_editor/layers/scaffold","draft-js","spectrum_comments/comment_editor/layers/macro","spectrum_comments/comment_editor/components/mention_suggestions_list_component","spectrum_comments/comment_editor/draft_utils"],function(e,t,n,r,o,i,s,u,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=(function(e){function t(t){var n=e.call(this,{type:"macro: @",delimiter:"@",spanProps:{className:"active-mention"}})||this;return n.mentionsOptions=t,n.onDelimiter=function(e){var t=n.options.delimiter,r=e.innerProps,o=r.text,i=r.offset,s=r.input,u=i-t.length+s.length;if(o.substring(u,i)+s===t&&(0===u||" "===o.substr(u-1,1)))return{start:u,end:i,text:o.substring(u,i)+s}},n.onMacro=function(e){var t=e.innerProps,r=t.content,o=t.entityKey,i=t.blockKey,s=t.macroEndOffset,a=t.macroStartOffset,c=n.options.type,g=n.getQuery(r);return e.triggers.suggestion.updateTotalSuggestions(0),e.triggers.suggestion.updateSelectedIndex(-1),g.length&&n.mentionsOptions.onMentionsQueryUpdated(g),{blockKey:i,entityKey:o,content:r,type:c,endOffset:s,startOffset:a,chrome:u.MentionSuggestionsListComponent}},n.onAutoComplete=function(e){window.setTimeout(function(){n.completeMentionImpl(e)},0)},n.getSuggestedMentionUsers=function(e){var t=e.status.macro;if(t.active){var r=e.status.mentionSuggestions,o=t.active,i=o.content;if(o.type===n.options.type){var s=n.getQuery(i);return r.userMap[s]}}},n.getSelectedUser=function(e){var t=(e.kernel,e.status),n=t.suggestion,r=t.mentionSuggestions.users;if(n.selectedIndex!==-1&&null!==r)return r[n.selectedIndex]},n}return n.__extends(t,e),t.prototype.updateUsers=function(e){return e.kernel.compose(this.getSuggestedMentionUsers)||null},t.prototype.triggerQueryUpdateOnSuggestions=function(e){var t=e.innerProps.prevStatus.mentionSuggestions,n=t.userMap,r=t.users,o=e.status.mentionSuggestions,i=o.userMap,s=o.users;n!==i&&e.triggers.mentionSuggestions.queryUpdate(null),r!==s&&s&&e.triggers.suggestion.updateTotalSuggestions(s.length)},t.prototype.triggerQueryUpdateOnMacro=function(e){e.triggers.mentionSuggestions.queryUpdate(null)},t.prototype.completeMentionImpl=function(e){function t(e,t,n,s,u,g){var p=c.createEntity("mention","IMMUTABLE",{identifier:t,type:n}),l=p.getLastCreatedEntityKey(),m=a.replaceText(p,e.blockKey,u,g,"@"+s,l);o.draft.change(a.replaceContent(r.draft.editorState,i.Modifier.insertText(m,m.getSelectionAfter()," ")))}function n(e,t){return e.entityKey===t.getEntity()}var r=e.status,o=e.triggers,s=r.draft,u=r.macro,c=s.editorState.getCurrentContent();if(u.active){var g=c.getBlockForKey(u.active.blockKey),p=e.kernel.compose(this.getSelectedUser);if(p){var l=p.name.public||p.email,m=p.id||p.email,d=p.id?"id":"email",f=function(e){return!!u.active&&n(u.active,e)},y=function(e,n){return u.active&&t(u.active,m,d,l,e,n)};g.findEntityRanges(f,y)}else{var v=u.active.content.substring(this.options.delimiter.length);if(a.parseEmail(v)){var f=function(e){return!!u.active&&n(u.active,e)},y=function(e,n){return u.active&&t(u.active,v,"email",v,e,n)};g.findEntityRanges(f,y)}}}},t.prototype.getQuery=function(e){var t=this.options.delimiter;return 0===e.indexOf(t)?e.substring(t.length):e},n.__decorate([r.plug(o.into.mentionSuggestions.on.queryUpdate.update.users)],t.prototype,"updateUsers",null),n.__decorate([r.plug(o.into.mentionSuggestions)],t.prototype,"triggerQueryUpdateOnSuggestions",null),n.__decorate([r.plug(o.into.macro.on.update)],t.prototype,"triggerQueryUpdateOnMacro",null),t})(s.MacroLayer);t.MentionsMacroLayer=c});
//# sourceMappingURL=mentions_macro.min.js-vfluQ6_oB.map