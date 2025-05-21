---
layout: assignment
title: The Birdwatcher
color: green
---
A statistician who enjoys birdwatching in their spare time needs a tool to keep track of which bird species use the garden's bird feeder. Your task is to implement this tool.

Create a program where the statistician inputs bird species (one bird species per input). After each input, the program should print out:

- the number of birds of that species that have been registered
- the total number of birds registered

Example:

{% highlight text %}
Bird: Greenfinch
(Greenfinch) 1 out of 1

Bird: Bullfinch
(Bullfinch) 1 out of 2

Bird: Greenfinch
(Greenfinch) 2 out of 3

Bird: Chaffinch
(Chaffinch) 1 out of 4

Bird: Bullfinch
(Bullfinch) 2 out of 5

Bird: Greenfinch
(Greenfinch) 3 out of 6
{% endhighlight %}

The solution should not limit which species can be input. Keep in mind that new bird species may be added in the future.

Solutions that store all inputs in a list will not receive full marks. Instead, choose a data type that makes better use of the computer's memory and processing power.