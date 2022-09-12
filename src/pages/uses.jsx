import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Adam Beck</title>
        <meta
          name="description"
          content="Software I use, day in and day out."
        />
      </Head>
      <SimpleLayout
        title="Software I use, day in and day out."
        intro=""
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Pro, 16GB RAM (2021)">
              I waited a while to purchase an M1, but it was so worth it.
            </Tool>
            <Tool title="ASUS VG258QR 24.5 Inches">
              I have two of these. One directly in front of me, and another off to my right side.
              They&#39;re discontinued now, but good monitors.
            </Tool>
            <Tool title="Keychron K1 - Blue Switches">
              Click clacks make brain feel good. The low profile and small desk footprint also help.
            </Tool>
            <Tool title="Logitech Mx Master 3S">
              I used a magic trackpad prior to this, and loved them. However, the gesture button on this
              mouse, along with the forward and back bottons are what got me to switch over.
              It was worth the purchase, and I don&#39;t think I&#39;ll go back to a trackpad.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VS Code">
              I held out in Sublime Text for as long as I could. I even used Neovim for a while.
              VS Code&#39;s typescript integration and other plugins are just too good now though.
            </Tool>
            <Tool title="iTerm2">
              I use iTerm2&#39;s window splitting all day. I often have several terminal sessions running
              tests, linting or logs at one time.
            </Tool>
            <Tool title="Oh My Zsh">
              The quality of life that Oh My Zsh brings to a zsh shell is worth the additional
              steps in setting this up.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Notion">
              For things that I&#39;d like to later search through, or I know I&#39;ll forget, I store them in Notion.
            </Tool>
            <Tool title="Bullet Journal">
              Everything else lives in my bullet journal. Nothing fancy, but somewhere I can dump my to-do lists
              when there is a lot going on.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
