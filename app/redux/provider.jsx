'use client'
import { Provider } from 'react-redux'
import { store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import persistStore from 'redux-persist/es/persistStore'

export const Providers = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export const ProviderGate = ({children}) => {
    const persistor = persistStore(store)

    return (
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    )
}


