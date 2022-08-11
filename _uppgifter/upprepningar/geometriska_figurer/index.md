---
layout: assignment
title: Geometriska figurer
color: green
---
I den här uppgiften ska du skapa ett script som ritar ut rektanglar och trianglar i olika storlekar. Utgå från följande kod:

{% highlight python linenos %}
shape = input('shape: ')
height = int(input('height: '))

# DIN KOD NEDAN
{% endhighlight %}

Figurer ska ritas ut med hashmarks. Vid rad 1 matar användaren in figurens form:

- rectangle
- triangle

Vid rad 2 matar användaren in figurens höjd. Detta anger antalet rader (i terminalen) som figuren ska skrivas ut över.

För rektanglar behöver användaren också ange antalet hashmarks som ska ritas ut vid varje rad. Detta är rektangelns bredd:

{% highlight text %}
shape: rectangle
height: 3
width: 10

##########
##########
##########
{% endhighlight %}

Trianglar ska ritas ut med ett hörn som pekar uppåt:

{% highlight text %}
shape: triangle
height: 4

#
##
###
####
{% endhighlight %}

Ett lösningsförslaget visas nedan: