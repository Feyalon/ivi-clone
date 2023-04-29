import React, {useState} from 'react'

import { IUIMenu } from '../../../../../models/uiMenu'
import NavigationListItem from './NavigationListItem'

type TProps = {
    data: { title: string, items: IUIMenu[] }
}

const NavigationItem: React.FC<TProps> = ({ data }) => {

    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    return (
        <div className={`mobileNavigation__item${isOpen ? ' mobileNavigation__item_expanded' : ''}`}>
            <div
                className={`nbl-arrowButton nbl-arrowButton_variation_zozon ${isOpen ? 'nbl-arrowButton_expanded' : 'nbl-arrowButton_collapsed'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="nbl-icon nbl-icon_about_20 nbl-icon_customExtraIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_customExtraIcon"></div>
                <div className="nbl-arrowButton__caption">{data.title}</div>
                <div className="nbl-icon nbl-icon_arrowIcon nbl-arrowButton__nbl-icon nbl-arrowButton__nbl-icon_arrowIcon"></div>
            </div>
            <div className="mobileNavigation__dropdown">
                <ul className="mobileNavigation__list">
                    {data.items.map(item => <NavigationListItem key={item.id} data={{ title: item.title, link: item.link }} />)}
                </ul>
            </div>
        </div>
    )
}

export default NavigationItem