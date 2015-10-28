---
layout: default
title: emphaticpuma.github.io
---

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum doloremque atque quam vero, voluptatem maiores qui, quo quos ab quis porro, magnam consequatur eaque veniam deleniti dolor veritatis aperiam. Incidunt!</p>
<ul class="list posts">
	{% for post in site.posts %}
	<li>
		<span>{{ post.date | date: '%D' }}</span>
  		<a href="{{ post.url }}">{{ post.title }}</a>
	</li>
	{% endfor %}
</ul>
