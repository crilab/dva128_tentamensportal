---
layout: assignment
title: Fågelskådaren
color: green
---
En statistiker som ägnar som åt fågelskådning på sin fritid behöver ett verktyg för att hålla reda på vilka fågelarter som nyttjar trädgårdens fröautomat. Din uppgift är att implementera detta verktyg.

Skapa ett program där statistikern matar in fågelarter (en fågelart per inmatning). Vid varje inmatning ska programmet skriva ut:

- antalet fåglar av den arten som matats in
- antalet fåglar totalt som matats in

Exempel:

{% highlight text %}
Fågelart: grönfink
(grönfink) 1 av 1

Fågelart: domherre
(domherre) 1 av 2

Fågelart: grönfink
(grönfink) 2 av 3

Fågelart: bofink
(bofink) 1 av 4

Fågelart: domherre
(domherre) 2 av 5

Fågelart: grönfink
(grönfink) 3 av 6
{% endhighlight %}

Lösningen ska inte begränsa vilka arter som tillåts matas in. Tänk på att nya fågelarter kan tillkomma i framtiden.

Löser du uppgiften genom att lagra samtliga inmatningar i en lista får du poängavdrag. Välj istället en datatyp som bättre nyttjar datorns minne och beräkningskapacitet.