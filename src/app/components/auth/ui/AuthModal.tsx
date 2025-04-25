"use client";

import type { ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/app/components/ui/dialog";
import { X } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export default function AuthModal({
  isOpen,
  onClose,
  children,
  maxWidth = "sm:max-w-[450px]",
}: AuthModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogTitle className="sr-only">Your title</DialogTitle>
      <DialogContent
        className={`${maxWidth} p-0 overflow-hidden bg-black text-white border-zinc-800`}
      >
        <div className="absolute right-4 top-4">
          <button
            onClick={onClose}
            className="rounded-full p-1 hover:bg-zinc-800 transition-colors"
            aria-label="Close"
          >
            {/* <X className="h-5 w-5" /> */}
          </button>
        </div>

        <div className="p-6">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
