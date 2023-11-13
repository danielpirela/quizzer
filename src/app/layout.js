import './globals.css'
import { Inter } from 'next/font/google'
import { ProviderGate, Providers } from './redux/provider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Trivium',
    description: 'APP of quiz for university project'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <ProviderGate>
                        {children}
                    </ProviderGate>
                </Providers>
            </body>
        </html>
    )
}
