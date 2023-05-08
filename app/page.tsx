import Link from 'next/link'
import Date from '@/components/Date'
import { siteTitle } from '@/app/layout'
import utilStyles from './utils.module.scss'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

export const metadata = {
  title: siteTitle,
}

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <>
      <section className={`${utilStyles.headingMd} text-gray-600`}>
        <p>
          Hello, I&apos;m <b>Emanuele</b>. I&apos;m a software engineer in love
          with front end development. You can contact me on{' '}
          <a href='https://www.linkedin.com/in/emanuele-favero/'>Linkedin</a>.
        </p>
        <p>
          <i>
            Check out my projects on{' '}
            <a target='_blank' href='https://github.com/emanuelefavero'>
              GitHub
            </a>{' '}
          </i>
        </p>
        <p>(This is a Next.js sample website)</p>
        <h3>Posts</h3>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <div className='font-medium mb-1 mt-5'>
                <Link href={`/posts/${id}`}>{title}</Link>
              </div>
              {/* <br /> */}
              <small className='text-gray-500 font-medium'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
