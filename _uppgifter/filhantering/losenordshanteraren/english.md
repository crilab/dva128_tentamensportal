---
layout: assignment
title: Password Manager
color: red
---
In a file named **passwords.json**, a user stores their login credentials for various websites:

{% highlight json %}
{
    "master_password": "s3cr3t",
    "passwords": {
        "socialnetwork.example.com": {
            "username": "johan",
            "password": "abc123"
        },
        "school.example.com": {
            "username": "jsn1337",
            "password": "def456"
        }
    }
}
{% endhighlight %}

Your task is to implement a password manager that retrieves account information from the file.

To be allowed to retrieve account information, the user first needs to enter the file's password. The file's password is stored under the key *"master_password"*:

{% highlight test %}
Master password: s3cr3t
SUCCESS: authorized
{% endhighlight %}

Once the user is authenticated, lookups are made by entering the domain name of the website whose account information you want to retrieve:

{% highlight test %}
Domain: socialnetwork.example.com
-----
username: johan
password: abc123
-----
{% endhighlight %}

Username and password should be printed on separate lines (like the example above).

The program must tolerate the file's password being changed, as well as login credentials being added, changed, or removed.