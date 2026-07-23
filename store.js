const CART_KEY="gp_store_cart_v1";
const money=n=>`₹${Number(n).toLocaleString("en-IN")}`;
const readCart=()=>{try{return JSON.parse(localStorage.getItem(CART_KEY)||"{}")}catch{return {}}};
const writeCart=c=>{localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartCount()};
const cartCount=()=>Object.values(readCart()).reduce((a,b)=>a+b,0);
function updateCartCount(){document.querySelectorAll("[data-cart-count]").forEach(e=>e.textContent=cartCount())}
function addToCart(id,goCheckout=false){const c=readCart();c[id]=(c[id]||0)+1;writeCart(c);if(goCheckout)location.href=`order-prefill.html?buyNow=${encodeURIComponent(id)}`;else toast("Added to cart")}
function toast(message){const t=document.getElementById("toast");if(!t)return;t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1700)}
function card(p,i){const href=`product.html?id=${encodeURIComponent(p.id)}`;return `<article class="card"><a class="photo product-link" href="${href}" aria-label="View ${p.name}">${p.badge?`<span class="badge">${p.badge}</span>`:""}<img src="images/${p.image}" alt="${p.name}" ${i>7?'loading="lazy" decoding="async"':`fetchpriority="${i<4?"high":"auto"}"`}></a><div class="info"><span class="category">${p.category}</span><a class="title product-link" href="${href}">${p.name}</a><div class="desc">${p.description}</div><div class="price"><small>₹</small>${p.price.toLocaleString("en-IN")}</div><div class="delivery">Delivery calculated at checkout</div><a class="details-link" href="${href}">View product details →</a><div class="actions"><button class="btn add" data-add="${p.id}">Add to Cart</button><button class="btn buy" data-buy="${p.id}">Buy Now</button></div></div></article>`}
let active="All";
function render(){const q=(document.getElementById("searchInput").value||"").trim().toLowerCase();const list=GP_PRODUCTS.filter(p=>(active==="All"||p.category===active)&&(!q||`${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q)));document.getElementById("productGrid").innerHTML=list.length?list.map(card).join(""):`<div class="empty"><h3>No matching products</h3><p>Try another search or category.</p></div>`;document.getElementById("resultCount").textContent=`${list.length} products`;document.getElementById("sectionTitle").textContent=active;document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>addToCart(b.dataset.add));document.querySelectorAll("[data-buy]").forEach(b=>b.onclick=()=>addToCart(b.dataset.buy,true))}
document.getElementById("categories").innerHTML=GP_CATEGORIES.map(c=>`<button type="button" class="${c==="All"?"active":""}" data-cat="${c}">${c}</button>`).join("");
document.querySelectorAll("[data-cat]").forEach(b=>b.onclick=()=>{active=b.dataset.cat;document.querySelectorAll("[data-cat]").forEach(x=>x.classList.toggle("active",x===b));render()});
document.getElementById("searchForm").onsubmit=e=>{e.preventDefault();active="All";render();document.getElementById("catalogue").scrollIntoView()};
document.getElementById("searchInput").addEventListener("input",render);
const initialSearch=new URLSearchParams(location.search).get("search");if(initialSearch)document.getElementById("searchInput").value=initialSearch;
updateCartCount();render();
