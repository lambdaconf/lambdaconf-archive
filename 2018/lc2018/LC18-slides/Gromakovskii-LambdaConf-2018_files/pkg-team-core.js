define("modules/clean/acf/components/base_component",["require","exports","tslib","external/lodash","react","external/classnames","modules/clean/acf/utils/react_utils"],function(e,t,a,r,s,o,n){"use strict";function i(e,t,a,r,s){void 0===t&&(t={}),void 0===a&&(a={}),void 0===r&&(r=p),void 0===s&&(s=e.name),n.classMetadata(e,r,t,a,s)}Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r),s=a.__importDefault(s),o=a.__importDefault(o);var p=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.classnames=function(e){void 0===e&&(e={});var t=e;return this.props.className&&(t=r.assignIn({},(a={},a[this.props.className]=this.props.className,a),t)),o.default(t);var a},t.prototype.shouldRender=function(e){if(void 0===e&&(e=this.props),!e.permissions||!e.stateKey)return!0;var t=e.permissions.hasOwnProperty(e.stateKey)&&e.permissions[e.stateKey],a=!e.permissions.hasOwnProperty(e.stateKey);return t||a},t.prototype.propsOrStateKey=function(e){return this.props[e]?this.props[e]:this.props[this.props.stateKey]},t.prototype.propsOrStateKeyMethod=function(e,t){return void 0===t&&(t=e),this.props[e]?this.props[e]:this.props[""+this.props.stateKey+t]},t.prototype.renderComponent=function(){return s.default.createElement("noscript",null)},t.prototype.render=function(){return this.shouldRender()?this.renderComponent():s.default.createElement("noscript",null)},t})(s.default.Component);t.default=p,t.componentClassMetadata=i}),define("modules/clean/acf/components/breadcrumbs",["require","exports","tslib","react","external/prop-types","modules/clean/acf/components/base_component","modules/clean/acf/components/sprite"],function(e,t,a,r,s,o,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),s=a.__importStar(s),o=a.__importDefault(o);var i=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.renderComponent=function(){var e=this;return r.default.createElement("ul",{className:this.classnames({"c-breadcrumbs":!0})},this.props.items.map(function(t,a){return a<e.props.items.length-1?r.default.createElement("li",{key:"breadcrumb-"+a},r.default.createElement("a",{href:t.url},r.default.createElement("h1",{className:"f1"},t.name)),r.default.createElement(n.Sprite,{className:"c-breadcrumbs__arrow",group:"web",name:"chevron",alt:""})):r.default.createElement("li",{key:"breadcrumb-"+a},r.default.createElement("h1",{className:"f1"},t.name))}))},t})(o.default);t.default=i,o.componentClassMetadata(i,{items:s.arrayOf(s.shape({name:s.string,url:s.string})).isRequired})}),define("modules/clean/acf/components/sprite",["require","exports","tslib","react","modules/clean/react/sprite","modules/clean/acf/components/base_component"],function(e,t,a,r,s,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),o=a.__importDefault(o);var n=(function(e){function t(t){var a=e.call(this,t)||this;return a.state={hover:!1},a}return a.__extends(t,e),t.prototype.spriteName=function(){return this.props.hoverName&&this.state.hover?this.props.hoverName:this.props.name},t.prototype.setHover=function(e){this.setState({hover:e})},t.prototype.render=function(){var e=this;return r.default.createElement("div",{className:this.classnames(),onMouseOver:function(){return e.setHover(!0)},onMouseOut:function(){return e.setHover(!1)},onClick:this.props.onClick},r.default.createElement(s.Sprite,{group:this.props.group,name:this.spriteName(),alt:this.props.alt}))},t.defaultProps={onClick:function(){}},t})(o.default);t.Sprite=n}),define("modules/clean/acf/utils/react_utils",["require","exports","tslib","external/lodash"],function(e,t,a,r){"use strict";function s(e,t){return void 0===t&&(t={}),r.assignIn({},e.propTypes||{},t)}function o(e,t){return void 0===t&&(t={}),r.assignIn({},e.defaultProps||{},t)}function n(e,t,a,r,n){void 0===a&&(a={}),void 0===r&&(r={}),void 0===n&&(n=e.name),e.displayName=n,e.propTypes=s(t,a),e.defaultProps=o(t,r)}function i(e,t,a,s){return void 0===a&&(a=[]),void 0===s&&(s={}),r.assignIn(s,r.omit.apply(r,[t,"className","children","style","renderImportantOnly","renderImportant","viewName","element"].concat(a)),e.props)}Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r),t.basePropTypes=s,t.baseDefaultProps=o,t.classMetadata=n,t.childProps=i}),define("modules/clean/avatar/group_avatar",["require","exports","tslib","react","external/prop-types","modules/clean/avatar/avatar_with_default","modules/clean/avatar/initials_avatar","modules/clean/avatar/size","modules/clean/static_urls","modules/core/user_i18n"],function(e,t,a,r,s,o,n,i,p,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),s=a.__importStar(s),o=a.__importDefault(o),l=a.__importStar(l);var m=r.default.createElement,d=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){var e={dimension:this.props.dimension,photoUrl:this.props.group.is_team_group?p.static_url("/static/images/icons/team_32-vflk8mBzO.png"):void 0,shape:"SQUARE",name:this.props.group.name,optionalClass:this.props.optionalClass,defaultAvatar:m(n.InitialsAvatarWithColorDerivedFromName,{dimension:this.props.dimension,initials:l.getInitials(this.props.group.name).toUpperCase(),name:this.props.group.name,shape:"SQUARE",optionalClass:this.props.optionalClass})};return m(o.default,e)},t.displayName="GroupAvatar",t.propTypes={dimension:s.oneOf(i.VALID_AVATAR_DIMENSIONS).isRequired,group:s.object.isRequired,optionalClass:s.string},t})(r.default.Component);t.default=d}),define("modules/clean/react/maestro/tabs",["require","exports","tslib","external/classnames","external/lodash","react","modules/core/browser","modules/clean/event_handler","modules/clean/react/css","modules/clean/react/maestro/tab_nav","modules/clean/react/tabs/tab_util","modules/clean/react/tabs/tabs"],function(e,t,a,r,s,o,n,i,p,l,m,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),s=a.__importStar(s),o=a.__importDefault(o),n=a.__importStar(n);var u=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={selectedIndex:0,idPrefix:t.props.idPrefix||"tabset"+s.uniqueId(),tabs:[]},t._onChange=function(e,a){t.setState({selectedIndex:a});var r=t.state.tabs[a];r.hashURL&&n.set_hash(r.hashURL),t.props.onChange&&t.props.onChange(e,a)},t}return a.__extends(t,e),t.prototype.componentWillMount=function(){var e=this.props.children,t=this.state,a=t.selectedIndex,r=t.idPrefix,n=[];e&&o.default.Children.forEach(e,function(e,t){var o=m.getTabContentId(r,t),i=e.props,p=i.title,l=i.hashPrefix,d=i.hashURL,u=i.rightAlign,c=i.isSelected;n.push({label:p,contentId:o,hashPrefix:l,hashURL:d,rightAlign:u,value:s.uniqueId()}),c&&(a=t)}),this.setState({tabs:n,selectedIndex:a})},t.prototype.componentDidMount=function(){this.events.on(window,"hashchange",this._selectTabFromHash,this),this._selectTabFromHash()},t.prototype.componentWillReceiveProps=function(e){null!=e.selectedIndex&&e.selectedIndex!==this.state.selectedIndex&&this.setState({selectedIndex:e.selectedIndex})},t.prototype._selectTabFromHash=function(){var e=n.get_hash();if(e)for(var t=this.state.tabs,a=0;a<t.length;a++){var r=t[a],s=r.hashPrefix,o=r.hashURL;if(s&&e&&e.startsWith(s)||e===o){this.setState({selectedIndex:a});break}}else this.setState({selectedIndex:0})},t.prototype.render=function(){var e,t=this.props,a=t.variant,s=t.className,n=t.children,i=this.state,p=i.tabs,d=i.idPrefix,u=i.selectedIndex;return n&&(e=o.default.Children.map(n,function(e,t){return o.default.cloneElement(e,{isSelected:t===u,id:m.getTabContentId(d,t),tabId:m.getTabId(d,t)})})),o.default.createElement("div",{className:r.default("maestro-tab-nav",s,a)},o.default.createElement(l.FixedTabBar,{tabs:p,onChange:this._onChange,idPrefix:d,selectedIndex:u}),e)},t.defaultProps={variant:m.TabVariant.DEFAULT},t=a.__decorate([i.eventHandler],t)})(o.default.Component),c=p.requireCssWithComponent(u,["/static/css/legacy_packages/components-vflbDMbD3.css"]);t.Tabs=c,t.TabContent=d.TabContent}),define("modules/clean/teams/team_maestro_page_base",["require","exports","tslib","react","modules/clean/react/tabs/tab_util","modules/core/i18n","modules/clean/viewer","modules/clean/react/maestro/header","modules/clean/react/maestro/tabs","modules/clean/teams/admin/maestro/admin_console_actions_view","modules/clean/components/loading_indicator","modules/core/browser","modules/clean/react/maestro/layout","modules/clean/react/sprite","external/classnames","modules/clean/web_timing_logger","modules/clean/deferred_loader","modules/core/notify"],function(e,t,a,r,s,o,n,i,p,l,m,d,u,c,h,_,f,g){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),d=a.__importStar(d),h=a.__importDefault(h),_=a.__importStar(_);var b=(function(t){function b(r){var s=t.call(this,r)||this;return s.myGroups=[],s.teamGroups=[],s.requireTeamPage=function(){new Promise(function(t,a){e(["modules/clean/teams/team_page"],t,a)}).then(a.__importStar).then(function(e){return s.setState({teamPageElement:e.TeamPage})})},s.requireGroupsPage=function(){new Promise(function(t,a){e(["modules/clean/groups/groups_page"],t,a)}).then(a.__importStar).then(function(e){var t=e.default;return s.setState({groupsPageElement:t})})},s._setSingleGroupInfo=function(e){s.setState({activeGroup:e})},s.state={activeGroup:null,teamPageElement:r.initTeamPageElement,groupsPageElement:r.initGroupsPageElement,initialDataLoading:!0},s._setupDataPrefetchCallbacks(),s}return a.__extends(b,t),b.prototype._setupDataPrefetchCallbacks=function(){this._setupMembersPrefetchCallbacks(),this._setupGroupsPrefetchCallbacks()},b.prototype._setupMembersPrefetchCallbacks=function(){var e=this;if(window.__REGISTER_TEAM_MEMBERS_PRELOAD_HANDLER){var t=function(t){try{var a=JSON.parse(t);_.log_js_modules_fetched_data_required_for_tti(),e.initTeamMembersDataDict={rows:a.members,total:a.total_members,numJoinRequests:a.num_join_requests},e.setState({initialDataLoading:!1})}catch(e){g.Notify.error(o._("An error occured. Please reload the page."))}},a=function(){return g.Notify.error(o._("An error occured. Please reload the page."))};window.__REGISTER_TEAM_MEMBERS_PRELOAD_HANDLER(t,a)}},b.prototype._setupGroupsPrefetchCallbacks=function(){var e,t,a=this;window.__REGISTER_MY_GROUPS_PRELOAD_HANDLER&&(t=function(e){try{var t=JSON.parse(e);a.myGroups=t.groups,a.myGroupsTotal=t.total_groups,a._checkAndMarkGroupsDataFetchComplete()}catch(e){g.Notify.error(o._("An error occured. Please reload the page."))}},e=function(){return g.Notify.error(o._("An error occured. Please reload the page."))},window.__REGISTER_MY_GROUPS_PRELOAD_HANDLER(t,e)),window.__REGISTER_TEAM_GROUPS_PRELOAD_HANDLER&&(t=function(e){try{var t=JSON.parse(e);a.teamGroups=t.groups,a.teamGroupsTotal=t.total_groups,a._checkAndMarkGroupsDataFetchComplete()}catch(e){g.Notify.error(o._("An error occured. Please reload the page."))}},e=function(){return g.Notify.error(o._("An error occured. Please reload the page."))},window.__REGISTER_TEAM_GROUPS_PRELOAD_HANDLER(t,e))},b.prototype._checkAndMarkGroupsDataFetchComplete=function(){void 0!==this.myGroupsTotal&&void 0!==this.teamGroupsTotal&&(_.log_js_modules_fetched_data_required_for_tti(),this.initMyGroupsDataDict={rows:this.myGroups,total:this.myGroupsTotal},this.initTeamGroupsDataDict={rows:this.teamGroups,total:this.teamGroupsTotal},this.setState({initialDataLoading:!1}))},b.prototype.componentWillMount=function(){_.log_js_modules_application_code_start()},b.prototype.componentDidMount=function(){var t=this;_.waitForTTI().then(function(){t.props.mergedMembersAndGroups?t.requireGroupsPage():t.requireTeamPage(),Promise.all([new Promise(function(t,a){e(["modules/clean/groups/switch_to_member_managed_group_modal"],t,a)}).then(a.__importStar),new Promise(function(t,a){e(["modules/clean/teams/modals/create_group_modal"],t,a)}).then(a.__importStar),new Promise(function(t,a){e(["modules/clean/teams/modals/leave_team_modal"],t,a)}).then(a.__importStar),new Promise(function(t,a){e(["modules/clean/react/modal"],t,a)}).then(a.__importStar),new Promise(function(t,a){e(["modules/clean/teams/modals/delete_group_modal"],t,a)}).then(a.__importStar),new Promise(function(t,a){e(["modules/clean/teams/modals/remove_user_from_group_modal"],t,a)}).then(a.__importStar),new Promise(function(t,a){e(["modules/clean/teams/modals/sole_admin_warning_modal"],t,a)}).then(a.__importStar),new Promise(function(t,a){e(["modules/clean/teams/modals/make_company_managed_modal"],t,a)}).then(a.__importStar)]).then(function(e){var t=e[0].default,a=e[1].showCreateGroupModal,r=e[2].showLeaveLimitedTeamModal,s=e[3].Modal,o=e[4].showDeleteGroupModal,n=e[5].showRemoveUserFromGroupModal,i=e[6].showSoleAdminWarningModal,p=e[7].showMakeCompanyManagedModal;f.deferredLoader.setItems({SwitchToMemberManagedGroupModal:t,showCreateGroupModal:a,showDeleteGroupModal:o,showRemoveUserFromGroupModal:n,ShowLeaveLimitedTeamModal:r,Modal:s,showSoleAdminWarningModal:i,showMakeCompanyManagedModal:p})})})},b.prototype._renderGroupsTab=function(){var e=this.initMyGroupsDataDict,t=this.initTeamGroupsDataDict;return this.initMyGroupsDataDict=void 0,this.initTeamGroupsDataDict=void 0,this.state.groupsPageElement?r.default.createElement(this.state.groupsPageElement,{ref:"groupsTab",isMaestroDesign:!0,canHaveAdminUi:this.props.canHaveAdminUi,groupControlledByAdmin:this.props.groupControlledByAdmin,teamName:this.props.viewer.team_name,isLimitedTeam:this.props.isLimitedTeam,insideAdminConsole:!1,onNewSingleGroup:this._setSingleGroupInfo,infiniteScroll:this.props.infiniteScroll,mergedMembersAndGroups:this.props.mergedMembersAndGroups,initialMyGroupsDataDict:e,initialTeamGroupsDataDict:t}):null},b.prototype._renderMembersTab=function(){var e=this.initTeamMembersDataDict;return this.initTeamMembersDataDict=void 0,this.state.teamPageElement?r.default.createElement(this.state.teamPageElement,{ref:"membersTab",isMaestroDesign:!0,teamName:this.props.viewer.team_name,teamFolderPathName:this.props.teamFolderPathName,members:this.props.members,teamIsAssumed:this.props.teamIsAssumed,totalMembers:this.props.totalMembers,totalActiveMembers:this.props.totalActiveMembers,totalRows:this.props.totalRows,numJoinRequests:this.props.numJoinRequests,numProvisionedLicenses:this.props.numProvisionedLicenses,isLimitedTeam:this.props.isLimitedTeam,canInviteMembers:this.props.canInviteMembers,canManageTeamMembership:this.props.canManageTeamMembership,canSuggestMembers:this.props.canSuggestMembers,canAccessAdminConsole:this.props.canAccessAdminConsole,canHaveAdminUi:this.props.canHaveAdminUi,canHaveLimitedAdminSettings:this.props.canHaveLimitedAdminSettings,canManageLimitedAdmins:this.props.canManageLimitedAdmins,viewerIsSoleAdmin:this.props.viewerIsSoleAdmin,infiniteScroll:this.props.infiniteScroll,inviteMemberEmails:this.props.inviteMemberEmails,mergedMembersAndGroups:this.props.mergedMembersAndGroups,openInviteModal:this.props.openInviteModal,openSuggestMembersModal:this.props.openSuggestMembersModal,openUploadModal:this.props.openUploadModal,onboardingModalVariant:this.props.onboardingModalVariant,adminOnboardingState:this.props.adminOnboardingState,teamMembersLimit:this.props.teamMembersLimit,enableMaxSizeExperiment:this.props.enableMaxSizeExperiment,showQuota:this.props.showQuota,teamIsCdm:this.props.teamIsCdm,initialDataDict:e}):null},b.prototype._refreshMembersAndGroupsPage=function(){this.props.mergedMembersAndGroups&&this.refs.membersTab.forceRefresh()},b.prototype._manageMembersClicked=function(){d.redirect("/team/admin/members")},b.prototype._manageGroupsClicked=function(){d.redirect("/team/admin/groups")},b.prototype._inviteMembersClicked=function(){this.refs.membersTab.onInviteClicked()},b.prototype._suggestMembersClicked=function(){this.refs.membersTab.onSuggestMembersClicked()},b.prototype._createGroupClicked=function(){var e=this;f.deferredLoader.getResolvedItems(["showCreateGroupModal"]).then(function(t){return(0,t.showCreateGroupModal)({isLimitedTeam:e.props.isLimitedTeam,canHaveAdminUi:e.props.canHaveAdminUi,success:function(t){t=JSON.parse(t);var a;a="groups/"+t.data.id,d.set_hash(a),e._refreshMembersAndGroupsPage()}})})},b.prototype._renameGroupClicked=function(){this.refs.groupsTab.showRenameGroupModal()},b.prototype._deleteGroupClicked=function(){var e=this;f.deferredLoader.getResolvedItems(["showDeleteGroupModal"]).then(function(t){return(0,t.showDeleteGroupModal)({groupId:e.state.activeGroup.id,groupName:e.state.activeGroup.name,onPrimaryAction:function(){d.set_hash(e.props.mergedMembersAndGroups?"members":"groups"),e._refreshMembersAndGroupsPage()}})})},b.prototype._leaveGroupClicked=function(){var e=this;f.deferredLoader.getResolvedItems(["showRemoveUserFromGroupModal"]).then(function(t){return(0,t.showRemoveUserFromGroupModal)({groupId:e.state.activeGroup.id,groupName:e.state.activeGroup.name,userId:n.Viewer.get_viewer().work_user.id,userDisplayName:n.Viewer.get_viewer().work_user.display_name,removeSelf:!0,onPrimaryAction:function(){d.set_hash(e.props.mergedMembersAndGroups?"members":"groups"),e._refreshMembersAndGroupsPage()}})})},b.prototype._makeGroupCompanyManagedClicked=function(){var e=this;f.deferredLoader.getResolvedItems(["showMakeCompanyManagedModal"]).then(function(t){return(0,t.showMakeCompanyManagedModal)({groupId:e.state.activeGroup.id,groupName:e.state.activeGroup.name,success:function(){e.refs.groupsTab.refreshGroup()}})})},b.prototype._makeGroupUserManagedClicked=function(){var e=this;f.deferredLoader.getResolvedItems(["SwitchToMemberManagedGroupModal","Modal"]).then(function(t){var a=t.SwitchToMemberManagedGroupModal;t.Modal.showInstance(r.default.createElement(a,{group:e.state.activeGroup,onMemberManaged:e.refs.groupsTab.refreshGroup,insideAdminConsole:!1}))})},b.prototype._leaveTeamClicked=function(){var e=this;f.deferredLoader.getResolvedItems(["ShowLeaveLimitedTeamModal","showSoleAdminWarningModal"]).then(function(t){var a=t.ShowLeaveLimitedTeamModal,r=t.showSoleAdminWarningModal;if(!e.props.showWarningOnLeaveTeam)return a({userId:e.props.viewer.work_user.id,teamName:e.props.viewer.team_name,canHaveAdminUi:e.props.canHaveAdminUi,success:function(){return d.redirect("/team")}});r({teamName:e.props.viewer.team_name,action:"leave"})})},b.prototype._addGroupMembersClicked=function(){this.refs.groupsTab.showAddMembersModal()},b.prototype._renderSidebar=function(){return this.state.activeGroup?this._renderSidebarGroupView():this._renderSidebarMainView()},b.prototype._renderSidebarMainView=function(){var e,t=this,a=[],s=this.props.mergedMembersAndGroups;return this.props.isLimitedTeam?(s?(e={displayName:o._("Invite members"),handleClick:function(){return t._inviteMembersClicked()}},a.push({displayName:o._("Create group"),spriteName:"icon_new_group",handleClick:function(){return t._createGroupClicked()}})):(e={displayName:o._("Create group"),handleClick:function(){return t._createGroupClicked()}},a.push({displayName:o._("Invite members"),spriteName:"icon_invite_members",handleClick:function(){return t._inviteMembersClicked()}})),a.push({displayName:o._("Leave team"),spriteName:"icon_leave",handleClick:function(){return t._leaveTeamClicked()}})):s?(e=this.props.canAccessAdminConsole?{displayName:o._("Manage members"),handleClick:function(){return t._manageMembersClicked()}}:this.props.canSuggestMembers?{displayName:o._("Suggest members"),handleClick:function(){return t._suggestMembersClicked()}}:{displayName:o._("Invite members"),disabled:!0},a.push({displayName:o._("Create group"),spriteName:"icon_new_group",handleClick:function(){return t._createGroupClicked()},disabled:!this.props.canHaveAdminUi&&this.props.groupControlledByAdmin})):this.props.canAccessAdminConsole?(e={displayName:o._("Manage groups"),handleClick:function(){return t._manageGroupsClicked()}},a.push({displayName:o._("Manage members"),spriteName:"icon_invite_members",handleClick:function(){return t._manageMembersClicked()}})):(e={displayName:o._("Create group"),handleClick:function(){return t._createGroupClicked()},disabled:this.props.groupControlledByAdmin},a.push({displayName:o._("Suggest members"),spriteName:"icon_invite_members",handleClick:function(){return t._suggestMembersClicked()},disabled:!this.props.canSuggestMembers})),r.default.createElement(l.AdminConsoleActionsView,{primaryMenuItem:e,secondaryMenuItems:a})},b.prototype._renderSidebarGroupView=function(){var e=this,t=this.state.activeGroup;if(t.is_team_group)return null;var a=!t.is_admin_managed&&t.is_owner,s=this.props.canHaveAdminUi||a,n={displayName:o._("Add members"),handleClick:function(){return e._addGroupMembersClicked()},disabled:!s},i=[];s&&(i=[{displayName:o._("Rename group"),spriteName:"icon_rename",handleClick:function(){return e._renameGroupClicked()}},{displayName:o._("Delete group"),spriteName:"icon_delete",handleClick:function(){return e._deleteGroupClicked()}}]),this.props.canHaveAdminUi&&!this.props.isLimitedTeam&&(t.is_admin_managed?i.push({displayName:o._("Make user-managed"),spriteName:"gear",handleClick:function(){return e._makeGroupUserManagedClicked()}}):i.push({displayName:o._("Make company-managed"),spriteName:"gear",handleClick:function(){return e._makeGroupCompanyManagedClicked()}}));var p=this.props.canHaveAdminUi||!t.is_admin_managed&&!this.props.groupControlledByAdmin;return t.is_member&&p&&i.push({displayName:o._("Leave group"),spriteName:"icon_leave",handleClick:function(){return e._leaveGroupClicked()}}),r.default.createElement(l.AdminConsoleActionsView,{primaryMenuItem:n,secondaryMenuItems:i})},b.prototype._getTitleElement=function(){var e=this.props.viewer.team_name;if(this.state.activeGroup){var t=this.props.mergedMembersAndGroups?"#members":"#groups";return r.default.createElement(i.MaestroHeaderTitle,null,r.default.createElement("span",{className:"team-title-with-group-view"},r.default.createElement("a",{className:"team-name",href:t},e),r.default.createElement(c.Sprite,{className:"team-name-separator",group:"web",name:"chevron",alt:o._("right-arrow")}),r.default.createElement("span",{className:"group-name"},this.state.activeGroup.name)))}return r.default.createElement(i.MaestroHeaderTitle,null,e)},b.prototype._getTabsClass=function(){return h.default({"hidden-tab-bar":null!==this.state.activeGroup||this.props.mergedMembersAndGroups})},b.prototype._renderAppBody=function(){var e,t=r.default.createElement(p.TabContent,{id:"team-tab-members",title:o._("Members"),hashURL:"members"},this._renderMembersTab());return e=this.props.mergedMembersAndGroups?r.default.createElement(p.TabContent,{id:"team-tab-groups",title:o._("Groups"),hashPrefix:"groups/g"},this._renderGroupsTab()):r.default.createElement(p.TabContent,{id:"team-tab-groups",title:o._("Groups"),hashURL:"groups",hashPrefix:"groups"},this._renderGroupsTab()),this.props.mergedMembersAndGroups?r.default.createElement("div",{className:"maestro-team-page-content"},r.default.createElement(p.Tabs,{className:this._getTabsClass(),variant:s.TabVariant.UNDERLINE},t,e)):r.default.createElement("div",{className:"maestro-team-page-content"},r.default.createElement(p.Tabs,{className:this._getTabsClass(),variant:s.TabVariant.UNDERLINE},e,t))},b.prototype.render=function(){if(this.state.initialDataLoading){var e=r.default.createElement(m.LoadingIndicator,{style:m.LoadingIndicator.LoadingIndicatorStyle.BLUE_SPINNER,className:"maestro-loading-spinner"});return r.default.createElement("div",{className:"maestro-loading-spinner-wrapper"},e)}var t=this.props.viewer,a=t.work_user;return r.default.createElement(u.MaestroChrome,{user:a,titleRegion:this._getTitleElement(),embeddedAppRegion:this._renderAppBody(),actionSidebarRegion:this._renderSidebar()})},b.displayName="TeamMaestroPage",b.defaultProps={viewer:n.Viewer.get_viewer()},b})(r.default.Component);t.TeamMaestroPageBase=b,t.TeamMaestroPageCss=["/static/css/scooter/scooter-scoped-vflrM1SRf.css","/static/css/sharing/maestro-layout-vflvEmc2B.css","/static/css/teams/team_maestro_page-vflgbG8wD.css","/static/css/legacy_packages/components-vflbDMbD3.css","/static/css/react/table-vflkFXmsd.css"]});
//# sourceMappingURL=pkg-team-core.min.js-vflKp99tJ.map