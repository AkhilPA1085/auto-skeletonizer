import { useEffect, useRef } from "react";
import { skeletonize } from "../core/skeletonize";

type SkeletonProps = {
  loading: boolean;
  children: React.ReactNode;
  options?: Record<string, any>;
};

export function ReactSkeleton({ loading, children, options }: SkeletonProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const controller = skeletonize(ref.current, options);

    loading ? controller.show() : controller.hide();

    return () => controller.destroy();
  }, [loading, options]);

  return <div ref={ref}>{children}</div>;
}
