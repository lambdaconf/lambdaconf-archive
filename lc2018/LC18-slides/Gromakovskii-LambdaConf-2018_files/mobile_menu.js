define(["require","exports","tslib","tslib","react","classnames","focus-trap-react","spectrum/backdrop","spectrum/mobile_menu/mobile_menu_content","spectrum/mobile_menu/mobile_menu_close_button","spectrum/scroll_locker"],function(e,t,n,i,o,l,r,s,c,u,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=n.__importStar(i),o=n.__importStar(o),l=n.__importDefault(l),r=n.__importDefault(r);var m=(function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.initBodyPadding="0",t.state={isVisible:!1},t.openMobileMenu=function(){t.initBodyPadding=a.getBodyPadding(),t.setState({isVisible:!0},a.lockScroll)},t.closeMobileMenu=function(){t.setState({isVisible:!1},function(){return a.unlockScroll(t.initBodyPadding)})},t.handleKeyDown=function(e){var n=e.key;if("Escape"===n)return void t.closeMobileMenu();var i=e.target;if("ArrowUp"===n||"ArrowLeft"===n){var o=i.previousElementSibling;o&&o.focus()}if("ArrowDown"===n||"ArrowRight"===n){var l=i.nextElementSibling;l&&l.focus()}},t}return i.__extends(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.className,a=e.closeButton,m=e.trigger,b=i.__rest(e,["children","className","closeButton","trigger"]);return o.createElement("div",i.__assign({className:l.default("mc-mobile-menu",n),onKeyDown:this.handleKeyDown},b),m({openMobileMenu:this.openMobileMenu}),this.state.isVisible?o.createElement("div",{className:"mc-mobile-menu-container"},o.createElement(r.default,{focusTrapOptions:{returnFocusOnDeactivate:!0}},o.createElement(s.Backdrop,{onClick:this.closeMobileMenu,isVisible:!0}),o.createElement(c.MobileMenuContent,{closeMobileMenu:this.closeMobileMenu},o.createElement("div",{className:"mc-mobile-menu-section"},t),o.createElement("div",{className:"mc-mobile-menu-section"},null==a?o.createElement(u.MobileMenuCloseButton,null):a({closeMobileMenu:this.closeMobileMenu}))))):null)},t})(o.Component);t.MobileMenu=m});
//# sourceMappingURL=mobile_menu.bundled.min.js-vflvxANcQ.map