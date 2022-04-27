---
layout: assignment
title: Iteration av nästlade dictionaries
color: green
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

Funktionen ska ta ett dictionary som argument och skriva ut samtliga nycklar. Även nycklar för nästlade dictionaries (på ett i förväg obestämt djup) ska skrivas ut. För exemplet ovan genereras följande utskrift av funktionen: