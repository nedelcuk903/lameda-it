/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/24/solid';

import AnimatedElement from '../hooks&HOCs/AnimatedElement';
import useSmoothScrollTo from '../hooks&HOCs/useSmoothScrollTo';


/* 

-Выбор вакансии
-Получение официального письма от работодателя 
-Заключение договора 
-Внесения пошлины 
-Получение приглашения 
-Внесения консульского сбора 
-Получения визы*/
const steps = [
    { id: '01', name: 'Выбор вакансии', href: '#', status: 'current' },
    { id: '02', name: 'Получение официального письма от работодателя', href: '#', status: 'upcoming' },
    { id: '03', name: 'Заключение договора', href: '#', status: 'upcoming' },
    { id: '04', name: 'Внесения пошлины', href: '#', status: 'upcoming' },
    { id: '05', name: 'Получение приглашения', href: '#', status: 'upcoming' },
    { id: '06', name: 'Внесения консульского сбора', href: '#', status: 'upcoming' },
    { id: '07', name: 'Получения визы', href: '#', status: 'upcoming' },
]

export default function Example() {
    const handleScrollClick = useSmoothScrollTo();

    return (

        <div className='min-h-96 bg-slate-200 flex flex-col justify-center pt-24' id='steps'>
            <AnimatedElement direction='right' once>
                <h2 className='text-5xl sm:text-7xl font-bold tracking-tight transition-all bg-gradient-to-r text-transparent bg-clip-text from-cyan-600 to-teal-500 text-center mb-20'>
                    Схема работы
                </h2>
            </AnimatedElement>
            <nav aria-label="Progress" className='max-w-5xl mx-auto mb-48'>
                <ol role="list" className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0">
                    {steps.map((step, stepIdx) => (
                        <li key={step.name} className="relative md:flex md:flex-1">
                            {step.status === 'complete' ? (
                                <span onClick={() => handleScrollClick(step.href)} className=" flex w-full items-center ">
                                    <span className="w-full h-full   flex flex-col items-center pr-6 pl-6 py-4 text-sm font-medium">
                                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan-600 group-hover:bg-cyan-800">
                                            <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </span>
                                        <span className="text-center text-sm font-medium text-gray-900">{step.name}</span>
                                    </span>
                                </span>
                            ) : step.status === 'current' ? (
                                <span onClick={() => handleScrollClick(step.href)} className=" flex w-full items-center ">
                                    <span className="w-full h-full   flex flex-col items-center pr-6 pl-4 py-4 text-sm font-medium">
                                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-cyan-600">
                                            <span className="text-cyan-600">{step.id}</span>
                                        </span>
                                        <span className="text-center text-sm font-medium text-cyan-600">{step.name}</span>
                                    </span>
                                </span>) : (
                                <span onClick={() => handleScrollClick(step.href)} className="flex w-full items-center ">
                                    <span className="w-full h-full   flex flex-col items-center  px-6 py-4 text-sm font-medium">
                                        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-300 group-hover:border-gray-400">
                                            <span className="text-gray-500 group-hover:text-gray-900">{step.id}</span>
                                        </span>
                                        <span className="text-center text-sm font-medium text-gray-500 group-hover:text-gray-900">{step.name}</span>
                                    </span>
                                </span>
                            )}

                            {stepIdx !== steps.length - 1 ? (
                                <>
                                    <div className="absolute top-0 right-0 hidden h-full w-5 md:block" aria-hidden="true">
                                        <svg
                                            className="h-full w-full text-gray-300"
                                            viewBox="0 0 22 80"
                                            fill="none"
                                            preserveAspectRatio="none"
                                        >
                                            <path
                                                d="M0 -2L20 40L0 82"
                                                vectorEffect="non-scaling-stroke"
                                                stroke="currentcolor"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </nav>
        </div >

    )
}
