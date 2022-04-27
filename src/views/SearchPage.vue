<template>
  <div class="container">
    <search-input v-model:typing="typing" v-model:search="searchValue" />
    <div class="content">
      <div class="content-loading" v-if="typing">
        <span>Loading ...</span>
      </div>
      <div v-else>isTyping:{{ typing }} - searchValue:{{ searchValue }}</div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { SearchInput },
  name: "SearchPage",
  setup() {
    const typing = ref(false);
    const searchValue = ref("");

    return { typing, searchValue };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: stretch;
  > * {
    margin-bottom: 20px;
  }
  .content {
    position: relative;
    padding: 20px;
    border-radius: 15px;
    min-height: 250px;
    background-color: var(--box-color);
    box-shadow: var(--box-shadow);
    &-loading {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
