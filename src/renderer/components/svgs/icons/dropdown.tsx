import { CSSProperties } from 'react'

export function DropdownIcon(props: {className?: string, style?: CSSProperties}) {
  return (
<svg className={props.className} style={props.style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101">
  <path d="m80.5 33-30 30-30-30c-.9-.9-2.5-.9-3.4 0s-.9 2.5 0 3.4L48.8 68c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7l31.7-31.7c.9-.9.9-2.5 0-3.4s-2.5-.9-3.4.1z" fill="currentColor"></path>
</svg>
  )
}