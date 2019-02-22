define(["require","exports","tslib","external/classnames","react","external/lodash","jquery","modules/clean/components/loading_indicator","modules/clean/loggers/pass_facepile_logger","modules/clean/react/css","modules/clean/react/pass/empty_seen_state_facepile","modules/clean/react/pass/seen_state_coachmark","modules/clean/react/file_viewer/share_helpers","modules/clean/react/pass/avatars","modules/clean/react/pass/constants","modules/clean/react/pass/event_emitter","modules/clean/react/pass/types","modules/clean/react/pass/utils","modules/clean/viewer","external/immutable","modules/clean/react/size_class/constants","modules/clean/file_store/utils","modules/clean/react/pass/upsell/pass_upsell_provider","modules/clean/react/pass/upsell/simple_upsell"],function(e,s,t,r,n,o,i,a,p,l,u,c,h,d,f,m,_,v,g,S,y,w,P,E){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),r=t.__importDefault(r),n=t.__importDefault(n),o=t.__importStar(o),i=t.__importDefault(i),h=t.__importStar(h);var I=(function(e){function s(s){var t=e.call(this,s)||this;return t.numUsersToLog=0,t.hasDisplayedAvatars=!1,t.hasPassShownBeenLogged=!1,t.state={loadedPhotoUrls:S.Set(),newPresentUserIds:[],initialPhotoUrlsResolved:!1},t.pendingPhotoUrls=S.Set(),t.onAvatarHover=t.onAvatarHover.bind(t),t.onAvatarClick=t.onAvatarClick.bind(t),t.onAvatarImageLoad=t.onAvatarImageLoad.bind(t),t}return t.__extends(s,e),s.prototype.componentWillMount=function(){this.resetLogging(),p.passFacepileLogger.listenTo(m.passEventEmitter)},s.prototype.componentDidMount=function(){this.logFacepileShownEvents()},s.prototype.componentWillReceiveProps=function(e){if(w.areFilesEqual(this.props.file,e.file)){if(!this.state.initialPhotoUrlsResolved&&this.pendingPhotoUrls.isEmpty()&&this.setState({initialPhotoUrlsResolved:!0}),null==e.presence||null==this.props.presence)return;var s=o.difference(e.presence,this.props.presence),t=o.difference(this.props.presence,e.presence);this.updateNewPresentUserIds(s,t)}else this.setState({newPresentUserIds:[],initialPhotoUrlsResolved:!1}),this.pendingPhotoUrls=S.Set(),this.resetLogging()},s.prototype.componentDidUpdate=function(e){this.logFacepileShownEvents()},s.prototype.componentWillUnmount=function(){return p.passFacepileLogger.unlistenTo(m.passEventEmitter),i.default(window).off("resize.facepile")},s.prototype.updateNewPresentUserIds=function(e,s){var t=o.filter(this.state.newPresentUserIds,function(e){return s.indexOf(e)===-1});this.setState({newPresentUserIds:e.concat(t)})},s.prototype.computeOverflowBasis=function(e){if(!this.props.uniqueMemberCountInfo.data)return e.length;var s=this.props.uniqueMemberCountInfo.data;return e.forEach(function(e){e.incrementOverflowBasis&&++s}),Math.max(s,e.length)},s.prototype.resetLogging=function(){this.numUsersToLog=0,this.hasPassShownBeenLogged=!1,this.hasDisplayedAvatars=!1},s.prototype.logFacepileShownEvents=function(){if(this.props.presence&&this.hasDisplayedAvatars&&!this.hasPassShownBeenLogged){var e=f.EventTypes.PASS_SHOWN;this.logPassEvent(e),this.hasPassShownBeenLogged=!0}},s.prototype.logPassEvent=function(e){var s=null!=this.props.uniqueMemberCountInfo.data?Math.max(this.numUsersToLog,this.props.uniqueMemberCountInfo.data):this.numUsersToLog,t=this.props.passPermissions?this.props.passPermissions.canReadSeenState:null,r=this.props.anonymousPresenceInfo.length,n=this.getViewerCountByAccessLevel(),o=n.numViewers,i=n.numInTeamEditors,a=n.numInTeamViewers,p=n.numNonTeamEditors,l=n.numNonTeamViewers;return m.passEventEmitter.emit(e,this.props.fromBrowse,this.props.file,{numAccessors:s,numViewers:o,numCurrentViewers:this.getNumCurrentViewers(),canSeeViewerHistory:t,numGuests:r,numInTeamEditors:i,numInTeamViewers:a,numNonTeamEditors:p,numNonTeamViewers:l})},s.prototype.getViewerCountByAccessLevel=function(){var e,s,t=this,r=0,n=0,o=0,i=0;if(this.shouldHardcodeCurrentViewer()){s=this.seenStateDataWithViewerFiltered(this.getSeenStates());var a=this.getSeenStates().filter(function(e){return e.seen_state_user.user_id===t.props.user.account_id});if(a.length>0){e=0;var p=a[0];p.when_last_seen=1,s.push(p)}else e=1,r++}else e=0,s=this.getSeenStates();for(var l=0,u=s;l<u.length;l++){var c=u[l];if(null!=c.when_last_seen){e++;var h=c.seen_state_user;h.in_owners_team?h.sharing_access_type&&"edit_member_access"===h.sharing_access_type.type?r++:n++:h.sharing_access_type&&"edit_member_access"===h.sharing_access_type.type?o++:i++}}return{numViewers:e,numInTeamEditors:r,numInTeamViewers:n,numNonTeamEditors:o,numNonTeamViewers:i}},s.prototype.getNumCurrentViewers=function(){var e=this;if(!this.props.presence)return 0;if(this.shouldHardcodeCurrentViewer()){return 1+this.props.presence.filter(function(s){return s!==e.props.user.account_id}).map(function(e){return e}).length}return this.props.presence.length},s.prototype.userIsAnonymous=function(e){return o.map(this.props.anonymousPresenceInfo,function(e){return e.seen_state_user.user_id}).indexOf(e.user_id)>=0},s.prototype.userIsOnline=function(e){return null!=this.props.presence&&this.props.presence.indexOf(e.user_id)>=0},s.prototype.onAvatarHover=function(){var e=f.EventTypes.PASS_HOVER;this.setState({}),this.logPassEvent(e)},s.prototype.onAvatarClick=function(){var e=this.props.fromBrowse?"BROWSE_FILE_FACEPILE":"PREVIEW_PAGE_FACEPILE",s=f.EventTypes.PASS_CLICK;this.logPassEvent(s),h.share(this.props.file,g.Viewer.get_viewer().get_user_by_id(this.props.user.id),this.props.url||null,e)},s.prototype.onAvatarImageLoad=function(e){this.pendingPhotoUrls=this.pendingPhotoUrls.remove(e),this.setState({loadedPhotoUrls:this.state.loadedPhotoUrls.add(e)}),this.pendingPhotoUrls.isEmpty()&&this.setState({initialPhotoUrlsResolved:!0})},s.prototype.buildUserInfo=function(e){var s=e.seen_state_user,t=e.when_last_seen,r=e.platform_type,n=s.access_level,o=s.display_name,i=s.photo_circle_url,a=s.sharing_access_type,p=s.user_id,l=p||o,u=v.shouldIncrementOverflowBasisForAccessType(a);return new _.UserInfo(l,o,this.userIsOnline(s),!1,u,n,t,i,p,r)},s.prototype.seenStateDataWithViewerFiltered=function(e){var s=this;return o.filter(e,function(e){return e.seen_state_user.user_id!==s.props.user.account_id})},s.prototype.partitionUserInfoLists=function(e){for(var s=[],t=[],r=[],n=[],o=[],i={},a=0,p=e;a<p.length;a++){var l=p[a],u=this.buildUserInfo(l);this.userIsOnline(l.seen_state_user)?this.isNewPresentUser(u)?i[u.key]=u:this.userIsAnonymous(l.seen_state_user)?r.push(u):t.push(u):null!=l.when_last_seen?n.push(u):o.push(u)}for(var c=0,h=this.state.newPresentUserIds;c<h.length;c++){var d=h[c],u=i[d];u&&s.push(u)}return{newPresentUserInfoList:s,presentUserInfoList:t,anonymousUserInfoList:r,offlineUserInfoList:n,neverViewedUserInfoList:o}},s.prototype.getUserInfoList=function(){var e,s=[],t=this.getMergedSeenStateData();if(this.shouldHardcodeCurrentViewer()){e=this.seenStateDataWithViewerFiltered(t);var r=this.props.user.account_id,n=!this.props.fromBrowse&&e.length<t.length&&this.getSeenStates().some(function(e){var s=e.seen_state_user;return s.user_id===r&&v.shouldIncrementOverflowBasisForAccessType(s.sharing_access_type)}),o=g.Viewer.get_viewer().get_user_by_id(this.props.user.id);s.push(new _.UserInfo(this.props.user.account_id,o.display_name,!0,!0,n,void 0,void 0,o.photo_url))}else e=t;var i=this.partitionUserInfoLists(e),a=i.newPresentUserInfoList,p=i.presentUserInfoList,l=i.anonymousUserInfoList,u=i.offlineUserInfoList,c=i.neverViewedUserInfoList;return p.sort(function(e,s){return e.displayName.toLowerCase().localeCompare(s.displayName.toLowerCase())}),c.sort(function(e,s){return e.displayName.toLowerCase().localeCompare(s.displayName.toLowerCase())}),s.concat(a,p,l,u,c)},s.prototype.isNewPresentUser=function(e){return this.state.newPresentUserIds.indexOf(e.key)>=0},s.prototype.getMergedSeenStateData=function(){var e=this.getSeenStates(),s=e.map(function(e){return e.seen_state_user.user_id});if(this.props.sharingStorePassInfo.data){for(var t=0,r=this.props.sharingStorePassInfo.data.users;t<r.length;t++){var n=r[t],o=n.seen_state_user.user_id;s.indexOf(o)!==-1||o===this.props.user.account_id&&this.shouldHardcodeCurrentViewer()||e.push(n)}return e.concat(this.props.anonymousPresenceInfo,this.props.sharingStorePassInfo.data.invitees)}return e.concat(this.props.anonymousPresenceInfo)},s.prototype.shouldHardcodeCurrentViewer=function(){var e=!(g.Viewer.get_viewer().is_assume_user_session||this.props.fromBrowse),s=null!=this.props.presence&&this.props.presence.indexOf(this.props.user.account_id)>=0;return e||s},s.prototype.getSeenStates=function(){return this.props.identifiedSeenStateInfo&&this.props.identifiedSeenStateInfo.seen_states?this.props.identifiedSeenStateInfo.seen_states.slice():[]},s.prototype.haveSeenStateDataToShow=function(e){var s=e.length;return s>=2||1===s&&e[0].key!==this.props.user.account_id},s.prototype.allDataHasLoaded=function(){return f.fetchingStatusSeenStateIsComplete(this.props.passFetchingStatus)&&this.props.sharingStorePassInfo.isLoaded&&this.props.uniqueMemberCountInfo.isLoaded},s.prototype.getEffectiveSizeClass=function(){var e=this.props,s=e.fromBrowse,t=e.sizeClass;return s?y.SizeClass.Large:t},s.prototype.render=function(){var e=this.getEffectiveSizeClass();if(e===y.SizeClass.Small||this.props.isPassPermissionsPending||this.props.passFetchingStatus===f.PASS_FETCHING_STATUS.ERROR||null==this.props.passPermissions||!this.props.passPermissions.canReadPresence&&!this.props.passPermissions.canReadSeenState)return this.renderEmptyFacepile();if(!this.allDataHasLoaded())return this.props.fromBrowse?n.default.createElement(a.LoadingIndicator,{style:a.LoadingIndicator.LoadingIndicatorStyle.DOTS}):n.default.createElement("div",null);var s=[],t=e===y.SizeClass.Medium?f.MAX_FACES_COMPACT:f.MAX_FACES_NORMAL,r=this.getUserInfoList();if(this.numUsersToLog=r.length,this.haveSeenStateDataToShow(r)){s=this.renderUserAvatars(r,t);var o=this.computeOverflowBasis(r),i=o>t;if(i&&--t,s=this.renderUserAvatars(r,t),i){var p=o-t;s.push(n.default.createElement(d.OverflowAvatar,{key:"overflow-avatar",moreFacepileCount:p,onMouseEnter:this.onAvatarHover}))}}return s.length?(this.hasDisplayedAvatars=!0,this.renderAvatarsInReverse(s)):this.renderEmptyFacepile()},s.prototype.renderEmptyFacepile=function(){return n.default.createElement(u.EmptySeenStateFacepile,{hasPresence:null!=this.props.presence})},s.prototype.facepileClassName=function(){return r.default((e={},e[f.FACEPILE_CLASSNAME]=!0,e[f.PRESENCE_RECEIVED_CLASSNAME]=null!=this.props.presence,e[f.FACEPILE_DELAYED_CLASSNAME]=!this.state.initialPhotoUrlsResolved&&!this.pendingPhotoUrls.isEmpty(),e));var e},Object.defineProperty(s.prototype,"fileType",{get:function(){return w.getExtension(this.props.file)},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"userPaid",{get:function(){var e=g.Viewer.get_viewer().personal_user;return!(!e||1!==e.paid)},enumerable:!0,configurable:!0}),Object.defineProperty(s.prototype,"isViewerEligibleForUpsell",{get:function(){return null!=this.props.passPermissions&&E.isViewerEligibleForUpsell(this.props.passPermissions)},enumerable:!0,configurable:!0}),s.prototype.renderUserAvatars=function(e,s){for(var t=[],r=0,o=Math.min(e.length,s),i=0,a=e;i<a.length;i++){var p=a[i];if(r===s)break;var l=p.key,u=p.photoUrl;u&&!this.state.loadedPhotoUrls.contains(u)&&(this.pendingPhotoUrls=this.pendingPhotoUrls.add(u)),u&&this.state.initialPhotoUrlsResolved&&!this.state.loadedPhotoUrls.contains(u)||r++;var c=u?this.onAvatarImageLoad:void 0;t.push(n.default.createElement(d.UserAvatar,{key:l,userInfo:p,onMouseEnter:this.onAvatarHover,onLoad:c,upsellInfo:{facepileOrder:t.length,fileType:this.fileType,totalUserAvatarShown:o,paid:this.userPaid,isViewerEligibleForUpsell:this.isViewerEligibleForUpsell}}))}return t},s.prototype.renderAvatarsInReverse=function(e){e.reverse();var s=n.default.createElement("div",null);return e.length>=2&&!this.props.fromBrowse&&(s=n.default.createElement("div",{className:"seen-state-coach-mark__container"},n.default.createElement(c.SeenStateCoachmark,{file:this.props.file,userId:this.props.user.id,url:this.props.url}))),n.default.createElement(P.PassUpsellProvider,{userId:this.props.user.id},n.default.createElement("div",{className:"react-pass__facepile-padding"},n.default.createElement("div",{className:"react-pass__facepile-wrap"},s,n.default.createElement("div",{className:this.facepileClassName(),onClick:this.onAvatarClick},e))))},s.displayName="SeenStateFacepile",s})(n.default.Component);s.SeenStateFacepile=l.requireCssWithComponent(I,["/static/css/seen_state_facepile-vflHdJzFX.css"])});
//# sourceMappingURL=seen_state_facepile.min.js-vflT4N-NO.map