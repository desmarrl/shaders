#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
//First Version
/*
float stepUnion(float x, float perc, float perc2) {
  return max(1.0 - step(perc,x), step(perc2,x));
}

void main() {
  // Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float borderWidth = 50.0; //In px
  vec2 borderPerc = vec2(borderWidth/u_resolution.xy);
  vec2 borderPerc2 = vec2(1.0 - borderPerc);

  vec2 result = vec2(stepUnion(uv.x,borderPerc.x,borderPerc2.x),
                     stepUnion(uv.y,borderPerc.y,borderPerc2.y));
  gl_FragColor = vec4(uv*max(result.x,result.y), 0.0, 1.0);
}
*/
//Second Version

void main() {
  // Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  float borderWidth = 50.0;
  float borderHeight = 50.0;

  float w = borderWidth/u_resolution.x;
  float h = borderHeight/u_resolution.y;

  float t0 = 1.0 - step(w,uv.x); //LeftX
  float t1 = step(1.0-w,uv.x); //RightX
  float t2 = 1.0 - step(h,uv.y); //DownY
  float t3 = step(1.0-h,uv.y); //UpY

  float r0 = max(t0,t1);
  float r1 = max(t2,t3);
  gl_FragColor = vec4(uv*max(r0,r1), 0.0, 1.0);
}

