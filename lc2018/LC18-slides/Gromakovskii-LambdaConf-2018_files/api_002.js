define(["require","exports","tslib","external/lodash","modules/clean/api_v2/root_aware_client"],function(t,e,i,r,n){"use strict";function u(t,e,i,r){return".tag"===e?0===r?["type",i]:i in t?i:[null,i]:i}function a(t,e,i,r){return"string"==typeof i&&/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(i)?new Date(i):i}function s(t,e,i){return void 0===i&&(i=0),Array.isArray(t)?t.map(function(t){return s(t,e,i+1)}):r.isObject(t)?Object.keys(t).reduce(function(n,u){var a=t[u];if(Array.isArray(a)||r.isObject(a))n[u]=s(a,e,i+1);else{var c=e(t,u,a,i);if(Array.isArray(c)){if(null===c[0])return c[1];n[c[0]]=c[1]}else n[u]=c}return n},{}):e(null,"",t,i)}function c(t){return s(s(t,u),a)}function o(t){return i.__assign({},c(t.activities[0]),{groupActivities:t.activities.map(c),isGroup:!0})}Object.defineProperty(e,"__esModule",{value:!0}),r=i.__importStar(r),e.parseActivity=c,e.parseGroupActivity=o;var l=(function(){function t(t){this.userId=t,this.client=new n.ApiV2RootAwareClient}return t.prototype.getActivityStream=function(t){return this.client.ns("file_activity_stream").rpc("get_activity_stream",{file_path_or_id:t},{subjectUserId:this.userId}).then(function(t){return{enabled:t.enabled,activity_group:(t.activity_group||[]).map(o)}})},t})();e.FileActivityStreamApi=l});
//# sourceMappingURL=api.min.js-vflrc4Dsr.map