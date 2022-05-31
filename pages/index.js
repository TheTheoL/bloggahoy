import Head from 'next/head'
import styles from '../styles/Home.module.css';

const posts = [
  { title: 'Learning Next.js!', excerpt: ' learn how to use NExt and GraphQl' },
  { title: 'Learning Tailwindcss!', excerpt: ' learn how to use Next and Tailwind styling' }
]


export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>

          </div>
        </div>
      </div>
    </div>
  )
}
