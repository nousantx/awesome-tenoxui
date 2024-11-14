export const resetter = `
(*[class*='bg-'],*[bg]): [--bg-opacity]-1;
(*[class*='text-'],*[text]): [--text-opacity]-1;
(*[class*='shadow-c-'],*[shadow-c]): [--shadow-c-opacity]-1;
(*[class*='bdr-c-'],*[bdr-c]): [--bdr-c-opacity]-1;
`

export const globalStyles = `
(body):
  [--orange-500]-orange-500

  bg-neutral-50 text-neutral-950 family-sans;
(main): w-full w-mx-1280px mx-auto h-mn-100vh;
(p,a,.text): family-sans fw-500 lh-1.35 ls--0.015em;
(.light): text-neutral-950 fw-600;
(.text-xs): fs-0.75rem;
(.text-sm): fs-0.875rem;
(.text-normal): fs-1rem;
(.text-h1): fs-3rem;
(.text-h2): fs-1.75rem;
(.heading1): family-poppins fw-500 lh-1 ls--0.035em;
(.heading2): family-poppins fw-500 lh-1 ls--0.028em;
(code, .code): family-code ls-1 lh-1 text-neutral-950 fs-80% fw-500;

`
