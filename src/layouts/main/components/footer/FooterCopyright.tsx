import React from 'react'

const FooterCopyright: React.FC = () => {
    return (
        <div className="iviFooter__copyrights">
            <div className="iviFooter__copyrightsSite">
                <span>©&nbsp;</span><span>2023</span><span>&nbsp;ООО «Иви.ру»</span>
            </div>
            <div className="iviFooter__copyrightsContent">
                HBO ® and related service marks are the
                property of
                Home Box Office, Inc
            </div>
        </div>
    )
}

export default FooterCopyright