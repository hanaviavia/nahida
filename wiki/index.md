---
pageClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>

# 知识库

<MNavLinks v-for="{title, items} in NAV_DATA" target="_self" :title="title" :items="items"/>

<br >

