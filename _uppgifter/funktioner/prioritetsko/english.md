---
layout: assignment
title: Priority Queue
color: red
---
A mathematician needs help implementing a priority queue in Python:

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

Complete the program by implementing the functions ***push*** and ***pop*** according to their documentation (type hints and docstrings). The functions must handle the global list ***priority_queue***.

It does not matter in which order ***pop*** returns elements with equal priority.

You may not change the rest of the code.

If the functions are implemented correctly, the code runs as follows:
