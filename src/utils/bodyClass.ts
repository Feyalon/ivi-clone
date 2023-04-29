export const addClass = (selector: 'body' | 'root', value: string): void => {
    if (selector === 'body') {
        document.body.classList.add(value)
    } else {
        const root = document.getElementById('root')
        if (root) root.classList.add(value)
    }
}