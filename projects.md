---
layout: default
title: projects
---

## Projects

<div class="projects">

{% for project in site.data.projects %}

<div class="project">

	<h3>{{ project.name }}</h3>

	{% if project.desc %}

	<p>{{project.desc}}</p>

	{% endif %}

	<a href="{{ project.link }}" class="button button-primary">Repo</a>
	<a href="{{ project.site }}" class="button">site</a>
</div>


{% endfor %}

</div>