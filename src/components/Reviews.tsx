/* This example requires Tailwind CSS v2.0+ */
import { StarIcon } from '@heroicons/react/20/solid'
import AnimatedElement from '../hooks&HOCs/AnimatedElement';

const reviews = [
    {
        id: 1,
        title: 'Эффективный и надежный сервис',
        rating: 5,
        content: `
      <p>Я очень доволен обслуживанием, предоставляемым этим веб-сайтом. Они сопровождали меня на протяжении всего процесса получения разрешения на работу в Великобритании. Их команда очень компетентна и оперативна. Я успешно получил разрешение на работу без проблем. Очень рекомендую!</p>
    `,
        author: 'Иван Смирнов',
        avatarSrc:
            '/ivan.jpeg',
    },
    {
        id: 2,
        title: 'Процесс без стресса',
        rating: 4,
        content: `
      <p>Подача заявления на разрешение на работу может быть сложной, но этот веб-сайт сделал ее без стресса для меня. Они предоставили всю необходимую информацию и поддержку, помогли мне собрать необходимые документы. Единственная причина, по которой я даю 4 звезды, заключается в том, что время ответа на мои вопросы могло бы быть чуть быстрее.</p>
    `,
        author: 'Екатерина Иванова',
        avatarSrc:
            '/ekaterina.jpeg',
    },
    {
        id: 3,
        title: 'Профессиональная и поддерживающая команда',
        rating: 5,
        content: `
      <p>Команда этого веб-сайта действительно профессиональна и поддерживает своих клиентов. Они помогли мне разобраться во всем процессе и предоставили персонализированную помощь в зависимости от моей ситуации. Я благодарен за их преданность и опыт, благодаря которым мое заявление на разрешение на работу прошло успешно. Я настоятельно рекомендую их услуги всем, кто ищет разрешение на работу в Великобритании.</p>
    `,
        author: 'Анна Ковалева',
        avatarSrc:
            '/ann.jpeg',
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <div className="bg-slate-200 min-h-screen flex flex-col justify-center p-6" id='rewievs'>
            <div className='max-w-4xl mx-auto'>
                <AnimatedElement direction='right'>
                    <h2 className='texttext-5xl sm:text-7xl font-bold tracking-tight transition-all bg-gradient-to-r text-transparent bg-clip-text from-cyan-600 to-teal-500 text-center mb-20'>
                        Отзывы
                    </h2>
                </AnimatedElement>

                <div className="space-y-10 flex flex-col justify-center">
                    {reviews.map((review) => (
                        <AnimatedElement direction='bottom' key={review.id}>
                            <div className="flex flex-col sm:flex-row sm:gap-4 gap-1">
                                <div className="order-2 mt-6 sm:mt-0 ">
                                    <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>
                                    <p className="sr-only">{review.rating} out of 5 stars</p>

                                    <div
                                        className="mt-3 space-y-6 text-sm text-gray-600"
                                        dangerouslySetInnerHTML={{ __html: review.content }}
                                    />
                                </div>

                                <div className="order-1 flex items-center sm:flex-col sm:items-start">
                                    <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full object-cover" />

                                    <div className="ml-4 sm:ml-0 sm:mt-4">
                                        <p className="text-sm font-medium text-gray-900">{review.author}</p>
                                        <div className="mt-2 flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={classNames(
                                                        review.rating > rating ? 'text-cyan-600' : 'text-slate-300',
                                                        'h-5 w-5 flex-shrink-0'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </div>
    )
}
