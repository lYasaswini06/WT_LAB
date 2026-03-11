const API = "http://localhost:3000";

function displayBooks(data){

let html="";

data.forEach(b=>{

html+=`
<div class="book">
<h3>${b.title}</h3>
<p>Author: ${b.author}</p>
<p>Category: ${b.category}</p>
<p>Price: ${b.price}</p>
<p>Rating: ${b.rating}</p>
</div>
`;

});

document.getElementById("books").innerHTML=html;

}

function searchBook(){

let title=document.getElementById("title").value;

fetch(`${API}/books/search?title=${title}`)
.then(res=>res.json())
.then(displayBooks);

}

function filterCategory(){

let cat=document.getElementById("category").value;

fetch(`${API}/books/category/${cat}`)
.then(res=>res.json())
.then(displayBooks);

}

function sortPrice(){

fetch(`${API}/books/sort/price`)
.then(res=>res.json())
.then(displayBooks);

}

function sortRating(){

fetch(`${API}/books/sort/rating`)
.then(res=>res.json())
.then(displayBooks);

}

function topBooks(){

fetch(`${API}/books/top`)
.then(res=>res.json())
.then(displayBooks);

}

function loadPage(p){

fetch(`${API}/books?page=${p}`)
.then(res=>res.json())
.then(displayBooks);

}

loadPage(1);