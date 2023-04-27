async function code() {
    const data = [] 
    const code = await fetch(`/code/${this.name}/code.txt`)
    data.push(await code.text())
    const style = await fetch(`/code/${this.name}/style.txt`) || null
    data.push(await style.text())
    return data
} 
function setExample(arr) {
    return arr.map(i => ({name: i, code: code})) 
}
const works = [
    "site-logo",
    "lang-menu",
    "canvas",
    "main-title",
    "text",
    "about-me",
    "code-example",
    "portfolio-work",
]

export default setExample(works)