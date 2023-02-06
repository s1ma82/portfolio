async function code() {
    const res = await fetch(`/code/${this.name}.txt`)
    const data = await res.text()
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
    }
]