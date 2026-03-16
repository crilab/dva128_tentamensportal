async function main() {
    print('--- HOT DOG PLANNER ---')
    const regular_2 = int(await input('How many students chose 2 sausages? '))
    const regular_3 = int(await input('How many students chose 3 sausages? '))
    const vegan_2 = int(await input('How many students chose 2 vegan sausages? '))
    const vegan_3 = int(await input('How many students chose 3 vegan sausages? '))
    
    const regular_tot = 2 * regular_2 + 3 * regular_3
    const vegan_tot = 2 * vegan_2 + 3 * vegan_3

    const regular_packages = Math.ceil(regular_tot / 8)
    const vegan_packages = Math.ceil(vegan_tot / 4)

    const regular_price = regular_packages * 20.95
    const vegan_price = vegan_packages * 34.95

    const drink_amount = regular_2 + regular_3 + vegan_2 + vegan_3
    const drink_price = 13.95 * drink_amount

    print()
    print('--- SHOPPING LIST ---')
    print('Regular sausage: ' + regular_packages + ' packages')
    print('Vegan sausage: ' + vegan_packages + ' packages')
    print('Drinks: ' + drink_amount + ' bottles')
    print('Total cost: ' + (regular_price + vegan_price + drink_price).toFixed(2) + ' SEK')
}
