async function main() {
    const list_a = [4, 1, 9, 4, 7, 9, 3, 8, 5, 8]
    const list_b = [4, 1, 1, 4, 7, 9, 6, 8, 5, 8]

    for (let i = 0; i < list_a.length; i++) {
        const a = list_a[i]
        const b = list_b[i]
        const end = a == b ? '\n' : ' <- DIFF!\n'
        print(`${a} <-> ${b}`, end)
    }
}
