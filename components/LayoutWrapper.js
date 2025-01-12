import NextImage from 'next/image'
import { useState } from 'react'
import Link from './Link'
import MobileNav from './MobileNav'

const LayoutWrapper = ({ children }) => {
  const [navShow, setNavShow] = useState(false)
  const onToggleNav = () => setNavShow((status) => !status)

  return (
    <>
      <MobileNav navShow={navShow} onToggleNav={onToggleNav} />
      <header className="overflow-x-hidden backdrop-blur supports-backdrop-blur:bg-white/95 py-3 sticky top-0 z-40 bg-white/75 dark:bg-dark/75">
        <div className="mx-auto max-w-3xl xl:max-w-5xl flex items-center justify-between px-3 xl:px-0">
          <div>
            <Link href="/" aria-label="Andy's Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3 flex justify-center items-center">
                  <NextImage
                    src="/static/images/logo.png"
                    width={45}
                    height={45}
                    className="rounded-full"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <div className="max-w-3xl px-3 xl:px-0 mx-auto sm:px-6 xl:max-w-5xl">
        <div className="flex flex-col justify-between min-h-screen">
          <main className="mb-auto">{children}</main>
        </div>
      </div>
    </>
  )
}

export default LayoutWrapper
