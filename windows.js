var cdn1 = document.createElement("script")
cdn1.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
document.getElementsByTagName("html")[0].appendChild(cdn1)

var cdn2 = document.createElement("script")
cdn2.src = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"
document.getElementsByTagName("html")[0].appendChild(cdn2)

var cdn3 = document.createElement("link")
cdn3.rel = "stylesheet"
cdn3.href = "https://code.jquery.com/ui/1.9.2/themes/base/jquery-ui.css"
document.getElementsByTagName("html")[0].appendChild(cdn3)

var topz = 69

function closeapp(element) {
element.parentElement.parentElement.remove();
}

function appfull(element) {
if (element.parentElement.parentElement.getAttribute("dataFullscreen") == "false") {
var main = element.parentElement.parentElement
main.setAttribute("dataFullscreen", "true")
main.setAttribute("dataStyle", main.style.cssText)
main.style.height = "100%"
main.style.width= "100%"
main.style.inset = "0 0 0 0"
main.style.borderRadius = "0"
$(".window").draggable({disabled: true})
$(".window").resizable({disabled: true})
} else {
var main = element.parentElement.parentElement
main.setAttribute("dataFullscreen", "false")
main.style = main.getAttribute("dataStyle")
$(".window").draggable({disabled: false})
$(".window").resizable({disabled: false})
}
}

function apptop(element) {
element.style.zIndex = topz + 1
topz = topz + 1
}

function Nightmare(config) {
if (config.title == null) return console.error("Error with config: Add a title");

if (config.type == null) return console.error("Error with config: Add a type");

config.width = config.width || 800

config.height = config.height || 600

config.theme = config.theme || "light"

if (config.type == "url" && config.url == null) return console.error("Error with config: Add a url");

if (config.type == "html" && config.html == null) return console.error("Error with config: Add html");

if (config.type == "js" && config.js == null) return console.error("Error with config: Add js");

var main = document.createElement("div")
main.style.top = (window.innerHeight / 2) - (config.height / 2) + "px"
main.style.right = (window.innerWidth / 2) - (config.width / 2) + "px"
main.style.width = String(config.width + "px")
main.style.height = String(config.height + "px")
main.setAttribute("dataFullscreen", "false")
main.setAttribute("onmousedown", "apptop(this)")
main.id = "window" + config.id
main.className = "window"
if (config.theme == "dark") main.className = "window windowdark"

var bar = document.createElement("div")
bar.className = "bar"
if (config.theme == "dark") bar.className = "bar bardark"
main.appendChild(bar)

var appname = document.createElement("div")
appname.innerText = config.title
appname.className = "appname"
bar.appendChild(appname)

var appfull = document.createElement("div")
appfull.innerText = "\u26F6"
appfull.className = "appfull"
appfull.setAttribute("onclick", "appfull(this)")
bar.appendChild(appfull)

var appclose = document.createElement("div")
appclose.innerText = "X"
appclose.className = "appclose"
appclose.setAttribute("onclick", "closeapp(this)")
bar.appendChild(appclose)

if (config.type == "url") {
var web = document.createElement("iframe")
web.className = "web"
if (config.theme == "dark") web.className = "web webdark"
web.src = config.url
main.appendChild(web)
} else if (config.type == "html") {
var html = document.createElement("div")
html.className = "html"
if (config.theme == "dark") html.className = "html htmldark"
html.innerHTML = config.html
main.appendChild(html)
} else if (config.type == "js") {
var html = document.createElement("div")
html.className = "html"
if (config.theme == "dark") html.className = "html htmldark"
main.appendChild(html)

async function injectid() {
var script = await fetch(config.js)
var text = await script.text()
text = "var appid = " + 'main.childNodes[1]\n\n' + text
eval(text)
}
injectid()

}

document.getElementsByTagName("html")[0].appendChild(main)

apptop(main)

//$(".window").draggable({handle: ".bar", containment: "window"})
$(".window").draggable({handle: ".bar"})
$(".window").resizable({handles: "n, e, s, w"})
}