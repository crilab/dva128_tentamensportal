---
layout: assignment
title: Husdjursfilter
color: red
---
Variabeln pets innehåller husdjur som registrerats i ett populärt online-community:

{% highlight python linenos %}
# DIN KOD OVAN

pets = [
    { 'name': 'Smulan', 'type': 'cat' },
    { 'name': 'Molly', 'type': 'dog' },
    { 'name': 'Stampe', 'type': 'rabbit' },
    { 'name': 'Bella', 'type': 'cat' },
    { 'name': 'Blubbe', 'type': 'fish' },
    { 'name': 'Morris', 'type': 'dog' }
]

cat_and_dogs = pet_filter(pets)

for pet in cat_and_dogs:
    print(pet["name"], '(' + pet["type"] + ')')
{% endhighlight %}

Din uppgift är att slutföra scriptet genom att implementera funktionen pet_filter. Funktionen tar en lista med husdjur som argument och ska returnera en kopia av listan där samtliga husdjur som inte är av typen katt eller hund plockats bort.

Listan med husdjur får inte modifieras av funktionen. Din lösning ska tolerera att husdjur tillkommer, modifieras och raderas i framtiden. Det är viktigt att husdjurens ordning bibehålls i den filtrerade listan.

När funktionen implementerats korrekt kommer scriptet köra med följande utskrift: