---
title: 'Button Group | Daria-UI'
---
<script setup lang="ts">
import CodeExample from '@/components/CodeExample.vue'
import ButtonGroupBasic from '@/components/examples/buttonGroup/ButtonGroupBasic.vue';
</script>

# Button

## Props
| Name      | Description                                                                 | Type     | Accepted Values               | Default |
| --------- | --------------------------------------------------------------------------- | -------- | ----------------------------- | ------- |
| variant   | style variant applied to all buttons in the group                           | string   | full / light /outlined / ghost| full    |
| pill      | if enabled, the first and last button fill have a border radius on one side | boolean  | -                             | -       |


## Emits

This component does not emit any event

## Slots

| Name    | Description                     | Slot Props |
|-------- | ------------------------------- | ---------- |
| default | The content of the button group | -          | 

## Examples

<CodeExample title="Basic Usage">
  <ButtonGroupBasic />

  <template v-slot:code>

  ```vue <<< @/src/components/examples/buttonGroup/ButtonGroupBasic.vue
  //
  ```
  
  </template>
</CodeExample>