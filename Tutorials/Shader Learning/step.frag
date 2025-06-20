#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy/u_resolution.xy;
  float threshold = 0.5;

  vec3 stepCol = vec3(step(threshold,uv.x),step(threshold,uv.y),1.0);
  gl_FragColor = vec4(stepCol.r, 0.0, 0.0, 1.0);
}
