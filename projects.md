---
layout: default
title: projects
permalink: /projects/
---

<h1>Projects</h1>

<ul>	
{% for project in site.data.projects %}
	<li>
		<a href="{{project.link}}">
			{{project.name}}
		</a>
		<br>
		{% if project.site %}
			<a href="{{project.site}}">Website</a>
		{% endif %}
	</li>
{% endfor %}
</ul>