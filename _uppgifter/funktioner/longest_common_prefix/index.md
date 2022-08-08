---
layout: assignment
title: Longest Common Prefix
color: green
---
Utgå från följande kod:

{% highlight python linenos %}
# DIN KOD OVAN

a = input('a = ')
b = input('b = ')
print('-----')
c = longest_common_prefix(a, b)
print('LCP:', c)
{% endhighlight %}

Din uppgift är att slutföra scriptet genom att implementera funktionen longest_common_prefix. Funktionen ska ta två strängar som argument (a och b).

Funktionen ska returnera en sträng med samtliga inledande boktäver som a delar med b. Om a inte delar några inledande bokstäver med b ska en tom sträng returneras.

{% highlight text %}
longest_common_prefix('hund', 'hus')        -> 'hu'
longest_common_prefix('vanlig', 'vansklig') -> 'van'
longest_common_prefix('kanin', 'katt')      -> 'ka'
longest_common_prefix('python', 'go')       -> ''
longest_common_prefix('cykel', 'cykla')     -> 'cyk'
{% endhighlight %}

Testkör gärna lösningsförslaget nedan: