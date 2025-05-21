---
layout: assignment
title: Comparison of lists
color: green
---
A mathematician needs a tool to compare **list_a** with **list_b**:

{% highlight python linenos %}
list_a = [4, 1, 9, 4, 7, 9, 3, 8, 5, 8]
list_b = [4, 1, 1, 4, 7, 9, 6, 8, 5, 8]

# YOUR SOLUTION BELOW
{% endhighlight %}

The program should print all integers from both lists side by side, vertically. Positions where the lists differ should be marked with an arrow (like the example below).

Your solution should tolerate future changes to the lists, but you can always assume that **list_a** will have the same length as **list_b**.