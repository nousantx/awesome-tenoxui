import { styler } from '@styler'
import { RiHomeLine } from '@remixicon/react'

export const buttonVariant = `
   (.btn): [all]-unset bg-opacity-1 h-35px px-12px br-8px d-flex flex-parent-center gap-6px tr-time-300ms fs-0.875rem lh-1 ls--0.015em fw-500 tw-nowrap bg-neutral-900 hover:bg-neutral-800 text-neutral-100 [--svg-color]-currentColor hover:[--svg-color]-$hovered-svg;
   
   (.btn svg): box-18px [fill]-[var(--svg-color)] tr-time-300ms;
   
   (.btn.btn-sm): h-30px br-6px;
   (.btn.btn-lg): h-40px px-16px;
   (.btn.btn-icon): h-35px w-35px px-0;
   
   (.btn.btn-outline): bgc-transparent hover:bg-neutral-200 bdr-c-neutral-100 bw-1px bs-solid text-neutral-950;
   (.btn.btn-ghost): bgc-transparent hover:bg-neutral-100 text-neutral-950;
   (.btn.btn-line): bg-opacity-0 hover:[text-decoration-line]-underline [text-underline-offset]-4px text-neutral-950;
   
   (.btn.btn-primary): bg-primary-500 hover:bg-primary-300 text-fc-neutral-950;
   (.btn.btn-danger): bg-red-500 hover:bg-red-300 text-fc-neutral-50;
   (.btn.btn-neutral): bg-blue-500 hover:bg-blue-300 text-fc-neutral-50;
   (.btn.btn-approve): bg-green-600 hover:bg-green-300 text-fc-neutral-950;
   (.btn.btn-warning): bg-yellow-600 hover:bg-yellow-300 text-fc-neutral-950;
`

const ShowButton = () => {
  styler()
  return (
    <article className="p-2rem pt-6rem">
      <header>
        <h1 className="heading2 text-h2">Button</h1>
        <p className="mt-8px text text-sm text-neutral-700">
          The very common component should make
        </p>
      </header>
      <section child={buttonVariant} className="mt-2.5rem">
        <h2 className="text text-normal">Size</h2>

        <div className="mt-1rem flex flex-w-wrap gap-8px">
          <button className="btn btn-sm">Small</button>
          <button className="btn">Default</button>
          <button className="btn btn-lg">Large</button>
          <button className="btn btn-icon">
            <RiHomeLine size="16" />
          </button>
          <button className="btn btn-sm">
            <RiHomeLine size="15" /> Home
          </button>
        </div>
        <h2 className="mt-2rem text text-normal">Vatiants</h2>

        <div className="mt-1rem flex flex-w-wrap gap-8px">
          <button className="btn">Default</button>
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-line">Line</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-neutral">Neutral</button>
          <button className="btn btn-approve">Approve</button>
          <button className="btn btn-warning">Warning</button>
        </div>
      </section>
    </article>
  )
}

export default ShowButton
