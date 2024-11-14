import { styler } from '@styler'
import {
  RiRobot2Line,
  RiLock2Line,
  RiBarChartBoxLine,
  RiArrowRightSLine,
  RiSettings3Line,
  RiLogoutBoxRLine,
  RiArrowLeftRightLine
} from '@remixicon/react'
import { buttonVariant } from './button'

const ShowCard = () => {
  styler()
  return (
    <article className="p-2rem pt-6rem">
      <header>
        <h1 className="heading2 text-h2">Cards</h1>
        <p className="mt-8px text text-sm text-neutral-700">
          The very common component should make
        </p>
      </header>
      <section
        child={`
          ${buttonVariant}
          (.avatar): bg-neutral-500 box-42px br-900rem bg-opacity-1;
          (.avatar.pro): bg-orange-400;
        
          (.card1): w-350px bg-neutral-100 bg-opacity-0.3 p-1.5rem br-1rem;
        
          (.badge): br-4px fs-12px lh-1 ls--0.015em fw-600 px-6px py-2px;
          (.badge.pro): bg-orange-300 bg-opacity-0.3 text-orange-600;
            
          (.setting-item): w-full mt-0.8rem d-flex ai-center jc-space-between px-12px;
          (.setting-item__title): fs-14px lh-1 fw-500 ls--0.015em text-neutral-700 d-flex ai-center gap-12px;
          (.setting-item__title svg): box-18px;
          
          (.radio-btn): w-[calc(14px_*_2_+_2px)] p-2px h-18px br-999rem bg-neutral-200 center jc-flex-start;
          (.radio-btn.active): bg-opacity-0.2 bg-orange-200 jc-flex-end;
          (.radio-btn > .bullet): box-14px bg-opacity-0.5 br-999rem bg-fc-neutral-400;
          (.radio-btn.active > .bullet): bg-orange-500 bg-opacity-1;
          
          (.divider-line): w-full h-1px br-5px bg-neutral-200;
        `}
        className="mt-2.5rem"
      >
        <h2 className="text text-normal">User & Sibebar</h2>

        <div className="mt-1rem flex flex-w-wrap gap-8px">
          <div className="card1 [--hovered-svg]-[rgb(var(--orange-500))]">
            <header className="flex ai-center jc-space-between">
              <div className="flex ai-center gap-1rem">
                <div className="avatar pro"></div>
                <div>
                  <span className="d-block heading2 fs-1rem">NOuSantx</span>
                  <span className="d-block text text-xs text-neutral-700">nousantx@gmail.com</span>
                </div>
              </div>

              <span className="badge pro">Pro</span>
            </header>

            <div className="setting-item mt-1.5rem">
              <div className="setting-item__title">
                <RiLock2Line />
                Private Mode
              </div>
              <div className="radio-btn">
                <div className="bullet"></div>
              </div>
            </div>
            <div className="setting-item">
              <div className="setting-item__title">
                <RiRobot2Line />
                AI Suggestions
              </div>
              <div className="radio-btn active">
                <div className="bullet"></div>
              </div>
            </div>

            <div className="mb-1rem mt-20px divider-line"></div>
            <div className="w-full flex flex-w-wrap gap-4px">
              <button className="btn btn-ghost jc-space-between w-full text-neutral-700">
                <div className="center gap-12px">
                  <RiBarChartBoxLine />
                  <span className="text text-sm text-neutral-700">Activity</span>
                </div>
                <RiArrowRightSLine />
              </button>
              <button className="btn btn-ghost jc-space-between w-full text-neutral-700">
                <div className="center gap-12px">
                  <RiBarChartBoxLine />
                  <span className="text text-sm text-neutral-700">Activity</span>
                </div>
                <RiArrowRightSLine />
              </button>
              <button className="btn btn-ghost jc-space-between w-full text-neutral-700">
                <div className="center gap-12px this-target">
                  <RiSettings3Line />
                  <span className="text text-sm text-neutral-700">Settings</span>
                </div>
                <RiArrowRightSLine />
              </button>
            </div>
            <div className="my-1rem divider-line"></div>
            <div className="w-full flex flex-w-wrap gap-4px">
              <button className="btn btn-ghost jc-space-between w-full text-neutral-700">
                <div className="center gap-12px">
                  <RiArrowLeftRightLine />
                  <span className="text text-sm text-neutral-700">Switch Account</span>
                </div>
              </button>
              <button className="btn btn-ghost jc-space-between w-full text-neutral-700">
                <div className="center gap-12px">
                  <RiLogoutBoxRLine />
                  <span className="text text-sm text-neutral-700">Log Out</span>
                </div>
              </button>
            </div>
            <div className="divider-line my-1rem"></div>
            <div
              child="(div): box-3px br-999rem bg-opacity-1 bg-neutral-500; (span): fs-12px lh-1 ls--0.015em;"
              className="px-12px center gap-6px text-neutral-600"
            >
              <span>What's New</span>
              <div></div>
              <span>Privacy</span>
              <div></div>
              <span>Terms of Services</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

export default ShowCard
