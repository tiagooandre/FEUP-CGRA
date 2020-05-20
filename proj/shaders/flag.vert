#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

uniform float patchL;
uniform float time;

varying vec2 vTextureCoord;

void main() {
    vTextureCoord = aTextureCoord;

    float xF = aVertexPosition.x;

    vec3 offset;

    if (ceil((xF- time*patchL) / (10.0*patchL)) == (xF- time*patchL) / (10.0*patchL)) {
        offset = vec3(0, 0, -0.05);
    } else if (ceil((xF- (time-1.0)*patchL) / (10.0*patchL)) == (xF- (time-1.0)*patchL) / (10.0*patchL) || ceil((xF- (time+1.0)*patchL) / (10.0*patchL)) == (xF- (time+1.0)*patchL) / (10.0*patchL)){
        offset = vec3(0, 0, -0.025);
    } else {
        offset = vec3(0, 0, 0);
    }
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset, 1.0);
}
