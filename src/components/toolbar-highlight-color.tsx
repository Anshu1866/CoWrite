"use client";

import { useEditorStore } from "@/store/use-editor-store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HexColorPicker } from "react-colorful";
import { Highlighter } from "lucide-react";

export const HighlightColorButton = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("highlight").color || "#FFFF00";

  const onChange = (color: string) => {
    editor?.chain().focus().setHighlight({ color }).run();
  };

  return (
    <Popover>
      <PopoverTrigger className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5">
        <Highlighter className="size-4" />
      </PopoverTrigger>
      <PopoverContent className="p-2.5 w-auto">
        <HexColorPicker color={value} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};
