import React from 'react'

import DoubleColumn from './DoubleColumn'
import SingleColumn from './SingleColumn'
import SideContent from './SideContent'
import { IUIMenuData } from '../../../../../models/uiMenu'

type TProps = {
    id: string
    data: IUIMenuData
}

const HeaderDropDownMenu: React.FC<TProps> = ({ id, data }) => {
    return (
        <div className={`headerDropdown ${id.replace('headerTop_', '')}`}>
            <div className="headerDropdown__body">
                <div className="headerDropdown__grid">
                    <div className="dropdownContent">
                        <DoubleColumn data={data.doubleColumn} />
                        <SingleColumn data={data.singleColumn} />
                        <SideContent id={id} items={data.sideContent} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderDropDownMenu