import typescript from 'rollup-plugin-typescript2';
import dts from "rollup-plugin-dts";

export default [
    {
        input: './src/index.ts',
        output: [{
            format: 'cjs',
            file: './dist/index.js'
        }],
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false,
                        declarationMap: false,
                        module: "esnext"
                    }
                }
            })
        ],
        external: ['tslib']
    },
    {
        input: './src/index.ts',
        output: [{
            format: 'es',
            file: './dist/index.mjs'
        }],
        plugins: [
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: false,
                        declarationMap: false,
                        module: "esnext"
                    }
                }
            })
        ],
        external: ['tslib']
    },
    {
        input: "./src/index.ts",
        output: [{ file: './dist/index.d.ts', format: 'es' }],
        plugins: [dts()],
    }
]