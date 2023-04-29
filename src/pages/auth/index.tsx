import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'

import '../../assets/css/page-auth.css'
import { addClass } from '../../utils/bodyClass'
import AuthForm from './AuthForm'
import { getGoogleUrl, getVKUrl } from './utils'
import { useLoginSocialMutation } from '../../store/queries/auth.queri'

const AuthPage = () => {

    addClass('body', 'auth')

    const [ user, setUser ] = useState<string | null>(null)

    const host = process.env.REACT_APP_HOST_LOCAL
    const redirectUri = `${host}/auth`

    const navigate = useNavigate()
    const location = useLocation()

    const from = ((location.state as any)?.from.pathname as string) || '/'

    const [searchParams] = useSearchParams()
    const code = searchParams.get('code')

    const [loginSocial, { isLoading, isError, error, isSuccess }] = useLoginSocialMutation()

    useEffect(() => {
        if (code) loginSocial({ code: code })
    }, [code])

    useEffect(() => {
        if (isSuccess) {
            console.log('Success login')
            navigate(from)
        }
        if (isError) {
            if (Array.isArray((error as any).data.error)) {
                (error as any).data.error.forEach((el: any) => console.log(el.message))
            } else {
                console.log((error as any).data.message)
            }
        }
    }, [isLoading])

    return (
        <section className="pageSection">
            <div className="auth pageSection__container">
                <div className="authHeader">
                    <p>Страница входа</p>
                </div>
                <AuthForm />
                <div className="novelty__noveltyGallery novelty__noveltyGallery_whatsnew">
                    <article data-contentid="16788"
                             className="noveltyPromo noveltyPromo_type_full noveltyPromo_statusType_free">
                        <div className="noveltyPromo__container">
                            <div className="noveltyPromo__body">
                                <div className="noveltyPromo__bodyInner">
                                    <div>
                                        {user
                                            ?
                                                <button
                                                    className="nbl-button nbl-button_style_makoto nbl-button_hasBadge_0 nbl-button_textAlign_center nbl-button_size_shinnok chatButton"
                                                    onClick={() => {}}
                                                >
                                                    <div className="nbl-button__primaryText">Выход</div>
                                                </button>
                                            :
                                                <>
                                                    <Link to={getGoogleUrl(from)}>Google</Link>
                                                    <Link to={getVKUrl(from)}>VK</Link>
                                                </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default AuthPage