define(["require","exports","tslib","modules/clean/comments/store","modules/clean/react/file_comments/logger"],function(t,e,n,o,a){"use strict";function i(t,e){var n=o.default.state,i=n.actorId,l=n.activity,c=n.viewing.context;try{a.default.log_event(t,l.activity_key,null,e,i,c)}catch(t){console.warn("logEvent failed",t)}}function l(t,e){var n=o.default.state,i=n.actorId,l=n.activity,c=n.viewing.context,r=l.findCommentByKey(e);try{a.default.log_annotation_event(t,l.activity_key,e,i,c,r.comment.comment_metadata.annotation)}catch(t){console.warn("logAnnotationEvent failed",t)}}Object.defineProperty(e,"__esModule",{value:!0}),o=n.__importDefault(o),a=n.__importDefault(a),e.logEvent=i,e.logAnnotationEvent=l});
//# sourceMappingURL=logging.min.js-vflMN5b1m.map