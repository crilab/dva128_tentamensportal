---
layout: assignment
title: Pet Tracker
color: red
---
Start with the following script:

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

# YOUR CODE BELOW
{% endhighlight %}

The variable named pet_owners contains a list of dictionaries, where each dictionary represents a pet owner. This dictionary has two keys:

| Key  | Description           |
| ---- | --------------------- |
| name | The pet owner's name  |
| id   | A unique identifier   |

The variable named pets contains a list of dictionaries, where each dictionary represents a pet. This dictionary also has two keys:

| Key      | Description        |
| -------- | ------------------ |
| name     | The pet's name     |
| owner_id | The pet owner's ID |

By comparing the variables, we can conclude that Lars is the owner of Doris and Luna because the pets' owner_id matches Lars's id.

Your task is to complete the script above so that the names of all pets are printed for the pet owner whose name the user enters at line 15. Keep in mind that the user inputs the pet owner's name (not their ID).

Your solution should be robust to pets and pet owners being added or removed in the future.

Try entering the name of a pet owner (for example, Anna) into the solution template below: