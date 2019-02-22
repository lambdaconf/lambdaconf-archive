define(["require","exports","tslib","react","external/classnames","modules/clean/react/file_activity_stream/updating_time_ago_with_details","modules/clean/react/file_activity_stream/utils","modules/clean/react/file_activity_stream/file_activity_stream_card_detail","modules/clean/react_format","modules/core/i18n"],function(e,t,a,i,n,r,s,l,o,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i=a.__importDefault(i),n=a.__importDefault(n),t.HEADER_MESSAGE_CLASS_NAME="file_activity_stream_card__header";var d=(function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.onActionClick=function(e){e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation(),t.props.action&&t.props.action.onClick()},t}return a.__extends(n,e),n.prototype.render=function(){var e=this.props,a=e.action,n=e.message,l=e.timestamp,o=e.user,c=a?i.default.createElement("div",{className:"file_activity_stream_card__metadata"},i.default.createElement(r.UpdatingTimeAgoWithDetails,{timestamp:l}),i.default.createElement("span",{className:"file_activity_stream_card__action"}," •  ",i.default.createElement("button",{onClick:this.onActionClick},a.text))):i.default.createElement("div",{className:"file_activity_stream_card__metadata"},i.default.createElement(r.UpdatingTimeAgoWithDetails,{timestamp:l}));return i.default.createElement("div",{className:"file_activity_stream_card__inner"},i.default.createElement("div",{className:"file_activity_stream_card__avatar"},s.renderAvatar(o)),i.default.createElement("div",null,i.default.createElement("div",{className:t.HEADER_MESSAGE_CLASS_NAME},n),c))},n})(i.default.PureComponent),m=(function(e){function t(t){var a=e.call(this,t)||this;return a.detailChildren=[],a.open=function(e){e.preventDefault(),e.nativeEvent&&e.nativeEvent.preventDefault&&e.nativeEvent.preventDefault(),a.isExpandable&&(a.state.isExpanded?(e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation()):(document.addEventListener("click",a.close),a.setState({isExpanded:!0})))},a.close=function(e){a.isExpandable&&a.state.isExpanded&&a.setState({isExpanded:!1}),document.removeEventListener("click",a.close)},a.incrementMaxShownOnOpen=function(){a.setState({maxShownOnOpen:a.state.maxShownOnOpen+10})},a.state={isExpanded:!1,maxShownOnOpen:10},a}return a.__extends(t,e),Object.defineProperty(t.prototype,"isExpandable",{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.componentWillMount=function(){this.detailChildren=s.extractChildrenOfType(this.props.children,l.FileActivityStreamCardDetail)},t.prototype.componentWillUnmount=function(){document.removeEventListener("click",this.close)},t.prototype.componentWillReceiveProps=function(e){var t=e.children;this.detailChildren=s.extractChildrenOfType(t,l.FileActivityStreamCardDetail)},t.prototype.renderDetails=function(){if(!this.state.isExpanded)return null;var e=this.detailChildren.slice(0,this.state.maxShownOnOpen);return this.props.onExpand&&this.props.onExpand(),i.default.Children.map(e,function(e){return e})},t.prototype.renderShowMore=function(){if(!this.state.isExpanded||this.state.maxShownOnOpen>=this.detailChildren.length)return null;var e=Math.min(10,this.detailChildren.length-this.state.maxShownOnOpen),t=o.reactFormat(c._("Show %(num_more)s more"),{num_more:e});return i.default.createElement("button",{className:"show_more",onClick:this.incrementMaxShownOnOpen},t)},t.prototype.render=function(){var e=this,t=e.props,a=t.action,r=t.className,s=t.message,l=t.timestamp,o=t.user,c=e.state.isExpanded;return i.default.createElement("div",{className:n.default(r,{file_activity_stream_card:!0,"file_activity_stream_card-has_action":!!a,"file_activity_stream_card-is_expandable":this.isExpandable,"file_activity_stream_card-is_expanded":c}),onClick:this.open},i.default.createElement(d,{action:a,message:s,timestamp:l,user:o}),this.renderDetails(),this.renderShowMore())},t.Detail=l.FileActivityStreamCardDetail,t})(i.default.Component);t.FileActivityStreamCard=m});
//# sourceMappingURL=file_activity_stream_card.min.js-vflZTwO9M.map