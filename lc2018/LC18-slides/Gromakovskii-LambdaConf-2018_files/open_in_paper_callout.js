define(["require","exports","tslib","react","modules/clean/react/paper/paper_callout","modules/clean/react/paper/utils"],function(t,e,s,o,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o=s.__importDefault(o);var r=(function(t){function e(e){var s=t.call(this,e)||this;return s.onDismiss=function(){s.state.show&&(s.setState({show:!1}),s.props.trackUserActionOnDismiss&&s.props.trackUserActionOnDismiss())},s.state={show:!0},s}return s.__extends(e,t),e.prototype.componentDidMount=function(){var t=this;window.setTimeout(function(){window.addEventListener("click",t.onDismiss)},1500)},e.prototype.componentWillUnmount=function(){window.removeEventListener("click",this.onDismiss)},e.prototype.render=function(){return o.default.createElement(i.PaperCallout,{show:this.state.show,title:n.getCalloutTitle(this.props.file),message:n.getCalloutMessage(this.props.file),onDismiss:this.onDismiss,targetNode:this.props.targetNode,position:this.props.position,parentHasBeenClicked:this.props.parentHasBeenClicked})},e})(o.default.Component);e.OpenInPaperCallout=r});
//# sourceMappingURL=open_in_paper_callout.min.js-vfl3U4Ewr.map