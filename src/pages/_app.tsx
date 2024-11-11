import { Outlet } from 'react-router-dom'
import { styler } from '@styler'
import { useTheme } from '../contexts/ThemeProvider'

const AppLayout = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  styler()

  const ThemeButton = () => {
    return (
      <button
        onClick={toggleTheme}
        className="box-35px center bg-transparent hover:bg-primary-200 bg-opacity-0.3 text-neutral-900 br-6px bw-0"
        aria-label="Toggle Theme"
      >
        <span className={`ri ${isDarkMode ? 'ri-sun-line' : 'ri-moon-line'} fs-1.3rem lh-1`}></span>
      </button>
    )
  }

  return (
    <>
      <div className="flex jc-space-between ai-center">
        <div className="bg-neutral-200 box-50px">hello</div>

        <ThemeButton />
      </div>

      <Outlet />
    </>
  )
}

export default AppLayout
