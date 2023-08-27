import * as toggle from "./toggle-mode.js"
export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    const body = document.getElementById("body")
    const linkHome = document.getElementById("linkHome")
    const linkUniverse = document.getElementById("linkHome")
    const linkExploration = document.getElementById("linkExploration")
    if (pathname === "/") {
      linkUniverse.classList.remove("selected")
      linkExploration.classList.remove("selected")
      linkHome.classList.add("selected")
      body.classList.toggle("background")
    } else if (pathname === "/universe") {
      linkExploration.classList.remove("selected")
      linkUniverse.classList.add("selected")
      linkHome.classList.remove("selected")
      body.classList.toggle("background1")
    } else if (pathname === "/exploration") {
      linkExploration.classList.add("selected")
      linkUniverse.classList.remove("selected")
      linkHome.classList.remove("selected")
      body.classList.toggle("background2")
    }

    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html
      })
  }
}
