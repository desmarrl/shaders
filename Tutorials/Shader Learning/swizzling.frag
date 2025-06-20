#ifdef GL_ES
precision highp float;
#endif

varying vec4 color;

void main() {
  vec4 swizzCol = vec4(vec3(color.bgr),color.a);
  gl_FragColor = swizzCol;
}