---
layout: assignment
title: Multiplication Table
color: red
---
In the following example, nested while-loops are used to print a multiplication table:

{% highlight python linenos %}
y = 1
while y <= 10:
    x = 1
    while x <= 10:
        z = x * y
        print(f'{z:4}', end='')
        x += 1
    print()
    y += 1
{% endhighlight %}

In this case, using *while* creates unnecessary extra steps and makes the code harder to read.

Your task is to shorten and simplify the script. Rewrite the loops so that the iteration is performed using *for* and *range*.