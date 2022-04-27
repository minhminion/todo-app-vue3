<template>
  <div class="search-box">
    <input
      type="text"
      @input="(el) => updateSearch(el.target.value)"
      placeholder="Search ..."
    />
  </div>
</template>

<script lang="ts">
import { useDebounce } from "@/hooks";
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  name: "SearchInput",
  props: {
    typing: {
      type: Boolean,
    },
    search: {
      type: String,
    },
  },
  emits: ["update:typing", "update:search"],
  setup(props, ctx) {
    const searchValue = ref(props.search);
    const isTyping = ref(props.typing);

    const { debounce } = useDebounce();

    const updateSearch = (value: string) => {
      isTyping.value = true;
      debounce(() => {
        searchValue.value = value;
        isTyping.value = false;
      }, 800);
    };

    watch(isTyping, (value) => ctx.emit("update:typing", value));
    watch(searchValue, (value) => ctx.emit("update:search", value));

    return { updateSearch, isTyping };
  },
});
</script>

<style lang="scss" scoped>
.search-box {
  max-width: 500px;
  width: 100%;
  height: 55px;
  background-color: var(--box-color);
  box-shadow: var(--box-shadow);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    font-size: 1em;
    border: none;
    width: 85%;
    padding: 0 4px;
    outline: none;
    border: none;
    background-color: transparent;
    margin-right: 12px;
    color: var(--text-color);
    box-shadow: none;
    border-radius: 0;

    &::placeholder {
      color: var(--text-color);
    }
  }
}
</style>
