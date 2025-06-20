#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;

void main() {
  // Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float t1 = 1.0 - step(0.25,uv.x);
  float t2 = step(0.75,uv.x);
  
  vec3 color = vec3(1.0, 0.3, 0.3);
  float result = max(t1,t2);
  gl_FragColor = vec4(color*result, 1.0);
}