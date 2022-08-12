---
layout: assignment
title: Enkelresor
color: green
---
Ett flygbolag har lagrat kommande veckas enkelresor i variabeln med namn flights:

{% highlight python linenos %}
flights = [
    { 'from': 'Stockholm', 'to': 'Göteborg' },
    { 'from': 'Göteborg', 'to': 'Malmö' },
    { 'from': 'Malmö', 'to': 'Västerås' },
    { 'from': 'Göteborg', 'to': 'Stockholm' },
    { 'from': 'Västerås', 'to': 'Göteborg' },
    { 'from': 'Stockholm', 'to': 'Malmö' },
    { 'from': 'Göteborg', 'to': 'Västerås' }
]

destinations = {}

# DIN LÖSNING NEDAN
{% endhighlight %}

Flygbolaget behöver ett snabbt sätt att lista samtliga destinationer för en avgångsort och har därför definierat ett dictionary i en variabel med namn destinations. Din uppgift är att fylla den med data.

Samtliga avgångsorter (nyckeln *"from"* i flights) ska sättas som nycklar i variabeln. Som värde ska en lista sättas med samtliga ankomstorter (nyckeln *"to"* i flights) för den avgångsorten.

Flygbolaget vill återanvända din kod i framtiden. Din lösning behöver därför tolerera att avgångar tillkommer, modifieras och raderas. Detta inkluderar avgångar till och från nya städer.

Om din lösning är korrekt kommer variabeln med namn destinations innehålla följande: