---
layout: assignment
title: Geometriska figurer
color: green
---
I den här uppgiften ska du skapa ett script som ritar ut rektanglar och trianglar i olika storlekar. Utgå från följande grund:

{% highlight python linenos %}
shape = input('form: ')
height = int(input('höjd: '))

# DIN KOD NEDAN
{% endhighlight %}

Vid rad 1 matar användaren in figurens form. Figurer ska ritas ut med nummertecken (#). Programmet ska ha stöd för två former:

- rektangel
- triangel

Vid rad 2 matar användaren in figurens höjd. Detta anger antalet rader (i terminalen) som figuren ska skrivas ut över.

Om användaren matar in _'rektangel'_ ska användaren också ange antalet nummertecken som ska ritas ut vid varje rad (bredd):

{% highlight text %}
form: rektangel
höjd: 3
bredd: 10

##########
##########
##########
{% endhighlight %}

Om användaren matar in _'triangel'_ ska en triangel ritas ut med ett hörn som pekar uppåt:

{% highlight text %}
form: triangel
höjd: 4

#
##
###
####
{% endhighlight %}

Testkör gärna lösningsförslaget nedan: