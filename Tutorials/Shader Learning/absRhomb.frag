#ifdef GL_ES
precision highp float;
#endif

//version 1
/*
void main(){
    vec2 uv = gl_FragCoord.xy/iResolution.xy;
    //line is y = mx+b
    float m = 1.0;
    float b = 0.5;
    float t0 = 1.0-step(m*uv.x+b,uv.y); //top left of rhombus
    float t1 = step(-m*uv.x+b,uv.y);
    float t2 = 1.0-step(-m*uv.x+b+1.,uv.y);
    float t3 = step(m*uv.x+b-1.,uv.y);
    float r0 = t0*t1;
    float r1 = t2*t3;
    gl_FragColor = vec4(r0*r1, vec2(0.0),1.0);   
}
*/

//version 2
void main(){
    vec2 uv = gl_FragCoord.xy/iResolution.xy;
    uv -= 0.5;

    float t = abs(uv.x) + abs(uv.y);
    t = 1.0 - step(0.5,t); 
    gl_FragColor = vec4(t,vec2(0.0),1.0);
}