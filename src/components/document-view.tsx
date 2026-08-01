"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Id } from "../../convex/_generated/dataModel";

import { Editor } from "@/components/editor";
import { Toolbar } from "@/components/toolbar";
import { Ruler } from "@/components/ruler";
import { Navbar } from "@/components/navbar";
import { Room } from "@/components/room";

interface DocumentViewProps {
  documentId: string;
}

export const DocumentView = ({ documentId }: DocumentViewProps) => {
  const document = useQuery(api.documents.getById, {
    id: documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-500">Loading document...</p>
      </div>
    );
  }

  if (document === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-500">Document not found</p>
      </div>
    );
  }

  return (
    <Room roomId={documentId}>
      <div className="min-h-screen bg-[#fafbfd]">
        <div className="flex flex-col px-4 pt-2 gap-y-2 fixed top-0 left-0 right-0 z-10 bg-[#fafbfd] print:hidden">
          <Navbar title={document.title} />
          <Toolbar />
        </div>
        <div className="pt-[114px] print:pt-0">
          <Ruler />
          <Editor initialContent={document.initialContent} />
        </div>
      </div>
    </Room>
  );
};