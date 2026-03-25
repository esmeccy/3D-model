# Human Eyeball 3D Model Viewer

An interactive 3D model of the human eyeball built with [model-viewer](https://modelviewer.dev/).

## Features

- Rotate and inspect a 3D eyeball model with camera controls
- Clickable hotspots on the model for each eye part
- Side panel buttons (Pupil, Iris, Cornea, Sclera, Retina) with descriptions
- "Learn more" link for each selected part

## Tech Stack

- HTML / CSS / JavaScript
- [`<model-viewer>`](https://modelviewer.dev/) web component for 3D rendering
- `.glb` 3D model file

## Usage

Open `index.html` in a browser (use a local server to load the `.glb` model correctly).

```bash
npx serve .
```

Then visit `http://localhost:3000`.
