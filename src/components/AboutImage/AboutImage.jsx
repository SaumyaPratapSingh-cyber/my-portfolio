// src/components/AboutImage/AboutImage.jsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
class Figure {
  constructor(scene, callback, $image) {
    this.$image = $image;
    this.scene = scene;
    this.callback = callback;
    this.loader = new THREE.TextureLoader();
    this.image = this.loader.load(this.$image.src, () => this.start());
    this.hover = this.loader.load(this.$image.dataset.hover);
    this.sizes = new THREE.Vector2(0, 0);
    this.offset = new THREE.Vector2(0, 0);
    this.mouse = new THREE.Vector2(0, 0);
    this.onMouseMove = this.onMouseMove.bind(this);
    window.addEventListener('pointermove', this.onMouseMove);
  }

  start() {
    this.getSizes();
    this.createMesh();
    this.callback();
  }

  getSizes() {
    const { width, height, top, left } = this.$image.getBoundingClientRect();
    this.sizes.set(width, height);
    this.offset.set(
      left - window.innerWidth / 2 + width / 2,
      -top + window.innerHeight / 2 - height / 2
    );
  }

  createMesh() {
    this.uniforms = {
      u_image: { type: 't', value: this.image },
      u_imagehover: { type: 't', value: this.hover },
      u_mouse: { value: this.mouse },
      u_time: { value: 0 },
      u_res: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    };
    this.geometry = new THREE.PlaneGeometry(1, 1, 1, 1);
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader:
        'varying vec2 v_uv;\n\nvoid main() {\n  v_uv = uv;\n\n  gl_Position = projectionMatrix * modelViewMatrix * \n\t\tvec4(position, 1.0);\n}',
      fragmentShader:
        'uniform vec2 u_mouse;\nuniform vec2 u_res;\n\nuniform sampler2D u_image;\nuniform sampler2D u_imagehover;\n\nuniform float u_time;\n\nvarying vec2 v_uv;\n\nfloat circle(in vec2 _st, in float _radius, in float blurriness){\n    vec2 dist = _st;\n    return 1.-smoothstep(_radius-(_radius*blurriness), _radius+(_radius*blurriness), dot(dist,dist)*4.0);\n}\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise3(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n       i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n       + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n       + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                    dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvoid main() {\n  vec2 res = u_res * ${window.devicePixelRatio.toFixed(1)};\n  vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);\n  st.y *= u_res.y / u_res.x;\n\n  vec2 mouse = u_mouse * -0.5;\n  \n  vec2 circlePos = st + mouse;\n  float c = circle(circlePos, 0.15, 2.) * 2.5;\n\n  float offx = v_uv.x + sin(v_uv.y + u_time * .1);\n  float offy = v_uv.y - u_time * 0.1 - cos(u_time * .001) * .01;\n\n  float n = snoise3(vec3(offx, offy, u_time * .1) * 8.) - 1.;\n\n  float finalMask = smoothstep(0.4, 0.5, n + pow(c, 2.));\n\n  vec4 image = texture2D(u_image, v_uv);\n  vec4 hover = texture2D(u_imagehover, v_uv);\n\n  vec4 finalImage = mix(image, hover, finalMask);\n\n  gl_FragColor = finalImage;\n}',
      defines: { PR: window.devicePixelRatio.toFixed(1) },
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(this.offset.x, this.offset.y, 0);
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1);
    this.scene.add(this.mesh);
  }

  onMouseMove(e) {
    gsap.to(this.mouse, 0.5, {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    });
    gsap.to(this.mesh.rotation, 0.5, {
      x: 0.3 * -this.mouse.y,
      y: this.mouse.x * (Math.PI / 6),
    });
  }

  update() {
    if (this.uniforms) {
      this.uniforms.u_time.value += 0.01;
    }
  }
  
  destroy() {
    window.removeEventListener('pointermove', this.onMouseMove);
  }
}

class WebGLScene {
  constructor(canvas) {
    this.container = canvas;
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.container,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.initLights();
    this.initCamera();
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    this.scene.add(ambientLight);
  }

  initCamera() {
    const fov = (2 * Math.atan(window.innerHeight / 2 / 800) * 180) / Math.PI;
    this.camera = new THREE.PerspectiveCamera(
      fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.set(0, 0, 800);
  }

  start(figure) {
    this.figure = figure;
    this.update();
  }

  update() {
    if (this.renderer) {
      this.animationFrameId = requestAnimationFrame(this.update.bind(this));
      if (this.figure) this.figure.update();
      this.renderer.render(this.scene, this.camera);
    }
  }

  destroy() {
    cancelAnimationFrame(this.animationFrameId);
    if(this.renderer) {
      this.renderer.dispose();
      this.renderer = null;
    }
  }
}

const AboutImage = () => {
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const figureRef = useRef(null);

  useEffect(() => {
    // Check if refs are mounted
    if (canvasRef.current && imageRef.current) {
      sceneRef.current = new WebGLScene(canvasRef.current);

      figureRef.current = new Figure(
        sceneRef.current.scene,
        () => {
          sceneRef.current.start(figureRef.current);
          gsap.to(imageRef.current, { autoAlpha: 1, duration: 0.8 });
        },
        imageRef.current
      );
    }

    return () => {
      // Check if they exist before trying to destroy
      if (figureRef.current) {
        figureRef.current.destroy();
      }
      if (sceneRef.current) {
        sceneRef.current.destroy();
      }
    };
  }, []); // The empty array [] means this runs only once.

  return (
    <div className="about-image-tile">
      <figure className="tile__figure">
        {/* Your two images go here */}
        <img
          ref={imageRef}
          className="tile__image"
          src="/profile.png" 
          data-hover="/profile1.png" 
          alt="Saumya Pratap Singh"
        />
      </figure>
      <canvas id="stage" ref={canvasRef}></canvas>
    </div>
  );
};

export default AboutImage;