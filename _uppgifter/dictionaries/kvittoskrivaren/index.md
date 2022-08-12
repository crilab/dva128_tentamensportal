---
layout: assignment
title: Kvittoskrivaren
color: green
---
Variabeln med namn cart innehåller artiklar som en användare köpt från en webbshop:

{% highlight python linenos %}
cart = [
    {
        'name': 'T-shirt',
        'quantity': 2,
        'cost': 149
    },
    {
        'name': 'Shorts',
        'quantity': 1,
        'cost': 199
    },
    {
        'name': 'Strumpor',
        'quantity': 3,
        'cost': 49
    },
    {
        'name': 'Baddräkt',
        'quantity': 1,
        'cost': 249
    }
]

# DIN LÖSNING NEDAN
{% endhighlight %}

Artiklar representeras av ett dictionary med tre nycklar:

| Nyckel   | Beskrivning                                |
| -------- | ------------------------------------------ |
| name     | Artikelns namn                             |
| quantity | Antal artiklar av denna typ som inhandlats |
| cost     | Artikelns kostnad (per styck)              |

Din uppgift är att visa hur man kan skriva ut ett kvitto (likt exemplet nedan) genom att tolka variabeln.

Samtliga artiklar ska ingå i kvittot med tillhörande attribut (namn, kvantitet och kostnad).

Ditt program behöver beräkna och skriva ut den totala kostnaden för ordern. Till ordern tillkommer en fraktavgift på 39 kronor som behöver räknas med i den totala kostnaden.

Din lösning ska tolerera att artiklar tillkommer, raderas eller modifieras i framtiden.