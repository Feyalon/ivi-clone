import React from 'react'

import FooterStores from './FooterStores'
import FooterCommunity from './FooterCommunity'

const FooterContent: React.FC = () => {
    return (
        <div className="iviFooter__content">
            <FooterStores />
            <FooterCommunity />
        </div>
    )
}

export default FooterContent