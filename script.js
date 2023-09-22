const urlKey="nX_lGJobffN_Frr2dLOdWnj25hlHPjiFEkCHpwcXL8k";

const searchFrom=document.getElementById("search-form");
const searchButton=document.getElementById("search-button");
const inputBox=document.getElementById("input-box");
const searchResult=document.getElementById("search-result");
const showMore=document.getElementById("show-more");

let inputValue="";
let page=1;

async function searchImage()
{
    inputValue=inputBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${urlKey}&per_page=30`;
    const response=await fetch(url);
    const data=await response.json();
    if(page==1)
    {
        searchResult.innerHTML="";
    }
    const results=data.results;
    if(results=="")
    {
        searchResult.innerHTML="No results were found...";
        searchResult.classList.add("noResults");
    }
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        console.log(image.src);
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        

    })
    showMore.style.display="block";
}
searchButton.addEventListener("click",(e)=>{
    e.preventDefault();
    page=1;
    searchImage();
})
showMore.addEventListener("click",(e)=>{
    page++;
    searchImage();
})