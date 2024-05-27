import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: 'src/Scanner.ts',
			name: 'Scanner',
			fileName: (format) => `scanner.${format}.js`,
		},
	},
	server: {
		open: 'playground/health/index.html',
	},
});
