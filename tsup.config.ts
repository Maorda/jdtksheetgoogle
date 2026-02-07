import {defineConfig} from 'tsup'

export default defineConfig ({
    entry:["./src/index.ts", "./src/types.ts"],
    format:['cjs','esm'],
    dts:true,
    shims:true,
    sourcemap:true,
    clean:true,
    skipNodeModulesBundle:true,
    minify:false
})