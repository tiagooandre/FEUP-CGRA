#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec3 coords;

uniform sampler2D uSampler1;

void main() {
    vec4 colorBillboard = texture2D(uSampler1, vTextureCoord);

    gl_FragColor = colorBillboard;
}