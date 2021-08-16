---
title: "Making a Darkmode for your distill site"
excerpt: |
  We build a darkmode for our distill site using css and a bit of java script.
date: 2021-03-14
output:
  distill::distill_article:
    self_contained: false
---



# Join the Dark Side!

... we have cookies.

![From: [knowyourmeme](https://knowyourmeme.com/photos/954929-come-to-the-dark-side)](cookies-featured.png)

There are many motivations to adding a dark mode to your site.
I just like it, when things look consistent.
So I also want my site to reflect that.
But because at the same time I am also not very good at making things look consistent, which is why I mostly outsource design choices as much as I can.
Here, for example, this means that I took the color values for the dark theme from the amazing [nord](https://www.nordtheme.com/) color palette.

But let's get into the practical side!
How do we add a dark theme to complement our light theme to our distill site?

# Adding the button, css and java script

First, we want a button that a user can click on to change the theme.
I opted for the `adjust` button from [Font Awesome](https://fontawesome.com/).
There is not much to do here, because those are already available in distill.
Open up your `_site.yml` file and add an icon to the navbar:

```
navbar:
  right:
    - icon: fas fa-adjust
```

While we are in this file, let's also add the `includes` for the html file which will make the button work:

```
output:
  distill::distill_article:
    includes:
      after_body: "_after_body.html"
```

> Note: I am omitting all the other things in our `.yml` file here and only show, what is being added.
> But I include the indentation-levels above the thing being added to show where to put it.

This is what `_after_body.html` looks like:

```
<script>
const darkmodeToggle = document.getElementsByClassName("fas fa-adjust")[0];
let theme = localStorage.getItem("theme");

if (!theme) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches ) {
    theme = "dark";
  } else {
    theme = "light";
  }
}
setTheme();

function switchTheme() {
  if (theme === "light") {
    theme = "dark";
  } else {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
  setTheme();
  console.log(theme);
}

function setTheme() {
  if (theme === "dark") {
    document.body.classList.add('darkmode');
  } else {
    document.body.classList.remove('darkmode');
  }
}

darkmodeToggle.addEventListener('click', switchTheme)
</script>
```

Unfortunately, the only way I found to refer to the darkmode toggle icon in the navbar was by class name.
I could not find a way to give it an id from `_site.yml`.
However, this should be fine because the navbar is usually the first thing on the page and the script refers to the first element of class `fas fa-adjust` that it can find.
It is also important to have this script be included after the body, so that the rest of the site can load first before the script tries to find the button.
Typically you would do this using a script file and sourcing it with the option `defer`, but sourcing a script file doesn't work here due to the way distill changes file-path's between top-level sites and posts.
This is why the complete script is in the html here.
The script adds a class `.darkmode` to the html body (and removes it when toggled off).
This choice is first based on browser preferences and then saved to local storage.

The last thing to modify is our `theme.css` to make use of this `.darkmode` class.
For each thing we want to change about our theme when it get's dark, we take the corresponding class and the darkmode class and add our styling e.g.

```
.darkmode d-article,
.darkmode d-appendix,
.darkmode body {
  background-color: black;
  color: white;
}
```

You can have a look at my `theme.css` file for inspiration on what thing you need to change (though the css could be way cleaner): <https://github.com/jmbuhr/jmbuhr.github.io/blob/master/theme.css>

