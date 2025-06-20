#ifdef GL_ES
precision highp float;
#endif

void main() {
  vec3 yellow = vec3(1.0,1.0,0.0);
  gl_FragColor = vec4(yellow, 1.0);
}
