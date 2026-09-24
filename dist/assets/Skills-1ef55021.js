import{r as H,j as e,m as p}from"./index-dc922445.js";import{s as V}from"./constants-3c0f6728.js";var I={};function J(s){if(!s||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=s,document.head.appendChild(n),s}Object.defineProperty(I,"__esModule",{value:!0});var t=H;function K(s){return s&&typeof s=="object"&&"default"in s?s:{default:s}}var l=K(t);J(`.rfm-marquee-container {
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
}`);const Q=t.forwardRef(function({style:n={},className:c="",autoFill:a=!1,play:o=!0,pauseOnHover:f=!1,pauseOnClick:j=!1,direction:r="left",speed:x=50,delay:M=0,loop:N=0,gradient:W=!1,gradientColor:S="white",gradientWidth:g=200,onFinish:O,onCycleComplete:B,onMount:z,children:y},L){const[_,T]=t.useState(0),[b,X]=t.useState(0),[w,A]=t.useState(1),[E,D]=t.useState(!1),P=t.useRef(null),d=L||P,h=t.useRef(null),v=t.useCallback(()=>{if(h.current&&d.current){const i=d.current.getBoundingClientRect(),R=h.current.getBoundingClientRect();let m=i.width,u=R.width;(r==="up"||r==="down")&&(m=i.height,u=R.height),A(a&&m&&u&&u<m?Math.ceil(m/u):1),T(m),X(u)}},[a,d,r]);t.useEffect(()=>{if(E&&(v(),h.current&&d.current)){const i=new ResizeObserver(()=>v());return i.observe(d.current),i.observe(h.current),()=>{i&&i.disconnect()}}},[v,d,E]),t.useEffect(()=>{v()},[v,y]),t.useEffect(()=>{D(!0)},[]),t.useEffect(()=>{typeof z=="function"&&z()},[]);const C=t.useMemo(()=>a?b*w/x:b<_?_/x:b/x,[a,_,b,w,x]),Z=t.useMemo(()=>Object.assign(Object.assign({},n),{"--pause-on-hover":!o||f?"paused":"running","--pause-on-click":!o||f&&!j||j?"paused":"running","--width":r==="up"||r==="down"?"100vh":"100%","--transform":r==="up"?"rotate(-90deg)":r==="down"?"rotate(90deg)":"none"}),[n,o,f,j,r]),G=t.useMemo(()=>({"--gradient-color":S,"--gradient-width":typeof g=="number"?`${g}px`:g}),[S,g]),$=t.useMemo(()=>({"--play":o?"running":"paused","--direction":r==="left"?"normal":"reverse","--duration":`${C}s`,"--delay":`${M}s`,"--iteration-count":N?`${N}`:"infinite","--min-width":a?"auto":"100%"}),[o,r,C,M,N,a]),q=t.useMemo(()=>({"--transform":r==="up"?"rotate(90deg)":r==="down"?"rotate(-90deg)":"none"}),[r]),k=t.useCallback(i=>[...Array(Number.isFinite(i)&&i>=0?i:0)].map((R,m)=>l.default.createElement(t.Fragment,{key:m},t.Children.map(y,u=>l.default.createElement("div",{style:q,className:"rfm-child"},u)))),[q,y]);return E?l.default.createElement("div",{ref:d,style:Z,className:"rfm-marquee-container "+c},W&&l.default.createElement("div",{style:G,className:"rfm-overlay"}),l.default.createElement("div",{className:"rfm-marquee",style:$,onAnimationIteration:B,onAnimationEnd:O},l.default.createElement("div",{className:"rfm-initial-child-container",ref:h},t.Children.map(y,i=>l.default.createElement("div",{style:q,className:"rfm-child"},i))),k(w-1)),l.default.createElement("div",{className:"rfm-marquee",style:$},k(w))):null});var U=I.default=Q;const Y={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},F={hidden:{y:20,opacity:0},visible:{y:0,opacity:1,transition:{type:"spring",stiffness:100}}},ne=()=>{const s=V.reduce((n,c)=>[...n,...c.items],[]);return e.jsxs("section",{id:"skills",className:"relative min-h-screen py-20 bg-hive-black overflow-hidden flex flex-col justify-center",children:[e.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-hive-blue/20 rounded-full blur-[120px] pointer-events-none"}),e.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-hive-cyan/20 rounded-full blur-[120px] pointer-events-none"}),e.jsxs("div",{className:"container mx-auto px-6 relative z-10",children:[e.jsxs(p.div,{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-100px"},transition:{duration:.8},className:"text-center mb-16",children:[e.jsx("h2",{className:"text-4xl md:text-5xl font-space font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-hive-cyan via-white to-hive-blue drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]",children:"Technical Arsenal"}),e.jsx("p",{className:"text-gray-400 font-mono text-sm md:text-base max-w-2xl mx-auto",children:"A comprehensive overview of my technical skills and proficiencies."})]}),e.jsx(p.div,{variants:Y,initial:"hidden",whileInView:"visible",viewport:{once:!0,margin:"-50px"},className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto",children:V.map((n,c)=>e.jsxs(p.div,{variants:F,className:"bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-hive-cyan/30 transition-colors duration-300 relative overflow-hidden group",children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-hive-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),e.jsxs("h3",{className:"text-xl font-space font-semibold text-white mb-6 flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-hive-cyan shadow-[0_0_8px_#00E5FF]"}),n.title]}),e.jsx("div",{className:"space-y-5",children:n.items.map((a,o)=>e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"flex justify-between items-center mb-1.5 font-mono text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[a.logo&&e.jsx("div",{className:"w-5 h-5 flex items-center justify-center",children:e.jsx("img",{src:a.logo,alt:a.name,className:"max-w-full max-h-full object-contain filter group-hover:brightness-125 transition-all",onError:f=>{f.target.style.display="none"}})}),e.jsx("span",{className:"text-gray-200",children:a.name})]}),e.jsxs("span",{className:"text-hive-cyan",children:[a.proficiency,"%"]})]}),e.jsx("div",{className:"h-1.5 w-full bg-white/5 rounded-full overflow-hidden",children:e.jsx(p.div,{initial:{width:0},whileInView:{width:`${a.proficiency}%`},viewport:{once:!0},transition:{duration:1,delay:.2+o*.1,ease:"easeOut"},className:"h-full rounded-full bg-gradient-to-r from-hive-blue to-hive-cyan shadow-[0_0_10px_rgba(0,229,255,0.5)]"})})]},o))})]},c))}),e.jsxs(p.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:1,delay:.5},className:"relative py-10",children:[e.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-hive-black to-transparent z-10 pointer-events-none"}),e.jsx("div",{className:"absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-hive-black to-transparent z-10 pointer-events-none"}),e.jsx(U,{gradient:!1,speed:40,pauseOnHover:!0,className:"overflow-hidden",children:e.jsx("div",{className:"flex gap-12 px-6 items-center",children:s.map((n,c)=>e.jsxs("div",{className:"flex flex-col items-center justify-center gap-3 group cursor-pointer",children:[e.jsx("div",{className:"w-16 h-16 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:bg-white/10 group-hover:border-hive-cyan/50 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)]",children:n.logo?e.jsx("img",{src:n.logo,alt:n.name,className:"w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300",onError:a=>{a.target.style.display="none"}}):e.jsx("span",{className:"text-xl font-bold text-gray-500 group-hover:text-hive-cyan",children:n.name.charAt(0)})}),e.jsx("span",{className:"font-mono text-xs text-gray-500 group-hover:text-hive-cyan transition-colors",children:n.name})]},`mq-${c}`))})})]})]})]})};export{ne as default};
