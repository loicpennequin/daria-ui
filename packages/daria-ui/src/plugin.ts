import './style.css';

export const dariaUiPlugin = {
  async install() {
    const [
      { default: initUnocssRuntime },
      { default: uno },
      { default: attributify },
      { default: icons },
      { presetDaria }
    ] = await Promise.all([
      import('@unocss/runtime'),
      import('@unocss/preset-uno'),
      import('@unocss/preset-attributify'),
      import('@unocss/preset-icons'),
      import('./unocss')
    ]);
    initUnocssRuntime({
      defaults: {
        presets: [
          attributify(),
          uno(),
          icons({
            collections: {
              mdi: () =>
                //@ts-ignore
                import('@iconify-json/mdi/icons.json').then(i => i.default)
            }
          }),
          presetDaria()
        ]
      }
    });
  }
};
