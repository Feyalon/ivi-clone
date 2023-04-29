import React from 'react'

const MobileSubscription: React.FC = () => {
    return (
        <div className="mobileNavigation-group subscription">
            <div className="mobileNavigation__item subscription">
                <div className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank">
                    <div className="nbl-icon nbl-icon_quality_20 nbl-plank__nbl-icon"></div>
                    <div className="nbl-plank__textWrapper">
                        <div className="nbl-plank__title">Подключить подписку</div>
                    </div>
                </div>
                <div className="nbl-bulb nbl-bulb_style_dwafa nbl-bulb_size_mukos nbl-bulb_isShadowEnabled_1 mobileNavigation__nbl-bulb"></div>
            </div>
            <div className="mobileNavigation__item subscription">
                <a
                    className="nbl-plank nbl-plank nbl-plank_textVariation_titleOnTop nbl-plank_asideWidthCanShrink_0 nbl-plank_style_sultan nbl-plank_size_frank"
                    href="https://www.ivi.ru/cert"
                >
                    <div className="nbl-icon nbl-icon_certificate_16 nbl-plank__nbl-icon"></div>
                    <div className="nbl-plank__textWrapper">
                        <div className="nbl-plank__title">Активация сертификата</div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default MobileSubscription