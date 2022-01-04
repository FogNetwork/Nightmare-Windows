# Nightmare Window
The window system used in Nightmare

### Setup
Add the js and css CDN and create a new window

```html
<script src="https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.css">
```
```js
var window = new Nightmare({
"id": "0",
"title": "Example",
"type": "url",
"url": "https://example.com",
"width": 600,
"height": 400,
})
```

### Advanced
```js
var window = new Nightmare({
"id": "0", //App ID - Required
"title": "Example", //Window Title - Required
"type": "html", //URL, Html or Js - Required
"url": "https://example.com", //For url
"html": "<button>hi</button>", //For html
"js": "https://example.com/script.js", //For js url
"width": 800, //Width - No quotes
"height": 600, //Height - No quotes
"theme": "dark" //Light or Dark
})