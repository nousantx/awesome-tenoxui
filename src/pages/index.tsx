import { Link } from 'react-router-dom'
import { styler } from '@styler'

const Home = () => {
  styler()

  return (
    <article className="p-2rem h-mn-100vh center">
      <header className="tw-balance ta-center w-mx-600px">
        <h1 className="heading1">Built with TenoxUI.</h1>
        <p className="mt-1rem text text-sm text-neutral-700">
          Explore components built with TenoxUI CSS framework. Less configuration, fast, no single
          CSS!
        </p>

        <div className="mt-1rem center gap-8px">
          <Link to="/showcase/button" className="text">Explore Components</Link>
          <Link className="text">GitHub</Link>
        </div>
      </header>
    </article>
  )
}

export default Home
