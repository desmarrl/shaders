#ifdef GL_ES
precision mediump float;
#endif


void main() {
    float cellSize = 50.0; //50px cellSize
    float margin = 10.0; //10pz marginSize
    float totalSize = cellSize + margin; //Total size of the cell. 60px

    vec2 fragPos = gl_FragCoord.xy;
    vec2 uv = fract(fragPos.xy/totalSize);
    float percentage = margin/totalSize; //Percentage of the margin is .1667 of the cell
    float t = step(percentage,uv.x);
    t*= step(percentage,uv.y);

    gl_FragColor = vec4(t,vec2(0.0),1.0);
}