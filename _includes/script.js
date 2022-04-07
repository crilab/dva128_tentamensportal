const terminal = document.getElementById('terminal')

function float(x) {
    const re = /^\d+\.?\d*$/

    if (!re.test(x))
        throw 'ValueError: could not convert string to float: \'' + x + '\''

    return parseFloat(x)
}

function int(x) {
    const re = /^\d+$/

    if (!re.test(x))
        throw 'ValueError: invalid literal for int() with base 10: \'' + x + '\'';
    
    return parseInt(x)
}

function str(x) {
    return String(x)
}

function print(string='', end='\n') {
    terminal.innerText += string
    terminal.innerText += end
    terminal.scrollTop = terminal.scrollHeight
}

function input(prompt='') {
    return new Promise(resolve => {
        print(prompt, '')

        const input = document.createElement('input')
        input.type = 'text'

        input.onkeydown = e => {
            if (e.key == 'Enter') {
                terminal.removeChild(input)
                print(input.value)
                resolve(input.value)
            }
            else {
                input.size = input.value.length + 2
            }
        }

        terminal.onclick = () => {
            input.focus()
        }

        terminal.appendChild(input)
        terminal.click()
    })
}

function sleep(secs) {
    return new Promise(resolve => {
        setTimeout(resolve, secs * 1000)
    })
}

async function init() {
    if (typeof main == 'function') {
        terminal.style.display = 'block'
        try {
            await main()
        } catch (e) {
            let error = document.createElement('div')
            error.style.color = 'red'
            error.innerText = e
            terminal.appendChild(error)
        }
    }
}

init()