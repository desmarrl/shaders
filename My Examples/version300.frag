#version 300 es
#ifdef GL_ES
precision mediump float;
#endif
out vec4 fragColor;
uniform vec2 u_resolution;
void main(){
    vec2 uv = gl_FragCoord.xy/u_resolution;
    fragColor = vec4(uv.x, uv.y, 0.0, 1.0);
}