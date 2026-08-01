import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const documentId = await ctx.db.insert("documents", {
      title: args.title ?? "Untitled Document",
      ownerId: "temp-user-id", // placeholder until Clerk auth is added
      initialContent: args.initialContent,
    });

    return documentId;
  },
});

export const get = query({
  handler: async (ctx) => {
    return await ctx.db.query("documents").order("desc").collect();
  },
});

export const getById = query({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});