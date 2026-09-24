import{r as W,j as e,m as R}from"./index-18e847f1.js";import{s as v}from"./constants-3c0f6728.js";var B={};function H(s){if(!s||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=s,document.head.appendChild(n),s}Object.defineProperty(B,"__esModule",{value:!0});var t=W;function J(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var o=J(t);H(`.rfm-marquee-container {
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
}`);const K=t.forwardRef(function({style:n={},className:u="",autoFill:r=!1,play:l=!0,pauseOnHover:b=!1,pauseOnClick:j=!1,direction:a="left",speed:p=50,delay:S=0,loop:N=0,gradient:F=!1,gradientColor:k="white",gradientWidth:x=200,onFinish:V,onCycleComplete:L,onMount:C,children:y},O){const[E,X]=t.useState(0),[g,D]=t.useState(0),[w,$]=t.useState(1),[M,P]=t.useState(!1),T=t.useRef(null),c=O||T,f=t.useRef(null),h=t.useCallback(()=>{if(f.current&&c.current){const i=c.current.getBoundingClientRect(),q=f.current.getBoundingClientRect();let d=i.width,m=q.width;(a==="up"||a==="down")&&(d=i.height,m=q.height),$(r&&d&&m&&m<d?Math.ceil(d/m):1),X(d),D(m)}},[r,c,a]);t.useEffect(()=>{if(M&&(h(),f.current&&c.current)){const i=new ResizeObserver(()=>h());return i.observe(c.current),i.observe(f.current),()=>{i&&i.disconnect()}}},[h,c,M]),t.useEffect(()=>{h()},[h,y]),t.useEffect(()=>{P(!0)},[]),t.useEffect(()=>{typeof C=="function"&&C()},[]);const I=t.useMemo(()=>r?g*w/p:g<E?E/p:g/p,[r,E,g,w,p]),Z=t.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!l||b?"paused":"running","--pause-on-click":!l||b&&!j||j?"paused":"running","--width":a==="up"||a==="down"?"100vh":"100%","--transform":a==="up"?"rotate(-90deg)":a==="down"?"rotate(90deg)":"none"}),[n,l,b,j,a]),G=t.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof x=="number"?`${x}px`:x}),[k,x]),z=t.useMemo(()=>({"--play":l?"running":"paused","--direction":a==="left"?"normal":"reverse","--duration":`${I}s`,"--delay":`${S}s`,"--iteration-count":N?`${N}`:"infinite","--min-width":r?"auto":"100%"}),[l,a,I,S,N,r]),_=t.useMemo(()=>({"--transform":a==="up"?"rotate(90deg)":a==="down"?"rotate(-90deg)":"none"}),[a]),A=t.useCallback(i=>[...Array(Number.isFinite(i)&&i>=0?i:0)].map((q,d)=>o.default.createElement(t.Fragment,{key:d},t.Children.map(y,m=>o.default.createElement("div",{style:_,className:"rfm-child"},m)))),[_,y]);return M?o.default.createElement("div",{ref:c,style:Z,className:"rfm-marquee-container "+u},F&&o.default.createElement("div",{style:G,className:"rfm-overlay"}),o.default.createElement("div",{className:"rfm-marquee",style:z,onAnimationIteration:L,onAnimationEnd:V},o.default.createElement("div",{className:"rfm-initial-child-container",ref:f},t.Children.map(y,i=>o.default.createElement("div",{style:_,className:"rfm-child"},i))),A(w-1)),o.default.createElement("div",{className:"rfm-marquee",style:z},A(w))):null});var Q=B.default=K;const ee=()=>{const s=W.useMemo(()=>v.length>0&&v[0].skills?v.flatMap(n=>n.skills):v,[]);return e.jsx("section",{id:"skills",className:"py-20 bg-black min-h-screen",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-6",children:[e.jsx(R.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-16",children:e.jsxs("h2",{className:"text-4xl md:text-5xl font-space font-bold text-white",children:["My ",e.jsx("span",{className:"text-hive-cyan border-b-4 border-hive-cyan pb-1",children:"Skills"})]})}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16",children:v.map((n,u)=>e.jsxs(R.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:u*.1},className:"bg-black border border-white/10 p-6 rounded-2xl hover:border-hive-cyan hover:shadow-[0_0_15px_#00E5FF] transition-all duration-300 group",children:[e.jsx("h3",{className:"text-2xl font-space font-bold text-hive-cyan mb-6",children:n.title||"Category"}),e.jsx("div",{className:"space-y-6",children:(n.skills||[]).map((r,l)=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 flex-shrink-0 flex items-center justify-center bg-black border border-white/10 rounded-lg p-2 group-hover:border-hive-cyan/50 transition-colors",children:e.jsx("img",{src:r.icon,alt:r.name,className:"w-full h-full object-contain"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx("span",{className:"font-mono text-white",children:r.name}),e.jsxs("span",{className:"font-mono text-hive-cyan text-sm",children:[r.percentage||r.level||80,"%"]})]}),e.jsx("div",{className:"w-full bg-white/10 h-2 rounded-full overflow-hidden",children:e.jsx(R.div,{initial:{width:0},whileInView:{width:`${r.percentage||r.level||80}%`},viewport:{once:!0},transition:{duration:1,delay:.2},className:"h-full bg-gradient-to-r from-hive-cyan to-[#007BFF] rounded-full"})})]})]},l))})]},u))}),e.jsx("div",{className:"mt-20",children:e.jsx(Q,{gradient:!1,speed:50,pauseOnHover:!0,children:s.map((n,u)=>e.jsx("div",{className:"mx-4 group cursor-pointer py-4",children:e.jsxs("div",{className:"bg-black border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-3 min-w-[120px] transition-all duration-300 group-hover:border-hive-cyan group-hover:scale-110 group-hover:shadow-[0_0_15px_#00E5FF]",children:[e.jsx("img",{src:n.icon,alt:n.name,className:"w-12 h-12 object-contain"}),e.jsx("span",{className:"font-mono text-white text-sm group-hover:text-hive-cyan transition-colors",children:n.name})]})},u))})})]})})};export{ee as default};
