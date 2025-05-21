---
layout: assignment
title: Funktionen sorted
color: green
---
Variabeln med namn people innehåller en lista av dictionaries enligt följande:

{% highlight python linenos %}
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

# DIN LÖSNING NEDAN
{% endhighlight %}

Slutför programmet genom att sortera listan utifrån ålder (nyckeln *'age'*) i bakvänd ordning (högst till lägst) med den inbyggda funktionen sorted. Programmet ska därefter skriva ut den sorterade listan enligt exemplet nedan: