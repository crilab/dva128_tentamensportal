---
layout: assignment
title: Parkeringstillstånd
color: green
---
I den här uppgiften ska du skapa ett program som håller reda på vilka studenter som beviljats parkeringstillstånd för universitetets parkering. Utgå från följande kod:

{% highlight python linenos %}
granted_parking_permits = ['910101-1234', '820202-5678']

# DIN LÖSNING NEDAN
{% endhighlight %}

Studenter som återfinns i variabeln med namn **granted_parking_permits** har sedan tidigare beviljats parkeringstillstånd.

Programmet ska ha stöd för två operationer:

| Operation | Beskrivning |
| --------- | ----------- |
| grant     | Bevilja parkeringstillstånd |
| check     | Kontrollera om student redan beviljats parkeringstillstånd |

Det ska inte vara möjligt att bevilja parkeringstillstånd till samma student flera gånger. Försöker man göra detta ska ett felmeddelande visas:

{% highlight text %}
command > grant
student > 910101-1234
ERROR: existing parking permit for student
{% endhighlight %}

Det är inget krav att säkerställa så användaren matar in ett giltigt personnummer.

Se lösningsförslaget nedan: