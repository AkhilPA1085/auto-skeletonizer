import { renderSkeletonOverlay } from "./renderSkeltonOverlay";

export function skeletonize(container:HTMLElement, options = {}) {
    let overlay: HTMLDivElement;
  
    function show() {
      const blocks = scanDOM(container);
      overlay = renderSkeletonOverlay(container, blocks, options);
    }
  
    function hide() {
      overlay?.remove();
    }

    function destroy() {
      hide();
    }
  
    return { show, hide, destroy };
  }
  