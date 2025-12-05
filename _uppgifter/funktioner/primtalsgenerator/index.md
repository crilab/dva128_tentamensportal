---
layout: assignment
title: Primtalsgenerator
color: red
---
Utgå från följande kod:

{% highlight python linenos %}
# DIN LÖSNING OVAN

stop = int(input('Stop value: '))

for prime in prime_generator(stop):
    print('-', prime)
{% endhighlight %}

Implementera generatorfunktionen ***prime_generator***.

Funktionen ska ta ett heltal ***stop*** som argument och generera (använda **yield**) alla primtal från och med 2 upp till (men inte inklusive) stop.

Du ansvarar själv för logiken som avgör om ett tal är ett primtal, men du får gärna bryta ut den koden till en egen hjälpfunktion (t.ex. ***is_prime***).
