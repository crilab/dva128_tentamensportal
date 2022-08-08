---
layout: assignment
title: Kvittoskrivaren
color: green
---
Variabeln kundvagn innehåller artiklar som en användare köpt från en webbshop:

{% highlight python linenos %}
kundvagn = [
    {
        'namn': 'T-shirt',
        'antal': 2,
        'kostnad': 149
    },
    {
        'namn': 'Shorts',
        'antal': 1,
        'kostnad': 199
    },
    {
        'namn': 'Strumpor',
        'antal': 3,
        'kostnad': 49
    },
    {
        'namn': 'Baddräkt',
        'antal': 1,
        'kostnad': 249
    }
]

# DIN LÖSNING NEDAN
{% endhighlight %}

Din uppgift är att visa hur man kan skriva ut ett kvitto (likt exemplet nedan) genom att tolka variabeln.

Samtliga artiklar ska ingå i kvittot med tillhörande attribut (namn, antal och kostnad). Tänk på att det är styckpriser som framgår av variabeln.

Ditt program behöver beräkna och skriva ut den totala kostnaden för ordern. Till ordern tillkommer en fraktavgift på 39 kronor som behöver räknas med i den totala kostnaden.

Din lösning ska tolerera att artiklar tillkommer, raderas eller modifieras i framtiden.