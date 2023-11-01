import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true,
        unstubEnvs: true,
        unstubGlobals: true,
        coverage: {
            all: true,
            include: ['./src'],
            provider: 'istanbul',
            reporter: ['cobertura', 'html', 'text']
        }
    },
});