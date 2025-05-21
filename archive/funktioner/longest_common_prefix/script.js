async function main() {
    function longest_common_prefix(a, b) {
        let result = ''
        let max_i = Math.min(a.length, b.length)
        let i = 0
        while (true) {
            if (i == max_i || a[i] != b[i])
                return result
            result += a[i]
            i += 1
        }
    }
    
    let a = await input('a = ')
    let b = await input('b = ')
    print('-----')
    let c = longest_common_prefix(a, b)
    print(`LCP: ${c}`)
}
