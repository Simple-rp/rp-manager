import{r as o,_ as G,R as n,i as s,k as K,P as e,J as Q,o as U}from"./index-C2z7T8RV.js";import{u as W,B as X,E as Y}from"./DocsExample-BCeG28d7.js";import{g as Z,e as $}from"./getRTLPlacement-6zlHUKNN.js";var x=o.forwardRef(function(t,F){var M=t.children,v=t.animation,O=v===void 0?!0:v,_=t.className,q=t.container,h=t.content,b=t.delay,l=b===void 0?0:b,g=t.fallbackPlacements,B=g===void 0?["top","right","bottom","left"]:g,P=t.offset,L=P===void 0?[0,6]:P,y=t.onHide,k=t.onShow,w=t.placement,j=w===void 0?"top":w,E=t.trigger,r=E===void 0?["hover","focus"]:E,d=t.visible,A=G(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","trigger","visible"]),i=o.useRef(null),a=o.useRef(null),I=W(F,i),R="tooltip".concat(o.useId()),T=o.useState(!1),f=T[0],N=T[1],C=o.useState(d),c=C[0],S=C[1],m=X(),J=m.initPopper,V=m.destroyPopper,z=m.updatePopper,H=typeof l=="number"?{show:l,hide:l}:l,D={modifiers:[{name:"arrow",options:{element:".tooltip-arrow"}},{name:"flip",options:{fallbackPlacements:B}},{name:"offset",options:{offset:L}}],placement:Z(j,a.current)};o.useEffect(function(){if(d){u();return}p()},[d]),o.useEffect(function(){if(f&&a.current&&i.current){J(a.current,i.current,D),setTimeout(function(){S(!0)},H.show);return}!f&&a.current&&i.current&&V()},[f]),o.useEffect(function(){!c&&a.current&&i.current&&$(function(){N(!1)},i.current)},[c]);var u=function(){N(!0),k&&k()},p=function(){setTimeout(function(){S(!1),y&&y()},H.hide)};return o.useEffect(function(){z()},[h]),n.createElement(n.Fragment,null,n.cloneElement(M,s(s(s(s(s({},c&&{"aria-describedby":R}),{ref:a}),(r==="click"||r.includes("click"))&&{onClick:function(){return c?p():u()}}),(r==="focus"||r.includes("focus"))&&{onFocus:function(){return u()},onBlur:function(){return p()}}),(r==="hover"||r.includes("hover"))&&{onMouseEnter:function(){return u()},onMouseLeave:function(){return p()}})),n.createElement(Y,{container:q,portal:!0},f&&n.createElement("div",s({className:K("tooltip","bs-tooltip-auto",{fade:O,show:c},_),id:R,ref:I,role:"tooltip"},A),n.createElement("div",{className:"tooltip-arrow"}),n.createElement("div",{className:"tooltip-inner"},h))))});x.propTypes={animation:e.bool,children:e.node,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:Q,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),trigger:U,visible:e.bool};x.displayName="CTooltip";export{x as C};
