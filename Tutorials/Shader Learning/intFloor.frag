#ifdef GL_ES
precision highp float;
#endif

vec3 palette[5] = vec3[5] (
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(1.0, 1.0, 0.0),
  vec3(0.0, 0.0, 0.0)
);
//Version 1
/*
void main() {
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  uv *= 4.0;
  float curr = 1.0;
  float next = curr + 1.0;
  vec3 c1 = mix(palette[0],palette[1],uv.x) * (1.0-step(1.0,uv.x));
  vec3 c2 = mix(palette[1],palette[2],uv.x-1.0) * step(1.0,uv.x) * (1.0-step(2.0,uv.x));
  vec3 c3 = mix(palette[2],palette[3],uv.x-2.0) * step(2.0,uv.x) * (1.0-step(3.0,uv.x));
  vec3 c4 = mix(palette[3],palette[4],uv.x-3.0) * step(3.0,uv.x) * (1.0-step(4.0,uv.x));
  //float t = (step(curr,uv.x ) * (uv.x - curr))*(1.0-step(next,uv.x ) * (uv.x - next));
  float t = 1.0-step(curr,uv.x)*(uv.x-curr);
  float t0 = 1.0-step(1.0,uv.x);
  float t1 = (1.0-step(2.0,uv.x)) * step(1.0,uv.x);
  vec3 flat_color = palette[int(uv.x)];
  
  gl_FragColor = vec4(c1+c2+c3+c4, 1.0);
}*/

//Version 2
void main() {
  // Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy / iResolution.xy;

  float paletteSize = 5.0;
  float positionOnPalette = uv.x * (paletteSize - 1.0);

  int prevColorIndex = int(positionOnPalette);
  int nextColorIndex = prevColorIndex + 1;

  vec3 prevColor = palette[prevColorIndex];
  vec3 nextColor = palette[nextColorIndex];

  vec3 color = mix(prevColor, nextColor, fract(positionOnPalette));

  gl_FragColor = vec4(color, 1.0);
}