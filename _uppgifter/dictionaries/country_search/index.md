---
layout: assignment
title: Country Search
color: green
---
Variabeln med namn countries innehåller ett dictionary med ett antal europeiska länder. Till varje land finns en lista med städer i det landet:

{% highlight python linenos %}
countries = {
    "Sweden": ["Stockholm", "Göteborg", "Malmö"],
    "Norway": ["Oslo", "Bergen", "Trondheim"],
    "England": ["London", "Birmingham", "Manchester"],
    "Germany": ["Berlin", "Hamburg", "Munich"],
    "France": ["Paris", "Marseille", "Toulouse"]
}

city = input('city > ')

# DIN LÖSNING NEDAN
{% endhighlight %}

Din uppgift är att slutföra programmet så att landet skrivs ut för staden som matas in på rad 9:

{% highlight text %}
city > Bergen
Norway
{% endhighlight %}

Sökningen ska vara case insensitive:

{% highlight text %}
city > tOuLoUsE
France
{% endhighlight %}

Om sökningen inte ger någon träff ska ett felmeddelande skrivas ut:

{% highlight text %}
city > ingenstad
ERROR: not found (ingenstad)
{% endhighlight %}

Din lösning ska tolerera att länder och städer tillkommer (eller tas bort) i framtiden.

Ett lösningsförslag visas nedan: