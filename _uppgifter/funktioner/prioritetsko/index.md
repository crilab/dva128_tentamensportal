---
layout: assignment
title: Prioritetskö
color: red
---
En matematiker behöver hjälp med att implementera en prioritetskö i Python:

{% highlight python linenos %}
priority_queue = [
    {
        'priority': 10,
        'task': 'Walk the dog.'
    },
    {
        'priority': 0,
        'task': 'Study before the exam!',
    }
]


def push(priority: int, task: str) -> None:
    """
    Inserts a task into the priority queue.

    Args:
        priority (int): The relative importance of the task (lower is more urgent).
        task (str): The task description.
    """
    pass


def pop() -> str:
    """
    Removes and returns the highest priority task.
    
    Returns:
        str: The description of the task with the highest priority (lowest number).

    Raises:
        IndexError: If the queue is empty.
    """
    pass


print('PRIORITY QUEUE')
print('--------------')
print('push | Insert task')
print('pop  | Get most urgent task')
print('--------------')

while True:
    operation = input('> ')
    
    if operation == 'push':
        push(
            int(input('priority: ')),
            input('task: ')
        )
        
    elif operation == 'pop':
        try:
            print(pop())
        except IndexError:
            print('ERROR: queue is empty')

{% endhighlight %}

Färdigställ programmet genom att implementera funktionerna ***push*** och ***pop*** enligt dess dokumentation (type hints och docstrings). Funktionerna ska hantera den globala listan ***priority_queue***.

Det spelar ingen roll i vilken ordning ***pop*** returnerar element med lika prioritet.

Du får inte ändra koden i övrigt.

Om funktionerna implementeras korrekt kör koden enligt följande:
