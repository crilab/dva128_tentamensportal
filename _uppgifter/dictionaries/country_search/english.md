---
layout: assignment
title: Country Search
color: green
---
The variable named countries contains a dictionary with several European countries. For each country, there is a list of cities in that country:

{% highlight python linenos %}
countries = {
    "Sweden": ["Stockholm", "Göteborg", "Malmö"],
    "Norway": ["Oslo", "Bergen", "Trondheim"],
    "England": ["London", "Birmingham", "Manchester"],
    "Germany": ["Berlin", "Hamburg", "Munich"],
    "France": ["Paris", "Marseille", "Toulouse"]
}

city = input('city > ')

# YOUR SOLUTION BELOW
{% endhighlight %}

Your task is to complete the program so that the country is printed for the city entered on line 9:

{% highlight text %}
city > Bergen
Norway
{% endhighlight %}

The search should be case-insensitive:

{% highlight text %}
city > tOuLoUsE
France
{% endhighlight %}

If the search yields no match, an error message should be printed:

{% highlight text %}
city > no_city
ERROR: not found (no_city)
{% endhighlight %}

Your solution should tolerate countries and cities being added (or removed) in the future.

A sample solution is shown below: