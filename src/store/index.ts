import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slice'
import { authApi } from './queries/auth.queri'
import { rtkQueryErrorLogger } from './middleware/errorLogger'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(rtkQueryErrorLogger)
        .concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch