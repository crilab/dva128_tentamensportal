---
layout: assignment
title: Team Assigner
color: green
---
A PE teacher is trying to create a script to keep track of which students have not been assigned to any team during PE lessons:

{% highlight python linenos %}
all_students = [
    'Anna',
    'Lars',
    'Eva',
    'Mikael',
    'Maria',
    'Anders'
]

team_a = [
    'Anna',
    'Maria'
]

team_b = [
    'Eva',
    'Anders'
]

# YOUR SOLUTION BELOW
{% endhighlight %}

The script contains three variables:

| Variable     | Description |
| ------------ | ----------- |
| all_students | All students who will participate in a PE lesson |
| team_a       | Students belonging to team A |
| team_b       | Students belonging to team B |

Your task is to complete the script so that the names of all students who are not assigned to a team are printed (all names from **all_students** that are in neither **team_a** nor **team_b**).

Your solution should tolerate names being added or removed from all lists.