---
layout: assignment
title: Searching with Exceptions
color: green
---
A distribution company needs a program to quickly look up the names of people living at different addresses. The company has developed the following base code:

{% highlight python linenos %}
# YOUR CODE ABOVE

people = [
    {
        'address': 'Funktionstorget 2',
        'name': 'Lena Eriksson'
    },
    {
        'address': 'Listgatan 1',
        'name': 'Erik Olsson'
    },
    {
        'address': 'Strängvägen 3',
        'name': 'Emma Johansson'
    }
]

while True:
    address = input('address > ')

    try:
        print('MATCH:', get_name(address))
    except KeyError:
        print('ERROR: no such address')

    print()
{% endhighlight %}

Your task is to complete the program by implementing the *get_name* function.

The function should take an address as an argument (of type string). The function should return a string with the name of the person who lives at that address.

The lookups should be done by searching the *people* variable. If the lookup yields no match, the function should instead raise a *KeyError* exception.

If the function is implemented correctly, the program will work like the following example solution: