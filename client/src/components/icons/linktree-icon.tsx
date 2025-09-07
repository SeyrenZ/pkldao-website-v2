import React from "react";
import { cn } from "@/lib/utils";

const LinktreeIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6", className)}
      viewBox="0 0 136 166"
      fill="none"
    >
      <path
        d="M0.733887 56.6293H41.4359L12.5009 29.0451L28.5109 12.5846L56.0959 40.9404V0.625H80.0149V40.9404L107.599 12.6489L123.597 29.0451L94.6749 56.565H135.363V79.3268H94.4438L123.558 107.618L107.599 123.693L68.0549 83.9563L28.5109 123.693L12.5009 107.683L41.6279 79.3911H0.733887V56.6293ZM56.0309 111.991H79.9509V166.002H56.0309V111.991Z"
        fill="black"
      />
    </svg>
  );
};

export default LinktreeIcon;
