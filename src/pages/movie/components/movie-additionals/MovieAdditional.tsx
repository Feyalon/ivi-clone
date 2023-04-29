import React from 'react'

import { CompilationHeader } from '../../../../components'
import MovieAdditionalItem from './MovieAdditionalItem'

const MovieAdditional: React.FC = () => {

    const additionals: { img: string, title: string, meta: string }[] = [
        { img: 'https://thumbs.dfs.ivi.ru/storage3/contents/c/a/f756880c8ad6839b18fd54131b6e1b.jpg/784x440/?q=85', title: 'Фрагмент (русский язык)', meta: '2 мин.' },
        { img: 'https://thumbs.dfs.ivi.ru/storage4/contents/8/a/e7f4b3e67fc9684b3f4b3dae9a8af2.jpg/784x440/?q=85', title: 'Трейлер (русский язык)', meta: '1 мин.' },
    ]

    return (
        <section className="pageSection contentCard__pageSection" id="additionalContentList">
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <div className="additionals contentCard__additionals">
                        <div className="gallery gallery_ivi-carousel additionals__gallery">
                            <CompilationHeader title={'Трейлеры и доп. материалы'} />
                            <div className="gallery__carousel">
                                <div className="gallery__viewport">
                                    <div className="gallery__viewport-inner">
                                        <div className="ivi-carousel">
                                            <div className="ivi-carousel-viewport">
                                                <div className="ivi-carousel-container">
                                                    {additionals && additionals.map(item =>
                                                        <MovieAdditionalItem key={item.img} item={item} /> )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MovieAdditional