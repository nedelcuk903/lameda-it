import AnimatedElement from "../hooks&HOCs/AnimatedElement";

export default function License() {
    return (
        <div className="bg-cyan-600 p-10 flex flex-col gap-10 py-24" id="license">
            <AnimatedElement direction="static">
                <h1 className="text-center text-6xl font-bold text-slate-50">Лицензия</h1>
            </AnimatedElement>


            <div className="grid gap-2 grid-cols-1 mx-auto max-w-xl">

                <a href="/file1.pdf" download className="w-full flex flex-col align-middle justify-center gap-3">
                    <AnimatedElement direction="bottom">
                        <img src="/license.png" alt="license" className="cursor-pointer w-full" />
                    </AnimatedElement>
                    <span className="text-slate-200 text-center w-full">License</span>
                </a>

                <a href="https://find-and-update.company-information.service.gov.uk/company/12038800" className="w-full flex flex-col align-middle justify-center gap-3">
                    <AnimatedElement direction="bottom">
                        <img src="/verification.jpg" alt="license" className="cursor-pointer w-full" />
                    </AnimatedElement>
                    <span className="text-slate-200 text-center w-full">Verification</span>
                </a>

            </div>
        </div >
    )
}