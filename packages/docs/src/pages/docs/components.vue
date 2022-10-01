<script setup lang="ts">
import { useRoute } from 'vue-router';

type Link = {
  label: string;
  anchor: string;
};

const route = useRoute();
const routeEl = ref<HTMLElement>();

const tocPosition = ref<{ left: string; top: string }>();
const tocLinks = ref<Link[]>([]);

const setTocPosition = () => {
  if (!routeEl.value) return;

  const { right, top } = routeEl.value.getBoundingClientRect();
  tocPosition.value = {
    left: `${right}px`,
    top: `${top}px`
  };
};

const buildToc = () => {
  nextTick(() => {
    if (!routeEl.value) return;
    const h2s = [...routeEl.value.querySelectorAll('h2')];
    const newLinks: Link[] = [];
    h2s.forEach((el, index) => {
      el.id = `anchor-${index}`;
      el.style.scrollMarginTop = '4rem'; // should calculate header height but I'm lazy so let's eyeball it
      newLinks.push({ label: el.textContent as string, anchor: `#${el.id}` });
    });
    tocLinks.value = newLinks;
  });
};

useResizeObserver(routeEl, setTocPosition);
useEventListener(window, 'resize', setTocPosition);
onMounted(setTocPosition);
watch(route, buildToc, { immediate: true });
</script>

<template>
  <section ref="routeEl">
    <router-view />
  </section>

  <aside
    v-if="tocPosition"
    fixed
    class="toc"
    p-3
    lt-xl="hidden"
    m-5
    min-w="12rem"
    border="solid 1 gray-3 dark:gray-5"
    space-y-2
  >
    <h2 text-xl font-semibold>Contents</h2>
    <ol>
      <li v-for="link in tocLinks" :key="link.anchor">
        <a
          :href="link.anchor"
          underline
          :color="
            route.hash === link.anchor ? 'context-6 dark:context-3' : 'inherit'
          "
        >
          {{ link.label }}
        </a>
      </li>
    </ol>
  </aside>
</template>

<style scoped>
.toc {
  left: v-bind('tocPosition?.left');
  top: v-bind('tocPosition?.top');
}
</style>
