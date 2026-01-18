"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactSkeleton = ReactSkeleton;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const skeletonize_1 = require("../core/skeletonize");
function ReactSkeleton({ loading, children, options }) {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!ref.current || typeof window === "undefined")
            return;
        const controller = (0, skeletonize_1.skeletonize)(ref.current, options);
        loading ? controller.show() : controller.hide();
        return () => controller.destroy();
    }, [loading, options]);
    return (0, jsx_runtime_1.jsx)("div", { ref: ref, children: children });
}
