# d3 Polybrush v4

This is a modified version of the polybrush plugin, originaly created by Geoffrey T. Bell, for [d3.js](https://d3js.org/) to make it compatible with d3-4.x-api. 

The d3-3.x based plugin is forked from: [https://gist.github.com/gtb104/3667340](https://gist.github.com/gtb104/3667340)

The changes include adapting to d3-4.x-api and a few minor fixes. 

Now the plugin can be instantiated like d3.brush() in [d3-4.x-api](https://github.com/d3/d3-brush).
```javascript
var brush = d3.polybrush()
  .x({x_scale})
  .y({y_scale});

d3.select("svg")
  .append("g")
  .call(brush);
```
Please keep in mind that the ```extent``` in the polybrush is very different from that in d3-brush. So, the working area of the brush can only be assigned by the ```range``` of the ```{x_scale}``` and ```{y_scale}```.

Three events are dispatched, which are ```start```, ```brush```, and ```end```, consistent with the events of d3-brush. The event names are a bit different in the d3-3.x based version.

The rest is the same as using the d3-3.x version of the plugin.
```
Usage:
Click to add an anchor point, double click to close the selection.
Drag the selection to reposition it.
Double click outside the selection to clear it.
```

Try it on [bl.ocks.org](http://bl.ocks.org/junwang23/bfcf242c09f0aaa0d6a27cdc84285a8e)