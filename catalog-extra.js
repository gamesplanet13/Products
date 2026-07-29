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
    "Compact plug-and-play retro GameStick.",400,[["64GB",2899]]);
  addVariants("gs5-mini","GPZ GS5 Mini","GameSticks","gs5mini (1).jpeg",
    "Wireless retro GameStick with multiple storage options.",450,
    [["64GB",3699],["128GB",5899],["256GB",6999]],"Best seller");
  addVariants("m22","GPZ M22 V3 GameStick","GameSticks","M22.jpeg",
    "Retro GameStick with HDMI output and wireless controllers.",450,
    [["64GB",3499],["128GB",5999],["256GB",7999]]);
  addVariants("m55","GPZ M55 GameStick","GameSticks","M55.jpeg",
    "Multi-system retro GameStick.",450,
    [["64GB",3499],["128GB",5999],["256GB",6999]]);
  addVariants("m33","GPZ M33 GameStick","GameSticks","M33.jpeg",
    "Value retro gaming stick with wireless controllers.",430,
    [["64GB",2699],["128GB",4999],["256GB",5999]]);
  addVariants("m8","Pandora Mini M8 GameStick","GameSticks","M8.jpeg",
    "Entry-level plug-and-play retro GameStick.",380,[["64GB",1599]]);
  addVariants("m15","Pandora Pro M15 GameStick","GameSticks","M15.jpeg",
    "Retro GameStick Pro with wireless controllers.",400,[["64GB",1999]]);

  addVariants("gd10","Vayava GD10","GD Series","Gd10.jpeg",
    "Vayava GD-series retro gaming stick.",450,[["64GB",2399],["128GB",4399]]);
  addVariants("gd30-v1","Vayava GD30 V1","GD Series","Gd30.jpeg",
    "Vayava GD30 retro gaming system.",480,
    [["64GB",3599],["128GB",5899],["256GB",7299]]);
  addVariants("gd30-v2","Vayava GD30 V2","GD Series","gd30 (2).jpg",
    "Updated GD30 retro gaming system.",480,
    [["64GB",3599],["128GB",5999],["256GB",7299]]);
  addVariants("gd30-v3","Vayava GD30 V3","GD Series","Gd30v3.jpeg",
    "Latest GD30 V3 retro gaming system.",480,
    [["64GB",3899],["128GB",5999],["256GB",7299]],"Updated");
  addVariants("gd35","Vayava GD35 Standard","GD Series","Gd35.png",
    "Premium Vayava GD35 edition.",500,
    [["64GB",5299],["128GB",6999],["256GB",7999]]);
  addVariants("gd35-gta","Vayava GD35 GTA San Andreas Edition","GD Series","gd30v3 special edition.png",
    "Special GTA San Andreas themed edition.",500,
    [["64GB",5999],["128GB",7999],["256GB",9999]],"Special edition");

  addVariants("g10","GameBox G10 Plus","GameBox","G10.jpeg",
    "Android-style retro GameBox for TV gaming.",550,[["64GB",3599]]);
  addVariants("g11","GameBox G11 Pro Regular","GameBox","G11pro.jpeg",
    "G11 Pro GameBox with multiple storage options.",600,
    [["64GB",4599],["128GB",6599],["256GB",7599]]);
  addVariants("g11-special","GameBox G11 Pro Special Edition","GameBox","G11pro.png",
    "Special edition G11 Pro GameBox.",600,
    [["64GB",6599],["128GB",8599],["256GB",9599]],"Special edition");
  addVariants("g11-gta","GameBox G11 Pro GTA San Andreas Edition","GameBox","g11pro (3).png",
    "GTA San Andreas themed G11 Pro edition.",600,
    [["64GB",5999],["128GB",7999],["256GB",9999]],"GTA edition");

  addVariants("r35s","R35S Handheld Console","Handheld Consoles","R35s.jpeg",
    "Portable retro handheld gaming console.",350,[["64GB",2999],["128GB",4999]]);
  addVariants("r36s","R36S Handheld Console","Handheld Consoles","R36s.png",
    "Portable Linux retro handheld console.",350,[["64GB",3499],["128GB",5499]]);
  addVariants("r36-ultra","R36 Ultra Handheld Console","Handheld Consoles","R36U.jpeg",
    "R36 Ultra portable retro console.",350,[["64GB",3999]],"Ultra");
  addVariants("black-hawk","Black Hawk Handheld Console","Handheld Consoles","unnamed (1).jpg",
    "Compact portable retro gaming handheld.",350,[["Standard",2399]]);
  addVariants("x7m","X7M Handheld Console","Handheld Consoles","X_logo.jpg",
    "Portable gaming handheld in single and dual variants.",300,
    [["Single",999],["Dual",1099]]);

  addVariants("ps2-slim","PlayStation 2 Slim Console","Consoles","ps3 slim (1).png",
    "PS2 Slim console. Colour and condition are confirmed before dispatch.",1800,
    [["Black",6800],["White",7300],["Silver",7800]],"Console");
  addVariants("ps3-500","PlayStation 3 Slim Console","Consoles","ps3 slim (2).png",
    "PlayStation 3 Slim console with 500GB storage.",2500,[["500GB",15999]]);

  const extraCategories=["GameSticks","GD Series","GameBox","Handheld Consoles","Consoles"];
  extraCategories.forEach(c=>{if(!window.GP_CATEGORIES.includes(c))window.GP_CATEGORIES.splice(-3,0,c)});
  const seen=new Set(window.GP_PRODUCTS.map(p=>p.id));
  added.forEach(p=>{
    if(seen.has(p.id))return;
    p.dimensions=p.category==="Consoles"?"38 × 30 × 15 cm":
      p.category==="Handheld Consoles"?"20 × 14 × 8 cm":"22 × 17 × 9 cm";
    p.compatibility="TV/console compatibility must be confirmed before ordering";
    p.features=["Quality checked before dispatch","Secure protective packing","WhatsApp setup support available"];
    p.gallery=[p.image];
    p.condition="New / as stated before order";
    p.policy="No Return, No Refund, No Replacement";
    window.GP_PRODUCTS.push(p);
  });
})();
