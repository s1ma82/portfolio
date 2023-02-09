import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import scss from 'highlight.js/lib/languages/scss'
import 'highlight.js/styles/atom-one-dark-reasonable.css'


export default ({ lang = 'javascript', children, ...props}) => {
    const ref = useRef()
    useEffect(() => {
        if (lang === 'scss') {
            hljs.registerLanguage('scss', scss)
        } else {
            hljs.registerLanguage('javascript', javascript)
        }

        hljs.highlightElement(ref.current)
    }, [])

    return <pre ref={ref}><code className="code">{children}</code></pre>
}