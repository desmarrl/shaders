#ifdef GL_ES
precision highp float;
#endif

void main() {
    vec2 uv = gl_FragCoord.xy/iResolution.xy;
    vec3 red = vec3(1.0,0.0,0.0);
    vec3 green = vec3(0.0,1.0,0.0);

    float edge0 = 0.25; float edge1 = 0.75;

    float t = smoothstep(edge0, edge1, uv.x);
    vec3 color = mix(red,green,t);
    gl_FragColor = vec4(color,1.0);
}