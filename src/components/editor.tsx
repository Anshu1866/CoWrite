"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import { TextAlign } from "@tiptap/extension-text-align";
import { Highlight } from "@tiptap/extension-highlight";
import { FontFamily } from "@tiptap/extension-font-family";
import { TaskList, TaskItem } from "@tiptap/extension-list";
import {
  Table,
  TableRow,
  TableCell,
  TableHeader,
} from "@tiptap/extension-table";
import { Image } from "@tiptap/extension-image";

import { useEditorStore } from "@/store/use-editor-store";
import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";

import { useMarginStore } from "@/store/use-margin-store";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";

import {
  FloatingComposer,
  FloatingThreads,
  FloatingToolbar,
} from "@liveblocks/react-tiptap";
import { useThreads } from "@liveblocks/react/suspense";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

interface EditorProps {
  initialContent?: string;
}

export const Editor = ({ initialContent }: EditorProps) => {
  const { setEditor } = useEditorStore();
  const { leftMargin, rightMargin } = useMarginStore();
  const liveblocks = useLiveblocksExtension({
    initialContent: initialContent || "<p></p>",
  });
  const { threads } = useThreads();
  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onFocus({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    extensions: [
      liveblocks,
      StarterKit.configure({
        history: false, // Liveblocks handles undo/redo now
      }),
      TextStyle,
      Color,
      TextStyle,
      Color,
      Underline,
      FontFamily,
      FontSizeExtension,
      LineHeightExtension,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      Table,
      TableRow,
      TableCell,
      TableHeader,
      Image,
      Highlight.configure({ multicolor: true }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],

    editorProps: {
      attributes: {
        style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
        class:
          "focus:outline-none print:border-0 bg-white border border-[#c7c7c7] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text prose prose-sm max-w-none",
      },
    },
  });

  return (
    <div className="size-full overflow-x-auto bg-[#f9fbfd] px-4 print:p-0 print:bg-white print:overflow-visible">
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        <EditorContent editor={editor} />
        <FloatingThreads editor={editor} threads={threads} />
        <FloatingComposer editor={editor} />
        <FloatingToolbar editor={editor} />
      </div>
    </div>
  );
};
