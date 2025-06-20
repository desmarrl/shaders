#ifdef GL_ES
precision mediump float;
#endif

uniform vec2    u_resolution;
uniform float   u_time;

void main(){
        vec2 coord = (gl_FragCoord.xy / u_resolution);
        vec3 color = vec3(1.0); //should just be white

        
        gl_FragColor = vec4(color.r - coord.x * abs(sin(u_time / 10.0)), color.g - coord.y *abs(cos(u_time / 5.0)) , color. b + coord.x, 1.0);
}