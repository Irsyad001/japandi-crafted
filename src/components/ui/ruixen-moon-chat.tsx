import { useRef, useState, useEffect, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ImageIcon,
  FileUp,
  MonitorIcon,
  CircleUserRound,
  ArrowUpIcon,
  Paperclip,
  Code2,
  Palette,
  Layers,
  Rocket,
} from "lucide-react";

interface AutoResizeProps {
  minHeight: number;
  maxHeight?: number;
}

function useAutoResizeTextarea({ minHeight, maxHeight }: AutoResizeProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = useCallback(
    (reset?: boolean) => {
      const textarea = textareaRef.current;
      if (!textarea) return;
      if (reset) {
        textarea.style.height = `${minHeight}px`;
        return;
      }
      textarea.style.height = `${minHeight}px`;
      const newHeight = Math.max(
        minHeight,
        Math.min(textarea.scrollHeight, maxHeight ?? Infinity),
      );
      textarea.style.height = `${newHeight}px`;
    },
    [minHeight, maxHeight],
  );

  useEffect(() => {
    if (textareaRef.current) textareaRef.current.style.height = `${minHeight}px`;
  }, [minHeight]);

  return { textareaRef, adjustHeight };
}

export default function RuixenMoonChat() {
  const [message, setMessage] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 48,
    maxHeight: 150,
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl sm:text-4xl tracking-tight">
          Still have a <em className="italic text-accent font-light">question</em>?
        </h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Whisper it below — we read every note, slowly.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-secondary/40 backdrop-blur-sm shadow-[0_30px_80px_-40px_rgba(45,45,45,0.25)]">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            adjustHeight();
          }}
          placeholder="Type your question…"
          className={cn(
            "w-full px-4 py-3 resize-none border-none rounded-2xl",
            "bg-transparent text-foreground text-sm shadow-none",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "placeholder:text-muted-foreground/60 min-h-[48px]",
          )}
          style={{ overflow: "hidden" }}
        />

        <div className="flex items-center justify-between p-3 border-t border-border/60">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent"
          >
            <Paperclip className="w-4 h-4" />
          </Button>

          <Button
            disabled={!message.trim()}
            className="flex items-center gap-1 px-4 py-2 rounded-lg bg-foreground text-background hover:bg-accent disabled:opacity-50"
          >
            <ArrowUpIcon className="w-4 h-4" />
            <span className="text-xs">Send</span>
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-2 mt-6">
        <QuickAction icon={<Code2 className="w-4 h-4" />} label="Custom build" />
        <QuickAction icon={<Rocket className="w-4 h-4" />} label="Lead times" />
        <QuickAction icon={<Layers className="w-4 h-4" />} label="Materials" />
        <QuickAction icon={<Palette className="w-4 h-4" />} label="Finishes" />
        <QuickAction icon={<CircleUserRound className="w-4 h-4" />} label="Visit atelier" />
        <QuickAction icon={<MonitorIcon className="w-4 h-4" />} label="Shipping" />
        <QuickAction icon={<FileUp className="w-4 h-4" />} label="Care guide" />
        <QuickAction icon={<ImageIcon className="w-4 h-4" />} label="Gallery" />
      </div>
    </div>
  );
}

function QuickAction({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Button
      variant="outline"
      className="flex items-center gap-2 rounded-full border-border bg-background/60 text-muted-foreground hover:text-accent hover:border-accent/60"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </Button>
  );
}