import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: 'src/Scanner.ts',
			name: 'Scanner',
			fileName: (format) => `scanner.${format}.js`,
			formats: ['umd']
		},
		rollupOptions: {
			output: {
				name: 'Scanner',
				assetFileNames: (assetInfo) => assetInfo.name == 'style.css' ? 'scanner.css' : assetInfo.name,
			},
		},
	},
	server: {
		open: 'playground/health/index.html',
	},
});
