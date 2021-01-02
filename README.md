# voxelgram
An interactive 3D heatmap (WebGL &amp; D3)

## Ideas
* Axis labels that rotate with the chart.
* Label the Brush slider
* Slice a plane (or few?) out of the volume, rotate it, allow filtering, etc. BRUSH SLIDERS FOR ALL THE DIMENSIONS!
* Animate through successive planes along any one dimension, and in reverse, allow filtering.
* UI to change dimensions.
* UI to change color scale.
* UI to load custom dataset.
* Framerate dips noticeably when dimensions are large (150x150x150 = 3.3 million voxels). Cursory profiling in Chrome seems to show it's GPU bound. Since it's periodic maybe it's a memory thing, GPU has to swap out some data for the rest? Could try lowering memory for GPU: backface culling on the CPU would halve the data the GPU needs (since only 3 of the 6 faces are visible at once).