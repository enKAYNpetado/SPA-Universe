export const background1 = document.getElementById("section1")
export const background2 = document.getElementById("section2")
export const background3 = document.getElementById("section3")
export const background4 = document.getElementById("section4")


background1.addEventListener("click", () => {
  document.documentElement.classList.remove("background1")
  document.documentElement.classList.remove("background2")
  document.documentElement.classList.add("background")
  background2.classList.remove("selected")
  background3.classList.remove("selected")
  background1.classList.add("selected")
})

background2.addEventListener("click", () => {
  document.documentElement.classList.remove("background")
  document.documentElement.classList.remove("background2")
  document.documentElement.classList.add("background1")
  background1.classList.remove("selected")
  background3.classList.remove("selected")
  background2.classList.add("selected")
})

background3.addEventListener("click", () => {
  document.documentElement.classList.remove("background")
  document.documentElement.classList.remove("background1")
  document.documentElement.classList.add("background2")
  background1.classList.remove("selected")
  background3.classList.add("selected")
  background2.classList.remove("selected")
})
