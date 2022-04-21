---
layout: assignment
title: Lösenordshanteraren
color: red
---
I filen **passwords.json** lagrar en användare sina inloggningsuppgifter för olika hemsidor:

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

Din uppgift är att implementera en lösenordshanterare som gör uppslag i filen.

Inloggningsuppgifterna skyddas av ett gemensamt lösenord (nyckeln *master_password*). Användaren måste mata in detta lösenord för att tillåtas göra uppslag:

{% highlight test %}
Master password: s3cr3t
SUCCESS: authorized
{% endhighlight %}

När användaren angett korrekt lösenord görs uppslag genom att användaren matar in domännamnet för hemsidan:

{% highlight test %}
Domain: socialnetwork.example.com
-----
username: johan
password: abc123
-----
{% endhighlight %}

Användarnamn och lösenord ska skrivas ut på olika rader (likt exemplet ovan). Programmet ska tolerera att det gemensamma lösenordet (nyckeln *master_password*) byts ut samt att inloggningsuppgifter tillkommer, ändras och tas bort.