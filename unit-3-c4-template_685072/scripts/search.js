// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
import {fetchs,append} from "../components/fetch.js";
let nav=document.querySelector('#navbar')
nav.innerHTML=navbar()



// let append=async()=>{
//     let data= await fetchs(url)
//     let results=document.querySelector('#results')
//     results.innerHTML=null
//     console.log(data.articles)
// data.articles.forEach(el => {
    
//     let div=document.createElement('div')
//     div.classList.add('news')
//     div.addEventListener('click',(el)=> {

// localStorage.setItem('news',JSON.stringify(el))
// window.location.href='news.html'})

//     let img=document.createElement('img')
//     img.src=el.urlToImage
//     let h3=document.createElement('h3')
//     h3.innerText=el.content
//     let p=document.createElement('p')
//     p.innerText=el.description
//     div.append(img,h3,p)
//     results.append(div)
// });
// }
let keyword=localStorage.getItem('keyword')
let url=`https://masai-mock-api.herokuapp.com/news?q=${keyword}`

append(url)
























let search=document.querySelector("#search_input")
search.addEventListener("keydown",(e)=>{ return enterHandler(e)})
 function enterHandler(e){
    
    if(e.key=="Enter"){
        let keyword=localStorage.setItem('keyword',search.value)
        append()
    }
}

