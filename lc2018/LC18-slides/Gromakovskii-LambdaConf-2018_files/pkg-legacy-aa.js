define("modules/clean/groups/api",["require","exports","tslib","jquery","modules/clean/ajax","modules/clean/contacts/cache_store","modules/clean/viewer"],function(e,t,o,n,i,r,a){"use strict";function s(){}function l(e,t){return void 0===e&&(e={}),void 0===t&&(t=function(){return{}}),b({method:"get_groups_for_user",data:e,success:t})}function u(e,t){return void 0===e&&(e={}),void 0===t&&(t=function(){return{}}),b({method:"get_group_info",data:e,success:t})}function c(e,t){return void 0===t&&(t=function(){return{}}),b({method:"get_users_in_group",data:e,success:t})}function d(e,t){return void 0===t&&(t=function(){return{}}),b({method:"make_new_group",data:e,success:t,reload_contacts:!0})}function _(e,t){return void 0===t&&(t=function(){return{}}),b({method:"make_new_group_with_users",data:e,success:t,reload_contacts:!0})}function m(e,t){return void 0===t&&(t=function(){return{}}),b({method:"remove_group",data:e,success:t,reload_contacts:!0})}function p(e,t,o){return void 0===o&&(o=function(){return{}}),b({method:"rename_group",data:e,success:t,error:o,reload_contacts:!0})}function f(e,t){return void 0===t&&(t=function(){return{}}),b({method:"add_users_to_group",data:e,success:t,reload_contacts:!0})}function h(e,t){return void 0===t&&(t=function(){return{}}),b({method:"remove_user_from_group",data:e,success:t,reload_contacts:!0})}function g(e,t){return void 0===t&&(t=function(){return{}}),b({method:"change_group_member_type",data:e,success:t})}function v(e,t){return void 0===t&&(t=function(){return{}}),b({method:"make_group_join_request",data:e,success:t})}function b(e){var t="/groups_ajax/"+e.method,o=e.reload_contacts||!1,s=function(t){var i=JSON.parse(t);if(i.ok&&(e.success(i.data),n.default(".error_msg").hide()),o){r.DefaultContactsCacheStore.getOrCreateForViewer().load_contacts(!0)}},l=function(t){var o=t.responseText;e.error&&(e.error(o.slice(4)),n.default(".error_msg").hide())};return i.WebRequest({url:t,type:"post",data:e.data,subject_user:a.Viewer.get_viewer().work_user,success:s,error:l})}Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importStar(i);t.ready=s,t.get_groups_for_user=l,t.get_group_info=u,t.get_users_for_group=c,t.create_group=d,t.create_group_with_users=_,t.remove_group=m,t.rename_group=p,t.add_users_to_group=f,t.remove_user_from_group=h,t.change_group_member_type=g,t.make_group_join_request=v,t.metaserver_ajax=b}),define("modules/clean/growth/shared_link_signup_modals",["require","exports","tslib","jquery","modules/clean/analytics","modules/clean/auth_event_logger","modules/clean/dbmodal","modules/clean/growth/experiments/logger","modules/clean/legacy_pyxl_controllers/login_form","modules/clean/register_form","modules/clean/sharing/signup_modal_proxy","modules/core/browser","modules/core/i18n","modules/core/notify"],function(e,t,o,n,i,r,a,s,l,u,c,d,_,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),s=o.__importDefault(s),l=o.__importDefault(l),d=o.__importStar(d);var p=(function(){function e(e){var t=this;this.handle_direct_download=function(e){t.direct_download_override_callback=e},this.handle_direct_download_cancel=function(e){t.on_direct_download_cancel=e},this.handle_default_modal_authenticate=function(e){t.on_default_modal_authenticate=e},this.handle_default_modal_cancel=function(e){t.on_default_modal_cancel=e},this.init_modals=this.init_modals.bind(this),this.before_signup_modal=this.before_signup_modal.bind(this),this.before_default_signup_modal=this.before_default_signup_modal.bind(this),this.before_download_signup_modal=this.before_download_signup_modal.bind(this),this.before_create_password_modal=this.before_create_password_modal.bind(this),this.show_welcome_modal=this.show_welcome_modal.bind(this),this.show_create_password_modal=this.show_create_password_modal.bind(this),this.on_request_direct_download=this.on_request_direct_download.bind(this),this.on_request_default_signup=this.on_request_default_signup.bind(this),this.direct_download=this.direct_download.bind(this),this.save_to_dropbox=this.save_to_dropbox.bind(this),this.show_login_form=this.show_login_form.bind(this),this.register_success=this.register_success.bind(this),this.kind=e,this.init_modals(),c.signupModalProxy.connectModal(this),"immediate"===this.kind&&(i.WebMiscActivityLogger.log("signup_modal-show-upfront",{auth_google:null!=n.default.find(".auth-google")}),this.default_signup_modal.show()),"download"!==this.kind?(n.default("#download_button_link, #default_content_download_button").click(this.direct_download),this.has_seen_modal=!0):n.default("#download_button_link, #default_content_download_button").click(function(){return t.has_seen_modal?t.direct_download():(t.has_seen_modal=!0,i.WebMiscActivityLogger.log("signup_modal-show-download",{auth_google:null!=n.default.find(".auth-google")}),t.download_type="direct_download",t.download_signup_modal.show())}),n.default(".add_to_my_dropbox_link, #default_content_a2md").click(function(){return t.download_type="add_to_dropbox",t.download_signup_modal.show()})}return e.prototype.init_modals=function(){var e=this;return this.default_signup_modal=new a.DBModal({element_id:"shared-link-immediate-signup-modal"}),this.default_signup_modal.before_show=this.before_default_signup_modal,this.default_signup_modal.on_hide=function(){if(!e._has_authenticated)return void(e.on_default_modal_cancel&&e.on_default_modal_cancel())},this.download_signup_modal=new a.DBModal({element_id:"shared-link-download-signup-modal"}),this.download_signup_modal.before_show=this.before_download_signup_modal,this.download_signup_modal.on_hide=function(){if(!e._direct_download_started)return void(e.on_direct_download_cancel&&e.on_direct_download_cancel())},this.welcome_modal=new a.DBModal({element_id:"shared-link-welcome-modal"}),this.welcome_modal.before_show=this.before_welcome_modal,this.create_password_modal=new a.DBModal({element_id:"shared-link-create-password-modal"}),this.create_password_modal.before_show=this.before_create_password_modal},e.prototype.before_signup_modal=function(e){var t=this;e.find(".toggle-form-link").click(function(){return t.toggle_form(e)});var o=e.find(".register-form");o.length&&(o.on(u.RegisterForm.NEW_ACCOUNT_FROM_3RD_PARTY,function(o,n){return t.profile_info=n,t.show_create_password_modal(e,t.profile_info)}),o.on(u.RegisterForm.USER_EXISTS,function(o){return t.show_login_form(e,o)}),o.on(u.RegisterForm.REGISTER_SUCCESS,function(e,o){return t.user_info=o,t.register_success(t.user_info)}));var n=e.find(".login-form");if(n.length)return n.on(l.default.LOGIN_SUCCESS,function(e,o){return t.user_info=o,m.Notify.success(_._("Successfully signed in to Dropbox")),t.download_type?"direct_download"===t.download_type?(t.direct_download(),t.reload()):"add_to_dropbox"===t.download_type?t.save_to_dropbox(!1):void 0:t.reload()})},e.prototype.before_default_signup_modal=function(e){var t=this;return this.before_signup_modal(e),e.find(".close-link").click(function(){return t.default_signup_modal.hide()})},e.prototype.before_download_signup_modal=function(e){var t=this;return this.before_signup_modal(e),this._direct_download_started=!1,"add_to_dropbox"===this.download_type&&(e.find(".login-form-component").is(":visible")||this.toggle_form(e)),e.find(".close-link").click(function(){return t.direct_download(),t.download_signup_modal.hide()})},e.prototype.before_create_password_modal=function(e){var t=this;return e.find(".close-link").click(function(){return t.create_password_modal.hide()}),e.find(".create-password-form-component").find(".register-form").on(u.RegisterForm.REGISTER_SUCCESS,function(e,o){return t.user_info=o,t.register_success(t.user_info)})},e.prototype.before_welcome_modal=function(e){return s.default.log("sharing","shared_link_welcome_modal_view"),e.find(".go-to-dropbox-button").click(function(){return s.default.log("sharing","shared_link_welcome_modal_button_click")}),e.find(".welcome-modal-no-thanks a").click(function(){return d.reload()})},e.prototype.show_welcome_modal=function(){return this.default_signup_modal.hide(),this.download_signup_modal.hide(),this.welcome_modal.show()},e.prototype.show_create_password_modal=function(e,t){this.default_signup_modal.hide(),this.download_signup_modal.hide();var o={".input-fname":this.profile_info.fname,".input-lname":this.profile_info.lname,".input-email":this.profile_info.email,"input[name=email_sig]":this.profile_info.email_sig,"input[name=refresh_token]":this.profile_info.refresh_token};return this.create_password_modal.show("input[name=password]",o)},e.prototype.on_request_direct_download=function(){if(this.has_seen_modal)return this.direct_download();this.has_seen_modal=!0,i.WebMiscActivityLogger.log("signup_modal-show-download",{auth_google:null!=n.default.find(".auth-google")}),this.download_type="direct_download",this.download_signup_modal.show()},e.prototype.on_request_default_signup=function(){this.download_type="add_to_dropbox",this._has_authenticated=!1,this.default_signup_modal.show()},e.prototype.direct_download=function(){if(this._direct_download_started=!0,this.direct_download_override_callback)return void this.direct_download_override_callback();var e=d.get_uri().updateQuery({dl:1});return d.redirect(e)},e.prototype.reload=function(){return d.reload()},e.prototype.save_to_dropbox=function(e){if(this.on_default_modal_authenticate)return this.on_default_modal_authenticate(this.user_info.id),this._has_authenticated=!0,void this.default_signup_modal.hide()},e.prototype.show_login_form=function(e,t){var o=e.find(".login-form-component"),n=o.find(".login-form");for(var i in t.prefill){var r=t.prefill[i];n.find(i).val(r)}if(n.find(t.focus).focus(),!o.is(":visible"))return this.toggle_form(e,!0)},e.prototype.toggle_form=function(e,t){var o=e.find(".register-form-component"),i=e.find(".login-form-component");return o.is(":visible")?(r.AuthEventLogger.log_web_login_intent(),o.fadeOut({complete:function(){if(i.show(),null!=t)return setTimeout(function(){return n.default(i.find(".login-form .login-password input[name='login_password']")[0]).focus()},0)}})):i.fadeOut({complete:function(){return o.show()}})},e.prototype.register_success=function(e){return m.Notify.success(_._("Successfully signed up for Dropbox.")),this.download_type?"direct_download"===this.download_type?(this.direct_download(),this.show_welcome_modal()):"add_to_dropbox"===this.download_type?this.save_to_dropbox(!1):void 0:this.show_welcome_modal()},e})();t.default=p}),define("modules/clean/legacy_pyxl_controllers/role_picker",["require","exports","tslib","external/lodash","modules/clean/multiaccount_login","modules/clean/page_role_observer","modules/clean/viewer","modules/core/controller_helpers","modules/core/exception"],function(e,t,o,n,i,r,a,s,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importStar(n),i=o.__importDefault(i),r=o.__importDefault(r),s=o.__importStar(s);var u={ALL:"all",PERSONAL:"personal",WORK:"work"};t.RolePickerState=u;var c=(function(){function e(e){null==e&&(e={}),this.get_state=this.get_state.bind(this),this.set_state=this.set_state.bind(this),this.ensure_role_is_visible=this.ensure_role_is_visible.bind(this),this.is_role_visible=this.is_role_visible.bind(this),this.is_user_visible=this.is_user_visible.bind(this),this._do_login=this._do_login.bind(this),this._actually_set_state=this._actually_set_state.bind(this),this._allow_merged_state=null==e.allow_merged_state||e.allow_merged_state,this._limit_to_role=null!=e.limit_to_role?e.limit_to_role:null;var t=a.Viewer.get_viewer(),o=t.is_role_signed_in(u.PERSONAL)&&t.is_role_signed_in(u.WORK);if(e.initial_state){var i=n.values(u);l.assert(Array.from(i).includes(e.initial_state),"RolePicker requires initial_state to be one of: "+i),this.set_state(e.initial_state)}else if(this._allow_merged_state&&o)this.set_state(u.ALL);else{var r=t.get_users();l.assert(r.length,"tried to use RolePicker on a page with no users");var s=r[0];this.set_state(s.role)}}return e.prototype.get_state=function(){return this._state},e.prototype.set_state=function(e){var t;if(l.assert(this._allow_merged_state||e!==u.ALL,"tried to set merged state in non-merged picker"),null!=this._limit_to_role&&l.assert(e===u.ALL||e===this._limit_to_role,"some awful assert about roles"),e===u.ALL){for(var o=0,n=["personal","work","photos"];o<n.length;o++)if(t=n[o],!a.Viewer.get_viewer().is_role_signed_in(t))return void this._do_login(t,e)}else if(t=e,!a.Viewer.get_viewer().is_role_signed_in(t))return void this._do_login(t,e);return this._actually_set_state(e)},e.prototype.update_picker_ui=function(){},e.prototype.ensure_role_is_visible=function(e){if(!this.is_role_visible(e))return this._allow_merged_state?this.set_state(u.ALL):this.set_state(e)},e.prototype.is_role_visible=function(e){return this._state===u.ALL||this._state===e},e.prototype.is_user_visible=function(e){return this.is_role_visible(e.role)},e.prototype._do_login=function(e,t){var o=this;return i.default.show_modal({role:e,on_success:function(){return o._actually_set_state(t)}})},e.prototype._actually_set_state=function(e){if(e!==this._state)return this._state=e,this.update_picker_ui(),"function"==typeof this.on_state_change?this.on_state_change(e):void 0},e})();t.RolePicker=c;var d=(function(e){function t(t,o){var n=this;return null==o&&(o={}),t.find(".bubble-picker").on("db:bubblepicker:changed",function(e,t){n.on_ui_change(e,t)}),n=e.call(this,o)||this,n.on_ui_change=n.on_ui_change.bind(n),n.update_picker_ui=n.update_picker_ui.bind(n),n.limit_to_role=n.limit_to_role.bind(n),n.$container=t,n.$bubble_picker=n.$bubble_picker,n}return o.__extends(t,e),t.prototype.on_ui_change=function(e,t){var o=t.clicked_val;if(o!==this._state)return s.get_controller(this.$bubble_picker).set_value(this._state),this.set_state(o)},t.prototype.update_picker_ui=function(){return s.get_controller(this.$bubble_picker).set_value(this._state)},t.prototype.limit_to_role=function(e,t){var o,n;if(null!=e){this.ensure_role_is_visible(e);for(o in u)n=u[o],n!==e&&n!==u.ALL&&s.get_controller(this.$bubble_picker).disable_option(n,t)}else for(o in u)n=u[o],s.get_controller(this.$bubble_picker).enable_option(n);return this._limit_to_role=e},t})(c);t.RoleSelect=d;var _=(function(e){function t(t,o){return null==o&&(o={}),o.allow_merged_state=!1,e.call(this,t,o)||this}return o.__extends(t,e),t.prototype.on_state_change=function(e){var t=(function(){switch(e){case u.PERSONAL:return"personal";case u.WORK:return"work"}})();return r.default.emit(t)},t})(d);t.PageRoleSelect=_}),define("modules/clean/react/file_sidebar/comments_wrapper_component",["require","exports","tslib","react","modules/clean/activity/constants","modules/clean/comments/action_creators","modules/clean/react/css","modules/clean/comments/components/file_comments_pane_container"],function(e,t,o,n,i,r,a,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),r=o.__importDefault(r),s=o.__importDefault(s);var l=function(e){var t=e.activityContext,o=e.commentsDisabledOnFile,a=e.currentFile,l=e.sharedLinkInfo,u=e.shouldInitiallyFocusInput,c=e.user,d=c?c.id:void 0,_=null;switch(t){case i.ActivityContext.BROWSE_FILE_VIEWER:_=a.fq_path;break;case i.ActivityContext.SHARED_CONTENT_LINK_VIEW:case i.ActivityContext.SHARED_LINK_VIEW:l&&(_=l.url)}return n.default.createElement("div",{className:"react-file-viewer__activity"},n.default.createElement(s.default,{actionCreators:r.default,actorId:d,commentsDisabledOnFile:o,context:t,contextData:_,currentFile:a,previewSelector:".react-file-viewer__preview .flex-preview-container",shouldInitiallyFocusInput:u,showToggleButton:!1}))},u=["/static/css/comments-vflFaRlxG.css","/static/css/comments_annotations-vflT6HX_-.css","/static/css/file_comments_pane-vflMEOpSG.css"];t.CommentsWrapperComponent=a.requireCssWithComponent(l,u)}),define("modules/clean/react/file_viewer/container",["require","exports","tslib","esignature_prototype/data/store","react","modules/clean/react/file_viewer/file_viewer","modules/clean/open_in_app/actions","modules/clean/sharing/async_share_modal_util","modules/clean/viewer","modules/clean/react/file_viewer/data/store","modules/clean/web_timing_logger","modules/clean/react/modal","esignature_prototype/components/esignature_utility_modals"],function(e,t,o,n,i,r,a,s,l,u,c,d,_){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=o.__importDefault(i);var m=(function(t){function m(e){var o=t.call(this,e)||this,r=l.Viewer.get_viewer(),a=e.userId?r.get_user_by_id(e.userId):r.work_user||r.personal_user;o.state={user:a},c.log_js_modules_application_code_start();var s=e.file,m=u.getStoreForFileViewer();return u.hydrateFileViewerNamespace(m,{file:s}),o.props.eSigInfo&&(o.props.eSigInfo.expired?d.Modal.showInstance(i.default.createElement(_.EsignatureExpiredModalRecipient,{sender:o.props.eSigInfo.sender,date:o.props.eSigInfo.date})):o.props.eSigInfo.corrupted?d.Modal.showInstance(i.default.createElement(_.EsignatureCorruptedModal,null)):n.hydrateEsignatureNamespace(m,o.props.eSigInfo)),o}return o.__extends(m,t),m.prototype.componentDidMount=function(){var t=this,n=this.props.shareEmail;if(n&&this.state.user&&new Promise(function(t,o){e(["modules/clean/react/browse/models"],t,o)}).then(o.__importStar).then(function(e){var o=e.File;s.asyncShowPrefilledShareModal({user:t.state.user,sharePrefillEmail:n,content:new o(t.props.file)})}),this.props.openImmediatelyInApp){var i=this.props.file;a.openImmediately(i.open_in_app_data)}},m.prototype.render=function(){var e=this.props,t=e.fileViewerProps,n=e.onCloseUrl,a=e.isEmbedded,s=e.sharedLinkInfo,l=e.shareToken,u=e.sharePermission,c=i.default.createElement(r.FileViewer,o.__assign({},t,{fileCount:1,fileIndex:0,titleBarCloseUrl:n,sharedLinkInfo:s,shareToken:l,sharePermission:u,user:this.state.user,transparentBackground:!0}));return a?i.default.createElement("div",{className:"embedded"},c):c},m})(i.default.Component);t.FileViewerContainer=m}),define("modules/clean/react/share_sync/actions",["require","exports","tslib","modules/clean/multiaccount_login","modules/clean/viewer","modules/clean/sharing/shared_content_link_mount_folder"],function(e,t,o,n,i,r){"use strict";function a(e,t,o){new Promise(function(e,o){i.Viewer.get_viewer().is_role_signed_in(t)?e():n.default.show_modal({role:t,on_success:function(){e()}})}).then(function(){r.mountSharedFolder(e,t,o)})}Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),r=o.__importStar(r),t.syncToDropbox=a}),define("modules/clean/react/share_sync/button",["require","exports","tslib","react","modules/clean/filepath","modules/clean/react/bubble_menu","modules/clean/react/share_sync/models","modules/clean/react_format","modules/clean/sharing/constants","modules/clean/sharing/views/sync_coachmark","modules/clean/react/sprite_div","modules/clean/viewer","modules/core/i18n","modules/constants/payments"],function(e,t,o,n,i,r,a,s,l,u,c,d,_,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importStar(i),l=o.__importStar(l),c=o.__importDefault(c),m=o.__importStar(m);var p=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.render=function(){var e=this.props.options.map(function(e){return n.default.createElement(r.BubbleMenuItem,{onClick:function(){return e.handler()},disabled:e.isDisabled},n.default.createElement(c.default,{group:"web",name:e.spriteName,text:e.text}))});return n.default.createElement(r.BubbleMenu,{targetButton:this.props.targetButton,position:r.BubbleMenu.POSITIONS.BOTTOM,verticalDisplacement:4,items:e})},t})(n.default.Component),f=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.prototype.onClickedOption=function(e,t){e.preventDefault(),t.handler()},t.prototype.getSyncOptions=function(){var e=this,t=this.props.sharePermission.canSyncToDropboxRoles,o=d.Viewer.get_viewer();return t.map(function(t){return a.ShareSyncActionOption.buildOption(e.props.folder,o,t,l.SHARE_ACTION_ORIGIN_TYPE.PREVIEW_PAGE)})},t.prototype.renderSyncCoachmark=function(){var e=this.props.sharePermission.canSyncToDropboxRoles.length>0;return this.props.showSyncCoachmark&&e?n.default.createElement("div",{className:"sync-button__coachmark-container"},n.default.createElement(u.SharingSyncCoachmark,null)):null},t.prototype.renderSyncButton=function(){var e=this;if(""!==this.props.shareToken.subPath)return null;if(0===this.props.sharePermission.canSyncToDropboxRoles.length)return null;var t="button-primary control__button sync-button";if(this.props.outOfQuota){var o=m.OUT_OF_SPACE_URL+"?oqa=wb_oq_pre_fo_up_b";return n.default.createElement("a",{className:t,href:o},_._("Upgrade to Add Folder"))}var r=void 0;if(this.props.user&&this.props.user.is_cdm_member){var a=i.filename(this.props.user.cdm_tmf_path);r=a.length>25?_._("Add to my member folder"):s.reactFormat(_._("Add to <strong>%(cdm_tmf_name)s</strong> folder"),{cdm_tmf_name:a,strong:n.default.createElement("strong",{style:{fontWeight:800}})})}else r=_._("Add to Dropbox");var l=this.getSyncOptions();if(1===l.length)return n.default.createElement("button",{className:t,style:{display:"-webkit-box"},onClick:function(t){return e.onClickedOption(t,l[0])}},r);var u=n.default.createElement("button",{className:t},r);return n.default.createElement(p,{targetButton:u,folder:this.props.folder,shareToken:this.props.shareToken,options:l})},t.prototype.render=function(){return n.default.createElement("div",null,this.renderSyncCoachmark(),this.renderSyncButton())},t})(n.default.Component);t.ShareSyncButton=f}),define("modules/clean/react/share_sync/models",["require","exports","tslib","external/immutable","react","modules/clean/filepath","modules/clean/react/share_sync/actions","modules/clean/react_format","modules/core/i18n"],function(e,t,o,n,i,r,a,s,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importStar(n),i=o.__importDefault(i),r=o.__importStar(r),a=o.__importStar(a);var u={text:void 0,handler:void 0,isDisabled:!1,spriteName:void 0},c=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.buildOption=function(e,o,n,u){var c=l._("Save to my Dropbox"),d="dropbox",_=o.get_user_by_role(n);if(_&&_.is_cdm_member){var m=r.filename(_.cdm_tmf_path);c=m.length>12?l._("Save to my member folder"):s.reactFormat(l._("Save to <strong>%(cdm_tmf_name)s</strong> folder"),{cdm_tmf_name:m,strong:i.default.createElement("strong",null)}),o.is_paired&&(d="s_briefcase")}else if(o.is_paired)switch(n){case"personal":c=l._("Save to personal Dropbox"),d="s_house";break;case"work":c=l._("Save to %(team_name)s Dropbox").format({team_name:o.team_name}),d="s_briefcase"}return new t({text:c,handler:function(){a.syncToDropbox(e.shared_folder_id,n,u)},spriteName:d})},t})(n.Record(u));t.ShareSyncActionOption=c}),define("modules/clean/sharing/notifications",["require","exports","tslib","jquery","modules/clean/browse_interface","modules/clean/sharing/api/client","modules/clean/sharing/ui_notifications_util","modules/clean/viewer","modules/constants/payments","modules/core/browser","modules/core/i18n","modules/core/uri"],function(e,t,o,n,i,r,a,s,l,u,c,d){"use strict";function _(e,t){return void 0!==e&&null!==e?t(e):void 0}Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importStar(i),l=o.__importStar(l),u=o.__importStar(u);var m=function(e){var t=n.default(e).closest("form");return _(t.closest(".sc-invite-action"),function(e){return e.addClass("loading")}),t.length&&new r.ShareApiClient({userId:t[0]._subject_uid.value}).dismissInviteNotification({contentId:t[0].content_id.value}).finally(function(){return t.closest(".sc-invite-action").removeClass("loading"),t.closest(".feed-row").remove()}),!1};t.register_dismiss=m;var p=function(e){var t=n.default(e);t.closest(".sc-invite-action").addClass("loading");var o=s.Viewer.get_viewer().get_user_by_id(e._subject_uid.value);return new r.FolderShareApiClient({userId:o.id}).mount({contentId:e.sf_id.value,origin:"NOTIFICATION_WEB"}).then(function(e){t.closest(".sc-invite-action").addClass("sf-mounted");var n=e.path_lower,r=new d.URI({path:i.get_browse_root(o)+n}).toString();return u.redirect(r),a.sharingNotificationSuccess(c._("Added the shared folder %(folder_name)s.").format({folder_name:e.name}))}).finally(function(){return t.closest(".sc-invite-action").removeClass("loading")}),!1};t.register_mount=p;var f=function(){a.sharingNotificationInfo(c._("Continue upgrading to add the shared folder to your Dropbox."));var e=l.BUY_URL,t=new d.URI({scheme:"https",authority:"www.dropbox.com",path:e});return t.updateQuery({cont:"sf",oqa:"sf_aoq_b_n"}),u.redirect(t.toString()),!1};t.upgrade_to_mount=f}),define("modules/clean/sharing/views/sync_coachmark",["require","exports","tslib","react","modules/clean/ajax","modules/clean/react/bubble","modules/clean/react/css","modules/clean/react/image","modules/clean/static_urls","modules/core/i18n"],function(e,t,o,n,i,r,a,s,l,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importStar(i),r=o.__importDefault(r),u=o.__importStar(u);var c=u.i18n_default_project("sharing")._,d=(function(e){function t(){var t=e.call(this)||this;return t.hideSyncCoachmark=function(){t.setState({show:!1})},t.state={show:!0},t}return o.__extends(t,e),t.prototype.componentWillMount=function(){i.BackgroundRequest({url:"/sharing/seen_sync_coachmark"})},t.prototype.render=function(){return this.state.show?n.default.createElement(r.default,{arrow:r.default.ARROW.TOP_RIGHT,className:"sync-coachmark u-pad-s"},n.default.createElement(s.Image,{className:"u-l-ib",src:l.static_url("/static/images/sharing/sync_coachmark-vflyzarQZ.png"),srcHiRes:l.static_url("/static/images/sharing/sync_coachmark@2x-vflMrQ12G.png")}),n.default.createElement("div",{className:"u-l-ib u-pad-left-s sync-coachmark__content"},n.default.createElement("h2",null,c("Stay in sync")),n.default.createElement("p",null,c("For easy access to this folder in the future, add it to your Dropbox.")),n.default.createElement("button",{className:"c-btn c-btn--secondary",onClick:this.hideSyncCoachmark},c("Got it")))):n.default.createElement("div",null)},t.displayName="SharingSyncCoachmark",t})(n.default.Component);t.SharingSyncCoachmark=a.requireCssWithComponent(d,["/static/css/sharing/sync_coachmark-vfl_8vkAL.css"])}),define("modules/clean/teams/limited_team_invite_form",["require","exports","tslib","external/classnames","react","external/react-dom-factories","modules/core/uri","modules/core/i18n","modules/clean/react_format","modules/clean/ajax","modules/clean/analytics","modules/clean/css","modules/clean/contacts/contact_token_state","modules/clean/contacts/tokenizer","modules/clean/contacts/types","modules/clean/react/input","modules/core/browser"],function(e,t,o,n,i,r,a,s,l,u,c,d,_,m,p,f,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importDefault(i),r=o.__importStar(r),u=o.__importStar(u),d=o.__importStar(d),p=o.__importDefault(p),f=o.__importStar(f),h=o.__importStar(h);var g=f.textarea,v=(function(){function e(){this.inFlight=!0,this.canInvite=!1,this.reason="checking",this.callbacks=[]}return e.prototype.whenReady=function(e){this.inFlight?this.callbacks.push(e):e()},e.prototype.resultArrived=function(e,t){if(this.inFlight){this.inFlight=!1,this.canInvite=e,this.reason=t;for(var o=0,n=this.callbacks;o<n.length;o++){(0,n[o])()}this.callbacks=[]}},e})(),b=(function(){function e(e){var t=this;this.checkEmails=function(e,o){var n={},i=e.length;if(0===i)return o(n);for(var r=[],a=function(e){var a=t.checkedEmails[e];a||(a=t.checkedEmails[e]=new v,r.push(e)),a.whenReady(function(){n[e]=a,0===--i&&o(n)})},s=0,l=e;s<l.length;s++){a(l[s])}(function(e){u.WebRequest({url:t.checkUrl,data:{emails:e.join(",")},success:function(e){var o=JSON.parse(e);for(var n in o)if(o[n]){var i=o[n],r=i.can_invite,a=i.reason;t.checkedEmails[n]&&t.checkedEmails[n].resultArrived(r,a)}},error:function(){for(var o=0,n=e;o<n.length;o++){var i=n[o];delete t.checkedEmails[i]}}})})(r)},this.getEmailCheckResult=function(e){return t.checkedEmails[e]},this.checkUrl=e,this.checkedEmails={}}return e})();t.InvitationContexts={existingTeam:{id:"existingTeam",checkUrl:"/team/manage/check_can_invite"},createLimitedTeam:{id:"createLimitedTeam",checkUrl:"/team/create_limited/check_can_invite"}};var w={};for(var y in t.InvitationContexts)if(t.InvitationContexts[y]){var k=t.InvitationContexts[y],S=k.id,C=k.checkUrl;w[S]=new b(C)}var x=(function(e){function u(t){var o=e.call(this,t)||this;return o._isUnMounted=!1,o.getContacts=function(){return o.refs.tokenizer.getContacts()},o.getFinalData=function(e){var t;o.refs.tokenizer.tokenizeAll();var n=o.getContacts();o.props.includeCustomMessage&&(t=o.refs.customMessage.getValue()),o._ensureContactsStateUpdated(n,function(){var i=n.filter(function(e){return e.type===p.default.EMAIL}),r=i.map(function(e){return e.email});o._updateErrorMessage(function(){c.TeamsWebActionsLogger.log("suggest_members_entered_email_error",{error_message:o.state.errorMessage,url:h.get_href()})}),e({emails:r,custom_message:t})})},o.areAllContactsValid=function(){if(o._overInviteLimit())return!1;var e=o.refs.tokenizer.serializeInputData().tokens;return 0===e.length||e.every(function(e){return o._validateContact(e).state===_.ContactTokenState.ok})},o.isEmpty=function(){var e=o.refs.tokenizer.serializeInputData(),t=e.tokens,n=e.value;return 0===t.length&&0===n.length},o._ensureContactsStateUpdated=function(e,t){e=e.filter(function(e){return e.type===p.default.EMAIL&&!e.invalid&&!e.on_team});var n=e.map(function(e){return e.email});o.state.emailCheckerStore.checkEmails(n,function(){o._isUnMounted||t()})},o._validateContact=function(e){var t;if(e.invalid)t={state:_.ContactTokenState.invalid,msg:s._("Invalid email.")};else if(e.on_team)t={state:_.ContactTokenState.invalid,msg:s._("User is already a member of this team.")};else{var n=o.state.emailCheckerStore.getEmailCheckResult(e.email),i=null;n?n.inFlight?t={state:_.ContactTokenState.pending,msg:i}:n.canInvite?t={state:_.ContactTokenState.ok,msg:i}:("team_member"===n.reason?i=s._("This person is already on another team."):"already_on_this_team"===n.reason?i=s._("User is already invited to this team."):"error"===n.reason&&(i=s._("User isn’t eligible to join this team.")),t={state:_.ContactTokenState.invalid,msg:i}):t={state:_.ContactTokenState.invalid,msg:i}}return t},o._overInviteLimit=function(){var e=o.refs.tokenizer.serializeInputData().tokens;return void 0!==o.props.memberInviteLimit&&e.length>o.props.memberInviteLimit},o._updateErrorMessage=function(e){for(var t=0,n=o.refs.tokenizer.serializeInputData().tokens;t<n.length;t++){var i=n[t],u=o._validateContact(i),c=u.state,d=u.msg;if(c!==_.ContactTokenState.ok)return void o.setState({errorMessage:d},e)}if(o._overInviteLimit()){var m={tk:String(o.props.maxTeamSize),_camp:"invite"},p=new a.URI({path:"/team/upgrade",query:m});return void o.setState({errorMessage:l.reactFormat(s.ungettext("You have %(num_rem)s invite remaining. <upgradeLink>Upgrade</upgradeLink> now to add as   many members as you like to your team.","You have %(num_rem)s invites remaining. <upgradeLink>Upgrade</upgradeLink> now to add as   many members as you like to your team.",o.props.memberInviteLimit),{num_rem:o.props.memberInviteLimit,upgradeLink:r.a({href:p.toString()})})},e)}o.setState({errorMessage:null})},o.onContentsChange=function(e,t){o._ensureContactsStateUpdated(e,function(){o._updateErrorMessage(),o.props.onChange&&o.props.onChange()})},o._customContactFilter=function(e){return!(e.type!==p.default.EMAIL||e.team||!e.name||e.email===o.props.user.email)},o.state={errorMessage:null,emailCheckerStore:o.props.emailCheckerStore||w[o.props.invitationContext.id]},o}return o.__extends(u,e),u.prototype.componentWillMount=function(){var e=this;d.require_css("/static/css/teams/limited_team_invite_form-vflcSjpys.css"),
d.require_css("/static/css/react/contacts_tokenizer-vflQsfYaG.css"),this.props.populatedContacts&&this.props.populatedContacts.length>0&&this._ensureContactsStateUpdated(this.props.populatedContacts,function(){e._updateErrorMessage(),e.props.onChange&&e.props.onChange()})},u.prototype.componentDidUnMount=function(){this._isUnMounted=!0},u.prototype.render=function(){var e,t={"limited-team-invite-form":!0,"error-message-fixed":this.props.errorMessageSpaceFixed,"has-custom-message":this.props.includeCustomMessage};return this.props.includeCustomMessage&&(e=i.default.createElement(g,{ref:"customMessage",className:"custom-message","disable-errors":!0,placeholder:this.props.messagePlaceholder,value:this.props.populatedCustomMessage})),i.default.createElement("div",{className:n.default(t,this.props.customClass)},i.default.createElement("div",{className:"error-message u-mar-bottom-xss"},this.props.customErrorMessage||this.state.errorMessage),i.default.createElement(m.ContactsTokenizer,{ref:"tokenizer",user:this.props.user,placeholder:this.props.emailPlaceholder,onContentsChange:this.onContentsChange,autofocus:this.props.autofocusTokenizer,populatedInputData:{tokens:this.props.populatedContacts,value:""},tokenSpacing:this.props.tokenSpacing,customContactValidator:this._validateContact,customContactFilter:this._customContactFilter}),e)},u.displayName="LimitedTeamInviteForm",u.defaultProps={customClass:"",invitationContext:t.InvitationContexts.existingTeam,populatedContacts:[],emailPlaceholder:s._("Name or email"),messagePlaceholder:s._("Add a message (optional)"),includeCustomMessage:!0,autofocusTokenizer:!0},u})(i.default.Component);t.LimitedTeamInviteForm=x}),define("modules/clean/top_notif",["require","exports","tslib","jquery","modules/clean/ajax"],function(e,t,o,n,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n=o.__importDefault(n),i=o.__importStar(i);var r={HIDE_EVENT:"db:topnotificationbar:hide",show:function(){(e=document.body.classList).add.apply(e,["top-notification-bar","has-top-notification"]);var e},hide:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n.default("#top-notification-bar-container").remove(),n.default(".top-notification-bar-silo").remove(),(o=document.body.classList).remove.apply(o,["top-notification-bar","has-top-notification"]),n.default(".embedded-app.IndexRebrandPage.top-notification-bar").removeClass("top-notification-bar"),n.default(".maestro #notify-wrapper.with-top-notification").removeClass("with-top-notification"),n.default(document).trigger(this.HIDE_EVENT);var o},hideById:function(e){document.querySelector(".top-notification-bar-container #"+e)&&r.hide()}};t.TopNotificationBar=r;var a={init:function(){return r.show(),n.default(".eu-bar-dismiss").on("click",function(e){return e.preventDefault(),r.hide(),i.SilentBackgroundRequest({url:"/dismiss_eu_cookie_notification"})})}};t.EUCookieNotificationBar=a;var s={init:function(){return r.show(),n.default(".expired-ios-bar-dismiss").on("click",function(e){return e.preventDefault(),r.hide(),i.SilentBackgroundRequest({url:"/dismiss_expired_ios_notification"})})}};t.ExpiredIOSNotificationBar=s;var l={init:function(){return r.show(),n.default("#locale-switch-banner-dismiss").on("click",function(e){return e.preventDefault(),r.hide(),i.SilentBackgroundRequest({url:"/dismiss_locale_switch_banner"})})}};t.LocaleSwitchBar=l;var u={init:function(){return r.show(),n.default("#super-inactive-recover-bar-dismiss").on("click",function(e){return e.preventDefault(),r.hide(),i.SilentBackgroundRequest({url:"/dismiss_super_inactive_recover_bar"})})}};t.SuperInactiveRecoverBar=u;var c={init:function(){return r.show(),n.default("#unsupported-browser-dismiss").on("click",function(e){return e.preventDefault(),r.hide(),i.SilentBackgroundRequest({url:"/dismiss_browser_msg"})})}};t.UnsupportedBrowser=c;var d={init:function(e){return r.show(),n.default(".expired-dismiss").on("click",function(t){return t.preventDefault(),r.hide(),i.SilentBackgroundRequest({url:"/dismiss_expired_cc_notification",data:{source:e}})})}};t.ExpiredCCNotificationBar=d;var _={init:function(e){return r.show(),n.default(".beta-locale-dismiss").on("click",function(t){return t.preventDefault(),r.hide(),i.SilentBackgroundRequest({url:"/dismiss_beta_locale_notification",data:{source:e}})})}};t.BetaLocaleNotificationBar=_});
//# sourceMappingURL=pkg-legacy-aa.min.js-vflyVpEdk.map