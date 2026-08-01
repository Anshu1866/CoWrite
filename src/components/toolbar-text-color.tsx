"use client";

import { useEditorStore } from "@/store/use-editor-store";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HexColorPicker } from "react-colorful";

export const TextColorButton = () => {
  const { editor } = useEditorStore();
  const value = editor?.getAttributes("textStyle").color || "#000000";

  const onChange = (color: string) => {
    editor?.chain().focus().setColor(color).run();
  };

  return (
    <Popover>
      <PopoverTrigger className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5">
        <span className="text-xs">A</span>
        <div className="h-0.5 w-full" style={{ backgroundColor: value }} />
      </PopoverTrigger>
      <PopoverContent className="p-2.5 w-auto">
        <HexColorPicker color={value} onChange={onChange} />
      </PopoverContent>
    </Popover>
  );
};
