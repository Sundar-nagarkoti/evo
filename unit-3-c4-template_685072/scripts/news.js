// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
let nav=document.querySelector("#navbar")
nav.innerHTML=navbar()
let container=document.querySelector("#detailed_news")
let news=JSON.parse(localStorage.getItem('news'))
let img=document.createElement('img')
    img.src=news.urlToImage
    let h3=document.createElement('h3')
    h3.innerText=news.title
    let p=document.createElement('p')
    p.innerText=news.content
    container.append(img,h3,p)

