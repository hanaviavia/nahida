export const markdownItMermaid = (md, options = {}) => {
  // 保存原始代码块渲染规则
  const defaultFence = md.renderer.rules.fence;

  // 覆盖渲染规则
  md.renderer.rules.fence = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const lang = token.info.trim();

    // 如果是 mermaid 代码块
    if (lang === "mermaid") {
      return `
  <Mermaid content="${encodeURIComponent(token.content)}">
    ${token.content}
  </Mermaid>
  `;
    }

    // 其他代码块使用默认渲染
    return defaultFence(tokens, idx, options, env, self);
  };
};
