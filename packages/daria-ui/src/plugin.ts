import './style.css';

export const dariaUiPlugin = {
  async install() {
    const [
      { default: initUnocssRuntime },
      { default: uno },
      { default: attributify },
      { presetDaria }
    ] = await Promise.all([
      import('@unocss/runtime'),
      import('@unocss/preset-uno'),
      import('@unocss/preset-attributify'),
      import('./unocss')
    ]);
    initUnocssRuntime({
      defaults: {
        presets: [attributify(), uno(), presetDaria()]
      }
    });
  }
};
