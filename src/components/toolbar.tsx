"use client";

import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Undo2,
  Redo2,
} from "lucide-react";

import { useEditorStore } from "@/store/use-editor-store";
import { cn } from "@/lib/utils";

import { FontFamilyButton } from "@/components/toolbar-font-family";
import { HeadingLevelButton } from "@/components/toolbar-heading";
import { TextColorButton } from "@/components/toolbar-text-color";
import { HighlightColorButton } from "@/components/toolbar-highlight-color";

import { FontSizeButton } from "@/components/toolbar-font-size";
import { LineHeightButton } from "@/components/toolbar-line-height";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80",
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2,
        onClick: () => editor?.chain().focus().redo().run(),
      },
    ],
    [
      {
        label: "Bold",
        icon: Bold,
        onClick: () => editor?.chain().focus().toggleBold().run(),
        isActive: editor?.isActive("bold"),
      },
      {
        label: "Italic",
        icon: Italic,
        onClick: () => editor?.chain().focus().toggleItalic().run(),
        isActive: editor?.isActive("italic"),
      },
      {
        label: "Underline",
        icon: Underline,
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
        isActive: editor?.isActive("underline"),
      },
      {
        label: "Strikethrough",
        icon: Strikethrough,
        onClick: () => editor?.chain().focus().toggleStrike().run(),
        isActive: editor?.isActive("strike"),
      },
    ],
    [
      {
        label: "Align Left",
        icon: AlignLeft,
        onClick: () => editor?.chain().focus().setTextAlign("left").run(),
        isActive: editor?.isActive({ textAlign: "left" }),
      },
      {
        label: "Align Center",
        icon: AlignCenter,
        onClick: () => editor?.chain().focus().setTextAlign("center").run(),
        isActive: editor?.isActive({ textAlign: "center" }),
      },
      {
        label: "Align Right",
        icon: AlignRight,
        onClick: () => editor?.chain().focus().setTextAlign("right").run(),
        isActive: editor?.isActive({ textAlign: "right" }),
      },
    ],
    [
      {
        label: "Bullet List",
        icon: List,
        onClick: () => editor?.chain().focus().toggleBulletList().run(),
        isActive: editor?.isActive("bulletList"),
      },
      {
        label: "Ordered List",
        icon: ListOrdered,
        onClick: () => editor?.chain().focus().toggleOrderedList().run(),
        isActive: editor?.isActive("orderedList"),
      },
    ],
  ];

  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <div className="w-px h-6 bg-neutral-300 mx-1" />
      <FontFamilyButton />
      <div className="w-px h-6 bg-neutral-300 mx-1" />
      <HeadingLevelButton />
      <div className="w-px h-6 bg-neutral-300 mx-1" />
      <FontSizeButton />
      <div className="w-px h-6 bg-neutral-300 mx-1" />
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <TextColorButton />
      <HighlightColorButton />
      <div className="w-px h-6 bg-neutral-300 mx-1" />
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <div className="w-px h-6 bg-neutral-300 mx-1" />
      <LineHeightButton />
      <div className="w-px h-6 bg-neutral-300 mx-1" />
      {sections[3].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
