---
layout: assignment
title: Parkeringstillstånd
color: green
---
I den här uppgiften ska du skapa ett program som håller reda på vilka studenter som hämtat ut sitt parkeringstillstånd. Utgå från följande kod:

{% highlight python %}
granted_parking_permits = ['910101-1234', '820202-5678']

# DIN LÖSNING NEDAN
{% endhighlight %}

Studenter som återfinns i variabeln **granted_parking_permits** har beviljats (och hämtat ut) sitt parkeringstillstånd.

Programmet ska ha stöd för två operationer:

| Operation | Beskrivning |
| --------- | ----------- |
| grant     | Bevilja parkeringstillstånd |
| check     | Kontrollera om student hämtat ut parkeringtillstånd |

Det ska inte vara möjligt att bevilja ett parkeringstillstånd till en student flera gånger. Försöker man göra detta ska ett felmeddelande visas:

{% highlight text %}
command > grant
student > 910101-1234
ERROR: existing parking permit for student
{% endhighlight %}

Det är inget krav att säkerställa så användaren matar in ett giltigt personnummer.

Se lösningsförslaget nedan: