#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D uSampler2;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);
	vec4 filter1 = texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord);

	if (filter1.b > 0.5)
		color=vec4(0.52, 0.18, 0.11, 1.0);
	
	gl_FragColor = color;
}