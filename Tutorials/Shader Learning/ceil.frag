#ifdef GL_ES
precision mediump float;
#endif

void main() {
  // Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float f = uv.x*10.0;
  f = ceil(f);
  gl_FragColor = vec4(f/10.0, 0.0, 0.0, 1.0);
}