<script lang="ts" setup>
import { onMounted, ref, useId } from "vue";
import mermaid from "mermaid";

const wrapperRef = ref<HTMLDivElement>();

const props = defineProps<{
  content?: string;
}>();

const id = useId();
onMounted(() => {
  if (props.content && wrapperRef.value) {
    console.log(decodeURIComponent(props.content));
    mermaid
      .render(id, decodeURIComponent(props.content), wrapperRef.value)
      .then((res) => {
        wrapperRef.value!.innerHTML = res.svg;
      });
  }
});
</script>
<template>
  <div class="mermaid-container" ref="wrapperRef"></div>
</template>
