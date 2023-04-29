import React from 'react'

import { ButtonLink } from '../../../../components'
import FooterCopyright from './FooterCopyright'

const FooterStores: React.FC = () => {
    return (
        <div className="iviFooter__column iviFooter__column_wide">
            <div className="iviFooter__stores">
                <ButtonLink
                    title={'App Store'}
                    subTitle={'Загрузить в'}
                    icon={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/appleLogo.svg'}
                    link={'https://go.onelink.me/app/devicesiOS'}
                />
                <ButtonLink
                    title={'Google Play'}
                    subTitle={'Доступно в'}
                    icon={'https://solea-parent.dfs.ivi.ru/picture/ffffff,ffffff/googlePlayLogo.svg'}
                    link={'https://go.onelink.me/app/devicesAndroid'}
                />
                <ButtonLink
                    title={'Smart TV'}
                    subTitle={'Смотрите на'}
                    icon={'nbl-icon_smartTvPromo_20'}
                    link={'https://www.ivi.ru/pages/tvsmart'}
                />
                <ButtonLink
                    title={'Все устройства'}
                    addClass={'allDevices'}
                    link={'https://www.ivi.ru/devices'}
                    icon={'nbl-icon_anyDev_20'}
                />
            </div>
            <FooterCopyright />
        </div>
    )
}

export default FooterStores