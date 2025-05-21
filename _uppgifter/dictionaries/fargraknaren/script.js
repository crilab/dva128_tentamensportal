async function main() {
    const car_colors = [
        'red',
        'green',
        'black',
        'blue',
        'white',
        'blue',
        'black/red',
        'red',
        'blue',
        'black',
        'white',
        'black/red'
    ]

    let color_counter = {}

    for (const color of car_colors) {
        if (color_counter[color] == undefined)
            color_counter[color] = 0
        
        color_counter[color] += 1
    }
    
    for (const color in color_counter) {
        print(`${color}, ${color_counter[color]}`)
    }
}
