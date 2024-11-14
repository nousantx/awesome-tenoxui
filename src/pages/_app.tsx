import { Outlet, Link } from 'react-router-dom'
import { styler } from '@styler'
import { RiMoonLine, RiSunLine } from '@remixicon/react'
import { useTheme } from '../contexts/ThemeProvider'

const AppLayout = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  styler()

  const ThemeButton = () => {
    return (
      <button
        onClick={toggleTheme}
        className="box-35px center bg-transparent hover:bg-primary-200 [--bg-opacity]-0.3 text-neutral-900 br-6px bw-0 tr-time-300ms"
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <RiSunLine size="18" /> : <RiMoonLine size="18" />}
      </button>
    )
  }

  return (
    <>
      <header className="flex jc-space-between ai-center px-2rem py-1rem mx-auto w-mx-1280px w-full pn-fixed t-0 l-0 r-0 bg-neutral-50 bg-opacity-0.9">
        <Link to="/" className="text-neutral-900 center fs-1rem code td-none">
          tenoxui.style
        </Link>
        <ThemeButton />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
