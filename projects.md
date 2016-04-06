---
layout: default
permalink: /projects/
---

# Projects
<ul class="projects__list card-column">
{% for project in site.data.projects %}
<li class="card project">
    {% if project.img %}
    <div class="card__img-container">
        <img class="card__img" src="{{ project.img }}" alt="">
    </div>
    {% endif %}
    {% if project.category %}
        <h6 class="card__category">{{project.category}}</h6>
    {% endif %}
    <h3 class="card__title">{{project.name}}</h3>
    <p class="card__desc">{{project.desc}}</p>
    <div class="card__buttons">
        {% if project.link %}<a class="button button-inline button-small" href="{{project.link}}">project repository</a>{% endif %}
        {% if project.site %}<a class="button button-inline button-small" href="{{project.site}}">website</a>{% endif %}
    </div>
</li>
{% endfor %}
</ul>
