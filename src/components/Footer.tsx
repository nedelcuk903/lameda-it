import useSmoothScrollTo from "../hooks&HOCs/useSmoothScrollTo"
const navigation = {
    links: [
        { name: 'О нас', href: '#about' },
        { name: 'Схема работы', href: '#steps' },
        { name: 'Отзывы', href: '#rewievs' },
        { name: 'Лицензия', href: '#license' },
        { name: 'Команда', href: '#team' },
    ],

}

export default function Example() {
    const handleScrollClick = useSmoothScrollTo();
    return (
        <footer className="bg-gradient-to-b from-cyan-500 to-cyan-700" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
                <div className="space-y-8 xl:col-span-1">
                    <img
                        className="h-10 mx-auto"
                        src="/logo.png"
                        alt="Lamedait"
                    />
                    <p className="text-base text-center text-gray-200">
                        Все, что вам нужно для успешного получения разрешения на работу. Наши эксперты помогут вам каждый шаг пути.
                    </p>
                </div>
                <div className="mt-8 flex justify-center">
                    <ul role="list" className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                        {navigation.links.map((item) => (
                            <li key={item.name} className="text-center">
                                <span onClick={() => handleScrollClick(item.href)} className="text-base cursor-pointer text-gray-200 hover:text-gray-300">
                                    {item.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>

    )
}
