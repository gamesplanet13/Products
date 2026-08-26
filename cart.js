const CART_KEY="gp_store_cart_v1",money=n=>`₹${Number(n).toLocaleString("en-IN")}`;

const read=()=>{
  try{
    const value=JSON.parse(localStorage.getItem(CART_KEY)||"{}");
    return value && typeof value==="object" ? value : {};
  }catch{
    return {};
  }
};

const save=c=>{
  localStorage.setItem(CART_KEY,JSON.stringify(c));
  render();
};

function update(id,delta){
  const c=read();
  c[id]=Math.max(0,(Number(c[id])||0)+delta);
  if(!c[id])delete c[id];
  save(c);
}

function removeItem(id){
  const c=read();
  delete c[id];
  save(c);
}

function buildCheckoutItems(entries){
  return entries.map(([p,quantity])=>{
    quantity=Math.max(1,Number(quantity)||1);
    const unitPrice=Number(p.price)||0;
    const unitWeight=Number(p.weight)||100;
    return {
      id:p.id||"",
      name:p.name||"Product",
      product:p.name||"Product",
      variant:p.variant||p.model||"",
      quantity,
      unitPrice,
      lineTotal:unitPrice*quantity,
      unitWeight,
      lineWeight:unitWeight*quantity,
      dimensions:p.dimensions||p.size||""
    };
  });
}

function goToOrderPrefill(entries){
  const items=buildCheckoutItems(entries);
  if(!items.length){
    alert("Cart is empty.");
    return;
  }

  const productTotal=items.reduce((s,i)=>s+i.lineTotal,0);
  const totalWeight=items.reduce((s,i)=>s+i.lineWeight,0);
  const totalQuantity=items.reduce((s,i)=>s+i.quantity,0);

  const orderSummary={
    source:"cart",
    items,
    productTotal,
    totalWeight,
    totalQuantity,
    paymentMode:"prepaid",
    savedAt:Date.now()
  };

  try{
    localStorage.setItem("gp_order_summary",JSON.stringify(orderSummary));
  }catch(err){
    console.warn("Could not save gp_order_summary; URL payload will still be used.",err);
  }

  const params=new URLSearchParams({
    source:"cart",
    product:items.map(i=>`${i.name} × ${i.quantity}`).join(" | "),
    variant:items.length>1 ? "Multiple selected products" : (items[0].variant||"As selected"),
    base:String(productTotal),
    quantity:String(totalQuantity),
    weight:String(totalWeight),
    cart:JSON.stringify(items)
  });

  location.href=`order-prefill.html?${params.toString()}`;
}

function render(){
  const c=read();
  const entries=Object.entries(c)
    .map(([id,qty])=>[GP_PRODUCTS.find(p=>p.id===id),qty])
    .filter(x=>x[0]);

  const count=entries.reduce((n,[,q])=>n+(Number(q)||0),0);
  const total=entries.reduce((n,[p,q])=>n+(Number(p.price)||0)*(Number(q)||0),0);

  document.querySelectorAll("[data-cart-count]").forEach(x=>x.textContent=count);

  const itemCount=document.getElementById("itemCount");
  const subtotal=document.getElementById("subtotal");
  const checkoutBtn=document.getElementById("checkoutBtn");
  const cartItems=document.getElementById("cartItems");

  if(itemCount)itemCount.textContent=count;
  if(subtotal)subtotal.textContent=money(total);

  if(checkoutBtn){
    checkoutBtn.style.pointerEvents=count?"auto":"none";
    checkoutBtn.style.opacity=count?"1":".45";
    checkoutBtn.href=count?"#":"order-prefill.html";
  }

  if(cartItems){
    cartItems.innerHTML=entries.length
      ? entries.map(([p,q])=>`<div class="cart-item">
          <img src="images/${p.image}" alt="${p.name}">
          <div>
            <h3>${p.name}</h3>
            <div class="delivery">In stock</div>
            <p><b>${money(p.price)}</b></p>
            <div class="qty">
              <button aria-label="Decrease ${p.name}" data-minus="${p.id}">−</button>
              <span>${q}</span>
              <button aria-label="Increase ${p.name}" data-plus="${p.id}">+</button>
            </div>
            <button class="remove" data-remove="${p.id}">Remove</button>
          </div>
          <strong>${money((Number(p.price)||0)*(Number(q)||0))}</strong>
        </div>`).join("")
      : `<div class="empty">
          <h2>Your cart is empty</h2>
          <p>Add products from the store to begin.</p>
          <a class="checkout-btn" href="index.html">Start shopping</a>
        </div>`;
  }

  document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>update(b.dataset.minus,-1));
  document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>update(b.dataset.plus,1));
  document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>removeItem(b.dataset.remove));

  if(checkoutBtn){
    checkoutBtn.onclick=e=>{
      e.preventDefault();
      if(!count)return;
      goToOrderPrefill(entries);
    };
  }
}

render();
