---
layout: default
title: tags
permalink: /tags/
---

# Tags

<ul class="tag-list">
{% for tag in site.tags %}
{% assign this_tag_posts = tag | last %}
{% assign this_tag = tag | first %}
<li class="tag-list__item">
<h3 class="m0 tag__title" id="{{ this_tag }}">{{ this_tag }}</h3>

<ul class="posts tag__posts">
{% for post in site.posts %}
{% if post.tags contains this_tag %}
    <li class="tag__item"><span class="date">{{ post.date | date: "%D" }}</span><a href="{{post.url}}">{{ post.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
</li>
{% endfor %}
</ul>
