---
layout: assignment
title: Lagindelaren
color: green
---
En idrottslärare försöker skapa ett script för att hålla reda på vilka studenter som inte tilldelats något lag under idrottslektioner:

{% highlight python linenos %}
all_students = [
    'Anna',
    'Lars',
    'Eva',
    'Mikael',
    'Maria',
    'Anders'
]

team_a = [
    'Anna',
    'Maria'
]

team_b = [
    'Eva',
    'Anders'
]

# DIN LÖSNING NEDAN
{% endhighlight %}

I scriptet finns tre variabler:

| Variabel     | Beskrivning |
| ------------ | ----------- |
| all_students | Samtliga elever som ska delta vid en idrottslektion |
| team_a       | Elever som tillhör lag A |
| team_b       | Elever som tillhör lag B |

Din uppgift är att slutföra scriptet så att namnet på samtliga elever skrivs ut som saknar lagtillhörighet (samtliga namn från **all_students** som varken finns i **team_a** eller **team_b**).

Din lösning ska tolerera att namn tillkommer eller plockas bort från samtliga listor.