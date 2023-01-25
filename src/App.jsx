import { BrowserRouter, Route, Routes } from "react-router-dom"
import dedent from 'dedent'
import chalk from "chalk"
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
    console.log(chalk.hex('#a0ffc3')(log))
    return (
        <BrowserRouter>
            <div id="theme" className="light">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home/>} /> 
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
            
    )
}