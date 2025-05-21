---
layout: assignment
title: Pet Filter
color: green
---
The variable named pets contains a list of dictionaries where each dictionary represents a pet:

{% highlight python linenos %}
# YOUR CODE ABOVE

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

Your task is to complete the script by implementing the function *pet_filter*. The function takes the list of pets as an argument and should return a copy of the list where all pets that are not of type 'cat' or 'dog' have been removed.

The original list of pets must not be modified by the function. Your solution should tolerate pets being added, modified, or deleted in the future. It is important that the order of the pets is maintained in the filtered list.

When the function is implemented correctly, the script will run with the following output: