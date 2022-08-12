---
layout: assignment
title: Color Search
color: green
---
Variabeln med namn countries innehåller ett dictionary med ett antal europeiska länder. Av variabeln kan man utläsa vilka färger som ingår i respektive lands flagga:

{% highlight python linenos %}
countries = {
    'Denmark': ['red', 'white'],
    'Finland': ['white', 'blue'],
    'France': ['blue', 'white', 'red'],
    'Germany': ['black', 'red', 'yellow'],
    'Iceland': ['blue', 'white', 'red'],
    'Netherlands': ['red', 'white', 'blue'],
    'Norway': ['red', 'white', 'blue'],
    'Sweden': ['yellow', 'blue'],
    'Ukraine': ['blue', 'yellow']
}

colors = input('colors > ').split()

# DIN LÖSNING NEDAN
{% endhighlight %}

På rad 13 matar användaren in ett antal färger (separerade med mellanslag). Exempelvis:

{% highlight text %}
blue red
{% endhighlight %}

Din uppgift är att slutföra programmet så att samtliga nationer skrivs ut vars flaggor innehåller färgerna som användaren matat in.

{% highlight text %}
France
Iceland
Netherlands
Norway
{% endhighlight %}

Din lösning ska tolerera att länder och färger tillkommer, ändras eller tas bort i framtiden.

Ett lösningsförslag visas nedan: