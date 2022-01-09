# Nightmare Window
The window system used in Nightmare

### Setup
Add the js and css CDN and create a new window

```html
<script src="https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/FogNetwork/Nightmare-Windows/windows.css">
```
```js
new Nightmare({
"title": "Example",
"type": "url",
"url": "https://example.com",
"width": 600,
"height": 400,
})
```

### Advanced
```js
new Nightmare({
"title": "Example", //Window Title - Required
"type": "html", //URL, Html or Js - Required
"url": "https://example.com", //For url
"html": "<button>hi</button>", //For html
"js": "https://example.com/script.js", //For js url
"width": 800, //Width - No quotes
"height": 600, //Height - No quotes
"theme": "dark" //Light or Dark
})
```

### Notes
When creating a js app it will inject a var called `appid` which is the window. You can append a element inside using `appid.appendChild(element)`

### Usage
If you wish to use Nightmare Windows commercially (on your service) you must include credit to Nightmare Windows somewhere on your service