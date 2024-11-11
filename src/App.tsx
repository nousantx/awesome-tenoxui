// App.jsx
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  useParams,
  Outlet
} from 'react-router-dom'
import { styler } from '@styler'
import { useTheme } from '@/contexts/ThemeProvider'
import FileNotice from '@/components/FileNotice'
import {
  RiSunLine,
  RiMoonLine,
  RiSvelteFill,
  RiArrowRightLine,
  RiTwitterXFill,
  RiGithubFill
} from '@remixicon/react'
// import { styler } from '@styler'
// import FileNotice from '@/components/FileNotice'
import { Projects } from '@/components/Projects'
import HomeAbout from './pages/_components/HomeAbout'
import { RiCollageFill, RiAccountBoxLine, RiReactjsLine, RiBracesLine } from '@remixicon/react'

import About from './pages/about'
import Home from './pages'

const AppLayout = () => {
  styler()
  const { isDarkMode, toggleTheme } = useTheme()

  const navLinkClass = 'text text-neutral-800 hover:text-neutral-700 tr-prop-300ms td-none'

  return (
    <>
      <header className="d-flex ai-center jc-space-between px-2rem py-1rem bg-neutral-50 bg-opacity-0.6 back-blur-6.7px pn-sticky t-0 w-mx-1440px w-full mx-auto z-999 flex-w-wrap gap-2rem">
        {/*<WelcomeOverlay />*/}
        <Link
          to="/"
          className="td-none lh-1 fs-14px fw-500 center gap-8px family-code px-12px py-6px br-404px bg-neutral-100 text-neutral-950"
        >
          <span className="box-10px bg-primary-600 fw-600 br-999px bg-opacity-1"></span>
          nsx.build
        </Link>
        <nav className="w-max-content center gap-1rem jc-space-between">
          <Link to="/about" className={`${navLinkClass}`}>
            About
          </Link>
          <Link to="/projects" className={`${navLinkClass}`}>
            Projects
          </Link>

          <button
            onClick={toggleTheme}
            className="box-35px center bg-transparent hover:bg-primary-200 bg-opacity-0.3 text-neutral-900 br-6px bw-0"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <RiSunLine size="18" /> : <RiMoonLine size="18" />}
          </button>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mx-auto w-mx-1440px w-full pn-relative p-2rem pt-4rem">
        <FileNotice direction="right" icon={RiSvelteFill} file="Contact.svelte" />

        <div className="py-3rem">
          <header className="tw-balance max-lg:ta-left lg:ta-center">
            <span className="d-inline-block text mb-4px fs-12px">Ready to build together?</span>
            <h2 className="fs-2rem family-poppins fw-500 ls--0.020em lh-1">
              Catch me if you can!{' '}
              <a
                href="https://linkedin.com/in/nousantx"
                target="_blank"
                className="center d-inline-flex lh-inherit fs-inherit hover:[--rotate]--45deg td-none text-neutral-900 hover:text-primary-600 gap-4px"
              >
                <span className="td-underline tr-time-300ms">Now</span>
                <div className="d-inline-block rotate-$rotate tr-time-300ms  center">
                  <RiArrowRightLine size="2rem" />
                </div>
              </a>
            </h2>
          </header>
        </div>
        <div className="mt-2rem center jc-space-between">
          <p className="center text fs-12px">&copy; 2024 NOuSantx. All Rights Reserved.</p>
          <div className="center gap-8px">
            <a
              href="https://github.com/nousantx"
              target="_blank"
              className="center box-32px td-none text-neutral-900 hover:text-neutral-800 tr-time-0.3s br-6px hover:bg-neutral-100"
              aria-label="GitHub Icon"
            >
              <RiGithubFill size="1.3rem" />
            </a>
            <a
              href="https://x.com/nousantx"
              target="_blank"
              className="center box-32px td-none text-neutral-900 hover:text-neutral-800 tr-time-0.3s br-6px hover:bg-neutral-100"
              aria-label="X/Twitter Icon"
            >
              <RiTwitterXFill size="1.3rem" />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

const MainPage = () => {
  styler()
  return (
    <>
      <article className="p-2rem pt-4rem pn-relative w-mx-768px mx-auto">
        <FileNotice direction="right" icon={RiReactjsLine} file="Intro.tsx" />
        <header className="w-mx-600px mx-auto tw-balance max-lg:ta-left lg:ta-center">
          <h1 className="family-poppins max-md:fs-2.5rem md:fs-3rem fw-600 lh-1 ls--0.040em">
            Hi there. NOuSantx was here!
          </h1>

          <p className="mt-1.5rem text text-neutral-700">
            Driven by curiosity, built with precision, tailored for impact
          </p>

          <div className="mt-2rem center max-lg:jc-flex-start lg:jc-center gap-8px">
            <Link
              to="/projects"
              className="h-35px px-12px br-6px tr-time-300ms center gap-6px td-none bg-neutral-950 hover:bg-neutral-800 text-neutral-100 hover:text-neutral-200 fw-500 family-code"
            >
              <RiCollageFill size="18" />
              See Projects
            </Link>
            <Link
              to="/about"
              className="h-35px px-12px br-6px tr-time-300ms center gap-6px text-neutral-950 hover:text-neutral-800 hover:bg-neutral-100 [--bg-opa]-0.1 fw-500 td-none family-code [text-decoration-color]-transparent hover:[text-decoration-color]-currentColor"
            >
              <RiAccountBoxLine size="18" />
              About Me
            </Link>
          </div>
        </header>
      </article>
      <HomeAbout />
      <article className="mt-4rem p-2rem pt-3rem pn-relative w-mx-768px mx-auto">
        <header className="tw-balance">
          <FileNotice direction="left" icon={RiBracesLine} file="projects.json" />
        </header>
        <Projects />
      </article>
    </>
  )
}

import ProjectsLayout from './pages/projects'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<MainPage />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectsLayout />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
