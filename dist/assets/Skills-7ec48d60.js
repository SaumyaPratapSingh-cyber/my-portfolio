import{r as W,j as e,m as q}from"./index-d31ebe66.js";import{s as A}from"./constants-3c0f6728.js";var V={};function H(i){if(!i||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=i,document.head.appendChild(n),i}Object.defineProperty(V,"__esModule",{value:!0});var t=W;function J(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var o=J(t);H(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const K=t.forwardRef(function({style:n={},className:u="",autoFill:s=!1,play:l=!0,pauseOnHover:w=!1,pauseOnClick:b=!1,direction:r="left",speed:v=50,delay:R=0,loop:j=0,gradient:B=!1,gradientColor:S="white",gradientWidth:p=200,onFinish:L,onCycleComplete:O,onMount:k,children:x},T){const[N,X]=t.useState(0),[y,D]=t.useState(0),[g,C]=t.useState(1),[E,F]=t.useState(!1),P=t.useRef(null),c=T||P,f=t.useRef(null),h=t.useCallback(()=>{if(f.current&&c.current){const a=c.current.getBoundingClientRect(),_=f.current.getBoundingClientRect();let d=a.width,m=_.width;(r==="up"||r==="down")&&(d=a.height,m=_.height),C(s&&d&&m&&m<d?Math.ceil(d/m):1),X(d),D(m)}},[s,c,r]);t.useEffect(()=>{if(E&&(h(),f.current&&c.current)){const a=new ResizeObserver(()=>h());return a.observe(c.current),a.observe(f.current),()=>{a&&a.disconnect()}}},[h,c,E]),t.useEffect(()=>{h()},[h,x]),t.useEffect(()=>{F(!0)},[]),t.useEffect(()=>{typeof k=="function"&&k()},[]);const $=t.useMemo(()=>s?y*g/v:y<N?N/v:y/v,[s,N,y,g,v]),Z=t.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||w?"paused":"running","--pause-on-click":!l||w&&!b||b?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[n,l,w,b,r]),G=t.useMemo(()=>({"--gradient-color":S,"--gradient-width":typeof p=="number"?`${p}px`:p}),[S,p]),I=t.useMemo(()=>({"--play":l?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${$}s`,"--delay":`${R}s`,"--iteration-count":j?`${j}`:"infinite","--min-width":s?"auto":"100%"}),[l,r,$,R,j,s]),M=t.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),z=t.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((_,d)=>o.default.createElement(t.Fragment,{key:d},t.Children.map(x,m=>o.default.createElement("div",{style:M,className:"rfm-child"},m)))),[M,x]);return E?o.default.createElement("div",{ref:c,style:Z,className:"rfm-marquee-container "+u},B&&o.default.createElement("div",{style:G,className:"rfm-overlay"}),o.default.createElement("div",{className:"rfm-marquee",style:I,onAnimationIteration:O,onAnimationEnd:L},o.default.createElement("div",{className:"rfm-initial-child-container",ref:f},t.Children.map(x,a=>o.default.createElement("div",{style:M,className:"rfm-child"},a))),z(g-1)),o.default.createElement("div",{className:"rfm-marquee",style:I},z(g))):null});var Q=V.default=K;const ee=()=>{const i=W.useMemo(()=>A.flatMap(n=>n.items),[]);return e.jsx("section",{id:"skills",className:"py-20 bg-black min-h-screen",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[e.jsxs(q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-space font-bold text-white",children:["My ",e.jsx("span",{className:"text-hive-cyan border-b-4 border-hive-cyan pb-1",children:"Skills"})]}),e.jsx("p",{className:"text-gray-400 font-mono mt-4",children:"Tech that drives innovation."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",children:A.map((n,u)=>e.jsxs(q.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-black border border-white/10 p-6 rounded-2xl hover:border-hive-cyan hover:shadow-[0_0_15px_#00E5FF] transition-all duration-300 group",children:[e.jsx("h3",{className:"text-2xl font-space font-bold text-hive-cyan mb-6",children:n.title}),e.jsx("div",{className:"space-y-6",children:n.items.map((s,l)=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 flex-shrink-0 flex items-center justify-center bg-black border border-white/10 rounded-lg p-1.5 group-hover:border-hive-cyan/50 transition-colors",children:e.jsx("img",{src:s.logo,alt:s.name,className:"w-full h-full object-contain"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"font-mono text-white",children:s.name}),e.jsxs("span",{className:"font-mono text-hive-cyan text-sm",children:[s.proficiency,"%"]})]}),e.jsx("div",{className:"w-full bg-white/10 h-2 rounded-full overflow-hidden",children:e.jsx(q.div,{initial:{width:0},whileInView:{width:`${s.proficiency}%`},viewport:{once:!0},transition:{duration:1,delay:.2},className:"h-full bg-gradient-to-r from-hive-cyan to-hive-blue rounded-full"})})]})]},l))})]},u))}),e.jsx("div",{className:"mt-20",children:e.jsx(Q,{gradient:!1,speed:50,pauseOnHover:!0,children:i.map((n,u)=>e.jsx("div",{className:"mx-4 group cursor-pointer py-4",children:e.jsxs("div",{className:"bg-black border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 min-w-[120px] transition-all duration-300 group-hover:border-hive-cyan group-hover:scale-110 group-hover:shadow-[0_0_15px_#00E5FF]",children:[e.jsx("img",{src:n.logo,alt:n.name,className:"w-12 h-12 object-contain"}),e.jsx("span",{className:"font-mono text-white text-sm group-hover:text-hive-cyan transition-colors",children:n.name})]})},u))})})]})})};export{ee as default};
