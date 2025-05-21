---
layout: assignment
title: Account Generator
color: green
---
An IT administrator is developing a script to generate usernames for the people in the variable below:

{% highlight python linenos %}
# YOUR CODE ABOVE

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

Your task is to complete the script by implementing the *generate_username* function. The function should take two strings as arguments:

1.  *forename* (for example, _'Kalle'_)
2.  *surname* (for example, _'Svensson'_)

The function should return a unique username (as a string). The username should consist of three letters in the following order:

1.  The first letter of *forename*
2.  The first letter of *surname*
3.  The last letter of *surname*

The username should end with a digit (counting from 1 upwards) to prevent users from being assigned the same username.

The username should only consist of lowercase letters. If you implement the function correctly, the following output will be generated: