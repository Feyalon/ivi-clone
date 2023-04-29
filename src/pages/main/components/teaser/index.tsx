import React from 'react'
import ButtonTeaser from "./ButtonTeaser";

const Teaser: React.FC = () => {

    const btnsTeaser: { addClass: string, title: string, img: string }[] = [
        { addClass: 'nbl-teaserTile_style_faisi', title: '30 дней подписки за 1 ₽', img: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/lightning.svg' },
        { addClass: 'nbl-teaserTile_style_haesh', title: 'Активировать сертификат', img: 'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/gift.svg' },
    ]

    return (
        <section
            className="pageSection pageSection_teaserSection home__pageSection home__pageSection_teaserSection"
            data-test="teaserBlock"
        >
            <div className="pageSection__container">
                <div className="pageSection__container-inner">
                    <ul className="home__teaserList">
                        {btnsTeaser.map(btn => <ButtonTeaser key={btn.title} data={btn} />)}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Teaser