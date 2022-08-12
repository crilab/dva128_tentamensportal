---
layout: assignment
title: Fågelskådaren
color: green
---
En statistiker som ägnar som åt fågelskådning på sin fritid behöver ett verktyg för att hålla reda på vilka fågelarter som nyttjar trädgårdens fröautomat. Din uppgift är att implementera detta verktyg.

Skapa ett program där statistikern matar in fågelarter (en fågelart per inmatning). Efter varje inmatning ska programmet skriva ut:

- antalet fåglar av den arten som registrerats
- antalet fåglar totalt som registrerats

Exempel:

{% highlight text %}
Bird: grönfink
(grönfink) 1 out of 1

Bird: domherre
(domherre) 1 out of 2

Bird: grönfink
(grönfink) 2 out of 3

Bird: bofink
(bofink) 1 out of 4

Bird: domherre
(domherre) 2 out of 5

Bird: grönfink
(grönfink) 3 out of 6
{% endhighlight %}

Lösningen ska inte begränsa vilka arter som tillåts matas in. Tänk på att nya fågelarter kan tillkomma i framtiden.

Lösningar där man lagrar samtliga inmatningar i en lista ges inte full poäng. Välj istället en datatyp som bättre nyttjar datorns minne och beräkningskapacitet.