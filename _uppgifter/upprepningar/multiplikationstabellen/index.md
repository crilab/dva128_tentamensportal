---
layout: assignment
title: Multiplikationstabellen
color: red
---
I följande exempel används nästlade while-loopar för att skriva ut en multiplikationstabell:

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

Att i det här fallet använda while skapar onödigt många extrasteg och gör koden mer svårläst.

Din uppgift är att förkorta och förenkla scriptet. Skriv om looparna så att iterationen utförs med for och range.