import AnimatedElement from "../hooks&HOCs/AnimatedElement";

const board = [
    {
        name: 'Maryanne Jemide',
        role: 'Юрист / Основатель',
        imageUrl: '/p1.jpeg',
    },
    {
        name: 'Ирина Иванова',
        role: 'Маркетинговый аналитик / Специалист по продвижению',
        imageUrl: '/p2.jpeg',
    },
    {
        name: 'Александр Петров',
        role: 'HR-специалист / Специалист по трудоустройству',
        imageUrl: '/p3.jpeg',
    },
    {
        name: 'Дмитрий Васильев',
        role: 'Консультант / Специалист по клиентскому обслуживанию',
        imageUrl: '/p4.jpeg',
    },
    // More people...
]

const managers = [
    {
        name: 'Николай Недельчук',
        role: 'Старший менеджер',
        imageUrl: '/m1.jpg'
    },
    {
        name: 'Евгений Зольников',
        role: 'Старший менеджер',
        imageUrl: '/m2.jpg'
    },
    {
        name: 'Виктор Марчук',
        role: 'менеджер по трудоустройству',
        imageUrl: '/m3.jpg'
    },
    {
        name: 'Андрей Бежанов',
        role: 'менеджер по трудоустройству',
        imageUrl: '/m4.jpg'
    },
    {
        name: 'Екатерина Агапова',
        role: 'кадровый менеджер',
        imageUrl: '/m5.jpg'
    },
    {
        name: 'Роман Чупахин',
        role: 'кадровый менеджер',
        imageUrl: '/m6.jpg'
    },
    {
        name: 'Александр Галкин',
        role: 'кадровый менеджер',
        imageUrl: '/m7.jpg'
    },
]

export default function Team() {
    return (
        <div className="bg-white py-24 sm:py-32 min-h-screen" id="team">
            <div className="mx-auto flex flex-col max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
                <div>
                    <AnimatedElement direction="bottom">
                        <h2 className="text-4xl text-center font-bold tracking-tight text-slate-700 sm:text-5xl">
                            Встречайте нашу команду руководителей!</h2>
                    </AnimatedElement>
                    <AnimatedElement direction="static">
                        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl text-center mx-auto">
                            Приветствуем! Мы - эксперты по иммиграции и трудоустройству в Великобритании. Наша команда помогает получить разрешение на работу и успешно трудоустроиться. Наша цель - сделать процесс простым и эффективным для вас. Давайте вместе осуществим вашу мечту о карьере в Великобритании!
                        </p>
                    </AnimatedElement>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 my-14">
                    {board.map((person, i) => (
                        <li key={i}>
                            <AnimatedElement direction={i % 2 ? 'right' : "left"}>
                                <div className="flex items-center gap-x-6">
                                    <img className="h-20 w-20 rounded-full object-cover" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-lg font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-md font-semibold leading-6 text-cyan-600">{person.role}</p>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </li>
                    ))}
                </ul>
                <h2 className='text-5xl font-bold tracking-tight transition-all bg-gradient-to-r text-transparent bg-clip-text from-cyan-600 to-teal-500 text-center mb-6'>
                    Наши менеджеры
                </h2>
                <ul role="list" className="flex flex-wrap justify-center">
                    {managers.map((person, i) => (
                        <li key={i} className="flex justify-center w-full md:w-1/2  p-6">
                            <AnimatedElement direction={i % 2 ? 'right' : 'left'}>
                                <div className=" w-full grid grid-cols-2 md:grid-cols-1 gap-4 justify-between">
                                    <img className="h-64 w-60 rounded-xl object-cover" src={person.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-cyan-600">{person.role}</p>
                                    </div>
                                </div>
                            </AnimatedElement>
                        </li>
                    ))}
                    {/* If there's an odd number of elements, add an empty li to center the last element */}
                    {managers.length % 2 === 1 && <li className="flex justify-center"></li>}
                </ul>
            </div>
        </div>
    )
}
