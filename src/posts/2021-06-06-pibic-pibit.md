---
title         : "Iniciação científica e tecnológica 2021–2022"
date          : 2021-06-06
author_profile: true
toc           : false
categories    : ["Iniciação científica e tecnológica"]
tags          : ["plano de trabalho", "projeto de pesquisa"]
excerpt       : "Planos de trabalho finalizados"
classes       : wide
entries_layout: grid
entries_start : 2021-01-01
entries_end   : 2021-12-31
---

{% assign entries_layout = page.entries_layout | default: 'list' %}

## Iniciação científica ##

<div class="entries-{{ entries_layout }}">
  {%- include "partials/documents-collection.html" collection='pibic' sort_by=page.sort_by sort_order=page.sort_order type=entries_layout entries_start=page.entries_start entries_end=page.entries_end -%}
</div>

<div style="clear: both">&nbsp;</div>

## Iniciação tecnológica ##

<div class="entries-{{ entries_layout }}">
  {%- include "partials/documents-collection.html" collection='pibiti' sort_by=page.sort_by sort_order=page.sort_order type=entries_layout entries_start=page.entries_start entries_end=page.entries_end -%}
</div>

<div style="clear: both">&nbsp;</div>

