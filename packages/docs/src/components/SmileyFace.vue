<script setup lang="ts">
const props = defineProps<{ size: number }>();

const { x, y } = useMouse();

function convertRange(
  value: number,
  r1: [number, number],
  r2: [number, number]
) {
  return ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
}

const faceColor = computed(
  () =>
    `hsl(${convertRange(
      x.value,
      [0, window.innerWidth],
      [215, 245]
    )}, 90%, 70%)`
);

const pupilX = computed(() => {
  return (
    ((x.value - window.innerWidth / 2) * (props.size / 5)) / window.innerWidth
  );
});

const pupilY = computed(() => {
  return (
    ((y.value - window.innerHeight / 2) * (props.size / 5)) / window.innerHeight
  );
});
</script>

<template>
  <svg :height="props.size" :width="props.size">
    <defs>
      <mask id="eye-mask">
        <rect fill="black" :height="props.size" :width="props.size" />
        <circle fill="white" :r="props.size / 8" />
      </mask>

      <mask id="mouth-mask">
        <rect fill="black" :height="props.size" :width="props.size" />
        <path
          :d="`M${props.size * 0.18},${props.size * 0.6} a1,1 0 0,0 ${
            props.size * 0.65
          },0`"
          fill="white"
        />
      </mask>
    </defs>

    <circle
      :cx="props.size / 2"
      :cy="props.size / 2"
      :fill="faceColor"
      :r="props.size / 2"
    />

    <g
      style="mask: url(#eye-mask)"
      :transform="`translate(${props.size * 0.25} ${props.size / 3})`"
    >
      <circle fill="white" :r="props.size / 8" />
      <g :transform="`translate(${pupilX} ${pupilY})`">
        <circle cx="0" cy="0" fill="black" :r="size * 0.08" />
        <circle
          :cx="-1 * size * 0.04"
          :cy="-1 * size * 0.03"
          fill="white"
          :r="size * 0.03"
        />
      </g>
    </g>

    <g
      style="mask: url(#eye-mask)"
      :transform="`translate(${props.size * 0.75} ${props.size / 3})`"
    >
      <circle fill="white" :r="props.size / 8" />
      <g :transform="`translate(${pupilX} ${pupilY})`">
        <circle cx="0" cy="0" fill="black" :r="size * 0.08" />
        <circle
          :cx="-1 * size * 0.04"
          :cy="-1 * size * 0.03"
          fill="white"
          :r="size * 0.03"
        />
      </g>
    </g>

    <g style="mask: url(#mouth-mask)">
      <path
        :d="`M${props.size * 0.18},${props.size * 0.6} a1,1 0 0,0 ${
          props.size * 0.65
        },0`"
        fill="pink"
      />

      <circle
        :cx="props.size * 0.4"
        :cy="props.size * 0.85"
        fill="#fad"
        :r="size * 0.2"
      />
    </g>
  </svg>
</template>
