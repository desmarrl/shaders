#ifdef GL_ES
precision mediump float;
#endif

//uniform vec2 iResolution;
//version 1
/*
void main() {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    vec3 color2 = vec3(0.38, 0.12, 0.93);
    vec3 color1 = vec3(1.00, 0.30, 0.30);
    //mix(color1,color2,uv.x)

    float t = 1.0 - step(0.25,uv.x);
    float t2 = 1.0 - t;
    float pct = max(0.0,uv.x - 0.25);
    gl_FragColor = vec4(mix(color1,color2,pct), 1.0);
}*/
//version 2
void main() {
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    vec3 color2 = vec3(0.38, 0.12, 0.93);
    vec3 color1 = vec3(1.00, 0.30, 0.30);
    //mix(color1,color2,uv.x)

    float t = step(0.25,uv.x ); 
    t *= (uv.x - 0.25);
    gl_FragColor = vec4(mix(color1,color2,t), 1.0);
}