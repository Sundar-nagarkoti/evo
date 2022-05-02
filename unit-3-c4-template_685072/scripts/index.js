// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
import {fetchs,append} from "../components/fetch.js";
let nav=document.querySelector("#navbar")
nav.innerHTML=navbar()

let search=document.querySelector("#search_input")
let results=document.querySelector('#results')
search.addEventListener("keydown",(e)=>{ return enterHandler(e)})
 function enterHandler(e){
    
    if(e.key=="Enter"){
        let keyword=localStorage.setItem('keyword',search.value)
        window.location.href="./search.html"
        
    }
}
let contries=document.querySelector("#sidebar").children

contries=[...contries]
contries.forEach(element => {
    element.addEventListener('click',async function(){
    let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${element.id}`
append(url)
})

});
// function append(data){
// console.log(data)
//     results.innerHTML=null
//     data.articles.forEach(el => {
    
//         let div=document.createElement('div')
//         div.classList.add('news')
//         div.addEventListener('click',(el)=> {
    
//     localStorage.setItem('news',JSON.stringify(el))
//     window.location.href='news.html'})
    
//         let img=document.createElement('img')
//         img.src=el.urlToImage
//         let h3=document.createElement('h3')
//         h3.innerText=el.content
//         let p=document.createElement('p')
//         p.innerText=el.description
//         div.append(img,h3,p)
//         results.append(div)
//     });
// }

    let ur=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${`in`}`
    append(ur)