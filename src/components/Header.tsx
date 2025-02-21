import { JSX } from 'solid-js'

export const footerId = 'footer'

function Header(props: { children: JSX.Element }) {
  const jump = () => {
    const el = document.getElementById(footerId)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div class='pad-4 sticky top-0 flex justify-between border-b-2 border-emerald-600 p-2 text-2xl'>
      <div>{props.children}</div>
      <button class='md:hidden' onClick={jump}>
        📜
      </button>
    </div>
  )
}

export default Header
