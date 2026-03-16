async function main() {
    print('HOT DOG PLANNER')
    print('---------------')

    print('How many students want 2 regular hot dogs?')
    const regular_2 = int(await input('> '))

    print('How many students want 3 regular hot dogs?')
    const regular_3 = int(await input('> '))

    print('How many students want 2 vegan hot dogs?')
    const vegan_2 = int(await input('> '))

    print('How many students want 3 vegan hot dogs?')
    const vegan_3 = int(await input('> '))
    
    const regular_tot = 2 * regular_2 + 3 * regular_3
    const vegan_tot = 2 * vegan_2 + 3 * vegan_3

    const regular_packages = Math.ceil(regular_tot / 8)
    const vegan_packages = Math.ceil(vegan_tot / 4)

    const regular_price = regular_packages * 20.95
    const vegan_price = vegan_packages * 34.95

    const drink_amount = regular_2 + regular_3 + vegan_2 + vegan_3
    const drink_price = 13.95 * drink_amount

    print()
    print('---------------')
    print('    RECEIPT    ')
    print('---------------')
    print('REGULAR:')
    print('  Packages: ' + regular_packages)
    print('  Price:    ' + regular_price.toFixed(2) + ':-')
    print('VEGAN:')
    print('  Packages: ' + vegan_packages)
    print('  Price:    ' + vegan_price.toFixed(2) + ':-')
    print('DRINK:')
    print('  Amount:   ' + drink_amount)
    print('  Price:    ' + drink_price.toFixed(2) + ':-')
    print('TOTAL:')
    print('  Price:    ' + (regular_price + vegan_price + drink_price).toFixed(2) + ':-')
    print('---------------')
}
