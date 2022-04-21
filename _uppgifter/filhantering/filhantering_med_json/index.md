---
layout: assignment
title: Filhantering med JSON
color: green
---
Filen **numbers.json** innehåller en lista med heltal:

{% highlight json %}
[8, 4, 2, 1]
{% endhighlight %}

Din uppgift är att skapa ett program som vid körning läser in listan från filen, dubblerar samtliga värden, lägger till heltalet 1 i slutet på listan och avslutningsvis skriver den nya listan till filen.

För exemplet ovan innebär detta att **numbers.json** får följande information vid första körning:

{% highlight json %}
[16, 8, 4, 2, 1]
{% endhighlight %}

Vid andra körning skrivs följande information till **numbers.json** (och så vidare):

{% highlight json %}
[32, 16, 8, 4, 2, 1]
{% endhighlight %}