var R = Object.defineProperty;
var y = (d, t, e) => t in d ? R(d, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[t] = e;
var s = (d, t, e) => y(d, typeof t != "symbol" ? t + "" : t, e);
class v {
  static generateColor(t, e) {
    let i, r;
    if (!(t.length > 0))
      i = Math.random(), r = 1;
    else {
      const a = Math.floor(Math.random() * t.length), h = t[a], n = v.HEXtoHSV(h);
      i = n.h, r = n.s;
    }
    const o = v.HSVtoRGB(i, r, e);
    return o.r *= 0.15, o.g *= 0.15, o.b *= 0.15, o;
  }
  static HEXtoHSV(t) {
    t = t.replace("#", "");
    const e = parseInt(t.substring(0, 2), 16) / 255, i = parseInt(t.substring(2, 4), 16) / 255, r = parseInt(t.substring(4, 6), 16) / 255, o = Math.max(e, i, r), a = Math.min(e, i, r);
    let h, n;
    return o === a ? h = 0 : o === e ? h = ((i - r) / (o - a) + 6) % 6 : o === i ? h = (r - e) / (o - a) + 2 : h = (e - i) / (o - a) + 4, h /= 6, o === 0 ? n = 0 : n = (o - a) / o, { h, s: n, v: o };
  }
  static HEXtoRGB(t) {
    t = t.replace("#", "");
    const e = parseInt(t.substring(0, 2), 16), i = parseInt(t.substring(2, 4), 16), r = parseInt(t.substring(4, 6), 16);
    return { r: e, g: i, b: r };
  }
  static HSVtoRGB(t, e, i) {
    let r = 0, o = 0, a = 0;
    const h = Math.floor(t * 6), n = t * 6 - h, c = i * (1 - e), f = i * (1 - n * e), p = i * (1 - (1 - n) * e);
    switch (h % 6) {
      case 0:
        r = i, o = p, a = c;
        break;
      case 1:
        r = f, o = i, a = c;
        break;
      case 2:
        r = c, o = i, a = p;
        break;
      case 3:
        r = c, o = f, a = i;
        break;
      case 4:
        r = p, o = c, a = i;
        break;
      case 5:
        r = i, o = c, a = f;
        break;
    }
    return {
      r,
      g: o,
      b: a
    };
  }
  static normalizeColor(t) {
    return {
      r: t.r / 255,
      g: t.g / 255,
      b: t.b / 255
    };
  }
}
const l = {
  simResolution: 128,
  dyeResolution: 1024,
  captureResolution: 512,
  densityDissipation: 1,
  velocityDissipation: 0.2,
  pressure: 0.8,
  pressureIterations: 20,
  curl: 30,
  splatRadius: 0.25,
  splatForce: 6e3,
  shading: !0,
  colorful: !0,
  colorUpdateSpeed: 10,
  colorPalette: [],
  hover: !0,
  inverted: !1,
  backgroundColor: "#000000",
  transparent: !1,
  brightness: 0.5,
  bloom: !0,
  bloomIterations: 8,
  bloomResolution: 256,
  bloomIntensity: 0.8,
  bloomThreshold: 0.6,
  bloomSoftKnee: 0.7,
  sunrays: !0,
  sunraysResolution: 196,
  sunraysWeight: 1
};
class u {
  static getUniforms(t, e) {
    const i = {}, r = e.getProgramParameter(
      t,
      e.ACTIVE_UNIFORMS
    );
    for (let o = 0; o < r; o++) {
      const a = e.getActiveUniform(t, o).name;
      i[a] = e.getUniformLocation(t, a);
    }
    return i;
  }
  static createProgram(t, e, i) {
    const r = i.createProgram();
    return i.attachShader(r, t), i.attachShader(r, e), i.linkProgram(r), i.getProgramParameter(r, i.LINK_STATUS) || console.trace(i.getProgramInfoLog(r)), r;
  }
  static compileShader(t, e, i, r) {
    i = u.addKeywords(i, r);
    const o = t.createShader(e);
    return t.shaderSource(o, i), t.compileShader(o), t.getShaderParameter(o, t.COMPILE_STATUS) ? o : (console.trace(t.getShaderInfoLog(o)), null);
  }
  static addKeywords(t, e) {
    if (e == null) return t;
    let i = "";
    return e.forEach((r) => {
      i += "#define " + r + `
`;
    }), i + t;
  }
}
class S {
  constructor(t, e, i) {
    s(this, "gl");
    s(this, "vertexShader");
    s(this, "fragmentShaderSource");
    s(this, "programs");
    s(this, "activeProgram");
    s(this, "uniforms");
    this.gl = i, this.vertexShader = t, this.fragmentShaderSource = e, this.programs = [], this.activeProgram = null, this.uniforms = {};
  }
  setKeywords(t) {
    let e = 0;
    for (const r of t)
      e += this.hashCode(r);
    let i = this.programs[e];
    if (i == null) {
      const r = u.compileShader(
        this.gl,
        this.gl.FRAGMENT_SHADER,
        this.fragmentShaderSource,
        t
      );
      i = u.createProgram(
        this.vertexShader,
        r,
        this.gl
      ), this.programs[e] = i;
    }
    i != this.activeProgram && (this.uniforms = u.getUniforms(i, this.gl), this.activeProgram = i);
  }
  hashCode(t) {
    if (t.length === 0) return 0;
    let e = 0;
    for (let i = 0; i < t.length; i++)
      e = (e << 5) - e + t.charCodeAt(i), e |= 0;
    return e;
  }
  bind() {
    this.gl.useProgram(this.activeProgram);
  }
}
class x {
  constructor(t, e) {
    s(this, "id", -1);
    s(this, "texcoordX", 0);
    s(this, "texcoordY", 0);
    s(this, "prevTexcoordX", 0);
    s(this, "prevTexcoordY", 0);
    s(this, "deltaX", 0);
    s(this, "deltaY", 0);
    s(this, "down", !1);
    s(this, "moved", !1);
    s(this, "color");
    this.color = v.generateColor(t, e);
  }
  updatePointerDownData(t, e, i, r, o, a) {
    this.id = t, this.down = !0, this.moved = !1, this.texcoordX = e / r.width, this.texcoordY = 1 - i / r.height, this.prevTexcoordX = this.texcoordX, this.prevTexcoordY = this.texcoordY, this.deltaX = 0, this.deltaY = 0, this.color = v.generateColor(o, a);
  }
  updatePointerMoveData(t, e, i, r) {
    this.prevTexcoordX = this.texcoordX, this.prevTexcoordY = this.texcoordY, this.texcoordX = t / i.width, this.texcoordY = 1 - e / i.height, this.deltaX = this.correctDeltaX(
      this.texcoordX - this.prevTexcoordX,
      i
    ), this.deltaY = this.correctDeltaY(
      this.texcoordY - this.prevTexcoordY,
      i
    ), r ? this.moved = Math.abs(this.deltaX) > 0 || Math.abs(this.deltaY) > 0 : this.moved = this.down;
  }
  updatePointerUpData() {
    this.down = !1;
  }
  correctDeltaX(t, e) {
    const i = e.width / e.height;
    return i < 1 && (t *= i), t;
  }
  correctDeltaY(t, e) {
    const i = e.width / e.height;
    return i > 1 && (t /= i), t;
  }
}
class m {
  constructor(t, e, i) {
    s(this, "gl");
    s(this, "program");
    s(this, "uniforms");
    this.gl = i, this.uniforms = {}, this.program = u.createProgram(t, e, i), this.uniforms = u.getUniforms(this.program, i);
  }
  bind() {
    this.gl.useProgram(this.program);
  }
}
class E {
  constructor(t, e) {
    s(this, "blurProgram");
    s(this, "copyProgram");
    s(this, "clearProgram");
    s(this, "colorProgram");
    s(this, "bloomPrefilterProgram");
    s(this, "bloomBlurProgram");
    s(this, "bloomFinalProgram");
    s(this, "sunraysMaskProgram");
    s(this, "sunraysProgram");
    s(this, "splatProgram");
    s(this, "advectionProgram");
    s(this, "divergenceProgram");
    s(this, "curlProgram");
    s(this, "vorticityProgram");
    s(this, "pressureProgram");
    s(this, "gradienSubtractProgram");
    this.blurProgram = new m(
      e.blurVertexShader,
      e.blurShader,
      t
    ), this.copyProgram = new m(
      e.baseVertexShader,
      e.copyShader,
      t
    ), this.clearProgram = new m(
      e.baseVertexShader,
      e.clearShader,
      t
    ), this.colorProgram = new m(
      e.baseVertexShader,
      e.colorShader,
      t
    ), this.bloomPrefilterProgram = new m(
      e.baseVertexShader,
      e.bloomPrefilterShader,
      t
    ), this.bloomBlurProgram = new m(
      e.baseVertexShader,
      e.bloomBlurShader,
      t
    ), this.bloomFinalProgram = new m(
      e.baseVertexShader,
      e.bloomFinalShader,
      t
    ), this.sunraysMaskProgram = new m(
      e.baseVertexShader,
      e.sunraysMaskShader,
      t
    ), this.sunraysProgram = new m(
      e.baseVertexShader,
      e.sunraysShader,
      t
    ), this.splatProgram = new m(
      e.baseVertexShader,
      e.splatShader,
      t
    ), this.advectionProgram = new m(
      e.baseVertexShader,
      e.advectionShader,
      t
    ), this.divergenceProgram = new m(
      e.baseVertexShader,
      e.divergenceShader,
      t
    ), this.curlProgram = new m(
      e.baseVertexShader,
      e.curlShader,
      t
    ), this.vorticityProgram = new m(
      e.baseVertexShader,
      e.vorticityShader,
      t
    ), this.pressureProgram = new m(
      e.baseVertexShader,
      e.pressureShader,
      t
    ), this.gradienSubtractProgram = new m(
      e.baseVertexShader,
      e.gradientSubtractShader,
      t
    );
  }
}
class g {
  static normalizeTexture(t, e, i) {
    const r = new Uint8Array(t.length);
    let o = 0;
    for (let a = i - 1; a >= 0; a--)
      for (let h = 0; h < e; h++) {
        const n = a * e * 4 + h * 4;
        r[n + 0] = g.clamp01(t[o + 0]) * 255, r[n + 1] = g.clamp01(t[o + 1]) * 255, r[n + 2] = g.clamp01(t[o + 2]) * 255, r[n + 3] = g.clamp01(t[o + 3]) * 255, o += 4;
      }
    return r;
  }
  static clamp01(t) {
    return Math.min(Math.max(t, 0), 1);
  }
  static framebufferToTexture(t, e) {
    e.bindFramebuffer(e.FRAMEBUFFER, t.fbo);
    const i = t.width * t.height * 4, r = new Float32Array(i);
    return e.readPixels(
      0,
      0,
      t.width,
      t.height,
      e.RGBA,
      e.FLOAT,
      r
    ), r;
  }
  static textureToCanvas(t, e, i) {
    const r = document.createElement("canvas"), o = r.getContext("2d");
    r.width = e, r.height = i;
    const a = o.createImageData(e, i);
    return a.data.set(t), o.putImageData(a, 0, 0), r;
  }
  static invertImageColors(t) {
    const e = t.getContext("2d"), i = e.getImageData(0, 0, t.width, t.height);
    for (let r = 0; r < i.data.length; r += 4)
      i.data[r] = 255 - i.data[r], i.data[r + 1] = 255 - i.data[r + 1], i.data[r + 2] = 255 - i.data[r + 2];
    e.putImageData(i, 0, 0);
  }
  static downloadURI(t, e) {
    const i = document.createElement("a");
    i.download = t, i.href = e, document.body.appendChild(i), i.click(), document.body.removeChild(i);
  }
}
class A {
  constructor(t, e) {
    s(this, "displayShaderSource");
    s(this, "baseVertexShader");
    s(this, "blurVertexShader");
    s(this, "blurShader");
    s(this, "copyShader");
    s(this, "clearShader");
    s(this, "colorShader");
    s(this, "bloomPrefilterShader");
    s(this, "bloomBlurShader");
    s(this, "bloomFinalShader");
    s(this, "sunraysMaskShader");
    s(this, "sunraysShader");
    s(this, "splatShader");
    s(this, "advectionShader");
    s(this, "divergenceShader");
    s(this, "curlShader");
    s(this, "vorticityShader");
    s(this, "pressureShader");
    s(this, "gradientSubtractShader");
    this.displayShaderSource = `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;

    vec3 linearToGamma (vec3 color) {
    color = max(color, vec3(0));
    return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }

    void main () {
    vec3 c = texture2D(uTexture, vUv).rgb;

    #ifdef SHADING
    vec3 lc = texture2D(uTexture, vL).rgb;
    vec3 rc = texture2D(uTexture, vR).rgb;
    vec3 tc = texture2D(uTexture, vT).rgb;
    vec3 bc = texture2D(uTexture, vB).rgb;

    float dx = length(rc) - length(lc);
    float dy = length(tc) - length(bc);

    vec3 n = normalize(vec3(dx, dy, length(texelSize)));
    vec3 l = vec3(0.0, 0.0, 1.0);

    float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
    c *= diffuse;
    #endif

    #ifdef BLOOM
    vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif

    #ifdef SUNRAYS
    float sunrays = texture2D(uSunrays, vUv).r;
    c *= sunrays;
    #ifdef BLOOM
    bloom *= sunrays;
    #endif
    #endif

    #ifdef BLOOM
    float noise = texture2D(uDithering, vUv * ditherScale).r;
    noise = noise * 2.0 - 1.0;
    bloom += noise / 255.0;
    bloom = linearToGamma(bloom);
    c += bloom;
    #endif

    float a = max(c.r, max(c.g, c.b));
    gl_FragColor = vec4(c, a);
    }
    `, this.baseVertexShader = u.compileShader(
      t,
      t.VERTEX_SHADER,
      `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`
    ), this.blurVertexShader = u.compileShader(
      t,
      t.VERTEX_SHADER,
      `
    precision highp float;

    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;

    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`
    ), this.blurShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`
    ), this.copyShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`
    ), this.clearShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;

    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`
    ), this.colorShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;

    uniform vec4 color;

    void main () {
        gl_FragColor = color;
    }
`
    ), this.bloomPrefilterShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;

    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`
    ), this.bloomBlurShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`
    ), this.bloomFinalShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;

    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`
    ), this.sunraysMaskShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`
    ), this.sunraysShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;

    #define ITERATIONS 16

    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;

        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;

        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;

        float color = texture2D(uTexture, vUv).a;

        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }

        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`
    ), this.splatShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;

    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`
    ), this.advectionShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;

    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;

        vec2 iuv = floor(st);
        vec2 fuv = fract(st);

        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }

    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,
      e.supportLinearFiltering ? null : ["MANUAL_FILTERING"]
    ), this.divergenceShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;

        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }

        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`
    ), this.curlShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`
    ), this.vorticityShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision highp float;
    precision highp sampler2D;

    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;

    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;

        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;

        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity += force * dt;
        velocity = min(max(velocity, -1000.0), 1000.0);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`
    ), this.pressureShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`
    ), this.gradientSubtractShader = u.compileShader(
      t,
      t.FRAGMENT_SHADER,
      `
    precision mediump float;
    precision mediump sampler2D;

    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;

    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`
    );
  }
}
class b {
  static ditheringTexture(t) {
    return b.createTextureAsync(
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAeK0lEQVR4AT3aBbRuVdUG4HW5hNLdSHd3CyjdEtLd3Y1wKZHuLgFJRenuBqW7u7tTlu8zx//9ZwwG8J397b3WnG/NtU9bYokl+nfffdf//e9/96uuuqrPN998/ZRTTukbb7xxP/zww/u+++7bf/vb3/YddtihP/roo32SSSbpL7zwQj/99NP7Vltt1X/88ce+8sor13Vvv/12Hzp0aF999dX7Bx980P/617/2WWedtX/55Zd9++237zPMMEP/05/+1DfYYIP+0EMP9amnnrq/9957/ZZbbum//PJLf+yxx/pJJ53URxtttL7WWmv1P//5z/3bb7/t9913X63t9ddf7wsvvHBff/31+6GHHtovu+yyPuecc/YbbrihH3300fXshRZaqF900UW1zv/85z991FFHrfXce++9ffjhh+/nnXdeXe8e7tsuv/zy+vKEE07YDzzwwNpoz4/FPfnkk32VVVbpd911V7/66qv7Mccc0y+99NI+yiij9KWWWqoffPDB/frrr6+HWfjss8/e77jjju6ev/vd72ojNrfiiiv21lo98Pzzz6/fnXjiif0f//hH33rrrWujFr7JJpvU/d5///1+wQUX9N12261PNdVUfbnlluvDDTdc//TTT+vzW2+9tY844oj9q6++6i+++GKffPLJaz3W+fXXX1fx3N/6vv/++3rOG2+8Uc/66KOP+njjjVff22OPPXr7+OOPq4oqftZZZ3VdtLkxxhijX3zxxd0XFGeOOebof/zjH/tee+1VC7nnnnv6uuuuWwt55ZVXqurbbLNNH3fccdWv77333t0innrqqX7QQQf1tddeu3uWh88zzzz9m2++6WONNVZt7txzz61njDTSSP2AAw7oM888c1988cX77bffXgvdaKON+rBhw/oEE0xQKJltttn6Lrvs0k844YS+5ppr9i233LK/8847tTYo23bbbfurr75ahYYQaFUk9/Zd31twwQX7yCOP3JuO6cIzzzxTEJppppmqUzrrc50dMmRIf+211/rPP//cF1lkkeqKToK3ii+66KL98ccf74cddlhfZ511+gMPPNCnnXbavsACC9RGJ5tssv7Pf/6zFrLrrrvWxp5++ulC3DXXXFMFff7557uigjy6TTzxxP3zzz8vNM0999zVHDT6wx/+0H/44Yc+6aST1vXW869//aufccYZfZxxxql1oLIGQp/naQLaLbvssoVkdF9ttdUKTUPcaJZZZmnbbbddW2yxxVoW2rKolg0oTgtn0KTluvbggw+2VVddtWXxLbxvJ598cptuuulaqt/CxxZet2hHW2ONNdr444/fbrrpppYCtUCxhUr1WXShpRMtm2tZaJtxxhlbEFf3iP60LLq+Hzq18Lxlg/X9l156qT3yyCP17JtvvrmFw23eeedtvhO0tf3337+eEU1pKVRbYYUV2hZbbNGuu+46KG/Rl5ZN138HPW333Xdv1tJwRJfxjcDoIjHSAb9bb731+u9///uC0MMPP1y8JnogN+aYY5aYqSYhAm1dG3vssTtagPRRRx3VL7zwwu67BImwTTHFFP1vf/tbJ2r3339/T+H7lFNO+f/d9nkWXx3NQquDUObaaaaZpr/55pt9n332qa6iVZrQ05zSEDq133771f1Qw/OJIo2xt3POOafEkMin+L2BK9VNhfumm25am3rrrbf68ccf36effvp+2223lYh88sknxbtUvT7DJ4W54oor+tlnn103tWgLALt0qzaGYoR0zz337F988UUPKop/xx13XBXYIs8888wqqE0RS4JrU6eeempPt8shUIuKe4Zn0g+/41o777xzv+SSS+q7zz33XLmaooK6vaA1rXj55ZeLvhpMY9wHpDuOuRne/v3vfy9h2nHHHTue//rXv64v4h6r0TkbmWiiiTpx+u9//1uL9eC77767ukjEPJDlsUnCR5zYKx7TC87gc0oNGRBEYzbccMNyH88gnksuuSSKVhe5FEvlNoQN8o499tjSp2WWWaZ0gaYQa41TQAJ+5ZVXlk3TtBtvvLGa9Nlnn5VQN/bA71XYZiyanbAYAsOaQMoiRhhhhE683Cj873PNNVc93Pep/vLLL19dJXooQt0hhig9++yz5QTuwUp15c477ywnIcC+S4/cCxVlCcW3Ps2QP6i3Qi+99NKFsJ9++qlHa6rwHMyawZzS/+pXvypas1CiOfroo1c2WWmllaqAHAXyhqZDw6LmJWpZeEsh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",
      t
    );
  }
  static getTextureScale(t, e, i) {
    return {
      x: e / t.width,
      y: i / t.height
    };
  }
  static createTextureAsync(t, e) {
    const i = e.createTexture();
    e.bindTexture(e.TEXTURE_2D, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT), e.texImage2D(
      e.TEXTURE_2D,
      0,
      e.RGB,
      1,
      1,
      0,
      e.RGB,
      e.UNSIGNED_BYTE,
      new Uint8Array([255, 255, 255])
    );
    const r = {
      texture: i,
      width: 1,
      height: 1,
      attach(a) {
        return e.activeTexture(e.TEXTURE0 + a), e.bindTexture(e.TEXTURE_2D, i), a;
      }
    }, o = new Image();
    return o.onload = () => {
      r.width = o.width, r.height = o.height, e.bindTexture(e.TEXTURE_2D, i), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, e.RGB, e.UNSIGNED_BYTE, o);
    }, o.src = t, r;
  }
}
class D {
  constructor(t) {
    s(this, "hasStarted", !1);
    s(this, "simResolution", l.simResolution);
    s(this, "dyeResolution", l.dyeResolution);
    s(this, "captureResolution", l.captureResolution);
    s(this, "densityDissipation", l.densityDissipation);
    s(this, "velocityDissipation", l.velocityDissipation);
    s(this, "pressure", l.pressure);
    s(this, "pressureIterations", l.pressureIterations);
    s(this, "curl", l.curl);
    s(this, "splatRadius", l.splatRadius);
    s(this, "splatForce", l.splatForce);
    s(this, "shading", l.shading);
    s(this, "colorful", l.colorful);
    s(this, "colorUpdateSpeed", l.colorUpdateSpeed);
    s(this, "colorPalette", l.colorPalette);
    s(this, "hover", l.hover);
    s(this, "backgroundColor", l.backgroundColor);
    s(this, "transparent", l.transparent);
    s(this, "brightness", l.brightness);
    s(this, "bloom", l.bloom);
    s(this, "bloomIterations", l.bloomIterations);
    s(this, "bloomResolution", l.bloomResolution);
    s(this, "bloomIntensity", l.bloomIntensity);
    s(this, "bloomThreshold", l.bloomThreshold);
    s(this, "bloomSoftKnee", l.bloomSoftKnee);
    s(this, "sunrays", l.sunrays);
    s(this, "sunraysResolution", l.sunraysResolution);
    s(this, "sunraysWeight", l.sunraysWeight);
    s(this, "paused", !1);
    s(this, "drawWhilePaused", !1);
    s(this, "_inverted", !1);
    s(this, "canvas");
    s(this, "gl");
    s(this, "ext");
    s(this, "splatStack", []);
    s(this, "pointers", []);
    s(this, "programs");
    s(this, "bloomFramebuffers", []);
    s(this, "ditheringTexture");
    s(this, "displayMaterial");
    s(this, "lastUpdateTime", Date.now());
    s(this, "colorUpdateTimer", 0);
    s(this, "_dye");
    s(this, "_velocity");
    s(this, "_divergence");
    s(this, "_curl");
    s(this, "_pressure");
    s(this, "_bloom");
    s(this, "_sunrays");
    s(this, "_sunraysTemp");
    s(this, "animationFrameID");
    s(this, "handleMouseDown", (t) => {
      const e = this.scaleByPixelRatio(t.offsetX), i = this.scaleByPixelRatio(t.offsetY);
      let r = this.pointers.find((o) => o.id == -1);
      r || (r = new x(this.colorPalette, this.brightness)), r.updatePointerDownData(
        -1,
        e,
        i,
        this.canvas,
        this.colorPalette,
        this.brightness
      );
    });
    s(this, "handleMouseMove", (t) => {
      const e = this.scaleByPixelRatio(t.offsetX), i = this.scaleByPixelRatio(t.offsetY);
      let r = this.pointers.find((o) => o.id == -1);
      r || (r = new x(this.colorPalette, this.brightness)), r.updatePointerMoveData(e, i, this.canvas, this.hover);
    });
    s(this, "handleMouseUp", () => {
      this.hover || this.pointers[0].updatePointerUpData();
    });
    s(this, "handleTouchStart", (t) => {
      const e = t.targetTouches;
      for (; e.length >= this.pointers.length; )
        this.pointers.push(new x(this.colorPalette, this.brightness));
      for (let i = 0; i < e.length; i++) {
        const r = this.scaleByPixelRatio(e[i].pageX), o = this.scaleByPixelRatio(e[i].pageY);
        this.pointers[i + 1].updatePointerDownData(
          e[i].identifier,
          r,
          o,
          this.canvas,
          this.colorPalette,
          this.brightness
        );
      }
    });
    s(this, "handleTouchMove", (t) => {
      const e = t.targetTouches;
      for (let i = 0; i < e.length; i++) {
        const r = this.pointers[i + 1], o = this.scaleByPixelRatio(e[i].pageX), a = this.scaleByPixelRatio(e[i].pageY);
        r.updatePointerMoveData(o, a, this.canvas, this.hover);
      }
    });
    s(this, "handleTouchEnd", (t) => {
      const e = t.changedTouches;
      for (const i of e) {
        const r = this.pointers.find(
          (o) => o.id === i.identifier
        );
        r && r.updatePointerUpData();
      }
    });
    let e = t.querySelector("canvas");
    e || (e = document.createElement("canvas"), t.appendChild(e)), this.canvas = e, this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.resizeCanvas(), this.inverted = l.inverted;
    const { gl: i, ext: r } = this.getWebGLContext();
    this.gl = i, this.ext = r, this.isMobile() && (this.dyeResolution /= 2), this.ext.supportLinearFiltering || (this.dyeResolution /= 2, this.shading = !1, this.bloom = !1, this.sunrays = !1);
    const o = new A(this.gl, this.ext);
    this.blitInit(), this.ditheringTexture = b.ditheringTexture(this.gl), this.programs = new E(this.gl, o), this.displayMaterial = new S(
      o.baseVertexShader,
      o.displayShaderSource,
      this.gl
    ), this.update = this.update.bind(this);
  }
  start() {
    this.pointers.push(new x(this.colorPalette, this.brightness)), this.updateKeywords(), this.initFramebuffers(), this.update(), this.canvas.addEventListener("mousedown", this.handleMouseDown), this.canvas.addEventListener("mousemove", this.handleMouseMove), window.addEventListener("mouseup", this.handleMouseUp), this.canvas.addEventListener("touchstart", this.handleTouchStart, {
      passive: !1,
      capture: !0
    }), this.canvas.addEventListener("touchmove", this.handleTouchMove, {
      passive: !1,
      capture: !0
    }), window.addEventListener("touchend", this.handleTouchEnd), this.hasStarted = !0;
  }
  stop() {
    this.pointers = [], cancelAnimationFrame(this.animationFrameID), this.canvas.removeEventListener("mousedown", this.handleMouseDown), this.canvas.removeEventListener("mousemove", this.handleMouseMove), window.removeEventListener("mouseup", this.handleMouseUp), this.canvas.removeEventListener("touchstart", this.handleTouchStart), this.canvas.removeEventListener("touchmove", this.handleTouchMove), window.removeEventListener("touchend", this.handleTouchEnd), this.hasStarted = !1;
  }
  scaleByPixelRatio(t) {
    const e = window.devicePixelRatio || 1;
    return Math.floor(t * e);
  }
  resizeCanvas() {
    const t = this.scaleByPixelRatio(this.canvas.clientWidth), e = this.scaleByPixelRatio(this.canvas.clientHeight);
    return this.canvas.width != t || this.canvas.height != e ? (this.canvas.width = t, this.canvas.height = e, !0) : !1;
  }
  supportRenderTextureFormat(t, e, i, r) {
    const o = t.createTexture();
    t.bindTexture(t.TEXTURE_2D, o), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(
      t.TEXTURE_2D,
      0,
      e,
      4,
      4,
      0,
      i,
      r,
      null
    );
    const a = t.createFramebuffer();
    return t.bindFramebuffer(t.FRAMEBUFFER, a), t.framebufferTexture2D(
      t.FRAMEBUFFER,
      t.COLOR_ATTACHMENT0,
      t.TEXTURE_2D,
      o,
      0
    ), t.checkFramebufferStatus(t.FRAMEBUFFER) == t.FRAMEBUFFER_COMPLETE;
  }
  getSupportedFormat(t, e, i, r) {
    if (!this.supportRenderTextureFormat(t, e, i, r))
      switch (e) {
        case t.R16F:
          return this.getSupportedFormat(t, t.RG16F, t.RG, r);
        case t.RG16F:
          return this.getSupportedFormat(t, t.RGBA16F, t.RGBA, r);
        default:
          return null;
      }
    return {
      internalFormat: e,
      format: i
    };
  }
  getWebGLContext() {
    const t = {
      alpha: !0,
      depth: !1,
      stencil: !1,
      antialias: !1,
      preserveDrawingBuffer: !1
    };
    let e = this.canvas.getContext("webgl2", t);
    const i = !!e;
    i || (e = this.canvas.getContext("webgl", t) ?? this.canvas.getContext(
      "experimental-webgl",
      t
    ));
    let r, o;
    i ? (e.getExtension("EXT_color_buffer_float"), o = e.getExtension("OES_texture_float_linear")) : (r = e.getExtension("OES_texture_half_float"), o = e.getExtension(
      "OES_texture_half_float_linear"
    )), e.clearColor(0, 0, 0, 1);
    const a = i ? e.HALF_FLOAT : r ? r.HALF_FLOAT_OES : 0;
    let h, n, c;
    return i ? (h = this.getSupportedFormat(
      e,
      e.RGBA16F,
      e.RGBA,
      a
    ), n = this.getSupportedFormat(
      e,
      e.RG16F,
      e.RG,
      a
    ), c = this.getSupportedFormat(e, e.R16F, e.RED, a)) : (h = this.getSupportedFormat(
      e,
      e.RGBA,
      e.RGBA,
      a
    ), n = this.getSupportedFormat(
      e,
      e.RGBA,
      e.RGBA,
      a
    ), c = this.getSupportedFormat(
      e,
      e.RGBA,
      e.RGBA,
      a
    )), {
      gl: e,
      ext: {
        formatRGBA: h,
        formatRG: n,
        formatR: c,
        halfFloatTexType: a,
        supportLinearFiltering: o
      }
    };
  }
  isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }
  updateKeywords() {
    const t = [];
    this.shading && t.push("SHADING"), this.bloom && t.push("BLOOM"), this.sunrays && t.push("SUNRAYS"), this.displayMaterial.setKeywords(t);
  }
  initFramebuffers() {
    const t = this.getResolution(this.simResolution), e = this.getResolution(this.dyeResolution), i = this.ext.halfFloatTexType, r = this.ext.formatRGBA, o = this.ext.formatRG, a = this.ext.formatR, h = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this.gl.disable(this.gl.BLEND), this._dye ? this._dye = this.resizeDoubleFBO(
      this._dye,
      e.width,
      e.height,
      r.internalFormat,
      r.format,
      i,
      h
    ) : this._dye = this.createDoubleFBO(
      e.width,
      e.height,
      r.internalFormat,
      r.format,
      i,
      h
    ), this._velocity ? this._velocity = this.resizeDoubleFBO(
      this._velocity,
      t.width,
      t.height,
      o.internalFormat,
      o.format,
      i,
      h
    ) : this._velocity = this.createDoubleFBO(
      t.width,
      t.height,
      o.internalFormat,
      o.format,
      i,
      h
    ), this._divergence = this.createFBO(
      t.width,
      t.height,
      a.internalFormat,
      a.format,
      i,
      this.gl.NEAREST
    ), this._curl = this.createFBO(
      t.width,
      t.height,
      a.internalFormat,
      a.format,
      i,
      this.gl.NEAREST
    ), this._pressure = this.createDoubleFBO(
      t.width,
      t.height,
      a.internalFormat,
      a.format,
      i,
      this.gl.NEAREST
    ), this.initBloomFramebuffers(), this.initSunraysFramebuffers();
  }
  getResolution(t) {
    let e = this.gl.drawingBufferWidth / this.gl.drawingBufferHeight;
    e < 1 && (e = 1 / e);
    const i = Math.round(t), r = Math.round(t * e);
    return this.gl.drawingBufferWidth > this.gl.drawingBufferHeight ? { width: r, height: i } : { width: i, height: r };
  }
  createDoubleFBO(t, e, i, r, o, a) {
    let h = this.createFBO(t, e, i, r, o, a), n = this.createFBO(t, e, i, r, o, a);
    return {
      width: t,
      height: e,
      texelSizeX: h.texelSizeX,
      texelSizeY: h.texelSizeY,
      get read() {
        return h;
      },
      set read(c) {
        h = c;
      },
      get write() {
        return n;
      },
      set write(c) {
        n = c;
      },
      swap() {
        const c = h;
        h = n, n = c;
      }
    };
  }
  resizeFBO(t, e, i, r, o, a, h) {
    const n = this.createFBO(e, i, r, o, a, h);
    return this.programs.copyProgram.bind(), this.gl.uniform1i(
      this.programs.copyProgram.uniforms.uTexture,
      t.attach(0)
    ), this.blit(n), n;
  }
  resizeDoubleFBO(t, e, i, r, o, a, h) {
    return t.width === e && t.height === i || (t.read = this.resizeFBO(
      t.read,
      e,
      i,
      r,
      o,
      a,
      h
    ), t.write = this.createFBO(e, i, r, o, a, h), t.width = e, t.height = i, t.texelSizeX = 1 / e, t.texelSizeY = 1 / i), t;
  }
  createFBO(t, e, i, r, o, a) {
    this.gl.activeTexture(this.gl.TEXTURE0);
    const h = this.gl.createTexture();
    this.gl.bindTexture(this.gl.TEXTURE_2D, h), this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MIN_FILTER,
      a
    ), this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_MAG_FILTER,
      a
    ), this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_S,
      this.gl.CLAMP_TO_EDGE
    ), this.gl.texParameteri(
      this.gl.TEXTURE_2D,
      this.gl.TEXTURE_WRAP_T,
      this.gl.CLAMP_TO_EDGE
    ), this.gl.texImage2D(
      this.gl.TEXTURE_2D,
      0,
      i,
      t,
      e,
      0,
      r,
      o,
      null
    );
    const n = this.gl.createFramebuffer();
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, n), this.gl.framebufferTexture2D(
      this.gl.FRAMEBUFFER,
      this.gl.COLOR_ATTACHMENT0,
      this.gl.TEXTURE_2D,
      h,
      0
    ), this.gl.viewport(0, 0, t, e), this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    const c = 1 / t, f = 1 / e, p = this.gl;
    return {
      texture: h,
      fbo: n,
      width: t,
      height: e,
      texelSizeX: c,
      texelSizeY: f,
      attach(T) {
        return p.activeTexture(p.TEXTURE0 + T), p.bindTexture(p.TEXTURE_2D, h), T;
      }
    };
  }
  initBloomFramebuffers() {
    const t = this.getResolution(this.bloomResolution), e = this.ext.halfFloatTexType, i = this.ext.formatRGBA, r = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this._bloom = this.createFBO(
      t.width,
      t.height,
      i.internalFormat,
      i.format,
      e,
      r
    ), this.bloomFramebuffers.length = 0;
    for (let o = 0; o < this.bloomIterations; o++) {
      const a = t.width >> o + 1, h = t.height >> o + 1;
      if (a < 2 || h < 2) break;
      const n = this.createFBO(
        a,
        h,
        i.internalFormat,
        i.format,
        e,
        r
      );
      this.bloomFramebuffers.push(n);
    }
  }
  initSunraysFramebuffers() {
    const t = this.getResolution(this.sunraysResolution), e = this.ext.halfFloatTexType, i = this.ext.formatR, r = this.ext.supportLinearFiltering ? this.gl.LINEAR : this.gl.NEAREST;
    this._sunrays = this.createFBO(
      t.width,
      t.height,
      i.internalFormat,
      i.format,
      e,
      r
    ), this._sunraysTemp = this.createFBO(
      t.width,
      t.height,
      i.internalFormat,
      i.format,
      e,
      r
    );
  }
  blitInit() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.gl.createBuffer()), this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
      this.gl.STATIC_DRAW
    ), this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.gl.createBuffer()), this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array([0, 1, 2, 0, 2, 3]),
      this.gl.STATIC_DRAW
    ), this.gl.vertexAttribPointer(0, 2, this.gl.FLOAT, !1, 0, 0), this.gl.enableVertexAttribArray(0);
  }
  blit(t, e = !1) {
    t === null ? (this.gl.viewport(
      0,
      0,
      this.gl.drawingBufferWidth,
      this.gl.drawingBufferHeight
    ), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null)) : (this.gl.viewport(0, 0, t.width, t.height), this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, t.fbo)), e && (this.gl.clearColor(0, 0, 0, 1), this.gl.clear(this.gl.COLOR_BUFFER_BIT)), this.gl.drawElements(this.gl.TRIANGLES, 6, this.gl.UNSIGNED_SHORT, 0);
  }
  multipleSplats(t) {
    for (let e = 0; e < t; e++) {
      const i = v.generateColor(this.colorPalette, this.brightness);
      i.r *= 10, i.g *= 10, i.b *= 10;
      const r = Math.random(), o = Math.random(), a = 1e3 * (Math.random() - 0.5), h = 1e3 * (Math.random() - 0.5);
      this.splat(r, o, a, h, i);
    }
  }
  splat(t, e, i, r, o) {
    this.programs.splatProgram.bind(), this.gl.uniform1i(
      this.programs.splatProgram.uniforms.uTarget,
      this._velocity.read.attach(0)
    ), this.gl.uniform1f(
      this.programs.splatProgram.uniforms.aspectRatio,
      this.canvas.width / this.canvas.height
    ), this.gl.uniform2f(this.programs.splatProgram.uniforms.point, t, e), this.gl.uniform3f(this.programs.splatProgram.uniforms.color, i, r, 0), this.gl.uniform1f(
      this.programs.splatProgram.uniforms.radius,
      this.correctRadius(this.splatRadius / 100)
    ), this.blit(this._velocity.write), this._velocity.swap(), this.gl.uniform1i(
      this.programs.splatProgram.uniforms.uTarget,
      this._dye.read.attach(0)
    ), this.gl.uniform3f(
      this.programs.splatProgram.uniforms.color,
      o.r,
      o.g,
      o.b
    ), this.blit(this._dye.write), this._dye.swap();
  }
  correctRadius(t) {
    const e = this.canvas.width / this.canvas.height;
    return e > 1 && (t *= e), t;
  }
  update() {
    const t = this.calcDeltaTime();
    this.resizeCanvas() && this.initFramebuffers(), this.updateColors(t), this.applyInputs(), this.paused || this.step(t), this.render(null), this.animationFrameID = requestAnimationFrame(this.update);
  }
  calcDeltaTime() {
    const t = Date.now();
    let e = (t - this.lastUpdateTime) / 1e3;
    return e = Math.min(e, 0.016666), this.lastUpdateTime = t, e;
  }
  updateColors(t) {
    this.colorful && (this.colorUpdateTimer += t * this.colorUpdateSpeed, this.colorUpdateTimer >= 1 && (this.colorUpdateTimer = this.wrap(this.colorUpdateTimer, 0, 1), this.pointers.forEach((e) => {
      e.color = v.generateColor(this.colorPalette, this.brightness);
    })));
  }
  wrap(t, e, i) {
    const r = i - e;
    return r == 0 ? e : (t - e) % r + e;
  }
  applyInputs() {
    this.splatStack.length > 0 && this.multipleSplats(this.splatStack.pop()), this.pointers.forEach((t) => {
      t.moved && (t.moved = !1, this.splatPointer(t));
    });
  }
  splatPointer(t) {
    if (this.paused && !this.drawWhilePaused) return;
    const e = t.deltaX * this.splatForce, i = t.deltaY * this.splatForce;
    this.splat(t.texcoordX, t.texcoordY, e, i, t.color);
  }
  step(t) {
    this.gl.disable(this.gl.BLEND), this.programs.curlProgram.bind(), this.gl.uniform2f(
      this.programs.curlProgram.uniforms.texelSize,
      this._velocity.texelSizeX,
      this._velocity.texelSizeY
    ), this.gl.uniform1i(
      this.programs.curlProgram.uniforms.uVelocity,
      this._velocity.read.attach(0)
    ), this.blit(this._curl), this.programs.vorticityProgram.bind(), this.gl.uniform2f(
      this.programs.vorticityProgram.uniforms.texelSize,
      this._velocity.texelSizeX,
      this._velocity.texelSizeY
    ), this.gl.uniform1i(
      this.programs.vorticityProgram.uniforms.uVelocity,
      this._velocity.read.attach(0)
    ), this.gl.uniform1i(
      this.programs.vorticityProgram.uniforms.uCurl,
      this._curl.attach(1)
    ), this.gl.uniform1f(this.programs.vorticityProgram.uniforms.curl, this.curl), this.gl.uniform1f(this.programs.vorticityProgram.uniforms.dt, t), this.blit(this._velocity.write), this._velocity.swap(), this.programs.divergenceProgram.bind(), this.gl.uniform2f(
      this.programs.divergenceProgram.uniforms.texelSize,
      this._velocity.texelSizeX,
      this._velocity.texelSizeY
    ), this.gl.uniform1i(
      this.programs.divergenceProgram.uniforms.uVelocity,
      this._velocity.read.attach(0)
    ), this.blit(this._divergence), this.programs.clearProgram.bind(), this.gl.uniform1i(
      this.programs.clearProgram.uniforms.uTexture,
      this._pressure.read.attach(0)
    ), this.gl.uniform1f(
      this.programs.clearProgram.uniforms.value,
      this.pressure
    ), this.blit(this._pressure.write), this._pressure.swap(), this.programs.pressureProgram.bind(), this.gl.uniform2f(
      this.programs.pressureProgram.uniforms.texelSize,
      this._velocity.texelSizeX,
      this._velocity.texelSizeY
    ), this.gl.uniform1i(
      this.programs.pressureProgram.uniforms.uDivergence,
      this._divergence.attach(0)
    );
    for (let i = 0; i < this.pressureIterations; i++)
      this.gl.uniform1i(
        this.programs.pressureProgram.uniforms.uPressure,
        this._pressure.read.attach(1)
      ), this.blit(this._pressure.write), this._pressure.swap();
    this.programs.gradienSubtractProgram.bind(), this.gl.uniform2f(
      this.programs.gradienSubtractProgram.uniforms.texelSize,
      this._velocity.texelSizeX,
      this._velocity.texelSizeY
    ), this.gl.uniform1i(
      this.programs.gradienSubtractProgram.uniforms.uPressure,
      this._pressure.read.attach(0)
    ), this.gl.uniform1i(
      this.programs.gradienSubtractProgram.uniforms.uVelocity,
      this._velocity.read.attach(1)
    ), this.blit(this._velocity.write), this._velocity.swap(), this.programs.advectionProgram.bind(), this.gl.uniform2f(
      this.programs.advectionProgram.uniforms.texelSize,
      this._velocity.texelSizeX,
      this._velocity.texelSizeY
    ), this.ext.supportLinearFiltering || this.gl.uniform2f(
      this.programs.advectionProgram.uniforms.dyeTexelSize,
      this._velocity.texelSizeX,
      this._velocity.texelSizeY
    );
    const e = this._velocity.read.attach(0);
    this.gl.uniform1i(
      this.programs.advectionProgram.uniforms.uVelocity,
      e
    ), this.gl.uniform1i(
      this.programs.advectionProgram.uniforms.uSource,
      e
    ), this.gl.uniform1f(this.programs.advectionProgram.uniforms.dt, t), this.gl.uniform1f(
      this.programs.advectionProgram.uniforms.dissipation,
      this.velocityDissipation
    ), this.blit(this._velocity.write), this._velocity.swap(), this.ext.supportLinearFiltering || this.gl.uniform2f(
      this.programs.advectionProgram.uniforms.dyeTexelSize,
      this._dye.texelSizeX,
      this._dye.texelSizeY
    ), this.gl.uniform1i(
      this.programs.advectionProgram.uniforms.uVelocity,
      this._velocity.read.attach(0)
    ), this.gl.uniform1i(
      this.programs.advectionProgram.uniforms.uSource,
      this._dye.read.attach(1)
    ), this.gl.uniform1f(
      this.programs.advectionProgram.uniforms.dissipation,
      this.densityDissipation
    ), this.blit(this._dye.write), this._dye.swap();
  }
  render(t) {
    this.bloom && this.applyBloom(this._dye.read, this._bloom), this.sunrays && (this.applySunrays(this._dye.read, this._dye.write, this._sunrays), this.blur(this._sunrays, this._sunraysTemp, 1)), t === null || !this.transparent ? (this.gl.blendFunc(this.gl.ONE, this.gl.ONE_MINUS_SRC_ALPHA), this.gl.enable(this.gl.BLEND)) : this.gl.disable(this.gl.BLEND), this.transparent || this.drawColor(
      t,
      v.normalizeColor(v.HEXtoRGB(this.backgroundColor))
    ), this.drawDisplay(t);
  }
  drawColor(t, e) {
    this.programs.colorProgram.bind(), this.gl.uniform4f(
      this.programs.colorProgram.uniforms.color,
      e.r,
      e.g,
      e.b,
      1
    ), this.blit(t);
  }
  drawDisplay(t) {
    const e = t === null ? this.gl.drawingBufferWidth : t.width, i = t === null ? this.gl.drawingBufferHeight : t.height;
    if (this.displayMaterial.bind(), this.shading && this.gl.uniform2f(
      this.displayMaterial.uniforms.texelSize,
      1 / e,
      1 / i
    ), this.gl.uniform1i(
      this.displayMaterial.uniforms.uTexture,
      this._dye.read.attach(0)
    ), this.bloom) {
      this.gl.uniform1i(
        this.displayMaterial.uniforms.uBloom,
        this._bloom.attach(1)
      ), this.gl.uniform1i(
        this.displayMaterial.uniforms.uDithering,
        this.ditheringTexture.attach(2)
      );
      const r = b.getTextureScale(
        this.ditheringTexture,
        e,
        i
      );
      this.gl.uniform2f(
        this.displayMaterial.uniforms.ditherScale,
        r.x,
        r.y
      );
    }
    this.sunrays && this.gl.uniform1i(
      this.displayMaterial.uniforms.uSunrays,
      this._sunrays.attach(3)
    ), this.blit(t);
  }
  applyBloom(t, e) {
    if (this.bloomFramebuffers.length < 2) return;
    let i = e;
    this.gl.disable(this.gl.BLEND), this.programs.bloomPrefilterProgram.bind();
    const r = this.bloomThreshold * this.bloomSoftKnee + 1e-4, o = this.bloomThreshold - r, a = r * 2, h = 0.25 / r;
    this.gl.uniform3f(
      this.programs.bloomPrefilterProgram.uniforms.curve,
      o,
      a,
      h
    ), this.gl.uniform1f(
      this.programs.bloomPrefilterProgram.uniforms.threshold,
      this.bloomThreshold
    ), this.gl.uniform1i(
      this.programs.bloomPrefilterProgram.uniforms.uTexture,
      t.attach(0)
    ), this.blit(i), this.programs.bloomBlurProgram.bind();
    for (const n of this.bloomFramebuffers)
      n && (this.gl.uniform2f(
        this.programs.bloomBlurProgram.uniforms.texelSize,
        i.texelSizeX,
        i.texelSizeY
      ), this.gl.uniform1i(
        this.programs.bloomBlurProgram.uniforms.uTexture,
        i.attach(0)
      ), this.blit(n), i = n);
    this.gl.blendFunc(this.gl.ONE, this.gl.ONE), this.gl.enable(this.gl.BLEND);
    for (let n = this.bloomFramebuffers.length - 2; n >= 0; n--) {
      const c = this.bloomFramebuffers[n];
      this.gl.uniform2f(
        this.programs.bloomBlurProgram.uniforms.texelSize,
        i.texelSizeX,
        i.texelSizeY
      ), this.gl.uniform1i(
        this.programs.bloomBlurProgram.uniforms.uTexture,
        i.attach(0)
      ), this.gl.viewport(0, 0, c.width, c.height), this.blit(c), i = c;
    }
    this.gl.disable(this.gl.BLEND), this.programs.bloomFinalProgram.bind(), this.gl.uniform2f(
      this.programs.bloomFinalProgram.uniforms.texelSize,
      i.texelSizeX,
      i.texelSizeY
    ), this.gl.uniform1i(
      this.programs.bloomFinalProgram.uniforms.uTexture,
      i.attach(0)
    ), this.gl.uniform1f(
      this.programs.bloomFinalProgram.uniforms.intensity,
      this.bloomIntensity
    ), this.blit(e);
  }
  applySunrays(t, e, i) {
    this.gl.disable(this.gl.BLEND), this.programs.sunraysMaskProgram.bind(), this.gl.uniform1i(
      this.programs.sunraysMaskProgram.uniforms.uTexture,
      t.attach(0)
    ), this.blit(e), this.programs.sunraysProgram.bind(), this.gl.uniform1f(
      this.programs.sunraysProgram.uniforms.weight,
      this.sunraysWeight
    ), this.gl.uniform1i(
      this.programs.sunraysProgram.uniforms.uTexture,
      e.attach(0)
    ), this.blit(i);
  }
  blur(t, e, i) {
    this.programs.blurProgram.bind();
    for (let r = 0; r < i; r++)
      this.gl.uniform2f(
        this.programs.blurProgram.uniforms.texelSize,
        t.texelSizeX,
        0
      ), this.gl.uniform1i(
        this.programs.blurProgram.uniforms.uTexture,
        t.attach(0)
      ), this.blit(e), this.gl.uniform2f(
        this.programs.blurProgram.uniforms.texelSize,
        0,
        t.texelSizeY
      ), this.gl.uniform1i(
        this.programs.blurProgram.uniforms.uTexture,
        e.attach(0)
      ), this.blit(t);
  }
  captureScreenshot() {
    const t = this.getResolution(this.captureResolution), e = this.createFBO(
      t.width,
      t.height,
      this.ext.formatRGBA.internalFormat,
      this.ext.formatRGBA.format,
      this.ext.halfFloatTexType,
      this.gl.NEAREST
    );
    this.render(e);
    const i = g.framebufferToTexture(e, this.gl), r = g.normalizeTexture(
      i,
      e.width,
      e.height
    ), o = g.textureToCanvas(
      r,
      e.width,
      e.height
    );
    this.inverted && g.invertImageColors(o);
    const a = o.toDataURL();
    g.downloadURI("fluid.png", a), URL.revokeObjectURL(a);
  }
  get inverted() {
    return this._inverted;
  }
  set inverted(t) {
    this._inverted = t, this.canvas.style.filter = t ? "invert(1)" : "none";
  }
}
class U {
  constructor(t = document.body) {
    s(this, "container");
    s(this, "simulation");
    this.container = t, this.container.style.outline = "none", this.container.style.position = "relative", this.container.style.display = "flex", this.container.style.justifyContent = "center", this.container.style.alignItems = "center", this.simulation = new D(t);
  }
  start() {
    this.simulation.hasStarted || this.simulation.start();
  }
  stop() {
    this.simulation.hasStarted && this.simulation.stop();
  }
  togglePause(t = !1) {
    return this.simulation.hasStarted ? (this.simulation.paused = !this.simulation.paused, this.simulation.paused && (this.simulation.drawWhilePaused = t), this.simulation.paused) : !1;
  }
  multipleSplats(t) {
    this.simulation.hasStarted && this.simulation.multipleSplats(t);
  }
  splatAtLocation(t, e, i, r, o) {
    if (!this.simulation.hasStarted) return;
    const a = t / this.simulation.canvas.width, h = 1 - e / this.simulation.canvas.clientHeight;
    let n = o ? v.HEXtoRGB(o) : void 0;
    n || (n = v.generateColor(
      this.simulation.colorPalette,
      this.simulation.brightness
    )), n.r *= 10, n.g *= 10, n.b *= 10, this.simulation.splat(a, h, i, r, n);
  }
  downloadScreenshot() {
    this.simulation.hasStarted && this.simulation.captureScreenshot();
  }
  setConfig(t) {
    t.simResolution !== void 0 && (this.simulation.simResolution = t.simResolution), t.dyeResolution !== void 0 && (this.simulation.dyeResolution = t.dyeResolution), t.captureResolution !== void 0 && (this.simulation.captureResolution = t.captureResolution), t.densityDissipation !== void 0 && (this.simulation.densityDissipation = t.densityDissipation), t.velocityDissipation !== void 0 && (this.simulation.velocityDissipation = t.velocityDissipation), t.pressure !== void 0 && (this.simulation.pressure = t.pressure), t.pressureIterations !== void 0 && (this.simulation.pressureIterations = t.pressureIterations), t.curl !== void 0 && (this.simulation.curl = t.curl), t.splatRadius !== void 0 && (this.simulation.splatRadius = t.splatRadius), t.splatForce !== void 0 && (this.simulation.splatForce = t.splatForce), t.shading !== void 0 && (this.simulation.shading = t.shading), t.colorful !== void 0 && (this.simulation.colorful = t.colorful), t.colorUpdateSpeed !== void 0 && (this.simulation.colorUpdateSpeed = t.colorUpdateSpeed), t.colorPalette !== void 0 && (this.simulation.colorPalette = t.colorPalette), t.hover !== void 0 && (this.simulation.hover = t.hover), t.backgroundColor !== void 0 && (this.simulation.backgroundColor = t.backgroundColor), t.inverted !== void 0 && (this.simulation.inverted = t.inverted), t.transparent !== void 0 && (this.simulation.transparent = t.transparent), t.brightness !== void 0 && (this.simulation.brightness = t.brightness), t.bloom !== void 0 && (this.simulation.bloom = t.bloom), t.bloomIterations !== void 0 && (this.simulation.bloomIterations = t.bloomIterations), t.bloomResolution !== void 0 && (this.simulation.bloomResolution = t.bloomResolution), t.bloomIntensity !== void 0 && (this.simulation.bloomIntensity = t.bloomIntensity), t.bloomThreshold !== void 0 && (this.simulation.bloomThreshold = t.bloomThreshold), t.bloomSoftKnee !== void 0 && (this.simulation.bloomSoftKnee = t.bloomSoftKnee), t.sunrays !== void 0 && (this.simulation.sunrays = t.sunrays), t.sunraysResolution !== void 0 && (this.simulation.sunraysResolution = t.sunraysResolution), t.sunraysWeight !== void 0 && (this.simulation.sunraysWeight = t.sunraysWeight), this.simulation.hasStarted && ((t.dyeResolution !== void 0 || t.simResolution !== void 0) && this.simulation.initFramebuffers(), (t.shading !== void 0 || t.bloom !== void 0 || t.sunrays !== void 0) && this.simulation.updateKeywords());
  }
}
export {
  U as default,
  l as defaultConfig
};
