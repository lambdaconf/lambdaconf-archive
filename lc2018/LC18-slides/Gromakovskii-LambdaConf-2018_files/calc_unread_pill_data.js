define(["require","exports"],function(e,r){"use strict";function n(e){for(var r=e.containerTop,n=e.containerBottom,t=e.threadIdToRef,a=e.threads,o=0,d=null,i=0,l=null,u=!1,c=0,s=a;c<s.length;c++){var f=s[c],v=t[f.id],h=v.ref;if(!u){var b=h.getBoundingClientRect();b.bottom<r+10&&!f.read&&(o++,d=f),b.top>n-10&&(u=!0)}u&&!f.read&&(i++,l=l||f)}return{unreadsAbove:o,nearestUnreadThreadAbove:d,unreadsBelow:i,nearestUnreadThreadBelow:l}}Object.defineProperty(r,"__esModule",{value:!0}),r.calcUnreadPillData=n});
//# sourceMappingURL=calc_unread_pill_data.min.js-vflUPP_2T.map