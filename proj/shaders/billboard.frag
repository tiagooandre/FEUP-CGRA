#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying vec3 coords;

uniform sampler2D uSampler1;

void main() {
    if (coords.y >= 1.0) vec4 color = texture2D(uSampler1, vTextureCoord);
    else vec4 color = vec4(0.2, 0.2, 0.2, 1.0);

    gl_FragColor = color;
}