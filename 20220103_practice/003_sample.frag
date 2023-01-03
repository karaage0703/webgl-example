#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_mouse;
void main(){
    // vec2 pos = gl_FragCoord.xy / u_mouse.x;
    vec2 pos = gl_FragCoord.xy / u_mouse.xy;
    // fragColor = vec4(1.0, pos, 1.0);
    fragColor = vec4(pos.x, pos.y, pos.y, 1.0);
}