---
layout: assignment
title: CSV Search
color: green
---
The text file **db.csv** contains information about ten people:

{% highlight text %}
Anna,Andersson,Stockholm
Lars,Johansson,Västerås
Eva,Karlsson,Malmö
Mikael,Nilsson,Västerås
Maria,Eriksson,Malmö
Anders,Larsson,Stockholm
Karin,Olsson,Stockholm
Johan,Persson,Stockholm
Sara,Svensson,Malmö
Erik,Gustafsson,Malmö
{% endhighlight %}

Each row represents a person and consists of three columns (in the following order):

1. First name
2. Last name
3. City of residence

Create a program where the user inputs a city of residence. The program should then (by searching the file) print all rows for people who reside in that city: