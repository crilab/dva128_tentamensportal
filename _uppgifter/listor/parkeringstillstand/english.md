---
layout: assignment
title: Parking Permit
color: green
---
In this assignment, you will create a program that keeps track of which students have been granted parking permits for the university's parking. Start from the following code:

{% highlight python linenos %}
granted_parking_permits = ['910101-1234', '820202-5678']

# YOUR SOLUTION BELOW
{% endhighlight %}

Students found in the variable named **granted_parking_permits** have previously been granted parking permits.

The program should support two operations:

| Operation | Description |
| --------- | ----------- |
| grant     | Grant a parking permit |
| check     | Check if a student has already been granted a parking permit |

It should not be possible to grant a parking permit to the same student multiple times. Attempting to do so should display an error message:

{% highlight text %}
command > grant
student > 910101-1234
ERROR: existing parking permit for student
{% endhighlight %}

It is not a requirement to ensure that the user inputs a valid personal identification number.

See the proposed solution below: