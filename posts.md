---
layout: default
permalink: /posts/
---

# Posts

<ul>
{% for post in site.posts %}
<li class="post__list-small">
    <span class="">{{ post.date | date: "%D" }}</span>
    <a class="" href="{{ post.url  }}">{{ post.title  }}</a>
</li>
{% endfor %}
</ul>
