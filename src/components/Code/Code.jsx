import { useEffect, useRef, useState } from "react"
import hljs from "highlight.js/lib/core";
import 'highlight.js/styles/monokai-sublime.css'
import styles from './Code.module.scss'


const genLang = async (name, setModules) => {
    const lang = {} 
    switch (name) {
        case 'js':
            lang.mod = (await import('highlight.js/lib/languages/javascript')).default
            lang.name = "javascript"
        break
        case 'php':
            lang.mod = (await import('highlight.js/lib/languages/php')).default
            lang.name = "php"
        break
        case 'md': 
            lang.mod = (await import('highlight.js/lib/languages/markdown')).default
            lang.name = "markdown"
        break
        case 'java':
            lang.mod = (await import(`highlight.js/lib/languages/java`)).default
            lang.name = "java"
        break
        case 'css':
            lang.mod = (await import(`highlight.js/lib/languages/css`)).default
            lang.name = "css"
        break
        case 'scss':
            lang.mod = (await import(`highlight.js/lib/languages/scss`)).default
            lang.name = "scss"
        break
    }
    setModules(true)
    return lang
}

const imports = async (name, theme, setModules) => {
    switch (theme) {
        case 'monokai': await import('highlight.js/styles/monokai.css')
            break
        case 'atom': await import('highlight.js/styles/atom-one-dark-reasonable.css')
            break
        default: await import('highlight.js/styles/monokai-sublime.css')
    }

    const options = await genLang(name, setModules)
    if(!options.mod) return
    hljs.registerLanguage(options.name, options.mod)
    
}

export default ({children = null, lang = 'js', theme = 'monokai', ...props}) => {
    const [modules, setModules] = useState(false) 
    const [state, setState] = useState(`${children}`)
    const ref = useRef()

    useEffect(() => {
        imports(lang, theme, setModules)
        if (!modules) return
        hljs.highlightElement(ref.current)

    }, [state, modules])
    
    return <pre ref={ref}><code  className={styles.code} {...props}>{state}</code></pre>
}