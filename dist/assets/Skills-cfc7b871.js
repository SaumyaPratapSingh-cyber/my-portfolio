import{r as A,j as r,m as T}from"./index-f4b90f7a.js";import{s as L}from"./constants-3f9125ee.js";var O={};function Z(l){if(!l||typeof window>"u")return;const a=document.createElement("style");return a.setAttribute("type","text/css"),a.innerHTML=l,document.head.appendChild(a),l}Object.defineProperty(O,"__esModule",{value:!0});var n=A;function J(l){return l&&typeof l=="object"&&"default"in l?l:{default:l}}var d=J(n);Z(`.rfm-marquee-container {
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
}`);const K=n.forwardRef(function({style:a={},className:c="",autoFill:e=!1,play:t=!0,pauseOnHover:h=!1,pauseOnClick:i=!1,direction:o="left",speed:y=50,delay:$=0,loop:N=0,gradient:z=!1,gradientColor:k="white",gradientWidth:g=200,onFinish:V,onCycleComplete:W,onMount:C,children:w},D){const[_,H]=n.useState(0),[v,B]=n.useState(0),[b,F]=n.useState(1),[E,P]=n.useState(!1),X=n.useRef(null),u=D||X,x=n.useRef(null),p=n.useCallback(()=>{if(x.current&&u.current){const s=u.current.getBoundingClientRect(),S=x.current.getBoundingClientRect();let m=s.width,f=S.width;(o==="up"||o==="down")&&(m=s.height,f=S.height),F(e&&m&&f&&f<m?Math.ceil(m/f):1),H(m),B(f)}},[e,u,o]);n.useEffect(()=>{if(E&&(p(),x.current&&u.current)){const s=new ResizeObserver(()=>p());return s.observe(u.current),s.observe(x.current),()=>{s&&s.disconnect()}}},[p,u,E]),n.useEffect(()=>{p()},[p,w]),n.useEffect(()=>{P(!0)},[]),n.useEffect(()=>{typeof C=="function"&&C()},[]);const R=n.useMemo(()=>e?v*b/y:v<_?_/y:v/y,[e,_,v,b,y]),Y=n.useMemo(()=>Object.assign(Object.assign({},a),{"--pause-on-hover":!t||h?"paused":"running","--pause-on-click":!t||h&&!i||i?"paused":"running","--width":o==="up"||o==="down"?"100vh":"100%","--transform":o==="up"?"rotate(-90deg)":o==="down"?"rotate(90deg)":"none"}),[a,t,h,i,o]),G=n.useMemo(()=>({"--gradient-color":k,"--gradient-width":typeof g=="number"?`${g}px`:g}),[k,g]),q=n.useMemo(()=>({"--play":t?"running":"paused","--direction":o==="left"?"normal":"reverse","--duration":`${R}s`,"--delay":`${$}s`,"--iteration-count":N?`${N}`:"infinite","--min-width":e?"auto":"100%"}),[t,o,R,$,N,e]),M=n.useMemo(()=>({"--transform":o==="up"?"rotate(90deg)":o==="down"?"rotate(-90deg)":"none"}),[o]),I=n.useCallback(s=>[...Array(Number.isFinite(s)&&s>=0?s:0)].map((S,m)=>d.default.createElement(n.Fragment,{key:m},n.Children.map(w,f=>d.default.createElement("div",{style:M,className:"rfm-child"},f)))),[M,w]);return E?d.default.createElement("div",{ref:u,style:Y,className:"rfm-marquee-container "+c},z&&d.default.createElement("div",{style:G,className:"rfm-overlay"}),d.default.createElement("div",{className:"rfm-marquee",style:q,onAnimationIteration:W,onAnimationEnd:V},d.default.createElement("div",{className:"rfm-initial-child-container",ref:x},n.Children.map(w,s=>d.default.createElement("div",{style:M,className:"rfm-child"},s))),I(b-1)),d.default.createElement("div",{className:"rfm-marquee",style:q},I(b))):null});var Q=O.default=K;const j=["#00E5FF","#FFFF00","#FF00FF","#00FF00","#FF3300","#9D00FF"],te=()=>{const l=A.useMemo(()=>L.flatMap(a=>a.items),[]);return r.jsx("section",{id:"skills",className:"py-24 bg-black min-h-screen relative overflow-hidden",children:r.jsxs("div",{className:"max-w-7xl mx-auto px-6 relative z-10",children:[r.jsxs(T.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"text-center mb-20",children:[r.jsxs("h2",{className:"text-5xl md:text-7xl font-space font-extrabold text-white drop-shadow-[0_0_20px_#fff]",children:["My ",r.jsx("span",{className:"text-[#00FF00] border-b-4 border-[#00FF00] pb-2 drop-shadow-[0_0_25px_#00FF00]",children:"Skills"})]}),r.jsx("p",{className:"text-white font-mono mt-8 text-lg font-bold tracking-widest drop-shadow-[0_0_8px_#fff]",children:"TECHNOLOGY THAT DRIVES HYPER INNOVATION."})]}),r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-10 mb-20",children:L.map((a,c)=>{const e=j[c%j.length];return r.jsxs(T.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{delay:c*.1,duration:.5},className:"bg-black backdrop-blur-md border-2 p-8 rounded-2xl transition-all duration-500 group",style:{borderColor:`${e}40`},onMouseEnter:t=>{t.currentTarget.style.borderColor=e,t.currentTarget.style.boxShadow=`0 0 40px ${e}80`},onMouseLeave:t=>{t.currentTarget.style.borderColor=`${e}40`,t.currentTarget.style.boxShadow="none"},children:[r.jsx("h3",{className:"text-3xl font-space font-extrabold mb-8 transition-all tracking-widest",style:{color:e,textShadow:`0 0 15px ${e}`},children:a.title}),r.jsx("div",{className:"space-y-8",children:a.items.map((t,h)=>r.jsxs("div",{className:"flex items-center gap-6 group/skill cursor-default",children:[r.jsx("div",{className:"w-14 h-14 flex-shrink-0 flex items-center justify-center bg-black border-2 rounded-xl p-2 transition-all duration-500 group-hover/skill:scale-125",style:{borderColor:`${e}40`},onMouseEnter:i=>{i.currentTarget.style.borderColor=e,i.currentTarget.style.boxShadow=`0 0 25px ${e}`},onMouseLeave:i=>{i.currentTarget.style.borderColor=`${e}40`,i.currentTarget.style.boxShadow="none"},children:r.jsx("img",{src:t.logo,alt:t.name,className:"w-full h-full object-contain filter drop-shadow-md group-hover/skill:drop-shadow-[0_0_10px_white]"})}),r.jsxs("div",{className:"flex-1",children:[r.jsxs("div",{className:"flex justify-between items-center mb-3",children:[r.jsx("span",{className:"font-mono text-white text-lg font-extrabold transition-colors group-hover/skill:drop-shadow-[0_0_10px_white]",children:t.name}),r.jsxs("span",{className:"font-mono text-xl font-extrabold",style:{color:e,textShadow:`0 0 10px ${e}`},children:[t.proficiency,"%"]})]}),r.jsx("div",{className:"w-full bg-white/10 h-3 rounded-full overflow-hidden border border-white/10",children:r.jsx(T.div,{initial:{width:0},whileInView:{width:`${t.proficiency}%`},viewport:{once:!0},transition:{duration:1.5,delay:.2,type:"spring"},className:"h-full rounded-full transition-shadow duration-300",style:{background:`linear-gradient(90deg, ${e}40, ${e})`,boxShadow:`0 0 20px ${e}`}})})]})]},h))})]},c)})}),r.jsx("div",{className:"mt-24",children:r.jsx(Q,{gradient:!1,speed:60,pauseOnHover:!0,children:l.map((a,c)=>{const e=j[c%j.length];return r.jsx("div",{className:"mx-6 group cursor-pointer py-6",children:r.jsxs("div",{className:"bg-black backdrop-blur-xl border-2 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 min-w-[140px] transition-all duration-500 group-hover:scale-125 group-hover:-translate-y-4",style:{borderColor:`${e}40`},onMouseEnter:t=>{t.currentTarget.style.borderColor=e,t.currentTarget.style.boxShadow=`0 0 30px ${e}`},onMouseLeave:t=>{t.currentTarget.style.borderColor=`${e}40`,t.currentTarget.style.boxShadow="none"},children:[r.jsx("img",{src:a.logo,alt:a.name,className:"w-16 h-16 object-contain transition-all duration-300",style:{filter:"drop-shadow(0 0 5px white)"}}),r.jsx("span",{className:"font-mono text-white font-extrabold text-base transition-colors tracking-wider",onMouseEnter:t=>{t.currentTarget.style.color=e,t.currentTarget.style.textShadow=`0 0 10px ${e}`},onMouseLeave:t=>{t.currentTarget.style.color="white",t.currentTarget.style.textShadow="none"},children:a.name})]})},c)})})})]})})};export{te as default};
