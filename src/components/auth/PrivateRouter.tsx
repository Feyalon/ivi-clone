import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { TRole, UserResponse } from '../../models/AuthTypes'

type TProps = {
    allowedRoles: TRole[]
}

const PrivateRouter: React.FC<TProps> = ({ allowedRoles }) => {

    const user: UserResponse | null = { id: 1, role: 'ADMIN', login: 'admin', createdAt: new Date(), updateAt: new Date() }
    const location = useLocation()

    return user && allowedRoles.includes(user.role)
        ?
            <Outlet />
        :
           !user
               ?
                    <Navigate to='/auth' state={{ from: location }} replace />
               :
                    <Navigate to='/' state={{ from: location }} replace />
}

export default PrivateRouter