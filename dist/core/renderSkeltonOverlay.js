"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSkeletonOverlay = renderSkeletonOverlay;
function renderSkeletonOverlay(container, blocks, options = {}) {
    const overlay = document.createElement("div");
    // Step 1 — Make overlay cover container
    const containerRect = container.getBoundingClientRect();
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = `${containerRect.width}px`;
    overlay.style.height = `${containerRect.height}px`;
    overlay.style.pointerEvents = "none";
    overlay.style.zIndex = "9999";
    // Step 2 — Ensure container is positioned
    const computed = getComputedStyle(container);
    if (computed.position === "static") {
        container.style.position = "relative";
    }
    // Step 3 — Create skeleton blocks
    blocks.forEach((block) => {
        const el = document.createElement("div");
        el.className = "skeleton skeleton-" + block.type;
        el.style.position = "absolute";
        el.style.top = `${block.rect.top - containerRect.top}px`;
        el.style.left = `${block.rect.left - containerRect.left}px`;
        el.style.width = `${block.rect.width}px`;
        el.style.height = `${block.rect.height}px`;
        overlay.appendChild(el);
    });
    // Step 4 — Add overlay to container
    container.appendChild(overlay);
    return overlay;
}
