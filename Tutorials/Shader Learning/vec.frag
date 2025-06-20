#ifdef GL_ES
precision highp float;
#endif

void main() {
  vec4 blueChannel = vec4(0.0, 0.0, 0.75, 0.0);
  vec4 redChannel = vec4(0.5, 0.0, 0.0, 0.0);
  vec4 alphaChannel = vec4(0.0, 0.0, 0.0, 1.0);
  vec4 sumChannel = blueChannel + redChannel + alphaChannel;
  gl_FragColor = sumChannel;
}