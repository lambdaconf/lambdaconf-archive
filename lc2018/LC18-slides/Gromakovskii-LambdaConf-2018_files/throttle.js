define(["require","exports"],function(e,t){"use strict";function n(e,t){var n,l,u,r=null,o=0,i=function(){o=Date.now(),r=null,l=e.apply(n,u),r||(n=u=null)};return function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];u=a;var f=Date.now(),p=t-(f-o);return n=this,p<=0||p>t?(r&&(clearTimeout(r),r=null),o=f,l=e.apply(n,u),r||(n=u=null)):r||(r=setTimeout(i,p)),l}}Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=n});
//# sourceMappingURL=throttle.min.js-vflMlqwIE.map