---
layout: assignment
title: Kontogenerator
color: green
---
En IT-administratör utvecklar ett script för att generera användarnamn åt personerna i variabeln nedan (users):

{% highlight python linenos %}
# DIN KOD OVAN

users = [
    'Anna Andersson',
    'Lars Johansson',
    'Eva Lindberg',
    'Erik Lundberg',
    'Per Svensson',
    'Emma Lindberg',
    'Petra Svensson',
    'Marie Gustafsson'
]

for user in users:
    forename, surname = user.split()
    username = generate_username(forename, surname)
    print(forename, surname, '-', username)
{% endhighlight %}

Din uppgift är att slutföra scriptet genom att implementera funktionen generate_username. Funktionen ska ta två strängar som argument:

1. forename (exempelvis _'Kalle'_)
2. surname (exempelvis _'Svensson'_)

Funktionen ska returnera ett unikt användarnamn (som sträng). Användarnamnet ska bestå av tre bokstäver i följande ordning:

1. Första bokstaven i forename
2. Första bokstaven i surname
3. Sista bokstaven i surname

Användarnamnet ska avslutas med en siffra (som räknar från 1 och uppåt) för att förhindra att användare tilldelas samma användarnamn.

Användarnamnet ska endast bestå av små bokstäver (gemener). Implementerar du funktionen korrekt genereras följande utskrift: