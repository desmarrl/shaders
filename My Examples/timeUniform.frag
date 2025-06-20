#ifdef GL_ES
precision mediump float;
#endif

//UNIFORMS

//uniform vec3    iResolution;      viewport resolution (in pixels)
//uniform vec4    iMouse;           mouse pixel coords. xy: current, zw: click
//uniform float   iTime;            shader playback time (in seconds)

//

float sin_norm(float x) { //Normalizes sin function
    return sin(x)/2. + .5;
}
void main(){
    //Declaration
    float comb;
    float comb_norm;
    float sin_result;
    float abs_sin_result;
    float abs_result;
    float frac_sin;
    float frac_time;
    float pulse_result;
    float time_scale;
    //Initialization
    time_scale = iTime*1.;

    comb = sin(time_scale)
            + sin(time_scale/2.)
            + sin(time_scale/4.)
            + sin(time_scale/6.);
    comb /= 4.;
    comb_norm = sin_norm(comb);             //combinational sine pulse
    
    sin_result = sin_norm(time_scale);      //Sin wave pulse
    abs_sin_result = abs(sin(time_scale));  //Bouncy sine pulse

    frac_time = fract(time_scale) - .5;
    abs_result = -abs(frac_time*2.)+1.;     //Triangle wave pulse
    frac_sin = fract(sin(time_scale));
    pulse_result = ceil(sin(time_scale));
    gl_FragColor = vec4(pulse_result,0.0,0.0,1.);
}