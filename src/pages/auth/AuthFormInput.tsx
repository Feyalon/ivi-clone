import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type IFormInputProps = {
    name: string
    label: string
    id: string
} & any

const AuthFormInput: React.FC<IFormInputProps> = ({ name, label, id, ...otherProps }) => {

    const { control, formState: { errors } } = useFormContext()

    return (
        <Controller
            control={control}
            defaultValue=''
            name={name}
            render={({ field }) => (
                <div className="auth-field">
                    <label
                        className="auth-label"
                        data-shrink="true"
                        htmlFor="outlined-controlled"
                        id={id}
                    >
                        {label}
                    </label>
                    <div className="auth-field">
                        <input
                            {...field}
                            {...otherProps}
                            //error={!!errors[name]}
                            aria-invalid="false"
                            id={id}
                            // type="text"
                            className="auth-input"
                            // value="Cat in the Hat"
                        />
                        {!!errors[name] &&
                            <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                                <legend className="css-14lo706">
                                    <>{errors[name] ? errors[name]?.message : ''}</>
                                </legend>
                            </fieldset>
                        }
                    </div>
                </div>
            )}
        />
    )
}

export default AuthFormInput