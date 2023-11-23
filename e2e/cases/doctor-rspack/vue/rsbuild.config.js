import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import { RsbuildDoctorRspackPlugin } from '@rsbuild/doctor-rspack-plugin';

module.exports = defineConfig({
  plugins: [pluginVue()],
  tools: {
    bundlerChain: (chain) => {
      chain.plugin('rsbuild-doctor').use(RsbuildDoctorRspackPlugin, [
        {
          features: ['loader'],
          disableClientServer: false,
        },
      ]);
    },
  },
});
