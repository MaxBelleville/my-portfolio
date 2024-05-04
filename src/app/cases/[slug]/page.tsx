
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getCaseFromSlug } from '@/lib/caseStudies'

export default async function CaseStudies({ params }: { params: { slug: string } }) {
    const {markdown,frontMatter} = await getCaseFromSlug(params.slug)
    return (
        <main>
        {markdown.length>0&&<div>
            <h1>{frontMatter.title}</h1>
            <MDXRemote source={markdown}/>
        </div>}
        </main>
    )
  }
  