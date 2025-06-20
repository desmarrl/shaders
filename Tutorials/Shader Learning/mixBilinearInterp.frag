#ifdef GL_ES
precision highp float;
#endif

void main(){
    vec2 uv = gl_FragCoord.xy/iResolution.xy;

    vec3 red = vec3(1.0,0.0,0.0);
    vec3 green = vec3(0.0,1.0,0.0);
    vec3 blue = vec3(0.0,0.0,1.0);
    vec3 black = vec3(0.0);
    
    vec3 red_black = mix(red,black,uv.x);
    vec3 blue_green = mix(blue,green,uv.x);
    vec3 final = mix(red_black,blue_green,uv.y);
    gl_FragColor = vec4(final,1.0);
}