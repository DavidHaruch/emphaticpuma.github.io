---
layout: default
title: emphaticpuma.github.io
---

<ul class="posts" id="index_posts">
    {% for post in site.posts limit:2 %}
    <li class="post__item" id="list_num_{{ forloop.index0 }}">
        <h2 class="item__title">
            <a href="{{ post.url }}">{{ post.title }}</a>
        </h2>
        <div class="item__meta">
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
        </div>
        <div class="item__content">
            {{ post.content }}
            <div class="cf"></div>
        </div>
    </li>

    {% endfor %}
</ul>
<div id="index_posts_spinner" class="spinner spinner-wave" style="display:none">
    <div class="wave-1"></div>
    <div class="wave-2"></div>
    <div class="wave-3"></div>
</div>
<div id="index_posts_append">
    <a id="posts_more" class="button">Load One More</a>
    <span id="posts_more_helper">or...</span>
    <a id="posts_all" class="button" href="/posts/">View Them All</a>
</div>

