import React from 'react'

import { addClass } from '../../utils/bodyClass'
import { MainCompilation, MainSeo, MainSlider, Teaser, TopMain } from './components'

const MainPage: React.FC = () => {

    addClass('body', 'home')
    addClass('root', 'basePage__inner')

    return (
        <>
            <MainSlider />
            <Teaser />
            <TopMain />
            <MainSeo />
            <MainCompilation title={'Добрые мультсериалы'} />
            <MainCompilation title={'Зарубежные мелодраматические сериалы'} />
        </>
    )
}

export default MainPage