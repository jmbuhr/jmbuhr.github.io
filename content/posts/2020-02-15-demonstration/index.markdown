---
title: "demonstration"
excerpt: |
  Testing Rmarkdown features.
date: 11-26-2020
bibliography: references.bib
---

<script src="{{< blogdown/postref >}}index_files/fitvids/fitvids.min.js"></script>
<script src="{{< blogdown/postref >}}index_files/htmlwidgets/htmlwidgets.js"></script>
<script src="{{< blogdown/postref >}}index_files/jquery/jquery.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/datatables-css/datatables-crosstalk.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/datatables-binding/datatables.js"></script>
<link href="{{< blogdown/postref >}}index_files/dt-core/css/jquery.dataTables.min.css" rel="stylesheet" />
<link href="{{< blogdown/postref >}}index_files/dt-core/css/jquery.dataTables.extra.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/dt-core/js/jquery.dataTables.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/crosstalk/css/crosstalk.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/crosstalk/js/crosstalk.min.js"></script>
<script src="{{< blogdown/postref >}}index_files/htmlwidgets/htmlwidgets.js"></script>
<script src="{{< blogdown/postref >}}index_files/plotly-binding/plotly.js"></script>
<script src="{{< blogdown/postref >}}index_files/typedarray/typedarray.min.js"></script>
<script src="{{< blogdown/postref >}}index_files/jquery/jquery.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/crosstalk/css/crosstalk.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/crosstalk/js/crosstalk.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/plotly-htmlwidgets-css/plotly-htmlwidgets.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/plotly-main/plotly-latest.min.js"></script>
<script src="{{< blogdown/postref >}}index_files/htmlwidgets/htmlwidgets.js"></script>
<script src="{{< blogdown/postref >}}index_files/d3/d3.min.js"></script>
<script src="{{< blogdown/postref >}}index_files/dagre/dagre-d3.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/mermaid/dist/mermaid.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/mermaid/dist/mermaid.slim.min.js"></script>
<link href="{{< blogdown/postref >}}index_files/DiagrammeR-styles/styles.css" rel="stylesheet" />
<script src="{{< blogdown/postref >}}index_files/chromatography/chromatography.js"></script>
<script src="{{< blogdown/postref >}}index_files/DiagrammeR-binding/DiagrammeR.js"></script>

# Tests

## Citations

R Core Team (2020)

## Math

`$$\alpha$$`

`\(\alpha\)`

## Preview Image

``` r
plt <- ggplot2::ggplot(ggplot2::mpg, ggplot2::aes(displ, cty)) +
  ggplot2::geom_point()
plt
```

<img src="./featured-1.png" width="672" />

## Details

<details>

``` r
print("hello world")
```

    ## [1] "hello world"

</details>

## p5

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.1/addons/p5.sound.min.js"></script>
<link rel="stylesheet" type="text/css" href="p5_style.css">
<script src="sketch.js"></script>
<script src="puck.js"></script>
<script src="paddle.js"></script>

**w** and **s** move the left paddle, **o** and **l** move the right paddle.

<div id="sketch-holder">

</div>

## Xaringan Slides

``` r
xaringanExtra::embed_xaringan("/slides/test")
```

<div class="shareagain" style="min-width:300px;margin:1em auto;">
<iframe src="/slides/test" width="1600" height="900" style="border:2px solid currentColor;" loading="lazy" allowfullscreen></iframe>
<script>fitvids('.shareagain', {players: 'iframe'});</script>
</div>

## DT

``` r
DT::datatable(head(iris))
```

<div id="htmlwidget-1" style="width:100%;height:auto;" class="datatables html-widget"></div>
<script type="application/json" data-for="htmlwidget-1">{"x":{"filter":"none","data":[["1","2","3","4","5","6"],[5.1,4.9,4.7,4.6,5,5.4],[3.5,3,3.2,3.1,3.6,3.9],[1.4,1.4,1.3,1.5,1.4,1.7],[0.2,0.2,0.2,0.2,0.2,0.4],["setosa","setosa","setosa","setosa","setosa","setosa"]],"container":"<table class=\"display\">\n  <thead>\n    <tr>\n      <th> <\/th>\n      <th>Sepal.Length<\/th>\n      <th>Sepal.Width<\/th>\n      <th>Petal.Length<\/th>\n      <th>Petal.Width<\/th>\n      <th>Species<\/th>\n    <\/tr>\n  <\/thead>\n<\/table>","options":{"columnDefs":[{"className":"dt-right","targets":[1,2,3,4]},{"orderable":false,"targets":0}],"order":[],"autoWidth":false,"orderClasses":false}},"evals":[],"jsHooks":[]}</script>

## Plotly

``` r
print("test")
```

    ## [1] "test"

``` r
plt <- ggplot2::ggplot(ggplot2::mpg, ggplot2::aes(displ, cty)) +
  ggplot2::geom_point()
plotly::ggplotly(plt)
```

<div id="htmlwidget-2" style="width:672px;height:480px;" class="plotly html-widget"></div>
<script type="application/json" data-for="htmlwidget-2">{"x":{"data":[{"x":[1.8,1.8,2,2,2.8,2.8,3.1,1.8,1.8,2,2,2.8,2.8,3.1,3.1,2.8,3.1,4.2,5.3,5.3,5.3,5.7,6,5.7,5.7,6.2,6.2,7,5.3,5.3,5.7,6.5,2.4,2.4,3.1,3.5,3.6,2.4,3,3.3,3.3,3.3,3.3,3.3,3.8,3.8,3.8,4,3.7,3.7,3.9,3.9,4.7,4.7,4.7,5.2,5.2,3.9,4.7,4.7,4.7,5.2,5.7,5.9,4.7,4.7,4.7,4.7,4.7,4.7,5.2,5.2,5.7,5.9,4.6,5.4,5.4,4,4,4,4,4.6,5,4.2,4.2,4.6,4.6,4.6,5.4,5.4,3.8,3.8,4,4,4.6,4.6,4.6,4.6,5.4,1.6,1.6,1.6,1.6,1.6,1.8,1.8,1.8,2,2.4,2.4,2.4,2.4,2.5,2.5,3.3,2,2,2,2,2.7,2.7,2.7,3,3.7,4,4.7,4.7,4.7,5.7,6.1,4,4.2,4.4,4.6,5.4,5.4,5.4,4,4,4.6,5,2.4,2.4,2.5,2.5,3.5,3.5,3,3,3.5,3.3,3.3,4,5.6,3.1,3.8,3.8,3.8,5.3,2.5,2.5,2.5,2.5,2.5,2.5,2.2,2.2,2.5,2.5,2.5,2.5,2.5,2.5,2.7,2.7,3.4,3.4,4,4.7,2.2,2.2,2.4,2.4,3,3,3.5,2.2,2.2,2.4,2.4,3,3,3.3,1.8,1.8,1.8,1.8,1.8,4.7,5.7,2.7,2.7,2.7,3.4,3.4,4,4,2,2,2,2,2.8,1.9,2,2,2,2,2.5,2.5,2.8,2.8,1.9,1.9,2,2,2.5,2.5,1.8,1.8,2,2,2.8,2.8,3.6],"y":[18,21,20,21,16,18,18,18,16,20,19,15,17,17,15,15,17,16,14,11,14,13,12,16,15,16,15,15,14,11,11,14,19,22,18,18,17,18,17,16,16,17,17,11,15,15,16,16,15,14,13,14,14,14,9,11,11,13,13,9,13,11,13,11,12,9,13,13,12,9,11,11,13,11,11,11,12,14,15,14,13,13,13,14,14,13,13,13,11,13,18,18,17,16,15,15,15,15,14,28,24,25,23,24,26,25,24,21,18,18,21,21,18,18,19,19,19,20,20,17,16,17,17,15,15,14,9,14,13,11,11,12,12,11,11,11,12,14,13,13,13,21,19,23,23,19,19,18,19,19,14,15,14,12,18,16,17,18,16,18,18,20,19,20,18,21,19,19,19,20,20,19,20,15,16,15,15,16,14,21,21,21,21,18,18,19,21,21,21,22,18,18,18,24,24,26,28,26,11,13,15,16,17,15,15,15,16,21,19,21,22,17,33,21,19,22,21,21,21,16,17,35,29,21,19,20,20,21,18,19,21,16,18,17],"text":["displ: 1.8<br />cty: 18","displ: 1.8<br />cty: 21","displ: 2.0<br />cty: 20","displ: 2.0<br />cty: 21","displ: 2.8<br />cty: 16","displ: 2.8<br />cty: 18","displ: 3.1<br />cty: 18","displ: 1.8<br />cty: 18","displ: 1.8<br />cty: 16","displ: 2.0<br />cty: 20","displ: 2.0<br />cty: 19","displ: 2.8<br />cty: 15","displ: 2.8<br />cty: 17","displ: 3.1<br />cty: 17","displ: 3.1<br />cty: 15","displ: 2.8<br />cty: 15","displ: 3.1<br />cty: 17","displ: 4.2<br />cty: 16","displ: 5.3<br />cty: 14","displ: 5.3<br />cty: 11","displ: 5.3<br />cty: 14","displ: 5.7<br />cty: 13","displ: 6.0<br />cty: 12","displ: 5.7<br />cty: 16","displ: 5.7<br />cty: 15","displ: 6.2<br />cty: 16","displ: 6.2<br />cty: 15","displ: 7.0<br />cty: 15","displ: 5.3<br />cty: 14","displ: 5.3<br />cty: 11","displ: 5.7<br />cty: 11","displ: 6.5<br />cty: 14","displ: 2.4<br />cty: 19","displ: 2.4<br />cty: 22","displ: 3.1<br />cty: 18","displ: 3.5<br />cty: 18","displ: 3.6<br />cty: 17","displ: 2.4<br />cty: 18","displ: 3.0<br />cty: 17","displ: 3.3<br />cty: 16","displ: 3.3<br />cty: 16","displ: 3.3<br />cty: 17","displ: 3.3<br />cty: 17","displ: 3.3<br />cty: 11","displ: 3.8<br />cty: 15","displ: 3.8<br />cty: 15","displ: 3.8<br />cty: 16","displ: 4.0<br />cty: 16","displ: 3.7<br />cty: 15","displ: 3.7<br />cty: 14","displ: 3.9<br />cty: 13","displ: 3.9<br />cty: 14","displ: 4.7<br />cty: 14","displ: 4.7<br />cty: 14","displ: 4.7<br />cty:  9","displ: 5.2<br />cty: 11","displ: 5.2<br />cty: 11","displ: 3.9<br />cty: 13","displ: 4.7<br />cty: 13","displ: 4.7<br />cty:  9","displ: 4.7<br />cty: 13","displ: 5.2<br />cty: 11","displ: 5.7<br />cty: 13","displ: 5.9<br />cty: 11","displ: 4.7<br />cty: 12","displ: 4.7<br />cty:  9","displ: 4.7<br />cty: 13","displ: 4.7<br />cty: 13","displ: 4.7<br />cty: 12","displ: 4.7<br />cty:  9","displ: 5.2<br />cty: 11","displ: 5.2<br />cty: 11","displ: 5.7<br />cty: 13","displ: 5.9<br />cty: 11","displ: 4.6<br />cty: 11","displ: 5.4<br />cty: 11","displ: 5.4<br />cty: 12","displ: 4.0<br />cty: 14","displ: 4.0<br />cty: 15","displ: 4.0<br />cty: 14","displ: 4.0<br />cty: 13","displ: 4.6<br />cty: 13","displ: 5.0<br />cty: 13","displ: 4.2<br />cty: 14","displ: 4.2<br />cty: 14","displ: 4.6<br />cty: 13","displ: 4.6<br />cty: 13","displ: 4.6<br />cty: 13","displ: 5.4<br />cty: 11","displ: 5.4<br />cty: 13","displ: 3.8<br />cty: 18","displ: 3.8<br />cty: 18","displ: 4.0<br />cty: 17","displ: 4.0<br />cty: 16","displ: 4.6<br />cty: 15","displ: 4.6<br />cty: 15","displ: 4.6<br />cty: 15","displ: 4.6<br />cty: 15","displ: 5.4<br />cty: 14","displ: 1.6<br />cty: 28","displ: 1.6<br />cty: 24","displ: 1.6<br />cty: 25","displ: 1.6<br />cty: 23","displ: 1.6<br />cty: 24","displ: 1.8<br />cty: 26","displ: 1.8<br />cty: 25","displ: 1.8<br />cty: 24","displ: 2.0<br />cty: 21","displ: 2.4<br />cty: 18","displ: 2.4<br />cty: 18","displ: 2.4<br />cty: 21","displ: 2.4<br />cty: 21","displ: 2.5<br />cty: 18","displ: 2.5<br />cty: 18","displ: 3.3<br />cty: 19","displ: 2.0<br />cty: 19","displ: 2.0<br />cty: 19","displ: 2.0<br />cty: 20","displ: 2.0<br />cty: 20","displ: 2.7<br />cty: 17","displ: 2.7<br />cty: 16","displ: 2.7<br />cty: 17","displ: 3.0<br />cty: 17","displ: 3.7<br />cty: 15","displ: 4.0<br />cty: 15","displ: 4.7<br />cty: 14","displ: 4.7<br />cty:  9","displ: 4.7<br />cty: 14","displ: 5.7<br />cty: 13","displ: 6.1<br />cty: 11","displ: 4.0<br />cty: 11","displ: 4.2<br />cty: 12","displ: 4.4<br />cty: 12","displ: 4.6<br />cty: 11","displ: 5.4<br />cty: 11","displ: 5.4<br />cty: 11","displ: 5.4<br />cty: 12","displ: 4.0<br />cty: 14","displ: 4.0<br />cty: 13","displ: 4.6<br />cty: 13","displ: 5.0<br />cty: 13","displ: 2.4<br />cty: 21","displ: 2.4<br />cty: 19","displ: 2.5<br />cty: 23","displ: 2.5<br />cty: 23","displ: 3.5<br />cty: 19","displ: 3.5<br />cty: 19","displ: 3.0<br />cty: 18","displ: 3.0<br />cty: 19","displ: 3.5<br />cty: 19","displ: 3.3<br />cty: 14","displ: 3.3<br />cty: 15","displ: 4.0<br />cty: 14","displ: 5.6<br />cty: 12","displ: 3.1<br />cty: 18","displ: 3.8<br />cty: 16","displ: 3.8<br />cty: 17","displ: 3.8<br />cty: 18","displ: 5.3<br />cty: 16","displ: 2.5<br />cty: 18","displ: 2.5<br />cty: 18","displ: 2.5<br />cty: 20","displ: 2.5<br />cty: 19","displ: 2.5<br />cty: 20","displ: 2.5<br />cty: 18","displ: 2.2<br />cty: 21","displ: 2.2<br />cty: 19","displ: 2.5<br />cty: 19","displ: 2.5<br />cty: 19","displ: 2.5<br />cty: 20","displ: 2.5<br />cty: 20","displ: 2.5<br />cty: 19","displ: 2.5<br />cty: 20","displ: 2.7<br />cty: 15","displ: 2.7<br />cty: 16","displ: 3.4<br />cty: 15","displ: 3.4<br />cty: 15","displ: 4.0<br />cty: 16","displ: 4.7<br />cty: 14","displ: 2.2<br />cty: 21","displ: 2.2<br />cty: 21","displ: 2.4<br />cty: 21","displ: 2.4<br />cty: 21","displ: 3.0<br />cty: 18","displ: 3.0<br />cty: 18","displ: 3.5<br />cty: 19","displ: 2.2<br />cty: 21","displ: 2.2<br />cty: 21","displ: 2.4<br />cty: 21","displ: 2.4<br />cty: 22","displ: 3.0<br />cty: 18","displ: 3.0<br />cty: 18","displ: 3.3<br />cty: 18","displ: 1.8<br />cty: 24","displ: 1.8<br />cty: 24","displ: 1.8<br />cty: 26","displ: 1.8<br />cty: 28","displ: 1.8<br />cty: 26","displ: 4.7<br />cty: 11","displ: 5.7<br />cty: 13","displ: 2.7<br />cty: 15","displ: 2.7<br />cty: 16","displ: 2.7<br />cty: 17","displ: 3.4<br />cty: 15","displ: 3.4<br />cty: 15","displ: 4.0<br />cty: 15","displ: 4.0<br />cty: 16","displ: 2.0<br />cty: 21","displ: 2.0<br />cty: 19","displ: 2.0<br />cty: 21","displ: 2.0<br />cty: 22","displ: 2.8<br />cty: 17","displ: 1.9<br />cty: 33","displ: 2.0<br />cty: 21","displ: 2.0<br />cty: 19","displ: 2.0<br />cty: 22","displ: 2.0<br />cty: 21","displ: 2.5<br />cty: 21","displ: 2.5<br />cty: 21","displ: 2.8<br />cty: 16","displ: 2.8<br />cty: 17","displ: 1.9<br />cty: 35","displ: 1.9<br />cty: 29","displ: 2.0<br />cty: 21","displ: 2.0<br />cty: 19","displ: 2.5<br />cty: 20","displ: 2.5<br />cty: 20","displ: 1.8<br />cty: 21","displ: 1.8<br />cty: 18","displ: 2.0<br />cty: 19","displ: 2.0<br />cty: 21","displ: 2.8<br />cty: 16","displ: 2.8<br />cty: 18","displ: 3.6<br />cty: 17"],"type":"scatter","mode":"markers","marker":{"autocolorscale":false,"color":"rgba(0,0,0,1)","opacity":1,"size":5.66929133858268,"symbol":"circle","line":{"width":1.88976377952756,"color":"rgba(0,0,0,1)"}},"hoveron":"points","showlegend":false,"xaxis":"x","yaxis":"y","hoverinfo":"text","frame":null}],"layout":{"margin":{"t":26.2283105022831,"r":7.30593607305936,"b":40.1826484018265,"l":37.2602739726027},"plot_bgcolor":"rgba(235,235,235,1)","paper_bgcolor":"rgba(255,255,255,1)","font":{"color":"rgba(0,0,0,1)","family":"","size":14.6118721461187},"xaxis":{"domain":[0,1],"automargin":true,"type":"linear","autorange":false,"range":[1.33,7.27],"tickmode":"array","ticktext":["2","3","4","5","6","7"],"tickvals":[2,3,4,5,6,7],"categoryorder":"array","categoryarray":["2","3","4","5","6","7"],"nticks":null,"ticks":"outside","tickcolor":"rgba(51,51,51,1)","ticklen":3.65296803652968,"tickwidth":0.66417600664176,"showticklabels":true,"tickfont":{"color":"rgba(77,77,77,1)","family":"","size":11.689497716895},"tickangle":-0,"showline":false,"linecolor":null,"linewidth":0,"showgrid":true,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"zeroline":false,"anchor":"y","title":{"text":"displ","font":{"color":"rgba(0,0,0,1)","family":"","size":14.6118721461187}},"hoverformat":".2f"},"yaxis":{"domain":[0,1],"automargin":true,"type":"linear","autorange":false,"range":[7.7,36.3],"tickmode":"array","ticktext":["10","15","20","25","30","35"],"tickvals":[10,15,20,25,30,35],"categoryorder":"array","categoryarray":["10","15","20","25","30","35"],"nticks":null,"ticks":"outside","tickcolor":"rgba(51,51,51,1)","ticklen":3.65296803652968,"tickwidth":0.66417600664176,"showticklabels":true,"tickfont":{"color":"rgba(77,77,77,1)","family":"","size":11.689497716895},"tickangle":-0,"showline":false,"linecolor":null,"linewidth":0,"showgrid":true,"gridcolor":"rgba(255,255,255,1)","gridwidth":0.66417600664176,"zeroline":false,"anchor":"x","title":{"text":"cty","font":{"color":"rgba(0,0,0,1)","family":"","size":14.6118721461187}},"hoverformat":".2f"},"shapes":[{"type":"rect","fillcolor":null,"line":{"color":null,"width":0,"linetype":[]},"yref":"paper","xref":"paper","x0":0,"x1":1,"y0":0,"y1":1}],"showlegend":false,"legend":{"bgcolor":"rgba(255,255,255,1)","bordercolor":"transparent","borderwidth":1.88976377952756,"font":{"color":"rgba(0,0,0,1)","family":"","size":11.689497716895}},"hovermode":"closest","barmode":"relative"},"config":{"doubleClick":"reset","showSendToCloud":false},"source":"A","attrs":{"3f4748812d9e":{"x":{},"y":{},"type":"scatter"}},"cur_data":"3f4748812d9e","visdat":{"3f4748812d9e":["function (y) ","x"]},"highlight":{"on":"plotly_click","persistent":false,"dynamic":false,"selectize":false,"opacityDim":0.2,"selected":{"opacity":1},"debounce":0},"shinyEvents":["plotly_hover","plotly_click","plotly_selected","plotly_relayout","plotly_brushed","plotly_brushing","plotly_clickannotation","plotly_doubleclick","plotly_deselect","plotly_afterplot","plotly_sunburstclick"],"base_url":"https://plot.ly"},"evals":[],"jsHooks":[]}</script>

However, while this options brings back plotly,
it also disables math rendering for this document on the site.

## Math

`$$sd = \sqrt{\frac{\sum_{i=0}^{n}{(x_i-\bar x)^2}}{(n-1)} }$$`

## diagrammeR

``` r
DiagrammeR::mermaid(
"
graph TB
A-->B
A-->C
C-->E
B-->D
C-->D
D-->F
E-->F
")
```

<div id="htmlwidget-3" style="width:672px;height:480px;" class="DiagrammeR html-widget"></div>
<script type="application/json" data-for="htmlwidget-3">{"x":{"diagram":"\ngraph TB\nA-->B\nA-->C\nC-->E\nB-->D\nC-->D\nD-->F\nE-->F\n"},"evals":[],"jsHooks":[]}</script>

<div id="refs" class="references csl-bib-body hanging-indent">

<div id="ref-rcoreteamLanguageEnvironmentStatistical2020" class="csl-entry">

R Core Team. 2020. *R: A Language and Environment for Statistical Computing*. Vienna, Austria: R Foundation for Statistical Computing.

</div>

</div>
