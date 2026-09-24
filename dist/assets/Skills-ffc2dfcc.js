import{r as A,j as e,m as F}from"./index-fe724436.js";import{s as z}from"./constants-be7b3d5b.js";var W={};function H(o){if(!o||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=o,document.head.appendChild(n),o}Object.defineProperty(W,"__esModule",{value:!0});var t=A;function J(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var s=J(t);H(`.rfm-marquee-container {
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
}`);const K=t.forwardRef(function({style:n={},className:m="",autoFill:i=!1,play:l=!0,pauseOnHover:y=!1,pauseOnClick:b=!1,direction:r="left",speed:p=50,delay:M=0,loop:_=0,gradient:V=!1,gradientColor:q="white",gradientWidth:v=200,onFinish:B,onCycleComplete:L,onMount:R,children:x},O){const[j,T]=t.useState(0),[g,X]=t.useState(0),[w,S]=t.useState(1),[N,D]=t.useState(!1),P=t.useRef(null),c=O||P,f=t.useRef(null),h=t.useCallback(()=>{if(f.current&&c.current){const a=c.current.getBoundingClientRect(),k=f.current.getBoundingClientRect();let d=a.width,u=k.width;(r==="up"||r==="down")&&(d=a.height,u=k.height),S(i&&d&&u&&u<d?Math.ceil(d/u):1),T(d),X(u)}},[i,c,r]);t.useEffect(()=>{if(N&&(h(),f.current&&c.current)){const a=new ResizeObserver(()=>h());return a.observe(c.current),a.observe(f.current),()=>{a&&a.disconnect()}}},[h,c,N]),t.useEffect(()=>{h()},[h,x]),t.useEffect(()=>{D(!0)},[]),t.useEffect(()=>{typeof R=="function"&&R()},[]);const C=t.useMemo(()=>i?g*w/p:g<j?j/p:g/p,[i,j,g,w,p]),Z=t.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||y?"paused":"running","--pause-on-click":!l||y&&!b||b?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[n,l,y,b,r]),G=t.useMemo(()=>({"--gradient-color":q,"--gradient-width":typeof v=="number"?`${v}px`:v}),[q,v]),$=t.useMemo(()=>({"--play":l?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${C}s`,"--delay":`${M}s`,"--iteration-count":_?`${_}`:"infinite","--min-width":i?"auto":"100%"}),[l,r,C,M,_,i]),E=t.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),I=t.useCallback(a=>[...Array(Number.isFinite(a)&&a>=0?a:0)].map((k,d)=>s.default.createElement(t.Fragment,{key:d},t.Children.map(x,u=>s.default.createElement("div",{style:E,className:"rfm-child"},u)))),[E,x]);return N?s.default.createElement("div",{ref:c,style:Z,className:"rfm-marquee-container "+m},V&&s.default.createElement("div",{style:G,className:"rfm-overlay"}),s.default.createElement("div",{className:"rfm-marquee",style:$,onAnimationIteration:L,onAnimationEnd:B},s.default.createElement("div",{className:"rfm-initial-child-container",ref:f},t.Children.map(x,a=>s.default.createElement("div",{style:E,className:"rfm-child"},a))),I(w-1)),s.default.createElement("div",{className:"rfm-marquee",style:$},I(w))):null});var Q=W.default=K;const ee=()=>{const o=A.useMemo(()=>z.flatMap(n=>n.items),[]);return e.jsx("section",{id:"skills",className:"py-20 bg-black min-h-screen",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[e.jsxs(F.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:[e.jsxs("h2",{className:"text-4xl md:text-5xl font-space font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]",children:["My ",e.jsx("span",{className:"text-hive-cyan border-b-4 border-hive-cyan pb-1 drop-shadow-[0_0_15px_#00E5FF]",children:"Skills"})]}),e.jsx("p",{className:"text-white font-mono mt-4 font-bold tracking-wide drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]",children:"Tech that drives innovation."})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",children:z.map((n,m)=>e.jsxs(F.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:m*.1},className:"bg-black/80 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:border-hive-cyan hover:shadow-[0_0_30px_#00E5FF] transition-all duration-500 group",children:[e.jsx("h3",{className:"text-2xl font-space font-bold text-hive-cyan mb-6 group-hover:drop-shadow-[0_0_15px_#00E5FF] transition-all",children:n.title}),e.jsx("div",{className:"space-y-6",children:n.items.map((i,l)=>e.jsxs("div",{className:"flex items-center gap-4 group/skill cursor-default",children:[e.jsx("div",{className:"w-10 h-10 flex-shrink-0 flex items-center justify-center bg-black border border-white/20 rounded-lg p-1.5 transition-all duration-300 group-hover/skill:border-hive-cyan group-hover/skill:scale-125 group-hover/skill:shadow-[0_0_20px_#00E5FF]",children:e.jsx("img",{src:i.logo,alt:i.name,className:"w-full h-full object-contain"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"font-mono text-white font-bold group-hover/skill:text-hive-cyan transition-colors group-hover/skill:drop-shadow-[0_0_8px_#00E5FF]",children:i.name}),e.jsxs("span",{className:"font-mono text-hive-cyan text-sm font-bold group-hover/skill:drop-shadow-[0_0_8px_#00E5FF]",children:[i.proficiency,"%"]})]}),e.jsx("div",{className:"w-full bg-white/10 h-2 rounded-full overflow-hidden",children:e.jsx(F.div,{initial:{width:0},whileInView:{width:`${i.proficiency}%`},viewport:{once:!0},transition:{duration:1,delay:.2},className:"h-full bg-gradient-to-r from-hive-cyan to-hive-blue rounded-full group-hover/skill:shadow-[0_0_15px_#00E5FF] transition-shadow duration-300"})})]})]},l))})]},m))}),e.jsx("div",{className:"mt-20",children:e.jsx(Q,{gradient:!1,speed:50,pauseOnHover:!0,children:o.map((n,m)=>e.jsx("div",{className:"mx-4 group cursor-pointer py-4",children:e.jsxs("div",{className:"bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex flex-col items-center justify-center gap-3 min-w-[120px] transition-all duration-300 group-hover:border-hive-cyan group-hover:scale-125 group-hover:shadow-[0_0_25px_#00E5FF] group-hover:-translate-y-2",children:[e.jsx("img",{src:n.logo,alt:n.name,className:"w-12 h-12 object-contain group-hover:drop-shadow-[0_0_15px_#00E5FF] transition-all"}),e.jsx("span",{className:"font-mono text-white font-bold text-sm group-hover:text-hive-cyan group-hover:drop-shadow-[0_0_10px_#00E5FF] transition-colors",children:n.name})]})},m))})})]})})};export{ee as default};
