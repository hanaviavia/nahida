<script lang="ts" setup>
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
import { onMounted, ref } from "vue";

const wrapperRef = ref<HTMLDivElement>();

const props = defineProps<{
  content?: string;
  description?: string;
}>();

onMounted(() => {
  if (props.content && wrapperRef.value) {
    // 使用 markmap-lib 转换 Markdown 为思维导图数据
    const transformer = new Transformer();
    const { root } = transformer.transform(decodeURIComponent(props.content));

    // 创建一个 SVG 元素
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");

    // 清空容器内容并插入 SVG
    wrapperRef.value.innerHTML = "";
    wrapperRef.value.appendChild(svg);

    // 使用 markmap-view 渲染思维导图
    Markmap.create(svg, {}, root);
  }
});
</script>
<template>
  <div class="markup-container" ref="wrapperRef"></div>
</template>
