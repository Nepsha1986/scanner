import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: 'src/main.ts',
			name: 'scanner',
			fileName: (format) => `scanner.${format}.js`
		},
	},
	server: {
		open: 'playground/health/index.html',
	},
});
