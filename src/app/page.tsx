"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { TemplatesGallery } from "@/components/templates-gallery";

export default function Home() {
  const router = useRouter();
  const documents = useQuery(api.documents.get);
  const create = useMutation(api.documents.create);

  const onCreate = async () => {
    const documentId = await create({ title: "Untitled Document" });
    router.push(`/documents/${documentId}`);
  };

  if (documents === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-500">Loading documents...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <TemplatesGallery />

      <div className="max-w-4xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">My Documents</h1>
          <button
            onClick={onCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
          >
            + New Document
          </button>
        </div>

        {documents.length === 0 ? (
          <p className="text-neutral-500">No documents yet. Create your first one!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <button
                key={doc._id}
                onClick={() => router.push(`/documents/${doc._id}`)}
                className="border border-neutral-200 rounded-lg p-4 text-left hover:shadow-md transition bg-white"
              >
                <p className="font-medium truncate">{doc.title}</p>
                <p className="text-xs text-neutral-400 mt-1">
                  {new Date(doc._creationTime).toLocaleDateString()}
                </p>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}