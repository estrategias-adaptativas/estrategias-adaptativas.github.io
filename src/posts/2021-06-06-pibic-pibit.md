---
title         : "Iniciação científica e tecnológica 2021–2022"
date          : 2021-06-06
valid         : 2021
author_profile: false
toc           : false
categories    : ["iniciação científica e tecnológica"]
tags          : ["plano de trabalho", "projeto de pesquisa"]
description: "Planos de trabalho finalizados"
sidebar:
  nav: "mapa"
layout: "layouts/pibic_pibiti.njk"
---

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

