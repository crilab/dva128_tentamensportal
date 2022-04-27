---
layout: assignment
title: Sökning med exceptions
color: green
---
Ett distributionsföretag behöver ett program där man snabbt kan slå upp namnet på personer som bor vid olika adresser. Företaget har utvecklat följande grund:

{% highlight python linenos %}
# DIN KOD OVAN

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

Din uppgift är att slutföra programmet genom att implementera funktionen get_name.

Funktionen ska ta en address som argument (av typen sträng). Funktionen ska returnera en sträng med namnet på personen som bor vid den adressen.

Uppslagen ska göras genom sökning av variablen people. Om uppslaget inte genererar någon träff ska funktionen istället lyfta ett exception av typen KeyError.

Om funktionen implementerats korrekt fungerar programmet likt följande lösningsförslag: