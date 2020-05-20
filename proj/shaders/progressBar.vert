#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec3 coords;

void main() {
    coords = aVertexPosition;
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
}
