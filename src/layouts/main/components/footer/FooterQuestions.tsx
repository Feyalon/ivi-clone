import React from 'react'

const FooterQuestions: React.FC = () => {
    return (
        <ul className="iviFooter__questions">
            <li>
                <a
                    className="nbl-link nbl-link_style_baf" href="https://ask.ivi.ru/"
                    id="bottom_support_link"
                    target="_blank"
                >
                    ask.ivi.ru
                </a>
                <div className="iviFooter__description">Ответы на вопросы</div>
            </li>
        </ul>
    )
}

export default FooterQuestions