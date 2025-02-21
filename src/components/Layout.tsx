import { RouteSectionProps, useLocation } from '@solidjs/router'
import { Component, JSX, Suspense } from 'solid-js'
import { footerId } from './Header'

const Link = (props: { href: string; children: JSX.Element }) => {
  const location = useLocation()

  const active = (path: string) =>
    path == location.pathname
      ? 'border-emerald-600'
      : 'border-transparent hover:border-emerald-600'

  return (
    <a href={props.href} class={`border-b-2 ${active(props.href)}`}>
      {props.children}
    </a>
  )
}

const Layout: Component<RouteSectionProps<unknown>> = props => {
  return (
    <div class='flex flex-col-reverse gap-2 md:h-screen md:flex-row md:gap-0'>
      <div
        id={footerId}
        class='flex shrink-0 flex-wrap justify-center gap-8 overflow-y-scroll border-t-2 border-emerald-600 px-4 py-2 md:w-36 md:flex-col md:flex-nowrap md:justify-normal md:gap-4 md:border-t-0 md:border-r-2 md:px-2'
      >
        <Link href='/'>Beryllium</Link>
        <Link href='/store'>Store</Link>
        <Link href='/support'>Support</Link>
        <Link href='/developers'>Developers</Link>
        <Link href='/press'>Newsroom</Link>
        <Link href='/careers'>Careers</Link>
      </div>
      <div class='flex grow flex-col gap-2 md:overflow-y-scroll'>
        <Suspense>{props.children}</Suspense>
      </div>
    </div>
  )
}

export default Layout
