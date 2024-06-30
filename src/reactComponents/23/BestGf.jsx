import reasons from "~/data/reasons";

const BestGf = () => {

  return (
    <div>
        <h2 class="text-3xl font-bold mb-3">23 reasons why you're the best gf</h2>
        <p class="mb-10">I like to think of where we were in our relationship whenever we’d watch movies together. Spending time with you every night is special / memorable, why we got close agad</p>

        <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-emerald-400" data-inactive-classes="text-gray-500 dark:text-gray-400">
            {reasons.map((r, index) => (
                <>
                    <h2 id={`accordion-flush-heading-${index}`}>
                        <button type="button" class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target={`#accordion-flush-body-${index}`} aria-expanded="true" aria-controls={`accordion-flush-body-${index}`}>
                        <span>{r.number}</span>
                        <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    <div id={`accordion-flush-body-${index}`} class="hidden" aria-labelledby={`accordion-flush-heading-${index}`}>
                        <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p class="mb-2">{r.reason}</p>
                        </div>
                    </div>
                </>
            ))}
        </div>
    </div>
  )
}

export default BestGf;