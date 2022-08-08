---
layout: assignment
title: Enkelresor
color: green
---
Ett flygbolag har lagrat kommande veckas flygturer i variabeln enkelresor:

{% highlight python linenos %}
enkelresor = [
    { 'avgångsort': 'Stockholm', 'destination': 'Göteborg' },
    { 'avgångsort': 'Göteborg', 'destination': 'Malmö' },
    { 'avgångsort': 'Malmö', 'destination': 'Västerås' },
    { 'avgångsort': 'Göteborg', 'destination': 'Stockholm' },
    { 'avgångsort': 'Västerås', 'destination': 'Göteborg' },
    { 'avgångsort': 'Stockholm', 'destination': 'Malmö' },
    { 'avgångsort': 'Göteborg', 'destination': 'Västerås' }
]

enkelresor_dict = {}

# DIN LÖSNING NEDAN
{% endhighlight %}

Flygbolaget behöver ett snabbt sätt att lista samtliga destinationer för en avgångsort och har därför definierat ett dictionary i variabeln enkelresor_dict. Din uppgift är att fylla den med data genom att tolka variabeln enkelresor.

Samtliga avgångsorter ska sättas som nycklar i variabelns dictionary. Som värde ska en lista sättas med samtliga destinationer för den avgångsorten.

Flygbolaget vill återanvända din kod i framtiden. Din lösning behöver därför tolerera att avgångar tillkommer, modifieras och raderas. Detta inkluderar avgångar till och från nya städer.

Om din lösning är korrekt kommer enkelresor_dict innehålla följande: