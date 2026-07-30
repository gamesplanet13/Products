/* Games Planet complete catalogue additions. */
(function () {
  const P=(id,name,category,price,image,description,weight=300,extra={})=>({
    id,name,category,price,image,description,weight,...extra
  });
  const added=[];
  const addVariants=(slug,name,category,image,description,weight,variants,badge)=>{
    variants.forEach(([variant,price])=>added.push(P(
      `${slug}-${String(variant).toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,
      `${name} — ${variant}`,category,price,`catalog/${image}`,description,weight,
      badge?{badge}:{}
    )));
  };

  addVariants("m88","GPZ M88 GameStick","GameSticks","m88 (1).jpeg",
    "Premium retro GameStick with wireless controllers and HDMI output.",450,
    [["128GB",5999]],"Popular");
  addVariants("m66","GPZ M66 GameStick","GameSticks","m66 (1).jpg",
    "Compact plug-and-play retro GameStick.",400,[["64GB",2999],["128GB",5499],["256GB",7999]]);
  addVariants("gs5-mini","GPZ GS5 Mini","GameSticks","gs5mini (1).jpeg",
    "Wireless retro GameStick with multiple storage options.",450,
    [["64GB",3699],["128GB",6199],["256GB",8699]],"Best seller");
  addVariants("gs5-pro","GS5 Pro — Vayava V3 OS","GameSticks","../gs5-pro.png",
    "Premium Vayava V3 OS GameStick with two wireless controllers.",500,
    [["64GB Unbranded Card",3999],["64GB HP Original Card",4999],
     ["128GB Unbranded Card",6499],["128GB SanDisk Original Card",7499],
     ["256GB SanDisk Original Card",8999]],"New");
  addVariants("m22","GPZ M22 V3 GameStick","GameSticks","M22.jpeg",
    "Retro GameStick with HDMI output and wireless controllers.",450,
    [["64GB",3499],["128GB",5999],["256GB",8499]]);
  addVariants("m33","GPZ M33 GameStick","GameSticks","M33.jpeg",
    "Value retro gaming stick with wireless controllers.",430,
    [["64GB",2699],["128GB",5199],["256GB",7699]]);
  addVariants("p5","GPZ GameStick Pro P5 (AOKO) — 2024 Edition","GameSticks","M15.jpeg",
    "Budget plug-and-play retro GameStick with two wireless controllers.",400,[["64GB",1899]]);

  addVariants("gd10","Vayava GD10","GD Series","Gd10.jpeg",
    "Vayava GD-series retro gaming stick.",450,[["64GB",2399]]);
  addVariants("gd35","Vayava GD35 Standard","GD Series","Gd35.png",
    "Premium Vayava GD35 edition.",500,
    [["64GB",4599],["128GB",7099],["256GB",9599]]);
  addVariants("gd35-gta","Vayava GD35 GTA San Andreas Edition","GD Series","gd30v3 special edition.png",
    "Special GTA San Andreas themed edition.",500,
    [["64GB",6599],["128GB",9099],["256GB",11599]],"Special edition");

  addVariants("g10","GameBox G10 Plus","GameBox","G10.jpeg",
    "Android-style retro GameBox for TV gaming.",550,[["64GB",3599]]);
  addVariants("g11","GameBox G11 Pro Regular","GameBox","G11pro.jpeg",
    "G11 Pro GameBox with multiple storage options.",600,
    [["64GB",4599],["128GB",7099],["256GB",9599]]);
  addVariants("g11-special","GameBox G11 Pro Special Edition","GameBox","G11pro.png",
    "Special edition G11 Pro GameBox.",600,
    [["64GB",6699],["128GB",9199],["256GB",11699]],"Special edition");
  addVariants("g11-gta","GameBox G11 Pro GTA San Andreas Edition","GameBox","g11pro (3).png",
    "GTA San Andreas themed G11 Pro edition.",600,
    [["64GB",6599],["128GB",9099],["256GB",11599]],"GTA edition");

  addVariants("r35s","R35S Handheld Console","Handheld Consoles","R35s.jpeg",
    "Portable retro handheld gaming console.",350,[["64GB",2699]]);
  addVariants("r36s","R36S Handheld Console","Handheld Consoles","R36s.png",
    "Portable Linux retro handheld console.",350,[["64GB",2899]]);
  addVariants("r36-ultra","R36 Ultra Handheld Console","Handheld Consoles","R36U.jpeg",
    "R36 Ultra portable retro console.",350,[["64GB",3199]],"Ultra");
  addVariants("g90","G90 Handheld Console","Handheld Consoles","R36U.jpeg",
    "Powerful 64GB handheld with PSP support and HDMI TV output.",400,[["64GB",4699]]);
  addVariants("black-hawk","Black Hawk Handheld Console","Handheld Consoles","../black-hawk-ai.png",
    "Compact portable retro gaming handheld.",350,[["Standard",2399]]);
  addVariants("sega-umd","Sega 16-bit UMD Mini","Handheld Consoles","../sega-16bit-umd-mini.png",
    "Compact 16-bit plug-and-play mini retro console with two controllers.",350,[["Standard",1199]]);

  addVariants("ps2-slim","PlayStation 2 Slim 7xxxx Console","Consoles","../ps2-slim-7xxx-ai.png",
    "PS2 Slim console. Colour and condition are confirmed before dispatch.",1800,
    [["Black",6800],["White",7300],["Silver",7800]],"Console");
  addVariants("ps3-500","PlayStation 3 Slim Console","Consoles","ps3 slim (2).png",
    "PlayStation 3 Slim console with 500GB storage.",2500,[["500GB",15999]]);

  const extraCategories=["GameSticks","GD Series","GameBox","Handheld Consoles","Consoles"];
  extraCategories.forEach(c=>{if(!window.GP_CATEGORIES.includes(c))window.GP_CATEGORIES.splice(-3,0,c)});
  const details={
    p5:{videos:["https://youtu.be/UUH26hD7J70"],shops:[["Amazon","https://amzn.to/4fmYjqB"]]},
    m33:{videos:["https://youtu.be/h838JHwNI1k","https://youtu.be/0dW4go5qaDQ","https://youtu.be/TnLw-wLWJ6A"],shops:[["Amazon","https://amzn.to/404bJlz"],["Flipkart","https://bit.ly/m33newG"]]},
    m22:{videos:["https://youtu.be/bEt1GvDk8JY","https://youtu.be/TnLw-wLWJ6A"],shops:[["Amazon","https://amzn.to/4hQN6j6"],["Flipkart","https://bit.ly/GPZm22OG"]]},
    "gs5-mini":{videos:["https://youtu.be/62x06g3BOg0"],shops:[["Amazon 1","https://amzn.to/3OMStGM"],["Amazon 2","https://amzn.to/4pANnvw"]]},
    m66:{videos:["https://youtube.com/shorts/3xcWzwoMTHQ","https://youtube.com/shorts/4SrJ1fDr-Dk"]},
    r35s:{videos:["https://youtu.be/eOEMkNKLSKU","https://youtube.com/shorts/qbL9E1wrnF8","https://youtube.com/shorts/CHH8qQM0lKY"]},
    "r36-ultra":{videos:["https://youtube.com/shorts/OHoFvn3oqnM","https://youtube.com/shorts/qnUDHWKeYtc"]},
    r36s:{videos:["https://youtube.com/shorts/2ZB-PLrirWg"],shops:[["Amazon","https://amzn.to/4aV2Fpg"]]},
    g90:{videos:["https://youtube.com/shorts/nf6_3Ng1RAs","https://youtube.com/shorts/oRcp6N67Wbg"]},
    "g11-special":{videos:["https://youtu.be/kJNJ_Kq3NvA","https://youtu.be/HoRVcbKb77Q","https://youtu.be/ILHGhkGNJ2s"]},
    g11:{videos:["https://youtu.be/kJNJ_Kq3NvA","https://youtu.be/HoRVcbKb77Q","https://youtu.be/ILHGhkGNJ2s"],shops:[["Amazon","https://amzn.to/4i6tMQn"],["Flipkart","https://dl.flipkart.com/s/gQowFIuuuN"]]},
    gd35:{videos:["https://youtu.be/v1k6gJtREfk","https://youtu.be/-6jDWfplmkY"]},
    gd10:{videos:["https://youtu.be/NTgx-SeWFHY","https://youtu.be/t9YSmvB1TTk"],shops:[["Amazon 1","https://amzn.to/46MJhID"],["Amazon 2","https://amzn.to/4apJ2Er"],["Amazon 3","https://amzn.to/4bLceIo"],["Amazon 4","https://amzn.to/463Zh8W"]]},
    g10:{videos:["https://youtu.be/EGoVlcrre18","https://youtu.be/l1uVzH-JWgs"],shops:[["Amazon","https://amzn.to/4afvbOO"]]}
  };
  const policy="3 Days Replacement Only • 1 Month Software Support • No Physical Warranty • No Return • No Refund • Broken, burned or physically damaged items are not covered • Seal tampering voids support. Before dispatch: prepaid and COD advance are fully refundable. After dispatch/rejection: prepaid refund after ₹300 forward/return courier and handling deduction; COD advance is non-refundable.";
  const seen=new Set(window.GP_PRODUCTS.map(p=>p.id));
  added.forEach(p=>{
    if(seen.has(p.id))return;
    p.dimensions=p.category==="Consoles"?"38 × 30 × 15 cm":
      p.category==="Handheld Consoles"?"20 × 14 × 8 cm":"22 × 17 × 9 cm";
    p.compatibility="TV/console compatibility must be confirmed before ordering";
    p.features=["Quality checked before dispatch","Secure protective packing","WhatsApp setup support available"];
    p.gallery=[p.image];
    p.condition="New / as stated before order";
    const key=Object.keys(details).sort((a,b)=>b.length-a.length).find(k=>p.id.startsWith(k+"-"));
    p.videos=key&&details[key].videos||[];
    p.shops=key&&details[key].shops||[];
    p.whatsapp=`https://wa.me/917983624797?text=${encodeURIComponent("I want to buy "+p.name)}`;
    p.policy=policy;
    window.GP_PRODUCTS.push(p);
  });
  window.GP_PRODUCTS.forEach(p=>{p.policy=policy;p.whatsapp=p.whatsapp||`https://wa.me/917983624797?text=${encodeURIComponent("I want to buy "+p.name)}`;p.videos=p.videos||[];p.shops=p.shops||[]});
})();
