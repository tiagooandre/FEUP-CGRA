#ifdef GL_ES
precision highp float;
#endif

varying vec3 coords;

uniform float nSupplies;

void main() {
    float progress = nSupplies / 5.0;
    vec4 colorBar = vec4(0.5, 0.5, 0.5, 1.0);

    if (coords.x < (-0.5 + progress)) {
        colorBar = vec4(0.5 - coords.x, coords.x + 0.5, 0.0, 1.0);
    }

    gl_FragColor = colorBar;
}