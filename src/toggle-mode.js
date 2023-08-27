export const home = document.getElementById("linkHome")
export const universe = document.getElementById("linkUniverse")
export const exploration = document.getElementById("linkExploration")
export const background = document.querySelector("body")

home.addEventListener("click", () => {
  background.classList.add("background")
  background.classList.remove("background1")
  background.classList.remove("background2")
  /*document.documentElement.classList.remove("background1")
  document.documentElement.classList.remove("background2")
  document.documentElement.classList.add("background")*/
  universe.classList.remove("selected")
  exploration.classList.remove("selected")
  home.classList.add("selected")
})

universe.addEventListener("click", () => {
  background.classList.remove("background")
  background.classList.add("background1")
  background.classList.remove("background2")
  /*document.documentElement.classList.remove("background")
  document.documentElement.classList.remove("background2")
  document.documentElement.classList.add("background1")*/
  home.classList.remove("selected")
  exploration.classList.remove("selected")
  universe.classList.add("selected")
})

exploration.addEventListener("click", () => {
  background.classList.remove("background")
  background.classList.remove("background1")
  background.classList.add("background2")
  /*document.documentElement.classList.remove("background")
  document.documentElement.classList.remove("background1")
  document.documentElement.classList.add("background2")*/
  home.classList.remove("selected")
  exploration.classList.add("selected")
  universe.classList.remove("selected")
})
