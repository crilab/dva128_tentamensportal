---
layout: assignment
title: Funktionen sorted
color: red
---
Variabeln people innehåller en lista av dictionaries enligt följande:

{% highlight python %}
people = [
    {
        'name': 'Anna',
        'age': 25
    },
    {
        'name': 'Lars',
        'age': 20
    },
    {
        'name': 'Eva',
        'age': 30
    }
]
{% endhighlight %}

Skapa en program som sorterar listan utifrån ålder i bakvänd ordning (högst till lägst) med den inbyggda funktionen sorted. Programmet ska därefter skriva ut den sorterade listan enligt exemplet nedan: