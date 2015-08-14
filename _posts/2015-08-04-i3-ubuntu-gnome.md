---
layout: post
title: Using i3 window manager with Ubuntu 15.04
date: 2015-08-04
---

## What is i3?

**[i3](http://i3wm.org/)** is something called a *tiling window manager*. This means that it doesn't handle windows in the traditional 'drag-n-drop/resize' method popular in Windows, OSX, and Linux desktop environments like [GNOME](http://www.gnome.org/), [KDE](http://www.kde.org/), [LXDE](http://lxde.org/), and [Xfce](http://www.xfce.org/).

<!--excerpt_separator-->

A typical i3 experience would go something like this.

* Login, be greeted by a terminal of your choice.
* Open a web browser or another program using `Win+d`
* surprise! the window splits horizontally
* you are left with two equally sized windows.

## Installation

In this guide, I will assume that you already have a desktop environment on your system. As much as I like i3, I do think that you need a *normal* desktop environment on your computer if someone else needs to use it.

Using a terminal, install i3 with `sudo apt-get install i3`, they read the prompts and enter yes. This will install i3 and the packages recommended to go alongside it.

After this, logout or reboot. Once you get to the login screen (pictured below), click on the gear icon. It will reveal the options for window manager/desktop environment. Select `i3` from the list, then login.

![gnome login screen](/post_assets/2015-08-4-ubuntu-i3/gnomelogin.png)
*You will see i3 underneath the gnome options*

You should be presented with a terminal