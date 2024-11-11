import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { styler } from '@styler'
import { useTheme, ThemeProvider } from '../contexts/ThemeProvider'

const AppLayout = () => {
  styler()
  const { isDarkMode, toggleTheme } = useTheme()
  // const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <>
      <ThemeProvider>
        <header className="d-flex ai-center jc-space-between px-2rem py-1rem">
          <Link
            to="/"
            className="td-none lh-1 fs-14px fw-500 center gap-8px family-code px-12px py-6px br-404px bg-neutral-100 text-neutral-950"
          >
            <span className="box-10px bg-primary-600 fw-600 br-999px"></span>
            build.nousantx
          </Link>

          {/* Added Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="center box-32px td-none text-neutral-900 hover:text-neutral-800 tr-time-0.3s br-6px hover:bg-neutral-100"
            aria-label="Toggle Theme"
          >
            <span
              className={`ri ${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} fs-1.3rem lh-1`}
            ></span>
          </button>
        </header>
        <main>
          <Outlet />
        </main>
        <footer className="mx-auto w-mx-1440px w-full pn-relative p-2rem pt-4rem">
          <div className="pn-absolute t-0 r-0 code px-18px py-1rem text-neutral-500 fw-500 center gap-6px fs-12px">
            <span className="ri ri-svelte-fill fs-14px"></span>
            Contact.svelte
          </div>
          <div className="py-3rem">
            <header className="tw-balance max-lg:ta-left lg:ta-center">
              <span className="d-inline-block text mb-4px fs-12px">Ready to build together?</span>
              <h2 className="fs-2rem family-poppins fw-500 ls--0.020em lh-1">
                Catch me if you can!{' '}
                <Link
                  to="/contact"
                  className="center d-inline-flex lh-inherit fs-inherit hover:[--rotate]--45deg td-none text-neutral-900 hover:text-primary-600 gap-4px"
                >
                  <span className="td-underline tr-time-300ms">Now</span>
                  <span className="d-inline-block rotate-$rotate ri ri-arrow-right-line tr-time-300ms fs-0.9em"></span>
                </Link>
              </h2>
            </header>
          </div>
          <div className="mt-2rem center jc-space-between">
            <p className="center text fs-12px">Purely built with Love and TenoxUI.</p>
            <div className="center gap-8px">
              <a
                href="https://github.com/nousantx"
                target="_blank"
                className="center box-32px td-none text-neutral-900 hover:text-neutral-800 tr-time-0.3s br-6px hover:bg-neutral-100"
                aria-label="GitHub Icon"
              >
                <span className="ri ri-github-fill fs-1.3rem lh-1"></span>
              </a>
              <a
                href="https://github.com/nousantx"
                target="_blank"
                className="center box-32px td-none text-neutral-900 hover:text-neutral-800 tr-time-0.3s br-6px hover:bg-neutral-100"
                aria-label="X/Twitter Icon"
              >
                <span className="ri ri-twitter-x-fill fs-1.3rem lh-1"></span>
              </a>
            </div>
          </div>
        </footer>
      </ThemeProvider>
    </>
  )
}

export default AppLayout
