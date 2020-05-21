#ifdef GL_ES
precision highp float;
#endif

varying vec3 coords;

void main() {
    vec4 colorSupport = vec4(0.5, 0.5, 0.5, 1.0);

    gl_FragColor = colorSupport;
}