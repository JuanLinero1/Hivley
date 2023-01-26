const input      = document.querySelector(".header__input")
const categories = document.querySelector(".container__categories")
const Info       = document.querySelector(".container__info")

input.placeholder = `what are you looking for?  ${window.localStorage.getItem("Name")}`

// dynamic categories

const categoriesArr = [
  {
    category: "featured", 
    images: [
      {
        id: "ball",
        link: "/images/content/Rectangle 10.png"
      },
      {
        id: "ball",
        link: "/images/content/Rectangle 10.png"
      },
      {
        id: "ball",
        link: "/images/content/Rectangle 10.png"
      }
    ]
  },
  {
    category: "graphic and design", 
    images: [
      {
        id: "ball",
        link: "/images/content/Rectangle 11.png"
      },
      {
        id: "ball",
        link: "/images/content/Rectangle 10.png"
      },
      {
        id: "ball",
        link: "/images/content/Rectangle 10.png"
      }
    ]
  },
  {
    category: "graphic and design", 
    images: [
      {
        id: "ball",
        link: "/images/content/Rectangle 11.png"
      },
      {
        id: "ball",
        link: "/images/content/Rectangle 10.png"
      },
      {
        id: "ball",
        link: "/images/content/Rectangle 10.png"
      }
    ]
  }
]

const info = val => Info.innerHTML += `<h1>${val}</h1>`

const img  = (link, id) => { 
  Info.innerHTML += 
  `
    <img src="${link}"></img>
  `

} 

for(let i = 0; i < categoriesArr.length; i++){
  info(categoriesArr[i].category)

  console.log(categoriesArr[i].category)
  for(let j = 0; j < (categoriesArr[i].images).length; j++){
    console.log(categoriesArr[i].images[j])
    img(categoriesArr[i].images[j].link, categoriesArr[i].images[j].id)
  }
} 

