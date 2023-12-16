import './globals.css'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from './utils.module.scss'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const name = 'Emanuele Favero'

export const metadata = {
  title: 'Blog',
  description: 'Next.js 13 App Router Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className={styles.container}>
          {/* HEADER */}
          <header className={styles.header}>
            <Link href='/'>
              <Image
                priority
                src='/images/profile.jpg'
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=''
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href='/' className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </header>

          {/* MAIN */}
          <main>{children}</main>

          {/* FOOTER */}
          <div className={styles.backToHome}>
            <Link href='/'>← Back to home</Link>
          </div>
        </div>
      </body>
    </html>
  )
}
