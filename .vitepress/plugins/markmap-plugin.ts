import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";
import path from "path";
import fs from "fs";

const localMd = MarkdownIt();

export const mdPlugin = (md, options = {}) => {
  md.use(mdContainer, "markmap", {
    validate(params) {
      return !!params.trim().match(/^markmap\s*(.*)$/);
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^markmap\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : "";
        const contentFileToken = tokens[idx + 2];
        let content = "";
        const sourceFile = contentFileToken.children?.[0].content ?? "";
        console.log(
          path.resolve("./.vitepress", "markmaps", `${sourceFile}.md`)
        );
        const filePath = path.resolve(
          "./.vitepress",
          "markmaps",
          `${sourceFile}.md`
        );

        if (contentFileToken.type === "inline") {
          content = fs.readFileSync(path.resolve(filePath), "utf-8");
        }
        if (!content) throw new Error(`Incorrect markmap file: ${sourceFile}`);

        return `<Markmap content="${encodeURIComponent(
          content
        )}" description="${encodeURIComponent(description)}">`;
      } else {
        return "</Markmap>";
      }
    },
  });
};
