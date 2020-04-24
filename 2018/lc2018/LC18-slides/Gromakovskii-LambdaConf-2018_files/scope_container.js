define(["require","exports","tslib","spectrum_comments/comment_editor/core/status_container","spectrum_comments/comment_editor/core/utils"],function(t,e,r,s,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=(function(t){function e(e){var r=e.scopeNames,s=e.defaultStatus,n=t.call(this,s)||this;return n.scopeNames=r,n}return r.__extends(e,t),e.prototype.createTriggers=function(t,e,r,s){return n.createTriggers(this.scopeNames,t,r||this.getStatus(),s||this.createFeatureTriggers(t),e||this.createKernel(t))},e.prototype.compose=function(t,e,r){var s=this.getStatus(),n=this.createKernel(e),i=this.createFeatureTriggers(e);return t({status:s,triggers:this.createTriggers(e,n,s,i),innerProps:r,kernel:n,featureTriggers:i})},e.prototype.updateStatus=function(t,e){var r=this.createFeatureTriggers(e),s=this.getStatus();for(var n in t){var i=t[n];s[n]!==i&&r[n](i)}return this.getStatus()},e.prototype.createKernel=function(t){var e=this;return{compose:function(r,s){return e.compose(r,t,s)}}},e.prototype.createFeatureTriggers=function(t){var e=this,s={},n=function(n){s[n]=function(s){var i=e.getStatus();return e.compose(t.composers[n],t,{prevStatus:i,initial:function(){e.setStatus(r.__assign({},i,(t={},t[n]=s,t)));var t}}),s}};for(var i in this.scopeNames)n(i);return s},e})(s.StatusContainerImpl);e.ScopeContainerImpl=i});
//# sourceMappingURL=scope_container.min.js-vflkyE1ji.map