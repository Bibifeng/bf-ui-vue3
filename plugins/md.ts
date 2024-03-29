// @ts-nocheck
import marked from 'marked';

const mdToJs = str => {
	const content = JSON.stringify(marked(str));
	return `export default ${content}`;
};

export default function md2VuePlugin() {
	return {
		name: 'md2VuePlugin', // 插件的名称
		transform(src: any, id: any) {
			if (id.endsWith('.md')) {
				return {
					code: mdToJs(src),
					map: null,
				};
			}
		},
	};
}
