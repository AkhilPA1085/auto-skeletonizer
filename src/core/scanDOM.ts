function scanDOM(container:HTMLElement) {
    const blocks: { type: string; rect: DOMRect; }[] = [];

    function walk(node: any) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        const range = document.createRange();
        range.selectNode(node);
        blocks.push({
          type: "text",
          rect: range.getBoundingClientRect()
        });
        return;
      }

      if (!(node instanceof HTMLElement)) return;

      const tag = node.tagName.toLowerCase();
      const rect = node.getBoundingClientRect();

      if (["img", "video"].includes(tag))
        blocks.push({ type: "image", rect });
      else if (["button", "a"].includes(tag))
        blocks.push({ type: "button", rect });
      else if (["input", "textarea", "select"].includes(tag))
        blocks.push({ type: "input", rect });
      else
        node.childNodes.forEach(walk);
    }

    walk(container);
    return blocks;
  }