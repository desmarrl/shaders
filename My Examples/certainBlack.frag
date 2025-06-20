#ifdef GL_ES
precision mediump float;
#endif

void main(){
    vec2 fragPos = gl_FragCoord.xy;
    vec2 uv = fragPos.xy/iResolution.xy;
    vec3 col1 = vec3(1.0,1.0,0.0);
    vec3 col2 = vec3(0.0,1.0,1.0);
    vec3 col3 = vec3(1.0,0.0,1.0);
    vec3 col4 = vec3(1.0);

    vec3 r0 = mix(col1,col2,uv.x);
    vec3 r1 = mix(col3,col4,uv.x);
    vec3 m = mix(r0,r1,uv.y);

    //vec3 bg = vec3(0.5,1.0,0.5);

    //all in px
    float x1, x2, y1, y2;
    float scale = 50.0;
    x1, y1 = 0.0;
    x2 = 10.0 * scale;
    y2 = 5.0*scale;

    float t = 1.0-step(x2,fragPos.x);
    t *= 1.0-step(y2,fragPos.y);

    vec3 white_part = col4*t;
    gl_FragColor = vec4(m,1.0);
}