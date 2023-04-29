import React from 'react'

import { footerMenuAbout, footerMenuSections } from '../../../../data/dataMenus'

import FooterSupport from './FooterSupport'
import FooterWidget from './FooterWidget'
import FooterMenu from './FooterMenu'
import FooterContent from './FooterContent'

const Footer = () => {

    const sections  = {...footerMenuSections, cert: { title: 'Активация сертификата', link: 'https://www.ivi.ru/cert' }}

    return (
        <footer className="iviFooter">
            <div className="iviFooter__container">
                <div className="iviFooter__container-inner">
                    <div className="iviFooter__content">
                        <FooterMenu data={footerMenuAbout} />
                        <FooterMenu data={sections} />
                        <FooterSupport />
                        <FooterWidget />
                    </div>
                    <FooterContent />
                </div>
            </div>
        </footer>
    )
}

export default Footer