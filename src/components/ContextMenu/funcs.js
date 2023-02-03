export default styles => ({
    destroy: e => {
        e.classList.add(styles.destroy)
        setTimeout(() => e.classList.add(styles.destroyed), 300)
        
    },
    showCode: e => {
        
    },
    restore: () => {
        const collection = document.getElementsByClassName(styles.destroyed)
        if(collection.length === 0) return 
        const elems = Array.from(collection)
        elems.forEach(e => {
            e.classList.remove(styles.destroyed)
            e.classList.remove(styles.destroy)
        })
    }
})