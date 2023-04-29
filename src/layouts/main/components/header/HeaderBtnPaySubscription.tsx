import React from 'react'

const HeaderBtnPaySubscription: React.FC = () => {
    return (
        <div
            className="headerTop__additionalButton headerTop__additionalButton_isAbTest headerTop__additionalButton_hasGradient"
            data-test="header_subscription_button"
        >
            <div
                className="nbl-button nbl-button_textAlign_center nbl-button_style_kioshi nbl-button_hasBadge_0">
                <div className="nbl-button__primaryText">Оплатить подписку</div>
            </div>
        </div>
    )
}

export default HeaderBtnPaySubscription