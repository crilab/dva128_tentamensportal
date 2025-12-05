async function main() {
    const priority_queue = [
        {
            'priority': 10,
            'task': 'Walk the dog.'
        },
        {
            'priority': 0,
            'task': 'Study before the exam!',
        }
    ]

    print('PRIORITY QUEUE')
    print('--------------')
    print('push | Insert task')
    print('pop  | Get most urgent task')
    print('--------------')

    while (true) {
        const operation = await input('> ')

        if (operation == 'push') {
            const priority = int(await input('priority: '))
            const task = await input('task: ')
            priority_queue.push({priority, task})
            priority_queue.sort((a, b) => { return b.priority - a.priority })
        } else if (operation == 'pop') {
            const item = priority_queue.pop()
            if (item === undefined) {
                print('ERROR: queue is empty')
            } else {
                print(item.task)
            }
        }
    }
}
