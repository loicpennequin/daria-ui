<script setup lang="ts">
import { useRoute } from 'vue-router';

type Link = {
  label: string;
  anchor: string;
  children: Link[];
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
      newLinks.push({
        label: el.textContent as string,
        anchor: `#${el.id}`,
        children: []
      });
    });

    const h3s = [...routeEl.value.querySelectorAll('h3')];

    h3s.forEach((el, index) => {
      const preceedingsH2s = h2s.filter(
        h2 => el.compareDocumentPosition(h2) === 2
      );

      const parent = preceedingsH2s[preceedingsH2s.length - 1];

      el.id = `${parent?.id}-${index}`;
      el.style.scrollMarginTop = '4rem';
      const link = newLinks.find(l => l.anchor === `#${parent.id}`);
      link?.children.push({
        label: el.textContent as string,
        anchor: `#${el.id}`,
        children: []
      });
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

          <ul m-l-5>
            <li v-for="childLink in link.children" :key="childLink.anchor">
              <a
                :href="childLink.anchor"
                underline
                :color="
                  route.hash === childLink.anchor
                    ? 'context-6 dark:context-3'
                    : 'inherit'
                "
              >
                {{ childLink.label }}
              </a>
            </li>
          </ul>
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
