import React from 'react'

import '../../assets/css/page-person.css'
import { addClass } from '../../utils/bodyClass'
import { PersonMainSection, PersonFilmography } from './components'
import {dataCreators, dataMovies} from '../../data/dataMovie'

const PersonPage: React.FC = () => {

    addClass('body', 'person')
    addClass('root', 'basePage__inner')

    const persona = dataCreators[0]

    return (
        <>
            <PersonMainSection persona={persona} />
            <PersonFilmography persona={persona} movies={dataMovies} />
        </>
    )
}

export default PersonPage