---
title: 'Button | Daria-UI'
---
<script setup lang="ts">
import CodeExample from '@/components/CodeExample.vue'
import ButtonBasic from '@/components/examples/button/ButtonBasic.vue';
import ButtonColors from '@/components/examples/button/ButtonColors.vue';
import ButtonCustom from '@/components/examples/button/ButtonCustom.vue';
</script>

# Button

## Props
| Name    | Description   | Type     | Accepted Values               | Default |
| ------- | ------------- | -------- | ----------------------------- | ------- |
| variant | style variant | string   | full / light /outlined / ghost| full    |


## Emits

This component does not emit any event

## Slots

| Name    | Description               | Slot Props |
|-------- | ------------------------- | ---------- |
| default | The content of the button | -          | 

## Examples

<CodeExample title="Basic Usage">
  <ButtonBasic />

  <template v-slot:code>

  ```vue <<< @/src/components/examples/button/ButtonBasic.vue
  //
  ```
  
  </template>
</CodeExample>

<CodeExample title="Color schemes">
  <ButtonColors />

  <template v-slot:code>

  ```vue <<< @/src/components/examples/button/ButtonColors.vue
  //
  ```
  
  </template>
</CodeExample>



<CodeExample title="Custom style">
  <ButtonCustom />

  <template v-slot:code>

  ```vue <<< @/src/components/examples/button/ButtonCustom.vue
  //
  ```
  
  </template>
</CodeExample>



