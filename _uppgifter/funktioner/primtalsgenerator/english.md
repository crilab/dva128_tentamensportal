---
layout: assignment
title: Prime Number Generator
color: red
---
Start from the following code:

{% highlight python linenos %}
# YOUR SOLUTION ABOVE

stop = int(input('Stop value: '))

for prime in prime_generator(stop):
    print('-', prime)
{% endhighlight %}

Implement the generator function ***prime_generator***.

The function should take an integer ***stop*** as an argument and generate (use **yield**) all prime numbers from 2 up to (but not including) stop.

You are responsible for the logic determining if a number is a prime number, but you are welcome to extract that code into a separate helper function (e.g. ***is_prime***).
