---
layout: default
title: posts
---

## Newest Posts

<ul class="list posts limit-400">
{% for post in site.posts %}
	<li>
		<span>{{post.date | date: '%D'}}</span>
		<a href="{{post.url}}">{{post.title}}</a>
	</li>
{% endfor %}
</ul>

## Posts by Tag (Alphabetically)

{% capture tags %}
  {% for tag in site.tags %}
	{{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
<h3 id="{{ tag }}">{{ tag }}</h3>
<ul class="list posts" style="margin-left:1em">
{% for post in site.tags[tag] %}
	<li>
		<span>{{post.date | date: '%D'}}</span>
		<a href="{{ post.url }}">{{ post.title }}</a>
	</li>
{% endfor %}
</ul>
{% endfor %}