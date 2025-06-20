#ifdef GL_ES
precision highp float;
#endif

void main() {
    vec2 uv = gl_FragCoord.xy/iResolution.xy;

    gl_FragColor = vec4(abs(uv.x-0.5)*2.,vec2(0.),1.);
}