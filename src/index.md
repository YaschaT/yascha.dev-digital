---
title: 'Hello and welcome?!'
layout: 'layouts/home.html'
pagination:
  data: collections.blog
  size: 2
permalink: '{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Bekijk nieuwere posts >'
paginationNextText: 'Bekijk oudere posts >'
custom_css: 'body {background-color: #FBFBFD;}header nav ul li a.selected{color: #FBFBFD;}'
---

Deze website is aan de hand van 11ty gemaakt. Functionaliteiten als een blog en projecten staan hier gegeven op deze website.
Deze zijn allemaal verwezenlijkt tijdens de lessen van Advanced Front-End Coding in het schooljaar 2020-2021.
