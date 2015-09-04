---
layout: post
title: Using i3 window manager with Ubuntu 15.04
date: 2015-08-04
header_img: /img/i3-6.png
header_alt: a screenshot of i3 window manager with vim, zsh, and i3status 
tags:
  - linux
  - ubuntu
  - desktop
---

## What is i3?

**[i3](http://i3wm.org/)** is something called a *tiling window manager*. This means that it doesn't handle windows in the traditional 'drag-n-drop/resize' method popular in Windows, OSX, and Linux desktop environments like [GNOME](http://www.gnome.org/), [KDE](http://www.kde.org/), [LXDE](http://lxde.org/), and [Xfce](http://www.xfce.org/).

<!--excerpt_separator-->

A typical i3 experience would go something like this.

* Login, be greeted by a terminal of your choice.
* Open a web browser or another program using `Win+d`
* surprise! the window splits horizontally
* you are left with two equally sized windows.

## A Brief Installation Guide

In this guide, I will assume that you already have a desktop environment on your system. As much as I like i3, I do think that you need a *normal* desktop environment on your computer if someone else needs to use it.

Using a terminal, install i3 with `sudo apt-get install i3`, they read the prompts and enter yes. This will install i3 and the packages recommended to go alongside it.

After this, logout or reboot. Once you get to the login screen (pictured below), click on the gear icon. It will reveal the options for window manager/desktop environment. Select `i3` from the list, then login.

![gnome login screen](/post_assets/2015-08-4-ubuntu-i3/gnomelogin.png)
*You will see i3 underneath the gnome options*

For information on usage and keyboard shortcuts, put `man i3` into your terminal or view the [user's guide](http://i3wm.org/docs/userguide.html) in a web browser

## My Opinions

If I had to describe i3 in one word, it would be *utilitarian*. i3 really doesn't care at all how your windows look, all that matters is maximizing usable space.

There are plain looks, small margins and padding, and no fancy animations at all.

![i3 screenshot with terminal windows](/img/i3-6.png)

Gnome 3 uses system resources and screen space so you can have some *eye candy* to look at when using your computer. XFCE and LXDE, two lighter desktop environments still have menus, taskbars, and ui elements.

I think these useful, but inefficient forms of ui are nessecary for casual computer usage or if someone else needs to use your computer (*an OS other than windows will already be unfamiliar to most*).

***however, i3 is not for everyone, including myself.***

For me, it fills the role of being great for productivity and multitasking. But, I definitely wouldn't use it as the only window manager or desktop environment on a system.

When I casually use my computer for things like browsing the web, online shopping, watching youtube, and listening to music, I don't need all the screen "real-estate" that is available. I can deal with a few fractions of a second to see a pretty animation.

### test
