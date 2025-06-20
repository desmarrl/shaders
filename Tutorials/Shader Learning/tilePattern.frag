#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;

float pattern(vec2 uv) {
  uv = uv * 2.0 - 1.0;
  float t = pow(uv.x * uv.x, 0.3) + pow(uv.y * uv.y, 0.3) - 1.0;
  return step(0.0, t) * t * 10.0 + step(0.2, t);
}

void main() {
  // Normalized pixel coordinates (from 0 to 1)
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  
  //Need 5 columns 3 rows
  float columns = 5.0;
  float rows = 3.0;
  vec2 uv2 = fract(uv * vec2(columns, rows));

  gl_FragColor = vec4(pattern(uv2), 0.0, 0.0, 1.0);
}