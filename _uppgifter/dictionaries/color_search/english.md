---
layout: assignment
title: Color Search
color: green
---
The variable named countries contains a dictionary with a number of European countries. From this variable, you can determine which colors are part of each country's flag:

{% highlight python linenos %}
countries = {
    'Denmark': ['red', 'white'],
    'Finland': ['white', 'blue'],
    'France': ['blue', 'white', 'red'],
    'Germany': ['black', 'red', 'yellow'],
    'Iceland': ['blue', 'white', 'red'],
    'Netherlands': ['red', 'white', 'blue'],
    'Norway': ['red', 'white', 'blue'],
    'Sweden': ['yellow', 'blue'],
    'Ukraine': ['blue', 'yellow']
}

colors = input('colors > ').split()

# YOUR SOLUTION BELOW
{% endhighlight %}

On line 13, the user inputs one or more colors (separated by spaces). For example:

{% highlight text %}
blue red
{% endhighlight %}

Your task is to complete the program so that all nations whose flags contain the colors input by the user are printed.

{% highlight text %}
France
Iceland
Netherlands
Norway
{% endhighlight %}

Your solution should tolerate countries and colors being added, changed, or removed in the future.

A suggested solution is shown below: