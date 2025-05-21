---
layout: assignment
title: Receipt Writer
color: green
---
The variable named cart contains items that a user has purchased from a webshop:

{% highlight python linenos %}
cart = [
    {
        'name': 'T-shirt',
        'quantity': 2,
        'cost': 149
    },
    {
        'name': 'Shorts',
        'quantity': 1,
        'cost': 199
    },
    {
        'name': 'Socks',
        'quantity': 3,
        'cost': 49
    },
    {
        'name': 'Swimsuit',
        'quantity': 1,
        'cost': 249
    }
]

# YOUR SOLUTION BELOW
{% endhighlight %}

Items are represented by a dictionary with three keys:

| Key      | Description                               |
| -------- | ----------------------------------------- |
| name     | The item's name                           |
| quantity | Number of items of this type purchased    |
| cost     | The item's cost (per unit)                |

Your task is to show how to print a receipt (like the example below) by interpreting the variable.

All items should be included in the receipt with their corresponding attributes (name, quantity, and cost).

Your program needs to calculate and print the total cost of the order. A shipping fee of 39 kronor is added to the order and needs to be included in the total cost.

Your solution should be flexible enough to handle items being added, removed, or modified in the cart list in the future.