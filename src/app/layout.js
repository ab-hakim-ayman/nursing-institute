import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer/Footer'
import "react-big-calendar/lib/css/react-big-calendar.css";
import NavigationMenu from '@/components/Header/NavigationMenu'
import ResponsiveHeader from '@/components/Header/ResponsiveHeader'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'South Asian Applied Nursing College Chittagong',
  description: 'Welcome To South Asian Applied Nursing College Chittagong',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <NavigationMenu />
        <ResponsiveHeader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
