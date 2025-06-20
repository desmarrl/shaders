#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;

//first vers i.e the cock and ball torture way
/*
void main() {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy / iResolution.xy;

    uv *= 9.0; //Scale the texture by 9.0
    //I need to iterate using something
    float t = 1.0-step(2.0, uv.x);
    t += step(3.0,uv.x )*(1.0 - step(5.0,uv.x ));
    t += step(6.0,uv.x )*(1.0 - step(8.0,uv.x ));
    float x = fract(uv.x); //fract returns fractional value
    x = step(0.5, x); //if > 0.5
    
    gl_FragColor = vec4(t*x, 0.0, 0.0, 1.0);
}*/

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;

  uv *= 9.0;
  float x = fract(uv.x);
  x = step(0.5,x);

  float m = mod(uv.x + 1.0,3.0); //Add 1.0 to not start at 0.0
  float t = step(1.0,m); //if (uv.x + 1.0) % 3.0 >= 1.0
  gl_FragColor = vec4(t*x, vec2(0.0),1.0);
}
