async function fetchs(url){
    let res= await fetch(url)
    let data =await res.json()
    console.log(data)
    return data
}

let append=async(url)=>{
    let data= await fetchs(url)
    let results=document.querySelector('#results')
    results.innerHTML=null
    console.log(data.articles)
data.articles.forEach(el => {
    
    let div=document.createElement('div')

    div.classList.add('news')
    div.addEventListener('click',()=> {
        let a=el
        console.log(a)
    localStorage.setItem('news',JSON.stringify(el) )
    window.location.href='news.html'
})
    let div1=document.createElement('div')
    let div2=document.createElement('div')
    let img=document.createElement('img')
    img.src=el.urlToImage
    let h3=document.createElement('h3')
    h3.innerText=el.title
    let p=document.createElement('p')
    p.innerText=el.description
    div1.append(img)
    div2.append(h3,p)
    div.append(div1,div2)
    results.append(div)
});
}
export{  fetchs,append}
