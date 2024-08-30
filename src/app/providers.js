"use client";
import React from "react";
import { ParallaxProvider as Provider } from "react-scroll-parallax";

export function ParalaxProviders({ children }) {
  return <Provider>{children}</Provider>;
}
