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
      <DialogContent
        className={`${maxWidth} p-0 overflow-hidden bg-black text-white border-zinc-800`}
      >
        <div className="p-6">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
