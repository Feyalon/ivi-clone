import React from 'react'

const MobileHeaderItems = () => {

    const items = [
        { id: 1, name: 'Мой Иви', link: 'https://www.ivi.ru/' },
        { id: 2, name: 'Что нового', link: 'https://www.ivi.ru/new' },
    ]

    return (
        <>
            {items.map(item => (
            <div key={item.id} className="mobileNavigation__item">
                <a
                    className="nbl-arrowButton nbl-arrowButton_variation_zozon nbl-arrowButton_expanded"
                    href={item.link}
                >
                    <div className="nbl-arrowButton__caption">{item.name}</div>
                </a>
            </div>
            ))}
        </>
    )
}

export default MobileHeaderItems