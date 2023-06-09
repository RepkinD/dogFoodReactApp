import './App.css'
import { Outlet } from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="container_100 align-items-center">
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default App
