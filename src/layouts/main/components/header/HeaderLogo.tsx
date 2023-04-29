import React from 'react'

const HeaderLogo: React.FC = () => {
    return (
        <div
            data-test="header_logo"
            className="headerTop__headerLogo headerLogo"
            itemScope={false}
            itemType="http://schema.org/Organization"
        >
            <div className="headerLogo__body">
                <a
                    className="headerLogo__link"
                    href="https://www.ivi.ru/"
                    itemProp="url"
                    title="Онлайн-кинотеатр Иви"
                >
                    <span className="headerLogo__text" itemProp="name">ivi</span>
                    <img
                        className="nbl-picture"
                        src="../../../../assets/img/icons/reposition_iviLogoPlateRounded.svg"
                        itemProp="logo"
                        alt="ivi"
                    />
                </a>
            </div>
        </div>
    )
}

export default HeaderLogo