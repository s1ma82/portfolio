async function code() {
    const data = [] 
    const code = await fetch(`/code/${this.name}/code.txt`)
    data.push(await code.text())
    const style = await fetch(`/code/${this.name}/style.txt`) || null
    data.push(await style.text())
    return data
} 

export default [
    {
        name: "site-logo",
        code
    },
    {
        name: "lang-menu",
        code
    },
    {
        name: "canvas",
        code
    },
    {
        name: "main-title",
        code
    },
    {
        name: "text",
        code
    },
    {
        name: "about-me",
        code
    },
    {
        name: "code-example",
        code
    }
]