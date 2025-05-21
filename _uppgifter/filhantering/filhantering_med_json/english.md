---
layout: assignment
title: File Handling with JSON
color: green
---
A file named **numbers.json** contains a list of integers:

{% highlight json %}
[8, 4, 2, 1]
{% endhighlight %}

Your task is to create a program that, when run, reads the list from the file, doubles all the values, adds the integer 1 to the end of the list, and finally writes the updated list back to the file.

For the example above, this means that **numbers.json** will contain the following information after the first run:

{% highlight json %}
[16, 8, 4, 2, 1]
{% endhighlight %}

After the second run, the following information will be written to **numbers.json** (and so on):

{% highlight json %}
[32, 16, 8, 4, 2, 1]
{% endhighlight %}