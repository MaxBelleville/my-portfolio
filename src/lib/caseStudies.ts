import { MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter';

interface CaseStudy {
    markdown: string;
    frontMatter: any;
  }
export async function getCaseFromSlug(slug: string): Promise<CaseStudy> {
    // Retrieve slugs from post routes
    const files =await fs.readdir(path.join('src','cases'))
    for(var file of files) {
        var currentSlug = file.replace(".mdx","");
        if(currentSlug===slug) {
            const mdxWithMeta = (await fs.readFile(path.join('src','cases',file))).toString()
            const {data: frontMatter, content} = matter(mdxWithMeta);
            return {markdown: content,frontMatter}
        }
    }
    return {markdown:"",frontMatter:{}}
  }