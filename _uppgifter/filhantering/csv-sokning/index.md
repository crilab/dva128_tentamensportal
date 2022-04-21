---
layout: assignment
title: CSV-sökning
color: green
---
Textfilen **db.csv** innehåller information om tio personer:

{% highlight text %}
Anna,Andersson,Stockholm
Lars,Johansson,Västerås
Eva,Karlsson,Malmö
Mikael,Nilsson,Västerås
Maria,Eriksson,Malmö
Anders,Larsson,Stockholm
Karin,Olsson,Stockholm
Johan,Persson,Stockholm
Sara,Svensson,Malmö
Erik,Gustafsson,Malmö
{% endhighlight %}

Varje rad representerar en person och består av tre kolumner (i följande ordning):

1. Förnamn
2. Efternamn
3. Bostadsort

Skapa ett program där användaren matar in en bostadsort. Programmet ska sedan (genom sökning i filen) skriva ut samtliga rader för personer som är bosatt i den orten: