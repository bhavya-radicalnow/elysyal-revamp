"use client";

import { useState } from "react";
import Image from "next/image";
import Skeleton from "@/components/ui/Skeleton";

const ImageWithSkeleton = ({
  src,
  alt,
  className,
  onLoad,
  skeletonClassName,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && (
        <div className={`absolute inset-0 z-10 ${skeletonClassName || ""}`}>
           <Skeleton height="100%" width="100%" className="h-full w-full rounded-2xl" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className={`${className || ""} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(e) => {
          setLoaded(true);
          if (onLoad) onLoad(e);
        }}
        {...props}
      />
    </>
  );
};

export default ImageWithSkeleton;
