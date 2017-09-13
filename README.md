# d3 Polybrush v4

This is a modified version of the polybrush plugin for d3, originaly created by Geoffrey T. Bell, to make it compatible with d3-v4. 

The d3-v3 based plugin is forked from: [https://gist.github.com/gtb104/3667340](https://gist.github.com/gtb104/3667340)

The changes include adapting d3-v4 api and a few minor fixes. 

Now the plugin shall be instantiated like d3.brush() in d3-v4 api.
```javascript
var brush = d3.polybrush();

d3.select("svg")
  .append("g")
  .call(brush);
```
The rest will be same as using the d3-v3 version of the plugin.
```
Usage:
Click to add an anchor point, double click to close the selection.
Drag the selection to reposition it.
Double click outside the selection to clear it.
```

Try it on [bl.ocks.org](http://bl.ocks.org/junwang23/bfcf242c09f0aaa0d6a27cdc84285a8e)