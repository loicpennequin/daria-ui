import type { ComponentResolver } from 'unplugin-vue-components';

export function dariaUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^D[A-Z]/)) return { name, from: '@dariajs/ui' };
    }
  };
}
