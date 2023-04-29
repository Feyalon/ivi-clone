import React from 'react'

import { ButtonCommunityLink } from '../../../../components'
import { btnsCommunity } from '../../../../data/dataMenus'

const FooterCommunity: React.FC = () => {

    return (
        <div className="iviFooter__column iviFooter__column_wide">
            <div className="iviFooter__community">
                {btnsCommunity.map(btn =>
                    <ButtonCommunityLink
                        key={btn.link}
                        link={btn.link}
                        icon={btn.icon}
                    />
                )}
            </div>
        </div>
    )
}

export default FooterCommunity