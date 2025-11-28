import React from "react";
import { vi } from "vitest";
import "@testing-library/jest-dom/vitest";

vi.mock("next/image", () => {
  return {
    __esModule: true,
    default: ({ src, alt, ...props }: any) => {
      const resolvedSrc = typeof src === "string" ? src : src?.src || "";
      return React.createElement("img", {
        src: resolvedSrc,
        alt,
        ...props,
      });
    },
  };
});
