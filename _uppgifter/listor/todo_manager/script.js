async function main() {
    print('.: TODO MANAGER :.')
    print('------------------')
    print('list | List todos')
    print('add  | Add todo')
    print('rm   | Remove todo')
    print('------------------')

    let todos = []

    while (true) {
        let todo = false
        let index = false
        let command = await input('command > ')
        switch (command) {
            case 'list':
                todos.forEach(todo => {
                    print('- ' + todo)
                })
                break
            case 'add':
                todo = await input('todo > ')
                index = todos.indexOf(todo)

                if (index != -1) {
                    print(`ERROR: Todo '${todo}' already exists`)
                    continue
                }

                todos.push(todo)
                print(`INFO: Todo '${todo}' added`)
                break
            case 'rm':
                todo = await input('todo > ')
                index = todos.indexOf(todo)

                if (index == -1) {
                    print(`ERROR: Todo '${todo}' not found`)
                    continue
                }

                todos.splice(index, 1)
                print(`INFO: Todo '${todo}' removed`)
                break
            default:
                print('ERROR: Unknown command')
        }
    }
}