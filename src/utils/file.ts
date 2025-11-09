import fs from "fs";
import path from "path";
import { getFrontmatter } from "next-mdx-remote-client/utils";

import type { Post, Frontmatter } from "@/types";
import { getMarkdownExtension } from ".";

export const RE = /\.mdx?$/; // Only .md(x) files
// text.replace(RE, "")

export const getSource = async (
  filename: string
): Promise<string | undefined> => {
  const sourcePath = path.join(process.cwd(), "content", filename);
  if (!fs.existsSync(sourcePath)) return;
  return await fs.promises.readFile(sourcePath, "utf8");
};

export const getSourceSync = (filename: string): string | undefined => {
  const sourcePath = path.join(process.cwd(), "content", filename);
  if (!fs.existsSync(sourcePath)) return;
  return fs.readFileSync(sourcePath, "utf8");
};

/**
 * get the markdown file list
 */
export const getMarkdownFiles = (subdir = ""): string[] => {
  const dirPath = path.join(process.cwd(), "content", subdir);

  if (!fs.existsSync(dirPath)) return [];

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  

  const files = entries.flatMap((entry) => {
    const entryPath = path.join(subdir, entry.name);
  
    if (entry.isDirectory()) {
      // Recursively read subfolders
      return getMarkdownFiles(entryPath);
    }
   
    if (RE.test(entry.name)) {
      
      return [entryPath];
    }

    return [];
  });

  return files;
};
/**
 * get the source and format from a slug !
 */
export const getMarkdownFromSlug = async (
  slug: string
): Promise<
  | {
      source: string;
      format: "md" | "mdx";
    }
  | undefined
> => {
  if (!/-mdx?$/.test(slug)) return;

  // replace the last dash with dot in the slug for filename
  const filename = slug.replace(/-(?=[^-]*$)/, ".") as
    | `${string}.md`
    | `${string}.mdx`;

  const fullPath = path.join(process.cwd(), "content", filename);

  if (fs.existsSync(fullPath)) {
    const source = await getSource(filename);

    if (!source) return;

    return {
      source,
      format: getMarkdownExtension(filename),
    };
  }
};

export const getBlogPosts = (): Post[] => {
  return getMarkdownFiles("blog")
    .map(getPostInformation)
    .filter(Boolean) as Post[];
};

export const getCaseStudies = (): Post[] => {
  return getMarkdownFiles("cases")
    .map(getPostInformation)
    .filter(Boolean) as Post[];
};


/**
 * get the frontmatter and slug of a file
 */
export const getPostInformation = (filename: string): Post | undefined => {
  const source = getSourceSync(filename);
  if (!source) return;

  const frontmatter = getFrontmatter<Frontmatter>(source).frontmatter;

  // Replace the last dot with a dash in filename for slug
  const slug = filename.replace(/\.(?=[^.]*$)/, "-");

  const post: Post = {
    ...frontmatter,
    slug, // e.g., "blogs/my-post-mdx"
  };

  return post;
};