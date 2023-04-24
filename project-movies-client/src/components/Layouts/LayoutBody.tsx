import './style.css';
const sizes = ['ne', 'lg', 'md', 'sm', 'xl', 'xxl']
type Props = {
  className?: string,
  size?: typeof sizes[number],
  fullSize?: boolean,
  flexRow?: boolean,
  children?: any,
}

const LayoutBody = ({ className, size = 'lg', flexRow = false, children }: Props) => {
  return <main className={`container${size ? `-${size}` : ''}${className ? ' ' + className : ''}`}>
    <div className={`body-control ${flexRow ? 'flex-row' : 'flex-column'}`}>{children}</div>
  </main>
}

export { LayoutBody }