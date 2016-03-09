---
layout: default
title: emphaticpuma.github.io
---

<ul class="posts" id="index_posts">
    {% for post in site.posts limit:5 %}
    <li class="post__item" id="list_num_{{ forloop.index0 }}">
        <h2 class="item__title">
            <a href="{{ post.url }}">{{ post.title | capitalize }}</a>
        </h2>
        <span class="item__date">
            {{ post.date | date: '%a %d %B %Y' }}
        </span>
        <span class="item__author">
            by
            {% if post.author %}
            <a href="/{{ post.author  }}">
                {{ post.author  }}
            </a>
            {% else %}
            <a href="/about">
                Me
            </a>
            {% endif %}
        </span>
        <div class="item__content">
            {{ post.content }}
            <div class="cf"></div>
        </div>
    </li>

    {% endfor %}
</ul>
<div id="index_posts_append">
    <a id="posts_more">Load One More</a>
    <span id="posts_more_helper">or...</span>
    <a id="posts_all" href="/posts/">View Them All</a>
</div>
