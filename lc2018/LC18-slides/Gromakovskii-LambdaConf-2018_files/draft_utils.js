define(["require","exports","draft-js"],function(e,t,n){"use strict";function r(e,t){return n.EditorState.set(n.EditorState.forceSelection(n.EditorState.createWithContent(t),t.getSelectionAfter()),{decorator:e.getDecorator()})}function o(e,t,r,o,c,a){return n.Modifier.replaceText(e,n.SelectionState.createEmpty(t).merge({anchorOffset:r,focusOffset:o}),c,void 0,a)}function c(e,t,n){for(var r,o,c,a=t.getText();null!==(r=e.exec(a));)o=r.index,c=r[0].length,a=a.substring(o+c),n(o,o+c)}function a(e,t){var r=null,o=null,c=e.start,a=e.end,i=null,f=null,l=0;if(t.getBlockMap().forEach(function(e,t){return t&&null===r&&e&&c<l+e.getLength()&&(r=t,i=c-l),t&&null===o&&e&&a<=l+e.getLength()&&(o=t,f=a-l),e&&(l+=e.getLength()),r&&o}),!r||!o)throw"Bad range";return n.SelectionState.createEmpty(r).merge({anchorKey:r,anchorOffset:i,focusKey:o,focusOffset:f})}function i(e){return e.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}Object.defineProperty(t,"__esModule",{value:!0}),t.replaceContent=r,t.replaceText=o,t.findWithRegex=c,t.locationToSelection=a,t.parseEmail=i});
//# sourceMappingURL=draft_utils.min.js-vflaJhiez.map