---
layout: post
title: An euler's method program
date: 2016-03-01
tags:
  - math
  - programming
---

[Euler's method](https://en.wikipedia.org/wiki/Euler_method) is a numerical method to *approximate* the solution to a [differential equation](https://en.wikipedia.org/wiki/Differential_equation).

![Euler's method illustration from wikipedia, pictures a graph of points connected by linear segments meant to approximate the true solution](https://upload.wikimedia.org/wikipedia/commons/1/10/Euler_method.svg){: .small .fl-right}

It applies when the differential equation takes the form

$$ \frac{dy}{dx} = F(x,y) $$

and has a solution point which we can call

$$ (x_0,y_0) $$

<div class="cf"></div>


![Illustration from wikipedia that shows the influence of step size](https://upload.wikimedia.org/wikipedia/commons/2/2d/Numerical_integration_illustration%2C_step%3D1.svg){: .x-small .fl-left}

Somewhat similar to [newton's method](https://en.wikipedia.org/wiki/Newton%27s_method), the smaller "step" between the lines, the closer the approximation should be to the true solution. (in newton's method this would be the number of iterations)

Because we are using a computer instead of doing the arithmetic by hand, we can do a very small step size and still get the results quickly.

<div class="cf"></div>

The general form follows, where $$h$$ is the step


$$ x_1 = x_0 + h $$

$$ y_1 = y_0 + hF(x_0,y_0) $$

this is repeated until you reach the end of the bound and 


{% highlight javascript %}

// euler stuff

var step = 0.1;
var fix = 5; // fix math to five places
var bound = {
    min: 0,
    max: 500
};

var dy_dx = function (x,y) {
    return y;

}

var x = 0;
var y = 1;

var e_result = [];

for (var i=bound.min;i<bound.max-step;i+=step) {
    y = y + step * dy_dx(x,y);
    x = x + step;
    // console.log(x.toFixed(fix));
    // console.log(y.toFixed(fix));
    // console.log("---") >
    e_result.push({x:x,y:y})
}

console.log(e_result);

{% endhighlight %}

