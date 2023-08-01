import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import useSmoothScrollTo from '../hooks&HOCs/useSmoothScrollTo';

export default function ScrollButton({ scrollToId }: { scrollToId: string }) {

    const [isBouncing, setIsBouncing] = useState(true);

    const handleScrollClick = useSmoothScrollTo();


    return <button
        className={`self-center relative bottom-10 rounded-full p-3 text-slate-300 font-bold ${isBouncing ? 'animate-bounce' : ''}`}
        onClick={() => {
            handleScrollClick(scrollToId)
            setIsBouncing;
        }}
    >
        <ArrowDownCircleIcon className='w-14 h-14' />
    </button>
}
