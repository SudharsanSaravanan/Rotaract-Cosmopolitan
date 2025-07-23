import Header from './Header'
import Footer from './Footer'
import CustomCursor from './CustomCursor'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
      <Footer />
      <CustomCursor />
    </div>
  )
}