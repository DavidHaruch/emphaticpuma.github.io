---
layout: post
title: i3blocks configuration
tags: linux i3
---

i3blocks is a alternative status bar for i3. Compared to i3status it is much more customizable.

Install with your package manager `sudo apt-get install i3blocks`

i3blocks organizes each component of "the bar" into blocks that can be
configured separately.

Blocks are configured in the `~/.i3blocks.conf` file. `/etc/i3blocks.conf` is
the location of the default file. I would recommend copying the default to give
a base to start from. `cp /etc/i3blocks.conf ~/.i3blocks.conf`

## Time/Date


The default time/date display gives the time, but it's rather difficult to read
and not in the usual format. It also seems to only update every 5 seconds.

![i3blocks default time](/img/posts/i3blocks/time_date.png)
*default*

Who puts the year first? ISO 8601 does, [XKCD talked about
this](http://xkcd.com/1179/). However, this is really difficult to read.

Lets take a look at the default time block configuration (at the bottom of
/etc/i3blocks.conf).

    [time]
    command=date '+%Y-%m-%d %H:%M:%S'
    interval=5

We see the command `date`, then a bunch of weird text with % signs mixed in.

Those `%letter` combinations give a part of the date or time, like the year, day
of the month, second, hour, etc.

Look at `man date` or `man strftime` to find all the possible `%letter`
combinations.

    [time]
    command=date '+%D %r'          # MM/DD/YY 12hr
    # command=date '+%d/%m/%y %T'  # DD/MM/YY 24hr
    interval=1

I'm from the United States, and the date/time format we use is MM/DD/YY and 12
hour time. The command we use to get this is `date '+%D %r'`

In Europe/Everywhere else, I've seen DD/MM/YY and 24 hour time used. The command
we use to get this is `date '+%d/%m/%y %T'`

The interval sets how often the command is executed (in seconds). So for the
time block to act like a clock, we should set it to 1.

## Display Brightness (laptops)

To get brightness in our bar, we need `xbacklight`, install with your package
manager. If we run this command, we get a percentage of the maximum display
brightness, with tons of numbers after the decimal point. To get rid of the
numbers after the decimal point and add a % character, we can use the `sed` command with a regular
expression.

    $ xbacklight
    26.802634
    $ xbacklight | sed -r 's/\.w+$/%/'
    26%

To construct our block, we will need the label, command, and interval parts.

    [backlight]
    command=xbacklight | sed -r 's/\.w+$/%/'
    label=B
    interval=5

### Useful resources

* `man i3blocks`
* <https://github.com/vivien/i3blocks/blob/master/README.md>

