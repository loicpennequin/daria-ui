---
title: 'Drawer | Daria-UI'
---
<script setup lang="ts">
import CodeExample from '@/components/CodeExample.vue'
import DrawerBasic from '@/components/examples/drawer/DrawerBasic.vue';
</script>

# Drawer

## SubComponents

- DrawerBackdrop
- DrawerContent
- DrawerHeader

## Props

### Drawer

| Name        | Description                                                                                 | Type     | Accepted Values | Default |
| ----------- | ------------------------------------------------------------------------------------------- | -------- | --------------- | ------- |
| isOpened    | wether the drawer is opened or not                                                          | boolean  | -               |         |
| closable    | wether the drawer can be closed by the user                                                 | boolean  | -               | true    |
| colorScheme | color scheme of the drawer                                                                  | string   | -               |         |
| title       | the title of the drawer that will be displayed in the panel and announced by screen readers | string   | -               |     |
| size        | the width of the drawer panel                                                               | string   | xs / sm / md / lg / xl / 2xl | md  |

### DrawerBackdrop

| Name            | Description                                                                  | Type    | Accepted Values | Default |
| --------------- | ---------------------------------------------------------------------------- | ------- | --------------- | ------- |
| userColorScheme | wether to inherit the drawer colorScheme. If not, the backdrop will be black | boolean | -               | false   |

## Emits

| Name            | Description                                      | payload | 
| --------------- | ------------------------------------------------ | ------- | 
| userColorScheme | fires when the drawer modifies the isOpened prop | boolean | 

## Slots

### Drawer

| Name    | Description               | Slot Props |
|-------- | ------------------------- | ---------- |
| default | The content of the drawer | -          | 

### DrawerContent

| Name    | Description                       | Slot Props |
|-------- | --------------------------------- | ---------- |
| default | The content of the drawer panel   | -          | 
| header  | The content of thhe sticky header | -          |
| footer  | The content of thhe sticky footer | -          |


### DrawerHeader

| Name    | Description                       | Slot Props |
|-------- | --------------------------------- | ---------- |
| default | The content of the drawer header  | -          | 

## Examples

<CodeExample title="Basic Usage">
  <DrawerBasic />

  <template v-slot:code>

  ```vue <<< @/src/components/examples/drawer/DrawerBasic.vue
  //
  ```
  
  </template>
</CodeExample>