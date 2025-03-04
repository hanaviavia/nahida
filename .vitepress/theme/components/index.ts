import { Component } from "vue";
import Markmap from "./Markmap.vue";
import Mermaid from "./Mermaid.vue";
import MNavLink from "./MNavLink.vue";
import MNavLinks from "./MNavLinks.vue";

export const globals: Record<string, Component> = {
  Markmap,
  Mermaid,
  MNavLink,
  MNavLinks,
};
