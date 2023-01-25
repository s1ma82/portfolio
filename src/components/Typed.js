import { useEffect, useRef } from "react"
import Typed from "typed.js"
export default ({text, state, className}) => {
    const block = useRef()
    useEffect(() => {
        if(!block.current || !state) return
        const options = {
            strings: [text],
            typeSpeed: 15,
            startDelay: 300,
            showCursor: false
        };
        const typed = new Typed(block.current, options)
        return () => {
            typed.destroy()
        }
    }, [block.current, state])
    
    return (
        <span className={className || ''} ref={block}></span>
    )
    
}
