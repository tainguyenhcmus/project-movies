import React from 'react'
import { Header } from './components'
import { AppProvider } from './contexts/app';

type Props = {
  children?: JSX.Element,
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <AppProvider>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </AppProvider>
    </>
  )
}

export { Layout }