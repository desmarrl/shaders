#ifdef GL_ES
precision mediump float;
#endif

const int AMOUNT = 8;

uniform vec2 u_resolution;
uniform float u_time;

void main(){
    vec2 coord = (gl_FragCoord.xy / u_resolution);  

    vec3 color = vec3(1.0);


    /*
    for(int n = 0; n < AMOUNT; n++){
        float i = float (n);

    } */

    gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}