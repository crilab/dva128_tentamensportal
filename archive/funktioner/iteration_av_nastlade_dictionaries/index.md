---
layout: assignment
title: Iteration av nästlade dictionaries
color: red
---
Utgå från följande kod:

{% highlight python linenos %}
# DIN KOD OVAN

person = {
    'namn': 'Petra Svensson',
    'bostad': {
        'typ': 'hyra',
        'avgift': 5000
    },
    'husdjur': {
        'Douglas': {
            'typ': 'hund'
        },
        'Stampe': {
            'typ': 'kanin'
        }
    }
}

print_all_keys(person)
 
{% endhighlight %}

Din uppgift är att slutföra scriptet genom att implementera funktionen print_all_keys.

Funktionen ska ta ett dictionary som argument och skriva ut alla dess nycklar. Samtliga nycklar för nästlade dictionaries ska också skrivas ut (oberoende djup).

Varje nyckel ska skrivas ut enskilt på en ny rad. I vilken ordning nycklarna skrivs ut spelar ingen roll.

Ett lösningsförslag visas nedan: