---
pageClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import { NAV_DATA } from './data'
</script>

# 导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br >

