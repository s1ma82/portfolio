import { BrowserRouter, Route, Routes } from "react-router-dom"
import dedent from 'dedent'
import Home from "./pages/Home/Home"
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import { ContextMenu } from "./components"
import ShowCode from "./pages/ShowCode/ShowCode"

export default () => {
    const log = dedent`
        ░██████╗░░███╗░░███╗░░░███╗░█████╗░░█████╗░██████╗ 
        ██╔════╝░████║░░████╗░████║██╔══██╗██╔══██╗╚════██╗
        ╚█████╗░██╔██║░░██╔████╔██║███████║╚█████╔╝░░███╔═╝
        ░╚═══██╗╚═╝██║░░██║╚██╔╝██║██╔══██║██╔══██╗██╔══╝
        ██████╔╝███████╗██║░╚═╝░██║██║░░██║╚█████╔╝███████╗
        ╚═════╝ ╚══════╝╚═╝     ╚═╝╚═╝  ╚═╝ ╚════╝ ╚══════╝
    `
    console.log(`%c${log}`, 'color: #a0ffc3')
    
    return (
        <BrowserRouter>
            <div id="theme" className="light" >
                <Header />
                <main className="layout">
                    <Routes>
                        <Route path="/" element={<Home/>} /> 
                        <Route path="/showcode/:component" element={<ShowCode/>} /> 
                    </Routes>
                </main>
                <Footer/>
                <ContextMenu/>
            </div>
        </BrowserRouter>
            
    )
}