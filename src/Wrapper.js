import React from 'react'
import App from './App'
import AuthProvider from './Context/AuthProvider'

export default () => {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    )
}