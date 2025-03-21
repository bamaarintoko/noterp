interface PricingTab_ {
    title: string
    price: number
    description: string
    features: string[]
}
export default function PricingTab({ title, price, description, features }: PricingTab_) {
    return (
        <div className="h-full">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white  border border-slate-200  shadow shadow-slate-950/5">
                <div className="mb-5">
                    <div className="text-slate-900  font-semibold mb-1">{title}</div>
                    <div className="inline-flex items-baseline mb-2">
                        <span className="text-slate-900  font-bold text-3xl">$</span>
                        <span className="text-slate-900  font-bold text-4xl" x-text="isAnnual ? '29' : '35'">{price}</span>
                        <span className="text-slate-500 font-medium">/mo</span>
                    </div>
                    <div className="text-sm text-slate-500 mb-5">{description}</div>
                    <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                        Purchase Plan
                    </a>
                </div>
                <div className="text-slate-900  font-medium mb-3">Includes:</div>
                <ul className="text-slate-600  text-sm space-y-3 grow">
                    {
                        features.map((x, y) => (
                            <li key={y} className="flex items-center">
                                <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>{x}</span>
                            </li>

                        ))
                    }
                </ul>
            </div>
        </div>
    )
}