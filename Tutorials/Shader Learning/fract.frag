#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {
  // Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  vec2 uv2 = fract(uv * 10.0);
  gl_FragColor = vec4(step(0.5,uv2.x), 0.0, 0.0, 1.0);
}