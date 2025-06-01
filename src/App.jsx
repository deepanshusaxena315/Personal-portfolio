import { BrowserRouter, Route ,Routes } from "react-router-dom"
import Home from "./pages/Home"
import Notfound from "./pages/Notfound"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast, Slide } from 'react-toastify'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element ={ <Home />} />
      <Route path="*" element = {<Notfound/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer
      position="bottom-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick={false}
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="dark"
      transition={Slide}
      />
    </>
  )
}

export default App
