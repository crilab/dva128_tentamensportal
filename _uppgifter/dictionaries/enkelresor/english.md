---
layout: assignment
title: One-Way Flights
color: green
---
An airline has stored the upcoming week's one-way flights in the variable named flights:

{% highlight python linenos %}
flights = [
    { 'from': 'Stockholm', 'to': 'Göteborg' },
    { 'from': 'Göteborg', 'to': 'Malmö' },
    { 'from': 'Malmö', 'to': 'Västerås' },
    { 'from': 'Göteborg', 'to': 'Stockholm' },
    { 'from': 'Västerås', 'to': 'Göteborg' },
    { 'from': 'Stockholm', 'to': 'Malmö' },
    { 'from': 'Göteborg', 'to': 'Västerås' }
]

destinations = {}

# YOUR SOLUTION BELOW
{% endhighlight %}

The airline needs a quick way to list all destinations for a departure city and has therefore defined a dictionary in a variable named destinations. Your task is to populate it with data.

All departure cities (the key *"from"* in flights) should be set as keys in the variable. As the value, a list should be set with all arrival cities (the key *"to"* in flights) for that departure city.

The airline wants to reuse your code in the future. Your solution therefore needs to tolerate flights being added, modified, and deleted. This includes flights to and from new cities.

If your solution is correct, the variable named destinations will contain the following: