---
layout: assignment
title: Translator
color: green
---
En översättningsbyrå behöver ett program för att snabbt göra översättningar från svenska till engelska. Byrån har utvecklat följande grund:

{% highlight python linenos %}
# DIN KOD OVAN

words = {
    'att': 'to',
    'det': 'it',
    'gillar': 'like',
    'jag': 'I',
    'mat': 'food',
    'spela': 'play',
    'tv-spel': 'videogames',
    'roligt': 'fun',
    'är': 'is'
}

while True:
    text = input('text > ')
    print('translation >', translate(text))
    print()
{% endhighlight %}

Din uppgift är att slutföra programmet genom att implementera funktionen translate. Funktionen ska ta ett argument (sträng) innehållandes ett antal svenska ord (separerade med mellanslag).

Funktionen ska returnera en sträng där samtliga svenska ord bytts ut mot engelska enligt översättningarna i variabeln words. Översättningen ska vara case insensitive:

{% highlight text %}
translate('Jag gillar mat')
-> 'I like food'

translate('Det är roligt att spela TV-spel')
-> 'it is fun to play videogames'
{% endhighlight %}

Om funktionen implementerats korrekt fungerar programmet likt följande lösningsförslag: