"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skeletonize = skeletonize;
const renderSkeltonOverlay_1 = require("./renderSkeltonOverlay");
function skeletonize(container, options = {}) {
    let overlay;
    function show() {
        const blocks = scanDOM(container);
        overlay = (0, renderSkeltonOverlay_1.renderSkeletonOverlay)(container, blocks, options);
    }
    function hide() {
        overlay === null || overlay === void 0 ? void 0 : overlay.remove();
    }
    function destroy() {
        hide();
    }
    return { show, hide, destroy };
}
