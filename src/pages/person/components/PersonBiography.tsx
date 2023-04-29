import React from 'react'

type TProps = {
    biography: string
}

const PersonBiography: React.FC<TProps> = ({ biography }) => {
    return (
        <div id="biography" className="person__personBiography personBiography">
            <div className="personBiography__title">Биография</div>
            <div className="clause clause_is-native personBiography__clause">
                <div className="clause__text is-truncated">
                    <div className="clause__text-inner hidden-children">
                        {biography}
                    </div>
                    <span className="clause__toggle">Читать дальше</span>
                </div>
            </div>
        </div>
    )
}

export default PersonBiography