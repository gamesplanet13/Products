const CART_KEY="gp_store_cart_v1";
const CUSTOMER_KEY="gp_customer_details_v2";
const UPI_ID="paytmqr5hyx5o@ptys";
const UPI_NAME="Surender Kaur";
const WHATSAPP_PHONE="917983624797";
const ORIGIN={pin:"244901",lat:28.805,lng:79.016};
const COD_ALLOW_MIN=1399;
const COD_FREE_THRESHOLD=1899;
const COD_MID_CHARGE=99;
const money=n=>`₹${Math.round(Number(n)||0).toLocaleString("en-IN")}`;
const couriers={
  prepaid:{
    surface:[["Trackon.in",100],["ShreeMaruti.com",100],["Speed Post",150],["Delhivery",300],["Blue Dart",300],["Ecom Express",300]],
    air:[["Trackon Air",150],["ShreeMaruti Air",150]],
    prime:[["Trackon Prime",200]]
  },
  cod:{surface:[["Delhivery COD",599]]}
};
let pincodeData={},cart={},orderId=makeOrderId(),lastEstimate=null;
try{cart=JSON.parse(localStorage.getItem(CART_KEY)||"{}")}catch{}

const el=id=>document.getElementById(id);
const entries=()=>Object.entries(cart).map(([id,qty])=>[GP_PRODUCTS.find(p=>p.id===id),qty]).filter(x=>x[0]);
const selectedPayment=()=>document.querySelector('input[name="paymentMode"]:checked')?.value||"prepaid";
const selectedDelivery=()=>document.querySelector('input[name="delivery"]:checked')?.value||"surface";
function saveCart(){localStorage.setItem(CART_KEY,JSON.stringify(cart));render()}
function qty(id,d){cart[id]=Math.max(0,(cart[id]||0)+d);if(!cart[id])delete cart[id];saveCart()}
function makeOrderId(){const d=new Date(),pad=n=>String(n).padStart(2,"0");return `${pad(d.getDate())}${pad(d.getMonth()+1)}${d.getFullYear()}${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}00`}
function toast(message){const t=el("toast");t.textContent=message;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}
function escapeHtml(s){return String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}

function productSubtotal(){return entries().reduce((n,[p,q])=>n+p.price*q,0)}
function codCharge(subtotal){if(subtotal<COD_ALLOW_MIN)return null;return subtotal>=COD_FREE_THRESHOLD?0:COD_MID_CHARGE}
function codAdvance(total){return Math.min(total,Math.max(500,Math.ceil(total*.10)))}
function refreshMode(){
  const mode=selectedPayment(),subtotal=productSubtotal(),fee=codCharge(subtotal);
  if(mode==="cod"&&fee===null){document.querySelector('input[value="prepaid"]').checked=true;toast("COD ₹1,399 से कम order पर available नहीं है.");return refreshMode()}
  document.querySelectorAll(".payment-mode").forEach(x=>x.classList.toggle("selected",x.querySelector("input").checked));
  el("codRule").textContent=fee===null?"COD ₹1,399 से कम order पर available नहीं है.":subtotal>=COD_FREE_THRESHOLD?"COD charge ₹0 — eligible order value.":"COD charge ₹99 — order value ₹1,399 से ₹1,898.";
  if(mode==="cod"){
    document.querySelector('input[name="delivery"][value="surface"]').checked=true;
    document.querySelectorAll("[data-fast]").forEach(x=>x.hidden=true);
  }else{
    const battery=entries().some(([p])=>p.battery);
    document.querySelectorAll("[data-fast]").forEach(x=>x.hidden=battery);
  }
  refreshDeliverySelection();
  refreshCouriers();
}
function refreshDeliverySelection(){document.querySelectorAll(".delivery-option").forEach(x=>x.classList.toggle("selected",x.querySelector("input").checked))}
function refreshCouriers(){
  const mode=selectedPayment(),type=mode==="cod"?"surface":selectedDelivery();
  const list=(couriers[mode]&&couriers[mode][type])||[];
  const current=el("courier").value;
  el("courier").innerHTML=list.map(([name,rate])=>`<option value="${rate}" data-name="${escapeHtml(name)}">${escapeHtml(name)} — ${money(rate)}/kg</option>`).join("");
  if([...el("courier").options].some(o=>o.value===current))el("courier").value=current;
  calculate();
}
function calculate(){
  const list=entries(),subtotal=productSubtotal();
  const grams=list.reduce((n,[p,q])=>n+p.weight*q,0);
  const kg=Math.max(1,Math.ceil(grams/1000));
  const delivery=kg*Number(el("courier").value||0);
  const mode=selectedPayment();
  const fee=mode==="cod"?(codCharge(subtotal)||0):0;
  const grand=subtotal+delivery+fee;
  const payable=mode==="cod"?codAdvance(grand):grand;
  const rest=mode==="cod"?Math.max(0,grand-payable):0;
  el("productTotal").textContent=money(subtotal);
  el("weight").textContent=`${kg} kg`;
  el("deliveryCharge").textContent=money(delivery);
  el("codFeeRow").hidden=mode!=="cod";
  el("codFee").textContent=money(fee);
  el("grandTotal").textContent=money(grand);
  el("payNowLabel").textContent=mode==="cod"?"Advance to pay now":"Pay now";
  el("payNowAmount").textContent=money(payable);
  el("restOnDelivery").hidden=mode!=="cod";
  el("restOnDelivery").textContent=`${money(rest)} balance on delivery`;
  el("payableHeading").textContent=`Pay ${money(payable)}`;
  el("qrAmount").textContent=money(payable);
  el("qrCaption").textContent=mode==="cod"?"COD advance payment":"Prepaid order payment";
  const link=upiLink(payable,`${mode==="cod"?"Advance":"Prepaid"} Games Planet Order ${orderId}`);
  el("openUpi").href=link;
  renderQr(link);
  return{list,subtotal,grams,kg,delivery,fee,grand,payable,rest,mode};
}
function render(){
  const list=entries(),count=list.reduce((n,[,q])=>n+q,0),battery=list.some(([p])=>p.battery);
  document.querySelectorAll("[data-cart-count]").forEach(x=>x.textContent=count);
  el("batteryNote").hidden=!battery;
  if(battery&&selectedDelivery()!=="surface")document.querySelector('input[name="delivery"][value="surface"]').checked=true;
  el("checkoutItems").innerHTML=list.length?list.map(([p,q])=>`<div class="mini"><a href="product.html?id=${encodeURIComponent(p.id)}"><img src="images/${p.image}" alt="${escapeHtml(p.name)}"></a><div><b>${escapeHtml(p.name)}</b><div class="qty checkout-qty"><button type="button" data-minus="${p.id}">−</button><span>${q}</span><button type="button" data-plus="${p.id}">+</button></div></div><strong>${money(p.price*q)}</strong></div>`).join(""):`<div class="empty"><p>Your cart is empty.</p><a class="back" href="index.html">Return to store</a></div>`;
  document.querySelectorAll("[data-minus]").forEach(b=>b.onclick=()=>qty(b.dataset.minus,-1));
  document.querySelectorAll("[data-plus]").forEach(b=>b.onclick=()=>qty(b.dataset.plus,1));
  refreshMode();
}

function upiLink(amount,note){return `upi://pay?${new URLSearchParams({pa:UPI_ID,pn:UPI_NAME,am:String(Math.round(amount||0)),cu:"INR",tn:note}).toString()}`}
function renderQr(text){
  try{const qr=qrcode(0,"M");qr.addData(text);qr.make();el("upiQr").src=qr.createDataURL(6,10)}
  catch{el("upiQr").removeAttribute("src");el("upiQr").alt="QR could not be generated"}
}
function downloadQr(){
  const a=document.createElement("a");a.href=el("upiQr").src;a.download=`Games-Planet-UPI-${orderId}.gif`;document.body.appendChild(a);a.click();a.remove()
}
function customer(){return["name","mobile","alt","email","house","landmark","address","pincode","state","city","postoffice"].reduce((o,id)=>(o[id]=el(id).value.trim(),o),{})}
function validateCustomer(){
  if(!el("checkoutForm").reportValidity())return false;
  const c=customer();
  if(!/^[6-9]\d{9}$/.test(c.mobile)){alert("Please enter a valid 10-digit mobile number.");el("mobile").focus();return false}
  if(c.alt&&!/^[6-9]\d{9}$/.test(c.alt)){alert("Please enter a valid alternate mobile number.");el("alt").focus();return false}
  if(!lastEstimate){alert("Valid PIN code डालें ताकि distance और ETA calculate हो सके.");el("pincode").focus();return false}
  localStorage.setItem(CUSTOMER_KEY,JSON.stringify(c));return true
}
function orderText(){
  const c=customer(),x=calculate(),courier=el("courier").selectedOptions[0]?.dataset.name||"";
  const eta=x.mode==="cod"?lastEstimate.codEta:lastEstimate.prepaidEta;
  const dates=x.mode==="cod"?lastEstimate.codDates:lastEstimate.prepaidDates;
  const lines=[
    `${x.mode==="cod"?"🔴 Partial COD":"🟢 Prepaid"} Order on WhatsApp`,
    "",`Order ID: ${orderId}`,`Name: ${c.name}`,`Mobile: ${c.mobile}`,`Alt Mobile: ${c.alt}`,`Email: ${c.email}`,
    "",`Address: ${c.house}, ${c.address}`,`Landmark: ${c.landmark}`,`Pincode: ${c.pincode}`,`State: ${c.state}`,`District/City: ${c.city}`,`Post Office: ${c.postoffice}`,
    "","📦 Product Summary",...x.list.map(([p,q],i)=>`${i+1}) ${p.name} x${q} = ${money(p.price*q)}`),
    "",`Products: ${money(x.subtotal)}`,`Courier: ${courier} / ${selectedDelivery()}`,`Delivery: ${money(x.delivery)}`,x.mode==="cod"?`COD Charge: ${money(x.fee)}`:"",`Order Total: ${money(x.grand)}`,x.mode==="cod"?`Advance Paid: ${money(x.payable)}`:`Amount Paid: ${money(x.payable)}`,x.mode==="cod"?`Rest on Delivery: ${money(x.rest)}`:"",
    "",`UPI/UTR: ${el("utr").value.trim()||"Not entered"}`,`📏 Distance: ${lastEstimate.distance} km`,`⏳ ${x.mode==="cod"?"COD":"Prepaid"} ETA: ${eta}`,`📅 Estimated Delivery: ${dates}`
  ];
  return lines.filter(v=>v!=="").join("\n")
}

function haversine(lat1,lon1,lat2,lon2){const R=6371,dLat=(lat2-lat1)*Math.PI/180,dLon=(lon2-lon1)*Math.PI/180;const a=Math.sin(dLat/2)**2+Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLon/2)**2;return 2*R*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}
function etaByDistance(d){if(d<=30)return[1,1];if(d<=60)return[1,2];if(d<=100)return[2,3];if(d<=200)return[3,4];if(d<=500)return[4,5];if(d<=1000)return[4,6];if(d<=1500)return[5,7];if(d<=2000)return[6,8];if(d<=3000)return[6,10];return[8,12]}
function shippingStartOffset(){
  const now=new Date(),day=now.getDay(),after7=now.getHours()>=19;
  if(day===0)return 1;
  if(day===6&&after7)return 2;
  if(after7)return day===5?3:1;
  return 0
}
function formatEta([min,max]){return min===max?`${min} day`:`${min}–${max} days`}
function formatDates([min,max]){
  const offset=shippingStartOffset(),start=new Date(),end=new Date();
  start.setDate(start.getDate()+min+offset);end.setDate(end.getDate()+max+offset);
  const opts={weekday:"short",day:"2-digit",month:"short",year:"numeric"};
  return `${start.toLocaleDateString("en-IN",opts)} – ${end.toLocaleDateString("en-IN",opts)}`
}
async function lookupPincode(pin){
  const local=pincodeData[pin];
  if(!local){lastEstimate=null;el("pinStatus").textContent="PIN code not found. Please check again.";el("pinStatus").className="pin-error";el("etaPanel").hidden=true;return}
  el("state").value=local.state||"";el("city").value=local.city||"";
  const distance=Math.round(haversine(ORIGIN.lat,ORIGIN.lng,Number(local.lat),Number(local.lng)));
  const prepaidRange=etaByDistance(distance),codRange=[prepaidRange[0]+2,prepaidRange[1]+3];
  lastEstimate={distance,prepaidEta:formatEta(prepaidRange),codEta:formatEta(codRange),prepaidDates:formatDates(prepaidRange),codDates:formatDates(codRange)};
  el("distanceText").textContent=`${distance} km`;
  el("prepaidEta").textContent=lastEstimate.prepaidEta;el("prepaidDates").textContent=lastEstimate.prepaidDates;
  el("codEta").textContent=lastEstimate.codEta;el("codDates").textContent=lastEstimate.codDates;
  el("etaPanel").hidden=false;el("pinStatus").textContent="✓ PIN code verified";el("pinStatus").className="pin-ok";
  el("postOfficeList").innerHTML="";
  try{
    const response=await fetch(`https://api.postalpincode.in/pincode/${pin}`);
    const data=await response.json(),offices=data?.[0]?.PostOffice||[];
    el("postOfficeList").innerHTML=offices.map(o=>`<option value="${escapeHtml(o.Name)}">${escapeHtml(o.Name)} — ${escapeHtml(o.Block||o.District||"")}</option>`).join("");
    if(offices.length&&!el("postoffice").value)el("postoffice").value=offices[0].Name;
  }catch{}
}

document.querySelectorAll('input[name="paymentMode"]').forEach(r=>r.onchange=refreshMode);
document.querySelectorAll('input[name="delivery"]').forEach(r=>r.onchange=()=>{refreshDeliverySelection();refreshCouriers()});
el("courier").onchange=calculate;
el("copyUpi").onclick=async()=>{try{await navigator.clipboard.writeText(UPI_ID);toast("UPI ID copied")}catch{prompt("Copy UPI ID",UPI_ID)}};
el("downloadQr").onclick=downloadQr;
el("pincode").addEventListener("input",e=>{const pin=e.target.value.replace(/\D/g,"").slice(0,6);e.target.value=pin;if(pin.length===6)lookupPincode(pin);else{lastEstimate=null;el("etaPanel").hidden=true;el("pinStatus").textContent="Enter a 6-digit PIN code";el("pinStatus").className=""}});
el("whatsappBtn").onclick=()=>{
  if(!entries().length)return alert("Your cart is empty.");
  if(!validateCustomer())return;
  if(!el("paidCheck").checked&&!confirm("Payment confirmation checkbox select नहीं है. फिर भी order WhatsApp पर भेजना है?"))return;
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(orderText())}`,"_blank","noopener,noreferrer")
};

fetch("pincode_data.json").then(r=>r.json()).then(data=>{pincodeData=data;const pin=el("pincode").value.trim();if(pin.length===6)lookupPincode(pin)}).catch(()=>{el("pinStatus").textContent="PIN database could not load"});
try{const c=JSON.parse(localStorage.getItem(CUSTOMER_KEY)||"{}");Object.entries(c).forEach(([k,v])=>{if(el(k))el(k).value=v})}catch{}
render();
