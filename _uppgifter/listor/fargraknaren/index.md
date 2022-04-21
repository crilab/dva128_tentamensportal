---
layout: assignment
title: Färgräknaren
color: red
---
En tulltjänsteman har sammanställt en lista över färger på förbipasserande bilar den senaste timmen:

{% highlight python linenos %}
car_colors = [
    'red',
    'green',
    'black',
    'blue',
    'white',
    'blue',
    'black/red',
    'red',
    'blue',
    'black',
    'white',
    'black/red'
]

# DIN KOD NEDAN
{% endhighlight %}

Din uppgift är att visa hur man genom iteration av listan kan räkna förekomsten av samtliga färger. Din lösning ska tolerera att nya färger (exempelvis purple) eller kombinationer (exempelvis yellow/blue) tillkommer i framtiden.

Resultatet från beräkningen ska skrivas ut på skärmen: