import { Link } from 'react-router-dom'
import { styler } from '@styler'

const Home = () => {
  styler()

  return (
    <article className="p-2rem pt-4rem pn-relative">
      <div className="pn-absolute t-0 r-0 code px-18px pt-2rem text-neutral-500 fw-500 center gap-6px fs-12px">
        <span className="ri ri-reactjs-line fs-14px"></span>
        Intro.tsx
      </div>
      <header className="w-mx-600px mx-auto tw-balance max-lg:ta-left lg:ta-center">
        <h1 className="family-poppins fs-3rem fw-600 lh-1 ls--0.040em">
          Hi there. NOuSantx was here!
        </h1>

        <p className="mt-1.5rem text">
          I am <span className="light">Front End Developer</span>,{' '}
          <span className="light">Web Designer</span>, and{' '}
          <span className="light">Open Sourcer</span> from{' '}
          <span className="d-inline-block pn-relative cursor-pointer bw-0 bw-b-1px bs-dashed bdr-c-primary-600 hover hover:bc-transparent tr-time-300ms [--show]--7rem [--showo]-0 hover:[--show]--3.4rem hover:[--showo]-1 text-neutral-950">
            Indonesia
            <span className="rotate-10deg pn-absolute bg-red t-1.5rem l-$show [opacity]-$showo bg-neutral-100 bg-opacity-0.7 back-blur-1.5px fs-8px p-6px br-6px center flex-d-column w-max-content shadow-lg tr-time-300ms">
              <span className="pn-absolute ri ri-arrow-up-fill fs-12px r-2.8rem t--0.8rem rotate-22deg"></span>
              <span>Indonesia Mentioned 🇮🇩🇮🇩🦅🦅</span>
            </span>
          </span>
          . And proudly say{' '}
          <span className="code px-4px br-2px bg-primary-500 bg-opacity-0.2">I am 'Java'</span>.
        </p>

        <div className="mt-2rem center max-lg:jc-flex-start lg:jc-center gap-8px">
          <Link
            to="/project"
            className="h-35px px-12px br-6px tr-time-300ms center gap-6px td-none bg-neutral-950 hover:bg-neutral-800 text-neutral-100 hover:text-neutral-200 fw-500 family-code"
          >
            <span className="ri ri-collage-fill fs-1.2em"></span>
            My Projects
          </Link>
          <Link
            to="/project"
            className="h-35px px-12px br-6px tr-time-300ms center gap-6px text-neutral-950 hover:text-neutral-800 fw-500 family-code [text-decoration-color]-transparent hover:[text-decoration-color]-currentColor"
          >
            <span className="ri ri-layout-grid-fill fs-1.2em"></span>
            My Projects
          </Link>
        </div>
      </header>
    </article>
  )
}

export default Home
