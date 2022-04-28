<template>
  <div class="drag-and-drop">
    <div
      class="drag-zone"
      @drop="onDrop($event, 1)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getZone(1)"
        :key="item.id"
        class="drag-element"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div
      class="drag-zone"
      @drop="onDrop($event, 2)"
      @dragenter.prevent
      @dragover.prevent
    >
      <div
        v-for="item in getZone(2)"
        :key="item.id"
        class="drag-element"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface Item {
  id: number;
  title: string;
  zone: number;
}

export default defineComponent({
  name: "DragAndDropPage",
  setup() {
    const items = ref<Item[]>([
      { id: 0, title: "Item A", zone: 1 },
      { id: 1, title: "Item B", zone: 1 },
      { id: 2, title: "Item C", zone: 1 },
      { id: 3, title: "Item D", zone: 2 },
    ]);

    const getZone = (zone: number) => {
      return items.value.filter((item) => item.zone === zone);
    };

    const startDrag = (event: DragEvent, item: Item) => {
      if (!event || !event.dataTransfer || !item) return;

      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemId", String(item.id));
    };

    const onDrop = (event: DragEvent, zone: number) => {
      if (!event || !event.dataTransfer || !zone) return;
      const itemId = event.dataTransfer.getData("itemId");
      const item = items.value.find((item) => item.id === Number(itemId));

      if (item) {
        item.zone = zone;
      }
    };

    return { getZone, startDrag, onDrop };
  },
});
</script>

<style lang="scss" scoped>
.drag-and-drop {
  display: flex;
  justify-content: space-around;
  .drag-zone {
    width: 300px;
    background-color: var(--box-color);
    box-shadow: var(--box-shadow);
    color: var(--text-color);
    padding: 10px;
    .drag-element {
      margin-top: 10px;
      margin-bottom: 10px;
      padding: 10px;
      background-color: var(--background-color);
      border-radius: 4px;
    }
  }
}
</style>
