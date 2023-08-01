/* This example requires Tailwind CSS v2.0+ */
import AnimatedElement from '../hooks&HOCs/AnimatedElement';

export default function Example() {

    return (
        <div className="bg-cyan-600  min-h-screen" id='about'>
            {/* Overlapping background */}

            <div className="mx-auto max-w-3xl px-4 pt-16 text-justify sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8">
                <AnimatedElement direction='right' once>
                    <div className='my-16'>
                        <h1 className="text-4xl text-center font-bold tracking-tight text-white sm:text-6xl">
                            Подробнее о нас
                        </h1>
                        <p className="mt-8 text-xl text-center text-cyan-100">
                            Компания Lamedait занимается трудоустройством в Великобританию не первый год
                        </p>
                    </div>
                </AnimatedElement>
                <AnimatedElement direction='bottom' once>
                    <p className="my-8 text-2xl text-neutral-200">Основная наша задача – помощь в подборе вакансий и оформлении документов для работы без рисков.</p>
                </AnimatedElement>
                <AnimatedElement direction='bottom' once>
                    <p className="my-8 text-2xl text-neutral-200">За это время мы помогли получить работу сотням клиентам из разных стран, которые уже улучшили своё качество жизни: заработали себе на покупку жилья, машины и даже нашли свое призвание.</p>

                </AnimatedElement>
                <AnimatedElement direction='bottom' once>
                    <p className="my-8 text-2xl text-neutral-200">Мы гарантируем абсолютно легальное трудоустройство в Великобританию. Наши партнеры – это проверенные временем стабильные и надежные компании. Мы поможем подобрать работу в соответствии с Вашими пожеланиями, навыками и жизненными ситуациями.</p>
                </AnimatedElement>
            </div>
        </div >
    )
}
