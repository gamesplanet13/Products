const CART_KEY="gp_store_cart_v1",REVIEW_KEY="gp_product_reviews_v1";
const money=n=>`₹${Number(n).toLocaleString("en-IN")}`;
const readCart=()=>{try{return JSON.parse(localStorage.getItem(CART_KEY)||"{}")}catch{return {}}};
const writeCart=c=>{localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartCount()};
const updateCartCount=()=>document.querySelectorAll("[data-cart-count]").forEach(e=>e.textContent=Object.values(readCart()).reduce((a,b)=>a+b,0));
const escapeHtml=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
function addToCart(id,buy=false){const c=readCart();c[id]=(c[id]||0)+1;writeCart(c);if(buy)location.href=`order-prefill.html?buyNow=${encodeURIComponent(id)}`;else toast("Added to cart")}
function toast(message){const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1700)}
function approvedReviews(id){try{return JSON.parse(localStorage.getItem(REVIEW_KEY)||"[]").filter(r=>r.productId===id&&r.status==="approved")}catch{return []}}
function stars(n){return `<span class="stars" aria-label="${n} out of 5 stars">${"★".repeat(n)}${"☆".repeat(5-n)}</span>`}
function renderReviews(p){const reviews=approvedReviews(p.id),box=document.getElementById("reviewList");box.innerHTML=reviews.length?reviews.map(r=>`<article class="review"><div>${stars(Number(r.rating))} <b>${escapeHtml(r.name)}</b> <span class="verified">✓ Verified Purchase</span></div><p>${escapeHtml(r.text)}</p><small>Approved customer feedback</small></article>`).join(""):`<div class="review-empty"><h3>No verified reviews yet</h3><p>Only feedback from confirmed customers is published. Be the first to share your experience.</p></div>`;document.getElementById("reviewCount").textContent=`${reviews.length} approved review${reviews.length===1?"":"s"}`}
function relatedCard(p){return `<article class="card compact-card"><a class="photo product-link" href="product.html?id=${encodeURIComponent(p.id)}"><img src="images/${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" decoding="async"></a><div class="info"><span class="category">${escapeHtml(p.category)}</span><a class="title product-link" href="product.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.name)}</a><div class="price"><small>₹</small>${p.price.toLocaleString("en-IN")}</div></div></article>`}
const id=new URLSearchParams(location.search).get("id"),p=GP_PRODUCTS.find(x=>x.id===id);
if(!p){document.getElementById("productPage").innerHTML=`<div class="panel empty"><h1>Product not found</h1><p>The product link may be outdated.</p><a class="checkout-btn" href="index.html">Return to store</a></div>`}
else{
  document.title=`${p.name} — Games Planet`;
  const battery=p.battery?`<div class="product-alert">Due battery Item selected no Air or Prime delivery available.</div>`:"";
  document.getElementById("productPage").innerHTML=`<nav class="breadcrumbs"><a href="index.html">Home</a> › <a href="index.html">${escapeHtml(p.category)}</a> › <span>${escapeHtml(p.name)}</span></nav>
  <section class="product-main">
    <div class="gallery"><div class="thumbs">${p.gallery.map((img,i)=>`<button class="${i?"":"active"}" data-thumb="${img}" aria-label="View image ${i+1}"><img src="images/${img}" alt=""></button>`).join("")}</div><div class="main-photo"><img id="mainProductImage" src="images/${p.gallery[0]}" alt="${escapeHtml(p.name)}"></div></div>
    <div class="product-copy"><span class="category">${escapeHtml(p.category)}</span><h1>${escapeHtml(p.name)}</h1><div class="rating-note">Quality checked listing · <a href="#reviews">See verified feedback</a></div><hr><div class="detail-price"><small>₹</small>${p.price.toLocaleString("en-IN")}</div><p class="tax-note">Inclusive of applicable taxes. Delivery calculated at checkout.</p><p class="lead">${escapeHtml(p.description)}</p>
      <ul class="feature-list">${p.features.map(x=>`<li>✓ ${escapeHtml(x)}</li>`).join("")}</ul>${battery}
    </div>
    <aside class="buy-box"><div class="detail-price"><small>₹</small>${p.price.toLocaleString("en-IN")}</div><p class="stock">In stock</p><p>Delivery charges and available courier are shown during order pre-fill.</p><button class="detail-action add" id="detailAdd">Add to Cart</button><button class="detail-action buy" id="detailBuy">Buy Now</button><a class="detail-cart-link" href="cart.html">Open Cart</a><div class="policy-box"><b>No Return · No Refund · No Replacement</b><span>Please confirm model and compatibility before ordering.</span></div></aside>
  </section>
  <section class="trust-badges"><div><i>✓</i><b>Quality Checked</b><span>Inspected before dispatch</span></div><div><i>100%</i><b>Function Test</b><span>Where product type permits</span></div><div><i>◆</i><b>Compatibility Help</b><span>Confirm before ordering</span></div><div><i>▣</i><b>Secure Packing</b><span>Carefully packed</span></div></section>
  <section class="detail-sections"><article class="panel"><h2>Product description</h2><p>${escapeHtml(p.description)}</p><p>This Games Planet listing is prepared with clear compatibility information and a pre-dispatch quality check. Product colour, printing or minor packaging details may vary by supply batch without changing the listed function.</p><h3>Important ordering information</h3><p>Please verify the console model, connector and intended use before placing the order. Contact Games Planet on WhatsApp if you need compatibility help.</p></article>
  <article class="panel"><h2>Product information</h2><table class="spec-table"><tr><th>Product name</th><td>${escapeHtml(p.name)}</td></tr><tr><th>SKU</th><td>${escapeHtml(p.id.toUpperCase())}</td></tr><tr><th>Category</th><td>${escapeHtml(p.category)}</td></tr><tr><th>Condition</th><td>${escapeHtml(p.condition)}</td></tr><tr><th>Approx. size / pack size</th><td>${escapeHtml(p.dimensions)}</td></tr><tr><th>Approx. weight</th><td>${p.weight} g</td></tr><tr><th>Compatibility</th><td>${escapeHtml(p.compatibility)}</td></tr><tr><th>Price</th><td>${money(p.price)}</td></tr><tr><th>Policy</th><td><b>No Return, No Refund, No Replacement</b></td></tr></table></article></section>
  <section class="reviews-section panel" id="reviews"><div class="reviews-head"><div><h2>Verified Customer Reviews</h2><span id="reviewCount"></span></div><a class="feedback-button" href="feedback.html?product=${encodeURIComponent(p.id)}">Write a review</a></div><div id="reviewList"></div><p class="review-rule">Reviews are published only after order verification and approval. Demo/sample feedback is never labelled as a verified purchase.</p></section>`;
  document.querySelectorAll("[data-thumb]").forEach(b=>b.onclick=()=>{document.getElementById("mainProductImage").src=`images/${b.dataset.thumb}`;document.querySelectorAll("[data-thumb]").forEach(x=>x.classList.toggle("active",x===b))});
  document.getElementById("detailAdd").onclick=()=>addToCart(p.id);
  document.getElementById("detailBuy").onclick=()=>addToCart(p.id,true);
  renderReviews(p);
  document.getElementById("relatedGrid").innerHTML=GP_PRODUCTS.filter(x=>x.id!==p.id&&x.category===p.category).slice(0,5).map(relatedCard).join("");
}
document.getElementById("detailSearch").onsubmit=e=>{e.preventDefault();const q=document.getElementById("detailSearchInput").value.trim();location.href=`index.html?search=${encodeURIComponent(q)}`};
updateCartCount();
