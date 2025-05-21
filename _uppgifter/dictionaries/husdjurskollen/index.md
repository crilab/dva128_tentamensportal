---
layout: assignment
title: Husdjurskollen
color: red
---
Utgå från följande script:

{% highlight python linenos %}
pet_owners = [
    { 'name': 'Anna', 'id': 'aa' },
    { 'name': 'Lars', 'id': 'bb' },
    { 'name': 'Eva', 'id': 'cc' }
]

pets = [
    { 'name': 'Doris', 'owner_id': 'bb' },
    { 'name': 'Molly', 'owner_id': 'cc' },
    { 'name': 'Stampe', 'owner_id': 'aa' },
    { 'name': 'Luna', 'owner_id': 'bb' },
    { 'name': 'Pelle', 'owner_id': 'aa' }
]

pet_owner_name = input('pet owner name > ')

# DIN KOD NEDAN
{% endhighlight %}

Variabeln med namn pet_owners innehåller en lista av dictionaries där varje dictionary representerar en husdjursägare. Detta dictionary har två nycklar:

| Nyckel | Beskrivning           |
| ------ | --------------------- |
| name   | Husdjursägarens namn  |
| id     | En unik identifierare |

Variabeln med namn pets innehåller en lista av dictionaries där varje dictionary representerar ett husdjur. Även detta dictionary har två nycklar:

| Nyckel   | Beskrivning        |
| -------- | ------------------ |
| name     | Husdjurets namn    |
| owner_id | Husdjursägarens id |

Genom att jämföra variablerna kan vi dra slutsatsen att Lars är husdjursägare till Doris och Luna eftersom husdjursens owner_id matchar med id för Lars.

Din uppgift är att slutföra scriptet ovan så att namnet på samtliga husdjur skrivs ut för husdjursägaren som användaren matar in vid rad 15. Tänk på att användare matar in namn (inte id) på husdjursägaren.

Din lösning ska tolerera att husdjur och husdjursägareägare tillkommer eller plockas bort i framtiden.

Testa mata in namnet på en husdjursägare (exempelvis Anna) i lösningsförslaget nedan: