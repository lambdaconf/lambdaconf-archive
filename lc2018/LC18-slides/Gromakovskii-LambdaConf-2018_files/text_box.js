define(["require","exports","tslib","react"],function(t,e,r,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i=r.__importStar(i);var o=(function(t){function e(){var e=t.apply(this,arguments)||this;return e.state={xScale:1,yScale:1},e.cachedText="",e.cachedTextWidth=1,e.cachedTextHeight=1,e.ref=function(t){e.textElement=t},e}return r.__extends(e,t),e.prototype.getDerivedStateFromProps=function(t){if(this.textElement){var e=t.rawText,r=t.width,i=t.height,o=t.fontSize;return this.scaleText(e,r,i,o)}return{}},e.prototype.componentDidMount=function(){this.textElement&&this.setState(this.getDerivedStateFromProps(this.props),this.props.onRender)},e.prototype.measureText=function(t,e){return t!==this.cachedText&&(this.cachedText=t,this.cachedTextWidth=e.clientWidth,this.cachedTextHeight=e.clientHeight),{textWidth:this.cachedTextWidth,textHeight:this.cachedTextHeight}},e.prototype.scaleText=function(t,e,r,i){var o=!0;if(t.length<=1)o=!1;else if(2===t.length){var n=t.charCodeAt(0),a=t.charCodeAt(1);n>=55296&&n<=56319&&a>=56320&&a<=57343&&(o=!1)}if(o&&this.textElement){var s=this.measureText(t,this.textElement),h=s.textWidth,c=s.textHeight;return{xScale:e/h,yScale:i?1:r/c}}return{xScale:1,yScale:1}},e.prototype.componentWillReceiveProps=function(t){this.setState(this.getDerivedStateFromProps(t))},e.prototype.render=function(){var t=this.props,e=t.dir,r=t.x,o=t.y,n=t.rotation,a=t.transformedText,s=t.className,h={left:r,bottom:o,transform:"rotate("+-n+"rad) scale("+this.state.xScale+", "+this.state.yScale+")"};this.props.font&&(h.fontFamily=this.props.font.fontFamily,this.props.font.isBold&&(h.fontWeight="bold"),this.props.font.isItalic&&(h.fontStyle="italic")),this.props.fontSize&&(h.fontSize=this.props.fontSize+"px");var c=a.map(function(t){switch(t.type){case 1:return i.createElement("a",{href:"mailto:"+t.text},t.text);case 2:return i.createElement("a",{href:t.href,target:"_blank",rel:"noreferrer noopener"},t.text);default:return t.text}});return i.createElement("p",{className:s,style:h,ref:this.ref,dir:e,"data-test":"textbox"},c)},e})(i.PureComponent);e.TextBox=o,o.defaultProps={rawText:"",transformedText:[],x:0,y:0,width:0,height:0,rotation:0,dir:"ltr"}});
//# sourceMappingURL=text_box.min.js-vflFBS3A9.map