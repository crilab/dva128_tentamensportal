---
layout: assignment
title: Lösenordshanteraren
color: red
---
I en fil med namn **passwords.json** lagrar en användare sina inloggningsuppgifter för olika hemsidor:

{% highlight json %}
{
    "master_password": "s3cr3t",
    "passwords": {
        "socialnetwork.example.com": {
            "username": "johan",
            "password": "abc123"
        },
        "school.example.com": {
            "username": "jsn1337",
            "password": "def456"
        }
    }
}
{% endhighlight %}

Din uppgift är att implementera en lösenordshanterare som hämtar kontoinformation från filen.

För att tillåtas hämta kontoinformation behöver användaren först ange filens lösenord. Filens lösenord lagras under nyckeln *"master_password"*:

{% highlight test %}
Master password: s3cr3t
SUCCESS: authorized
{% endhighlight %}

När användaren autentierats görs uppslag genom att mata in domännamnet för hemsidan vars kontoinformation man vill hämta:

{% highlight test %}
Domain: socialnetwork.example.com
-----
username: johan
password: abc123
-----
{% endhighlight %}

Användarnamn och lösenord ska skrivas ut på olika rader (likt exemplet ovan).

Programmet ska tolerera att filens lösenord byts ut samt att inloggningsuppgifter tillkommer, ändras eller tas bort.