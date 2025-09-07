import React from "react";
import { cn } from "@/lib/utils";

const TwitterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M18.8263 1.90393H22.1998L14.8297 10.3274L23.5 21.7899H16.7112L11.394 14.838L5.30995 21.7899H1.93443L9.81743 12.78L1.5 1.90393H8.46111L13.2674 8.25826L18.8263 1.90393ZM17.6423 19.7707H19.5116L7.44539 3.81706H5.43946L17.6423 19.7707Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TwitterIcon;
