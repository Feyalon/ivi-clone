import React, { useEffect } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLocation, useNavigate } from 'react-router-dom'

import { useLoginUserMutation } from '../../store/queries/auth.queri'
import AuthFormInput from './AuthFormInput'

const loginSchema = object({
    email: string()
        .min(1,'Email address is required')
        .email('Email Address is invalid'),
    password: string()
        .min(1,'Password is required')
        .min(8, 'Password must be more than 8 characters')
        .max(32, 'Password must be less than 32 characters'),
})

export type LoginInput = TypeOf<typeof loginSchema>

const AuthForm = () => {

    const methods = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    })

    const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation()

    const navigate = useNavigate()
    const location = useLocation()

    const { reset, handleSubmit, formState: { isSubmitSuccessful } } = methods

    const from = ((location.state as any)?.from.pathname as string) || '/'

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

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful])

    const onSubmitHandler: SubmitHandler<LoginInput> = (values) => loginUser(values)

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
                <AuthFormInput name='email' label='Email Address' id='auth-email' type='email' />
                <AuthFormInput name='password' label='Password' id='auth-pass' type='password' />
                <button
                    //disabled={isLoading}
                    type='submit'
                >
                    LogIn
                </button>
            </form>
        </FormProvider>
    )
}

export default AuthForm