#ifdef GL_ES
precision mediump float;
#endif

void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    float dist = distance(uv, vec2(0.5));
    //float t = 1.0 - step(0.25, dist);

    gl_FragColor = vec4(dist, 0.0, 0.0, 1.0);
}