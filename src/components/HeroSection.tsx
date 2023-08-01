import { useState } from 'react';
import { motion } from 'framer-motion';

import Header from './Header';


import useSmoothScrollTo from '../hooks&HOCs/useSmoothScrollTo';
import ScrollButton from './ScrollButton';

type MenuItem = {
    name: string;
    href: string;
};

const navigation: MenuItem[] = [
    { name: 'О нас', href: '#about' },
    { name: 'Схема работы', href: '#steps' },
    { name: 'Отзывы', href: '#rewievs' },
    { name: 'Лицензия', href: '#license' },
    { name: 'Команда', href: '#team' },
];



export default function HeroSection() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScrollClick = useSmoothScrollTo();


    return (
        <div className="bg-white">
            <Header setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} mobileMenuOpen={mobileMenuOpen} />

            <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('/hero.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-around">
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="glass relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Готовы помочь с подачей на визы!{' '}
                            <span className="font-semibold text-cyan-500 cursor-pointer" onClick={() => handleScrollClick('#form')}>
                                <span className="absolute inset-0" aria-hidden="true" />
                                Успей подать заявку <span aria-hidden="true">&rarr;</span>
                            </span>
                        </div>
                    </div>
                    <div className="text-center">
                        <motion.h1
                            transition={{
                                duration: 1,
                            }}

                            initial={{ opacity: 0, x: -30 }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}

                            className={`text-5xl sm:text-7xl font-bold tracking-tight transition-all bg-gradient-to-r text-transparent bg-clip-text from-cyan-500 to-teal-500 `}>
                            Начните свою успешную карьеру в Великобритании!
                        </motion.h1>
                        <p className="mt-6 mb-4 text-xl leading-8 text-white font-extralight">
                            Все, что вам нужно для успешного получения разрешения на работу. Наши эксперты помогут вам каждый шаг пути.
                        </p>
                        <div className="mt-
                        10 flex items-center justify-center gap-x-6">
                            <button
                                className="btn btn-accent w-42 ">
                                <span className='cursor-pointer' onClick={() => handleScrollClick('#form')}>Подать заявку</span>
                            </button>
                            <button
                                className="btn btn-ghost w-42 glass">
                                <span onClick={() => handleScrollClick('#steps')}>
                                    Узнать еще
                                </span>
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                <ScrollButton scrollToId='#about' />

            </div>
        </div>
    );
}
