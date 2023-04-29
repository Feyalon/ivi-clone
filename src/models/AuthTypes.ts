export type TRole = 'ADMIN' | 'USER' | ''

export type TAuthResponse = {
    role: TRole
    token: string
}

export type UserResponse = {
    id: number
    login: string
    role: TRole
    createdAt: Date
    updateAt: Date
}

export type TAuthLocalstorage = {
    token: string
}