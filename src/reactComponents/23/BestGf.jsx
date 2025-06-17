import reasons from "~/data/reasons";

const BestGf = () => {

  return (
    <div>
        <h2 className="text-3xl font-bold mb-3">23 reasons why you're the best gf</h2>
        <p className="">these aren't the only reasons why i think you're the best gf, i could go on😀 i just wanted to use the #23 as a theme kinda</p>

        <div id="accordion-flush" data-accordion="collapse" data-active-classes="text-emerald-400" data-inactive-classes="text-gray-500 dark:text-gray-400">
            {reasons.map((r, index) => (
                <div key={index}>
                    <h2 id={`accordion-flush-heading-${index}`}>
                        <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target={`#accordion-flush-body-${index}`} aria-expanded="true" aria-controls={`accordion-flush-body-${index}`}>
                        <span>{r.number}</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                        </svg>
                        </button>
                    </h2>
                    <div id={`accordion-flush-body-${index}`} className="hidden" aria-labelledby={`accordion-flush-heading-${index}`}>
                        <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <p className="mb-2">{r.reason}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BestGf;