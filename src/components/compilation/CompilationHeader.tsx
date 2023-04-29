import React from 'react'

type TProps = {
    title: string
}

const CompilationHeader: React.FC<TProps> = ({ title }) => {
    return (
        <div className="gallery__blockHeader">
            <a
                className="nbl-blockHeader nbl-blockHeader_composition_tebhat nbl-blockHeader_arrowMode_insideTitle nbl-blockHeader_size_zylros nbl-blockHeader_fullWidth_false"
                data-test="collection_header"
                href="/collections/dobryie-multserialyi"
            >
                <div className="nbl-blockHeader__textBlock">
                    <div className="nbl-blockHeader__textBlockContent">
                        <div className="nbl-blockHeader__title" title={title}>
                            <div className="nbl-blockHeader__titleText">
                                {title}
                                <div className="nbl-blockHeader__titleArrow">
                                    <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nbl-blockHeader__arrow">
                    <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
                </div>
            </a>
        </div>
    )
}

export default CompilationHeader