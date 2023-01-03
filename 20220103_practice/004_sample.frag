#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 u_mouse;
void main(){
    vec2 pos = gl_FragCoord.xy / u_mouse.xy;
    vec3 GREEN = vec3(0.0, 1.0, 0.0);
    vec3 WHITE = vec3(1.0, 1.0, 1.0);
    vec3 col = mix(GREEN, WHITE, pos.x);
    fragColor = vec4(col, 1.0);
}