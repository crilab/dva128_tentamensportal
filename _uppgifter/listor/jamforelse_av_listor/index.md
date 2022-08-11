---
layout: assignment
title: Jämförelse av listor
color: green
---
En matematiker behöver ett verktyg för att jämföra **list_a** med **list_b**:

{% highlight python linenos %}
list_a = [4, 1, 9, 4, 7, 9, 3, 8, 5, 8]
list_b = [4, 1, 1, 4, 7, 9, 6, 8, 5, 8]

# DIN LÖSNING NEDAN
{% endhighlight %}

Programmet ska skriva ut samtliga heltal från båda listor sida vid sida i vertikal riktning. Positioner där listorna skiljer sig ska markeras med en pil (likt exemplet nedan).

Din lösning ska tolerera att listorna ändras i framtiden, men du kan alltid utgå från att **list_a** har samma längd som **list_b**.