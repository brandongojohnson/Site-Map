import React, { useEffect, useRef } from 'react';

// An animated recreation of the hero's flowing-ribbon look: domain-warped
// fBm noise, colored through a deep-navy → royal-blue → indigo → pearly
// lavender ramp, drifting slowly. Runs as a single full-screen fragment
// shader, so the whole thing is one draw call per frame.
//
// If WebGL is unavailable the canvas hides itself and the Hero's own CSS
// aurora gradient (which sits behind it) shows through unchanged.

const VERTEX_SHADER = `
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 uResolution;
uniform float uTime;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

// Rotating each octave (rather than just scaling) keeps the larger shapes
// from lining up into a visible grid.
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  mat2 rot = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p = rot * p;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  // Normalize by height so the composition keeps its proportions on any
  // aspect ratio instead of stretching.
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  uv *= 1.15;

  float t = uTime * 0.05;

  // Two rounds of domain warping — this is what turns plain noise into
  // folded, liquid-looking ribbons rather than clouds.
  vec2 q = vec2(
    fbm(uv * 1.2 + vec2(0.0, t)),
    fbm(uv * 1.2 + vec2(3.3, -t) + 4.7)
  );
  vec2 r = vec2(
    fbm(uv * 1.1 + 2.2 * q + vec2(1.7, 9.2) + 0.6 * t),
    fbm(uv * 1.1 + 2.2 * q + vec2(8.3, 2.8) - 0.5 * t)
  );

  float f = fbm(uv * 1.3 + 2.6 * r);
  f = clamp(f * 1.45 - 0.12, 0.0, 1.0);

  vec3 deep     = vec3(0.024, 0.027, 0.086);
  vec3 navy     = vec3(0.070, 0.086, 0.310);
  vec3 blue     = vec3(0.157, 0.227, 0.860);
  vec3 indigo   = vec3(0.388, 0.337, 0.940);
  vec3 violet   = vec3(0.620, 0.520, 0.980);
  vec3 lavender = vec3(0.886, 0.839, 0.988);

  vec3 col = deep;
  col = mix(col, navy,     smoothstep(0.06, 0.32, f));
  col = mix(col, blue,     smoothstep(0.30, 0.54, f));
  col = mix(col, indigo,   smoothstep(0.50, 0.70, f));
  col = mix(col, violet,   smoothstep(0.66, 0.84, f));
  col = mix(col, lavender, smoothstep(0.82, 0.97, f));

  // Pearly rim where the folds crest — a narrow band rather than a broad
  // wash, which is what reads as "silk" instead of "fog".
  float rim = smoothstep(0.70, 0.86, f) - smoothstep(0.86, 0.99, f);
  col += lavender * rim * 0.35;

  // A second, softer sheen driven by the warp field itself, so highlights
  // travel along the ribbons instead of sitting still.
  float sheen = smoothstep(0.55, 1.0, r.x + r.y * 0.6);
  col += violet * sheen * 0.10;

  // Corners fall off to near-black, keeping the bright folds central.
  float vignette = 1.0 - 0.45 * dot(uv, uv);
  col *= clamp(vignette, 0.0, 1.0);

  // Ordered-ish dither: without it, these very gradual ramps band badly on
  // 8-bit displays.
  col += (hash(gl_FragCoord.xy + fract(uTime)) - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}
`;

// The output is entirely smooth gradients, so rendering below native
// resolution and letting the browser scale it up is visually free — and
// keeps a full-screen fragment shader cheap on high-DPI displays.
const RENDER_SCALE = 0.55;
const MAX_DPR = 1.5;

// The frame shown to visitors who've asked for reduced motion — far enough
// into the loop to be a well-formed composition rather than the flat-ish
// noise the field starts at.
const STATIC_TIME = 12.0;

const compileShader = (gl, type, source) => {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Hero shader failed to compile:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
};

const HeroCanvas = ({ className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    });

    // No WebGL (or it's blocked): step aside and let the CSS gradient
    // underneath be the background.
    if (!gl) {
      canvas.style.display = 'none';
      return;
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vertexShader || !fragmentShader) {
      canvas.style.display = 'none';
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Hero shader failed to link:', gl.getProgramInfoLog(program));
      canvas.style.display = 'none';
      return;
    }
    gl.useProgram(program);

    // One oversized triangle covers the viewport with fewer vertices — and
    // no seam down the diagonal the way two triangles can have.
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uTime = gl.getUniformLocation(program, 'uTime');

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let frame = null;
    let onScreen = true;
    const start = performance.now();

    const draw = (time) => {
      gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      const width = Math.max(1, Math.round(canvas.clientWidth * dpr * RENDER_SCALE));
      const height = Math.max(1, Math.round(canvas.clientHeight * dpr * RENDER_SCALE));
      if (canvas.width === width && canvas.height === height) return;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uResolution, width, height);
      // Repaint immediately so a resize doesn't leave a stretched frame
      // sitting there until the next tick (or forever, if paused).
      draw(reduceMotion ? STATIC_TIME : (performance.now() - start) / 1000);
    };

    const loop = () => {
      draw((performance.now() - start) / 1000);
      frame = requestAnimationFrame(loop);
    };

    const play = () => {
      if (reduceMotion || frame !== null) return;
      frame = requestAnimationFrame(loop);
    };

    const pause = () => {
      if (frame === null) return;
      cancelAnimationFrame(frame);
      frame = null;
    };

    // Don't burn frames animating a background nobody is looking at.
    const sync = () => {
      if (onScreen && !document.hidden) play();
      else pause();
    };

    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      sync();
    });
    observer.observe(canvas);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    document.addEventListener('visibilitychange', sync);

    // A lost context leaves a frozen frame behind; hiding lets the CSS
    // gradient take over rather than showing a stale image.
    const onContextLost = (event) => {
      event.preventDefault();
      pause();
      canvas.style.display = 'none';
    };
    canvas.addEventListener('webglcontextlost', onContextLost);

    resize();
    sync();

    return () => {
      pause();
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener('visibilitychange', sync);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />;
};

export default HeroCanvas;
