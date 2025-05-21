---
layout: assignment
title: Geometric Shapes
color: green
---
In this assignment, you will create a script that draws rectangles and triangles of different sizes. Start with the following code:

{% highlight python linenos %}
shape = input('shape: ')
height = int(input('height: '))

# YOUR CODE BELOW
{% endhighlight %}

Shapes should be drawn using hashmarks. On line 1, the user inputs the shape of the figure:

- rectangle
- triangle

On line 2, the user inputs the figure's height. This specifies the number of rows (in the terminal) over which the figure should be printed.

For rectangles, the user also needs to specify the number of hashmarks to be drawn on each row. This is the rectangle's width:

{% highlight text %}
shape: rectangle
height: 3
width: 10

##########
##########
##########
{% endhighlight %}

Triangles should be drawn with one corner pointing upwards:

{% highlight text %}
shape: triangle
height: 4

#
##
###
####
{% endhighlight %}

A suggested solution is shown below: