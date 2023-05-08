import Date from '@/components/Date'

import { getAllPostIds, getPostData } from '@/lib/posts'

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return (
    <>
      {/* Post Title */}
      <h1 className='font-extrabold text-3xl mb-1'>{postData.title}</h1>

      <div className='text-gray-500 font-medium mb-5'>
        <Date dateString={postData.date} />
      </div>

      {/* Post Content */}
      <div
        className='text-gray-600'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  )
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
