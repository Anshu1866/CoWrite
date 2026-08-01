"use client";

import { useMutation } from "convex/react";
import { useRouter } from "next/navigation";
import { FileText } from "lucide-react";
import { api } from "../../convex/_generated/api";
import { templates } from "@/lib/templates";

export const TemplatesGallery = () => {
  const router = useRouter();
  const create = useMutation(api.documents.create);

  const onTemplateClick = async (template: (typeof templates)[number]) => {
    const documentId = await create({
      title: template.label,
      initialContent: template.initialContent,
    });
    router.push(`/documents/${documentId}`);
  };

  return (
    <div className="bg-[#f1f3f4] py-6">
      <div className="max-w-4xl mx-auto px-8">
        <p className="text-sm font-medium mb-3">Start a new document</p>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => onTemplateClick(template)}
              className="flex flex-col gap-y-2 shrink-0"
            >
              <div className="w-32 h-40 bg-white border border-neutral-200 rounded-md flex items-center justify-center hover:border-blue-500 hover:shadow-md transition">
                <FileText className="size-8 text-neutral-300" />
              </div>
              <p className="text-xs text-center">{template.label}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};