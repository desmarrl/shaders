#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;

void main() {
  // Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float threshold = 0.5;
  float result = 1.0 - step(threshold,uv.x);
  gl_FragColor = vec4(result, 0.0, 0.0, 1.0);
}