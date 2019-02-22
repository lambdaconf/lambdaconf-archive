define("modules/clean/appshell/account",["require","exports"],function(e,t){"use strict";function a(e,t){var a=window.location.href,n=r(a,e.viewer,e.viewer.getActiveUser().userId,t);n&&(sessionStorage.setItem("Ensemble.switchedAccounts","true"),window.location.href=n)}function r(e,t,a,r){if(r===a)return null;var s=o(e);if(parseInt(r.toString(),10)!==r)throw new Error("switchAccount takes an integer subjectUidToSwitchTo. got: "+r);var i=t.getUserById(r).role,c=s.pathname;return"/"!==c[0]&&(c="/"+c),"/history"===c.substr(0,8)||"/event_details"===c.substr(0,14)?(s.pathname="/"+i,s.href):("/team"===c.substr(0,5)?s.pathname="/personal":"/photos"===c.substr(0,7)?s.pathname="/work":"/work"===c?s.pathname="/personal":"/personal"===c&&(s.pathname="/work"),n(c)?(s.pathname="/"+i,s.href):(s.search="role="+i,s.href))}function n(e){return"/scl"===e.substr(0,4)||"/sh"===e.substr(0,3)||"/s"===e.substr(0,2)}function o(e){var t=document.createElement("a");t.href=e;var a=t.pathname;0!==a.indexOf("/")&&(a="/"+a);for(var r=["/work","/personal","/home","/history","/s","/sh","/scl","/team/admin/members","/team/admin/team_folders","/team/admin/content","/team/admin/billing","/team/admin/settings"],n=0,o=r;n<o.length;n++){var s=o[n];if(a===s||0===a.indexOf(s+"/")){a=s;break}}return 0===a.indexOf("/share/")&&(a="/share"),"/search/personal"===a?a="/personal":"/search/work"===a?a="/work":"/search/home"===a?a="/home":"/team_checklist"===a?a="/h":"/business/billing"===a&&(a="/team/admin/billing"),t.pathname=a,t.search="",t.hash="",t}Object.defineProperty(t,"__esModule",{value:!0}),t.switchAccount=a,t._computeAccountSwitchUrl=r,t.isSharedLinkCase=n,t.computeFeatureBaseUrlFromUrl=o}),define("modules/clean/react/maestro_nav/maestro_nav",["require","exports","tslib","react","external/classnames","spectrum/vertically_fixed","modules/clean/appshell/account","modules/clean/react/css","modules/clean/react/maestro_nav/shared_code/maestro_sidebar","modules/clean/react/maestro_nav/user-plan-description","modules/clean/react/maestro_nav/util/post_tti_components","modules/clean/viewer","modules/core/browser","modules/clean/react/maestro_nav/shared_code/api","modules/clean/react/maestro_nav/shared_code/strings","modules/core/xhr","modules/clean/appshell/account","modules/clean/payments/skus/constants"],function(e,t,a,r,n,o,s,i,c,l,u,d,m,p,f,v,_,h){"use strict";function g(e,t){function a(e){return s.computeFeatureBaseUrlFromUrl(e).href}function r(e,t,r){var n=r.map(a);return n.indexOf(e)!==-1&&n.indexOf(t)!==-1}var n=a(t),o=a(e);return!(!r(n,o,["/home","/work","/personal","/history","/s","/sh","/scl"])&&!r(n,o,["/team/admin","/team/admin/members"]))||n===o}Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),n=a.__importDefault(n),m=a.__importStar(m);var w=function(){return d.Viewer.get_viewer().get_users().map(function(e){return e.id})},N=function(e,t){v.sendXhr("/teamswalogger",{event_name:e,extra:JSON.stringify(t),for_uids:JSON.stringify(w())})};t.isFeatureActive=g;var E=function(){return window.location.href},b=function(e){return r.default.createElement("button",{className:"maestro_nav__toggle",onClick:e.onClick,"aria-label":e.navToggleAriaLabel},r.default.createElement("svg",{width:"24",height:"18",viewBox:"0 0 24 18"},r.default.createElement("g",{fill:"#637282",fillRule:"evenodd"},r.default.createElement("rect",{x:"0",y:"0",width:"24",height:"2",rx:"1"}),r.default.createElement("rect",{x:"0",y:"8",width:"24",height:"2",rx:"1"}),r.default.createElement("rect",{x:"0",y:"16",width:"24",height:"2",rx:"1"}))))},S=function(e){return r.default.createElement("button",{className:"maestro_nav__curtain",onClick:e.onClick,"aria-label":e.navToggleAriaLabel})},k=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){return r.default.createElement(y,{activeAccountId:this.props.activeAccountId,ssrActiveProduct:this.props.ssrActiveProduct,viewerInfo:this.props.viewerInfo,products:this.props.products,isFeatureActive:g,experiments:this.props.experiments})},t})(r.default.Component),y=(function(t){function s(n){var o=t.call(this,n)||this;o.navigateToUrl=function(e){m.redirect(e)},o.navSwitchAccount=function(e){var t=d.Viewer.get_viewer();_.switchAccount(window.ensemble,t.get_user_by_role(e,!0).id)},o.handleNavToggle=function(){o.setState({isExpanded:!o.state.isExpanded})},o.handleNavigationClick=function(t,r){if(r.isBlocked){var n=void 0;switch(r.blockerModule){case"modules/clean/teams/locked_team_nav_blocker":n=new Promise(function(t,a){e(["modules/clean/teams/locked_team_nav_blocker"],t,a)}).then(a.__importStar);break;default:return}n.then(function(e){return e.blocker.blockNav(r)})}},o.renderNewAdminCoachMark=function(e){var t=o.props.activeAccountId,a=o.state.experiments;return Boolean(m.get_href().match(/\h/)&&"admin"===e.uniqueName&&"V1"===o.expSubgrowthBizTeamsMoreAdmins)?r.default.createElement(u.PostTTINewAdminCoachMark,{activeAccountId:t,tooltipContent:a.newAdminCoachMarkStrings}):null};var s=o.props.ssrActiveProduct,i=null;return null==window.RUNNING_IN_REACTSERVER&&(s=o.getActiveProduct(o.props.products),i=o.getActiveFeature(s)),o.state={isExpanded:!1,products:o.props.products,teamSize:null,numMembersString:null,viewerInfo:o.props.viewerInfo,activeProduct:s,activeFeature:i,experiments:{}},o}return a.__extends(s,t),Object.defineProperty(s.prototype,"expSubgrowthBizTeamsMoreAdmins",{get:function(){var e=this.state.experiments;return(void 0===e?{}:e).subgrowth_biz_teams_more_admins},enumerable:!0,configurable:!0}),s.prototype.getActiveProduct=function(e){var t=this;return e.find(function(e){return t._productIsActive(e)})||null},s.prototype._productIsActive=function(e){return!!this.props.isFeatureActive(e.url,E())||!!this.getActiveFeature(e)},s.prototype.getActiveFeature=function(e){var t=this;return e?e.features.find(function(e){return t.props.isFeatureActive(e.url,E())})||null:null},s.prototype.getActiveProductAndFeature=function(e){var t=this.getActiveProduct(e);return{activeProduct:t,activeFeature:this.getActiveFeature(t)}},s.prototype.componentDidMount=function(){var e=this;p.fetchNavData(this.props.activeAccountId,function(t,a,r,n,o){var s=window.performance&&window.performance.mark&&window.performance.measure&&window.location.search.indexOf("show_debug_spans")>-1;s&&window.performance.mark("MaestroNav data setState start"),n=n||e.state.viewerInfo;var i=e.getActiveProductAndFeature(t),c=i.activeProduct,l=i.activeFeature;e.setState({products:t,teamSize:a,numMembersString:r,viewerInfo:n,activeProduct:c,activeFeature:l,experiments:o},function(){s&&(window.performance.mark("MaestroNav data setState end"),window.performance.measure("MaestroNav data setState","MaestroNav data setState start","MaestroNav data setState end"))})})},s.prototype.setTitle=function(e,t){t&&t.pageTitle?document.title=t.pageTitle:e&&e.pageTitle&&(document.title=e.pageTitle)},s.prototype.productHasFeatures=function(e){return!!e&&e.features.length>0},s.prototype.render=function(){var e,t=this.state.experiments||{},a=t.growthTciHomePlanDescription,s=t.userPlanDescriptionStrings,i=t.userPlanType;e=this.productHasFeatures(this.state.activeProduct)?"Feature":"Product",this.setTitle(this.state.activeProduct,this.state.activeFeature);var u,d,m,p=n.default({"maestro-nav__offset-container":!0,"maestro-nav__expanded":this.state.isExpanded,"maestro-nav__offset-container--plus":i===h.ProductPlanType.PLUS,"maestro-nav__offset-container--professional":i===h.ProductPlanType.PROFESSIONAL,"maestro-nav__offset-container--growthTciHomePlanDescriptionV2":"V2"===a});if(s&&("V1"===a&&s.displayName&&(u=r.default.createElement("span",{className:"maestro-nav__plan-name"},s.displayName)),"V2"===a)){var _=void 0;switch(i){case h.ProductPlanType.PLUS:d="#0d2481",_="plus_plan_desc_view";break;case h.ProductPlanType.PROFESSIONAL:d="#005744",_="pro_plan_desc_view"}m=r.default.createElement(l.UserPlanDescription,{sendXhr:v.sendXhr,features:s.features,dropboxDisplayName:s.dropboxDisplayName,header:s.header,hoverEventName:_})}return r.default.createElement(o.VerticallyFixed,{className:p},r.default.createElement(b,{onClick:this.handleNavToggle,navToggleAriaLabel:f.navToggleAriaLabel()}),r.default.createElement(S,{onClick:this.handleNavToggle,navToggleAriaLabel:f.navToggleAriaLabel()}),r.default.createElement(c.MaestroSidebar,{activeFeature:this.state.activeFeature,activeProduct:this.state.activeProduct,onNavigationClick:this.handleNavigationClick,products:this.state.products,navType:e,navigateToUrl:this.navigateToUrl,switchAccount:this.navSwitchAccount,viewerInfo:this.state.viewerInfo,teamSize:this.state.teamSize,numMembersString:this.state.numMembersString,logger:N,renderNewAdminCoachMark:this.renderNewAdminCoachMark,planNameElement:u,dropboxLogoColor:d,userPlanDescriptionElement:m}))},s})(r.default.Component);t.MaestroNavInternal=y;var P=i.requireCssWithComponent(k,["/static/css/maestro-nav/maestro-nav-vflgiN6I5.css"]);t.MaestroNav=P;var A=function(e){return r.default.createElement("div",{className:"maestro-nav-component"},r.default.createElement(P,a.__assign({},e)))};t.MaestroNavWithWrapper=A}),define("modules/clean/react/maestro_nav/post_tti/api",["require","exports","tslib","modules/clean/web_timing_logger","modules/clean/react/async/loadable"],function(e,t,a,r,n){"use strict";function o(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(t){switch(t.label){case 0:return[4,r.waitForTTI()];case 1:return t.sent(),[4,new Promise(function(t,a){e(["modules/clean/react/maestro_nav/post_tti/interface"],t,a)}).then(a.__importStar)];case 2:return[2,t.sent()]}})})}function s(e){var t=this,r=e.getPostTTIRenderer,s=e.preTTIRenderer;return n.Loadable({loader:function(){return a.__awaiter(t,void 0,void 0,function(){var e;return a.__generator(this,function(t){switch(t.label){case 0:return e=r,[4,o()];case 1:return[2,e.apply(void 0,[t.sent()])]}})})},loading:s})}Object.defineProperty(t,"__esModule",{value:!0}),t.waitForHomeTTI=o,t.PostNavTTIComponent=s}),define("modules/clean/react/maestro_nav/shared_code/api",["require","exports","modules/clean/react/maestro_nav/shared_code/constants"],function(e,t,a){"use strict";function r(e,t){var r=new XMLHttpRequest,n="https://"+a.WWW_HOST+"/nav_menu?_subject_account_id="+e+"&nav_data_version=4";r.open("GET",n,!0),r.withCredentials=!0,r.onload=function(){if(!(r.status>=200&&r.status<400))throw new Error("Error status "+r.status+" returned from /nav_menu");try{var e=JSON.parse(r.responseText);t(e.products,e.teamSize,e.numMembersString,e.viewerInfo,e.experiments)}catch(e){throw new Error('Error "'+String(e)+'" JSON parsing "'+r.responseText+'" (status: '+r.status+")")}},r.onerror=function(e){var t={message:e.message,colno:e.colno,filename:e.filename,lineno:e.lineno};throw new Error('Error calling /nav_menu. "'+JSON.stringify(t)+'"')},r.send()}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchNavData=r}),define("modules/clean/react/maestro_nav/shared_code/constants",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WWW_HOST="www.dropbox.com"}),define("modules/clean/react/maestro_nav/shared_code/feature-nav",["require","exports","tslib","react","external/classnames","modules/clean/react/maestro_nav/shared_code/lock_icon","modules/clean/user_education/react/user_education_effect"],function(e,t,a,r,n,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),n=a.__importDefault(n);var i=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onClick=function(e){return function(a){return t.props.onNavigationClick(a,e)}},t}return a.__extends(t,e),t.prototype.renderDisplaySuperscript=function(e){return r.default.createElement("sup",{className:"maestro-nav__feature-superscript"},e)},t.prototype.render=function(){var e=this,t=this.props,a=t.features,i=t.productDisplayName,c=t.productUrl;return r.default.createElement("ul",{className:"maestro-nav__features"},r.default.createElement("li",null,r.default.createElement("h2",{className:"maestro-nav__features-header"},r.default.createElement("a",{href:c,className:"maestro-nav__features-header-link"},i))),a.map(function(t,a){var i=t.url,c=n.default({"maestro-nav__feature":!0,"maestro-nav__active-feature":t===e.props.activeFeature,"maestro-nav__blocked-feature":t.isBlocked});return r.default.createElement("li",{key:i},r.default.createElement("div",{className:"maestro-nav__feature-wrap"},r.default.createElement(s.UserEducationEffect,{containerName:"FeatureNav",name:t.uniqueName,useSpan:!0},r.default.createElement("a",{href:t.isBlocked?"#":i,className:c,onClick:e.onClick(t)},t.displayName,t.displaySuperscript?e.renderDisplaySuperscript(t.displaySuperscript):void 0,t.isBlocked&&r.default.createElement(o.LockIcon,{className:"maestro-nav__lock"})))))}))},t})(r.default.Component);t.FeatureNav=i}),define("modules/clean/react/maestro_nav/shared_code/footer_nav",["require","exports","tslib","react","external/classnames","react-aria-menubutton","modules/clean/react/maestro_nav/shared_code/constants","modules/clean/react/maestro_nav/shared_code/strings","modules/clean/user_education/react/user_education_effect","modules/clean/user_education/user_education_client"],function(e,t,a,r,n,o,s,i,c,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),n=a.__importDefault(n),o=a.__importStar(o);var u,d=function(e){var t=e.className;return r.default.createElement("svg",{className:t,viewBox:"0 0 24 24"},r.default.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.default.createElement("g",{id:"form",transform:"translate(-160.000000, -32.000000)",fill:"#000000"},r.default.createElement("g",{id:"form-switcher",transform:"translate(160.000000, 32.000000)"},r.default.createElement("path",{d:"M10.5,9 L8.26000214,9 L12.0100021,4 L15.7600021,9 L13.5,9 L12,7 L10.5,9 Z",id:"Combined-Shape"}),r.default.createElement("path",{d:"M10.5,20 L8.26000214,20 L12.0100021,15 L15.7600021,20 L13.5,20 L12,18 L10.5,20 Z",id:"Combined-Shape",transform:"translate(12.010002, 17.500000) scale(1, -1) translate(-12.010002, -17.500000) "})))))},m=function(e){var t=e.className;return r.default.createElement("svg",{className:t,viewBox:"0 0 24 24"},r.default.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.default.createElement("g",{id:"form",transform:"translate(-32.000000, -96.000000)",fill:"#000000"},r.default.createElement("g",{id:"check",transform:"translate(32.000000, 96.000000)"},r.default.createElement("path",{d:"M13.1239594,15.613961 L9.12395935,15.613961 L9.12395935,17.613961 L14.1239594,17.613961 L15.1239594,17.613961 L15.1239594,5.61396103 L13.1239594,5.61396103 L13.1239594,15.613961 Z",id:"Combined-Shape",transform:"translate(12.123959, 11.613961) rotate(-315.000000) translate(-12.123959, -11.613961) "})))))},p={adminConsole:"team/admin/members",teamPage:"team"};(function(e){e[e.ADD_PERSONAL=0]="ADD_PERSONAL",e[e.ADD_WORK=1]="ADD_WORK",e[e.GOTO_WORK=2]="GOTO_WORK",e[e.GOTO_PERSONAL=3]="GOTO_PERSONAL"})(u||(u={}));var f=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.strings=i.footerStrings(),t.handleSelection=function(e){var a=t.props,r=a.activeRole,n=a.navigateToUrl,o=a.switchAccount;switch(e){case u.ADD_PERSONAL:n("https://"+s.WWW_HOST+"/team/join/new_pair");break;case u.ADD_WORK:n("https://"+s.WWW_HOST+"/team?_tk=account_switcher");break;case u.GOTO_PERSONAL:"work"===r&&o("personal");break;case u.GOTO_WORK:"personal"===r&&o("work")}},t.handleMenuButtonClick=function(e){var a=t.props,r=a.logger,n=a.userPlanType;r&&n&&r("clicked_acct_switcher",{user_plan_type:n}),l.UEClient.sendEvent("NavSwitcher","MenuButtonClicked")},t.handleTeamPagePress=function(e){13===e.keyCode&&(e.preventDefault(),l.UEClient.sendEvent("NavSwitcher","TeamPageAction"),t.navigateToTeamPage()),e.stopPropagation()},t.handleTeamPageClick=function(e){e.stopPropagation(),l.UEClient.sendEvent("NavSwitcher","TeamPageAction"),t.navigateToTeamPage()},t.navigateToTeamPage=function(){var e,a=t.props,r=a.isAdmin,n=a.isPaidTeam;e=r&&n?p.adminConsole:p.teamPage,t.props.navigateToUrl("https://"+s.WWW_HOST+"/"+e)},t.MenuItem=function(e){return r.default.createElement(o.MenuItem,{className:n.default({"maestro-nav-switcher-menu-item":!0,"maestro-nav-switcher-menu-item--selected":e.selected}),value:e.value},r.default.createElement(m,{className:"maestro-nav-switcher-menu-item__checkmark"}),r.default.createElement("div",{className:"maestro-nav-switcher-menu-item__info"},r.default.createElement("div",{className:"maestro-nav-switcher-menu-item__title"},e.label),r.default.createElement(c.UserEducationEffect,{containerName:"NavSwitcher",name:"ActionMenuItem"+(e.selected?"Selected":"")},r.default.createElement("div",{className:"maestro-nav-switcher-menu-item__action"},e.action))))},t.Menu=function(){var e,a,n,s=t.strings,i=t.props,l=i.teamName,d=i.isPaired,m=i.activeRole,p="personal"===m;d||p?(e=s.personalString,a=null,n=u.GOTO_PERSONAL):(e=s.addPersonalDropboxString,a=r.default.createElement("span",{className:"maestro-nav-switcher-menu-item__action-text"},s["2GbFreeString"]),n=u.ADD_PERSONAL);var f,v,_;if(!d&&p)f=s.tryDropboxBusinessFreeString,_=u.ADD_WORK;else{f=l||s.workString;var h=t.getTeamActionLabel();v=p?r.default.createElement("span",{className:"maestro-nav-switcher-menu-item__action-text"},h):r.default.createElement("button",{onKeyDown:t.handleTeamPagePress,onClick:t.handleTeamPageClick},h),_=u.GOTO_WORK}return r.default.createElement(o.Menu,{className:"maestro-nav-switcher-menu"},r.default.createElement(c.UserEducationEffect,{containerName:"NavSwitcher",name:"AriaMenuButton.Menu"},r.default.createElement(t.MenuItem,{selected:!p,label:f,action:v,value:_}),r.default.createElement(t.MenuItem,{selected:p,label:e,action:a,value:n})))},t.MenuButton=function(){var e,a,n=t.strings,s=t.props,i=s.teamName,c=s.numMembersString,l=s.activeRole;return"personal"===l?(e=n.personalString,a=n.onlyYouString):(e=i,a=null==c?n.workDropboxString:c),r.default.createElement(o.Button,{className:"maestro-nav-switcher-button"},r.default.createElement("div",{className:"maestro-nav-switcher-button__content",onClick:t.handleMenuButtonClick},r.default.createElement("div",{className:"maestro-nav-switcher-button__info"},r.default.createElement("div",{className:"maestro-nav-switcher-button__title"},e),r.default.createElement("div",{className:"maestro-nav-switcher-button__label"},a)),r.default.createElement(d,{className:"maestro-nav-switcher-button__icon"})))},t}return a.__extends(t,e),t.prototype.getTeamActionLabel=function(){var e=this.strings,t=this.props,a=t.teamSize,r=t.numMembersString,n=t.activeRole,o="personal"===n;return null==a?o?e.workDropboxString:e.groupsAndMembersString:o||a<50?r:e.groupsAndMembersString},t.prototype.render=function(){return r.default.createElement(o.Wrapper,{className:"maestro-nav-switcher",onSelection:this.handleSelection,closeOnSelection:!1},r.default.createElement(this.MenuButton,null),r.default.createElement(this.Menu,null))},t})(r.default.Component),v=(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.teamSize,a=e.numMembersString,n=e.viewerInfo,o=e.navigateToUrl,s=e.switchAccount,i=e.logger,l=e.userPlanDescriptionElement,u=n.activeRole,d=n.isAdmin,m=n.isPaidTeam,p=n.isPaired,v=n.teamName,_=n.userPlanType;return r.default.createElement("div",{className:"maestro-nav-footer"},r.default.createElement(c.UserEducationEffect,{containerName:"FooterNav",name:"NavSwitcher"},r.default.createElement(f,{teamSize:t,numMembersString:a,teamName:v,isPaired:p,navigateToUrl:o,switchAccount:s,activeRole:u,isAdmin:d,isPaidTeam:m,userPlanType:_,logger:i})),l)},t})(r.default.Component);t.FooterNav=v}),define("modules/clean/react/maestro_nav/shared_code/lock_icon",["require","exports","tslib","react"],function(e,t,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),t.LockIcon=function(e){return r.default.createElement("svg",a.__assign({},e,{xmlns:"http://www.w3.org/2000/svg",role:"img",width:"8px",height:"10px",viewBox:"0 0 8 10"}),r.default.createElement("title",null,e.alt||"Lock"),r.default.createElement("g",{"fill-rule":"evenodd",style:{fill:"none"}},r.default.createElement("path",{d:"M1.5,5.0233365 C1.61081383,5.07571391 1.79156144,5.1271516 2.02641537,5.1695923 C2.53116508,5.26080616 3.23772228,5.30304304 3.99147442,5.29018883 C4.72697272,5.27764591 5.44536431,5.2134662 5.96818405,5.1130429 C6.19749663,5.0689965 6.37973948,5.0195837 6.5,4.97094138 C6.5,4.61127567 6.5,4.5367094 6.5,3.97982189 L6.5,2.55833246 C6.5,1.44077827 5.39680687,0.5 4,0.5 C2.60319313,0.5 1.5,1.44077827 1.5,2.55833246 L1.5,4.08873795 C1.5,4.48924589 1.5,4.52037046 1.5,5.0233365 Z",style:{stroke:"#6a7c8f","stroke-width":1}}),r.default.createElement("rect",{x:"0.5",y:"4.5",width:"7",height:"5",rx:"1",style:{fill:"#6a7c8f",stroke:"#6a7c8f","stroke-width":1}})))}}),define("modules/clean/react/maestro_nav/shared_code/maestro_sidebar",["require","exports","tslib","react","modules/clean/react/maestro_nav/shared_code/footer_nav","modules/clean/react/maestro_nav/shared_code/nested-nav"],function(e,t,a,r,n,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r);var s=(function(e){function t(t){return e.call(this,t)||this}return a.__extends(t,e),t.prototype.renderContents=function(){return r.createElement(o.NestedNav,{activeFeature:this.props.activeFeature,activeProduct:this.props.activeProduct,onNavigationClick:this.props.onNavigationClick,onHomeClick:this.props.onHomeClick,nestedNavLevel:this.props.navType,products:this.props.products,renderNewAdminCoachMark:this.props.renderNewAdminCoachMark,dropboxLogoColor:this.props.dropboxLogoColor,planNameElement:this.props.planNameElement})},t.prototype.renderFooter=function(){return r.createElement(n.FooterNav,{navigateToUrl:this.props.navigateToUrl,switchAccount:this.props.switchAccount,viewerInfo:this.props.viewerInfo,teamSize:this.props.teamSize,numMembersString:this.props.numMembersString,logger:this.props.logger,userPlanDescriptionElement:this.props.userPlanDescriptionElement})},t.prototype.render=function(){return r.createElement("div",{className:"maestro-nav__container"},this.renderContents(),this.renderFooter())},t})(r.Component);t.MaestroSidebar=s}),define("modules/clean/react/maestro_nav/shared_code/nested-nav",["require","exports","tslib","react","modules/clean/react/maestro_nav/shared_code/dropbox_logo","modules/clean/react/maestro_nav/shared_code/constants","modules/clean/react/maestro_nav/shared_code/feature-nav","modules/clean/react/maestro_nav/shared_code/product-nav","modules/clean/react/maestro_nav/shared_code/strings"],function(e,t,a,r,n,o,s,i,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),t.LeftArrowSVGIcon=function(e){var t=e.className;return r.default.createElement("svg",{className:t,width:"24px",height:"24px",viewBox:"0 0 24 24",version:"1.1"},r.default.createElement("title",null,"Left Arrow"),r.default.createElement("g",{id:"arrow",transform:"translate(-32.000000, -32.000000)"},r.default.createElement("g",{id:"arrow-left",transform:"translate(32.000000, 32.000000)"},r.default.createElement("polygon",{id:"Combined-Shape",points:"12.9497475 7.05000305 8 11.9997505 12.9497475 16.949498 14.363961 15.5352844 10.8284271 11.9997505 14.363961 8.46421661"}))))};var l=(function(e){function l(){return null!==e&&e.apply(this,arguments)||this}return a.__extends(l,e),l.prototype.renderContents=function(){if("Feature"===this.props.nestedNavLevel&&this.props.activeProduct){var e=this.props.activeProduct;return r.default.createElement(s.FeatureNav,{activeFeature:this.props.activeFeature,features:e.features,onNavigationClick:this.props.onNavigationClick,productDisplayName:e.displayName,productUrl:e.url})}return r.default.createElement(i.ProductNav,{products:this.props.products,activeProduct:this.props.activeProduct,onNavigationClick:this.props.onNavigationClick,renderNewAdminCoachMark:this.props.renderNewAdminCoachMark})},l.prototype.render=function(){var e=this.props,a=e.nestedNavLevel,s=e.onHomeClick,i=e.planNameElement,l=e.dropboxLogoColor,u="Feature"===a,d=r.default.createElement(t.LeftArrowSVGIcon,{className:"maestro-nav__caret"});return r.default.createElement("div",{className:"maestro-nav__panel"},r.default.createElement("a",{className:"maestro-nav__home-button",href:"https://"+o.WWW_HOST+"/",onClick:s},r.default.createElement(n.DropboxLogo,{className:"maestro-nav__logo","aria-label":c.homeAriaLabel(),color:l}),u&&d,i),r.default.createElement("div",{className:"maestro-nav__contents"},this.renderContents()))},l})(r.default.Component);t.NestedNav=l}),define("modules/clean/react/maestro_nav/shared_code/product-nav",["require","exports","tslib","react","external/classnames","modules/clean/react/maestro_nav/shared_code/lock_icon","modules/clean/user_education/react/user_education_effect"],function(e,t,a,r,n,o,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),n=a.__importDefault(n);var i=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onClick=function(e){return function(a){return t.props.onNavigationClick(a,e)}},t}return a.__extends(t,e),t.prototype.renderDisplaySuperscript=function(e){return r.default.createElement("sup",{className:"maestro-nav__product-superscript"},e)},t.prototype.renderDisplayBadge=function(e){return r.default.createElement("span",{className:"maestro-nav__product-badge"},e)},t.prototype.render=function(){var e=this,t=this.props,a=t.activeProduct,i=t.products,c=t.renderNewAdminCoachMark;return r.default.createElement("ul",{className:"maestro-nav__products"},i.map(function(t){var i=n.default({"maestro-nav__product":!0,"maestro-nav__active-product":t===a,"maestro-nav__blocked-feature":t.isBlocked}),l=t.openInNewPage?"_blank":"_self";return r.default.createElement("li",{key:t.url},r.default.createElement("div",{className:"maestro-nav__product-wrapper"},r.default.createElement(s.UserEducationEffect,{containerName:"ProductNav",name:t.uniqueName,useSpan:!0},r.default.createElement("a",{href:t.isBlocked?"#":t.url,className:i,id:t.uniqueName,onClick:e.onClick(t),target:l,rel:"noopener"},t.displayName,t.displaySuperscript&&"badge"!==t.displaySuperscriptStyle?e.renderDisplaySuperscript(t.displaySuperscript):void 0,t.displaySuperscript&&"badge"===t.displaySuperscriptStyle?e.renderDisplayBadge(t.displaySuperscript):void 0,t.isBlocked&&r.default.createElement(o.LockIcon,{className:"maestro-nav__lock"})),c&&c(t))))}))},t})(r.default.Component);t.ProductNav=i}),define("modules/clean/react/maestro_nav/shared_code/strings",["require","exports","tslib","modules/constants/maestro_nav_strings"],function(e,t,a,r){"use strict";function n(){return r.footerStrings}function o(){return r.homeAriaLabel}function s(){return r.navToggleAriaLabel}Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importStar(r),t.footerStrings=n,t.homeAriaLabel=o,t.navToggleAriaLabel=s}),define("modules/clean/react/maestro_nav/user-plan-description",["require","exports","tslib","react"],function(e,t,a,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),t.CheckmarkSVGIcon=function(e){var t=e.className;return r.default.createElement("svg",{className:t,height:"14",viewBox:"0 0 13 14",width:"13",xmlns:"http://www.w3.org/2000/svg"},r.default.createElement("path",{d:"m2.9971347-1.19525858 2.99999999-.00015904.00060396 11.39301902-7.29741996-.0018221.0007491-2.99999995 4.29651178.00107283z",fill:"#0061ff",transform:"matrix(.76604444 .64278761 -.64278761 .76604444 7.597143 .761384)"}))};var n=(function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.onMouseEnter=function(){var e=t.props,a=e.sendXhr,r=e.hoverEventName;r&&a("/log/pro_events",{event:r})},t}return a.__extends(n,e),n.prototype.render=function(){var e=this.props,a=e.features,n=e.dropboxDisplayName,o=e.header;return a.length?r.default.createElement("div",{className:"maestro-user-plan-description"},r.default.createElement("div",{className:"maestro-user-plan-description__display-name",onMouseEnter:this.onMouseEnter},n),r.default.createElement("div",{className:"maestro-user-plan-description__popup-container"},r.default.createElement("div",{className:"maestro-user-plan-description__popup"},r.default.createElement("div",{className:"maestro-user-plan-description__header"},o),r.default.createElement("div",{className:"maestro-user-plan-description__title"},n),r.default.createElement("ul",{className:"maestro-user-plan-description__features"},a.map(function(e){return r.default.createElement("li",{className:"maestro-user-plan-description__feature",key:e.header},r.default.createElement(t.CheckmarkSVGIcon,{className:"maestro-user-plan-description__feature__checkmark"}),r.default.createElement("div",{className:"maestro-user-plan-description__feature__header"},e.header),r.default.createElement("div",{className:"maestro-user-plan-description__feature__body"},e.body))}))))):null},n})(r.default.Component);t.UserPlanDescription=n}),define("modules/clean/react/maestro_nav/util/post_tti_components",["require","exports","tslib","react","modules/clean/react/maestro_nav/post_tti/api"],function(e,t,a,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r=a.__importDefault(r),t.PostTTINewAdminCoachMark=n.PostNavTTIComponent({getPostTTIRenderer:function(e){var t=e.NewAdminCoachMark;return function(e){var a=e.activeAccountId,n=e.tooltipContent;return r.default.createElement(t,{activeAccountId:a,tooltipContent:n})}}})});
//# sourceMappingURL=pkg-maestro-nav.min.js-vflFz37z0.map