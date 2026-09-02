"use client";
import React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if(!mounted) return null
  return createPortal(
    <div className="fixed top-0 bottom-0 right-0 left-0 bg-[#03192e] border-l border-l-white  z-350  backdrop-blur-xl">
      {children}
    </div>,
    document.body,
  );
}
