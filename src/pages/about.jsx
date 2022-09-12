import Image from 'next/future/image'
import Head from 'next/head'

import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Adam Beck</title>
        <meta
          name="description"
          content="Adam Beck - About Me"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi! I&#39;m Adam.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>Hi, I&#39;m Adam. With over a decade&#39;s worth of experience operating at the intersection of shipping products, software engineering and people leadership, I strive to serve and multiply others.</p>
            <p>I have a deep love for software development and creating high performing, sustainable and engaged engineering teams. I work with a high degree of integrity, a desire for growth and a leadership style based upon empathy, feedback, and compassion. </p>
            <p>My T-shaped experience allows me to be across the backend and frontend, specifically wth CSS, Node, Javascript, React, Typescript, PHP, Laravel, Ruby and Ruby on Rails. In the past, I delivered long-running projects that required a high level of reliability, scale and coordination.</p>
            <p>Currently, I am working within a fast-paced startup environment where being collaborative, practical and having a breadth of knowledge is critical. I find joy in all parts of the stack and enjoy leaving things better than I found them.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
