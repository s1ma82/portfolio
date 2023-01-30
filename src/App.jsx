import { BrowserRouter, Route, Routes } from "react-router-dom"
import dedent from 'dedent'
import Home from "./pages/Home/Home"
import Header from "./layout/Header/Header"

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
            <div id="theme" className="light">
                <Header />
                <main className="layout">
                    <Routes>
                        <Route path="/" element={<Home/>} /> 
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
            
    )
}