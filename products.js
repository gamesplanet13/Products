const P=(id,name,category,price,image,description,weight=100,extra={})=>({id,name,category,price,image,description,weight,...extra});

window.GP_CATEGORIES=[
  "All","PS2","PS2 Game Drives","PS3","PS4","PS5","Cables",
  "Gaming Accessories","Electrical Items","Batteries & Charger"
];

const products=[
  P("ps2-adapter","PS2 Slim Power Adapter + Power Cable","PS2",599,"ps2-slim-adapter.jpeg","Compatible with PS2 Slim 7XXXX and 9XXXX series.",340,{badge:"Popular"}),
  P("usb-ps2-converter","USB to PS2 / PS3 / PC Converter","PS2",360,"usbtops2.jpeg","Use a USB controller with supported PS2, PS3 and PC systems."),
  P("fmcb-fat","FMCB Memory Card — PS2 Fat 3XXXX / 5XXXX","PS2",600,"fmcb-fat.jpeg","8MB prepared FMCB memory card for supported PS2 Fat models.",25,{badge:"Best seller"}),
  P("fmcb-7","FMCB Memory Card — PS2 Slim 7XXXX","PS2",600,"fmcb-7xxxx.jpeg","8MB prepared FMCB memory card for PS2 Slim 7XXXX models.",25),
  P("fmcb-9","FunTuna Memory Card — PS2 Slim 9XXXX","PS2",600,"fmcb-9xxxx.jpeg","8MB prepared FunTuna card for supported PS2 Slim 9XXXX models.",25),
  P("ps2-memory","PS2 8MB Blank Memory Card","PS2",369,"ps28mb.jpeg","Blank 8MB memory card for PlayStation 2.",25),
  P("ps2-arcade-usb","32GB USB for PS2 with Arcade Games","PS2",549,"32gbusb.jpeg","Ready-to-use USB game drive for supported PS2 setups.",10),
  P("ps2-skin","PS2 Slim Sticker / Skin","PS2",60,"opl10.jpeg","Protective decorative skin for PS2 Slim console.",10),
  P("ps2-hdmi","HDMI Converter for PS2","PS2",319,"ps2hdmi.jpeg","Connect PS2 video output to an HDMI display.",80,{badge:"Easy setup"}),
  P("ps2-av","AV Cable for PS2","PS2",99,"ps2av.jpeg","Composite red, white and yellow AV cable for PS2.",70),
  P("ps2-wired-controller","PS2 Wired Controller (Replica)","PS2",375,"ps2wire.jpeg","Classic wired controller for PlayStation 2.",250,{badge:"Popular"}),
  P("ps2-wireless-controller","PS2 Wireless Controller","PS2",499,"ps2wireless.jpeg","Wireless controller with receiver for PlayStation 2.",250),
  P("matrix5","Matrix Modbo 5.0 Modchip","PS2",549,"matrix5.jpeg","Replacement Modbo 5.0 modchip for compatible PS2 consoles.",5),
  P("ps3-controller","PS3 Controller (Replica)","PS3",600,"ps3gamepad.jpeg","Wireless-style replica controller for PlayStation 3.",250,{battery:true}),
  P("ps3-charge","PS3 Controller Charging Cable","PS3",119,"ps3usb.jpeg","USB charging cable for PS3 controllers.",65),
  P("ps4-controller","PS4 Controller Black (Replica)","PS4",999,"ps4gamepad.jpeg","Black replica controller for PlayStation 4.",450,{battery:true,badge:"Popular"}),
  P("ps4-charge","PS4 Controller Charging Cable","PS4",139,"ps4usb.jpeg","USB to Micro-USB charging cable for PS4 controllers.",65),
  P("ps5-charge","PS5 Controller Charging Cable (USB to C)","PS5",149,"ps5usb.jpeg","USB-A to USB-C charging cable for PS5 controllers.",65),
  P("ps5-ctoc","PS5 Controller Charging Cable (C to C)","PS5",199,"ps5-ctoc.jpeg","USB-C to USB-C cable for PS5 controllers and compatible devices.",65),
  P("power-cable","Power Cable for PS2 / PS3 / PS4 / PS5","Cables",129,"ps2pcable.png","Two-pin console power cable with right-angle figure-8 connector.",130),
  P("hdmi-cable","HDMI Cable","Cables",99,"hdmicable.jpeg","Standard HDMI cable for consoles, TVs and monitors.",99),
  P("laptop-power","Laptop Power Cable","Cables",110,"laptopcable.jpeg","Replacement AC power cable for compatible laptop adapters.",185),
  P("cpu-power","CPU / PS4 Pro Power Cable","Cables",110,"cpucable.jpeg","Heavy-duty power cable for compatible PCs and PS4 Pro.",130),
  P("pxn-v3-black","PXN V3 Pro Steering Wheel Set — Black","Gaming Accessories",4999,"pxn-v3-pro-black.jpeg","Steering wheel, pedals and shifter with 180° rotation and vibration.",3000,{badge:"Racing set"}),
  P("pxn-v3-orange","PXN V3 Pro Steering Wheel Set — Orange","Gaming Accessories",4999,"pxn-v3-pro-orange.jpeg","Multi-platform racing wheel, pedals and shifter set.",3000),
  P("solder-paste","Soldering Paste (Wel Fix)","Electrical Items",10,"paste.jpeg","Compact soldering flux paste for repair work.",15),
  P("solder-small","Solder Wire Small Pack","Electrical Items",20,"solder.jpeg","Small solder wire pack for occasional repairs.",5),
  P("solder-roll","Resham Solder Wire Roll","Electrical Items",80,"solder-2.jpeg","Bright solder wire roll for electronics work.",22),
  P("solder-boom","Boom Solder Wire","Electrical Items",180,"solder-2-2.jpeg","Premium Boom solder wire spool.",58),
  P("iron-15","15W Soldering Iron (LED)","Electrical Items",89,"iron-15wt.jpeg","Lightweight LED soldering iron for small jobs.",60),
  P("iron-30","30W Soldering Iron (Madhur)","Electrical Items",290,"iron-30wt.jpeg","Fast-heating 30W soldering iron with replaceable tip.",162,{badge:"Workshop"}),
  P("iron-25","25W Soldering Iron (Starmaxx)","Electrical Items",140,"iron-25wt.jpeg","General-purpose soldering iron for electrical repairs.",120),
  P("blowtorch","Blow Torch Flame Lighter","Electrical Items",250,"blowtorch.jpeg","Refillable flame lighter / compact blow torch.",90),
  P("screwdriver","Precision Screwdriver Kit","Electrical Items",250,"screw-driver-kit.jpeg","Multi-bit precision screwdriver set for electronic repairs.",170),
  P("extension","10 Socket Extension Board","Electrical Items",170,"extension.jpeg","Multi-socket extension board for home and workshop use.",650),
  P("cell-charger","AA / AAA 4-Slot Battery Charger","Batteries & Charger",399,"cell-charger.jpeg","Four-slot charger for compatible rechargeable AA and AAA cells.",140),
  P("simpex-aa","Simpex AA Rechargeable Cells (4 Pack)","Batteries & Charger",550,"aa-simpex4cell.jpeg","Pack of four rechargeable AA cells.",75,{battery:true}),
  P("panasonic-aaa2","Panasonic AAA Rechargeable Cells (2 Pack)","Batteries & Charger",350,"aaapanasonic2cell.jpeg","Pack of two Panasonic rechargeable AAA cells.",25,{battery:true}),
  P("panasonic-aaa4","Panasonic AAA Rechargeable Cells (4 Pack)","Batteries & Charger",700,"aaapenasonic4cell.jpeg","Pack of four Panasonic rechargeable AAA cells.",50,{battery:true,badge:"Updated price"})
];

const driveRows=[
  ["64GB PD 2.0",21,1101,1151,"usb-1.jpeg",10],
  ["64GB PD 3.0",21,1501,1551,"sandiscultra-1.jpeg",10],
  ["128GB PD 3.0",41,2751,2851,"sandiscultra-1.jpeg",10],
  ["128GB SSD",41,3701,3801,"usbhdd-1.jpeg",80],
  ["256GB SSD",71,5201,5401,"usbhdd-1.jpeg",80],
  ["500GB HDD",175,7001,7401,"usbhdd-1.jpeg",250],
  ["500GB SSD",175,11001,11401,"usbhdd-1.jpeg",100]
];
driveRows.forEach(([storage,count,topPrice,optionalPrice,image,weight])=>{
  const slug=storage.toLowerCase().replace(/[^a-z0-9]+/g,"-");
  products.push(P(`${slug}-top`,`${storage} USB for PS2 — Top ${count} Games`,"PS2 Game Drives",topPrice,image,`Preloaded selection of Top ${count} PS2 games.`,weight,{badge:`${count} games`}));
  products.push(P(`${slug}-optional`,`${storage} USB for PS2 — Optional Games`,"PS2 Game Drives",optionalPrice,image,"Choose compatible games from the optional games selector.",weight));
});

const dimensions={
  "ps2-adapter":"20 × 15 × 7 cm","usb-ps2-converter":"15 × 6 × 2 cm",
  "fmcb-fat":"12 × 13 × 2 cm","fmcb-7":"12 × 13 × 2 cm","fmcb-9":"12 × 13 × 2 cm",
  "ps2-memory":"12 × 13 × 2 cm","ps2-arcade-usb":"5 × 3 × 2 cm","ps2-skin":"Universal slim fit",
  "ps2-hdmi":"14 × 9 × 3 cm","ps2-av":"15 × 4 × 3 cm",
  "ps2-wired-controller":"17 × 12 × 8 cm","ps2-wireless-controller":"17 × 13 × 8 cm",
  "matrix5":"3 × 3 × 1 cm","ps3-controller":"22 × 15 × 9 cm","ps3-charge":"15 × 5 × 5 cm",
  "ps4-controller":"15 × 20 × 8 cm","ps4-charge":"15 × 5 × 5 cm",
  "ps5-charge":"15 × 5 × 5 cm","ps5-ctoc":"15 × 5 × 5 cm",
  "power-cable":"15 × 5 × 5 cm","hdmi-cable":"10 × 10 × 3 cm",
  "laptop-power":"23 × 7 × 5 cm","cpu-power":"23 × 7 × 5 cm",
  "pxn-v3-black":"30 × 27 × 25 cm","pxn-v3-orange":"30 × 27 × 25 cm",
  "solder-paste":"7 × 7 × 2 cm","solder-small":"7 × 7 × 1 cm",
  "solder-roll":"5 × 5 × 5 cm","solder-boom":"9 × 5 × 5 cm",
  "iron-15":"21 × 4 × 4 cm","iron-30":"27 × 6 × 5 cm","iron-25":"30 × 12 × 4 cm",
  "blowtorch":"18 × 12 × 4 cm","screwdriver":"13 × 8 × 4 cm","extension":"30 × 12 × 7 cm",
  "cell-charger":"13 × 7 × 7 cm","simpex-aa":"11 × 9 × 2 cm",
  "panasonic-aaa2":"11 × 9 × 2 cm","panasonic-aaa4":"12 × 10 × 2 cm"
};
const compatibility={
  PS2:"PlayStation 2; confirm console model before ordering",
  "PS2 Game Drives":"Compatible PS2 USB/OPL setup required",
  PS3:"PlayStation 3 and supported USB charging ports",
  PS4:"PlayStation 4; replica/accessory listing as stated",
  PS5:"PlayStation 5 controller and compatible USB devices",
  Cables:"Connector compatibility must be checked before ordering",
  "Gaming Accessories":"Supported consoles/PC as stated in the product description",
  "Electrical Items":"Electronics repair and workshop use",
  "Batteries & Charger":"Use only with compatible rechargeable cells/chargers"
};
const categoryFeatures={
  PS2:["Compatibility checked before dispatch","Carefully packed for transit","Setup support available on WhatsApp"],
  "PS2 Game Drives":["Storage and game count clearly listed","Prepared for supported PS2 OPL setups","Compatibility confirmation recommended"],
  PS3:["Function checked before dispatch","Secure protective packing","Compatibility guidance available"],
  PS4:["Function checked before dispatch","Replica product clearly identified","Charging and pairing guidance available"],
  PS5:["Connector and charging check","Protective packing","Compatibility guidance available"],
  Cables:["Connector type checked","Continuity/function test before dispatch","Tidy protective packing"],
  "Gaming Accessories":["Controls and pedals checked","Multi-part packing check","Setup guidance available"],
  "Electrical Items":["Visual quality inspection","Function check where applicable","Handle with appropriate safety precautions"],
  "Batteries & Charger":["Pack quantity verified","Visual quality inspection","Surface delivery only when battery item is selected"]
};
products.forEach(p=>{
  p.dimensions=dimensions[p.id]||(p.category==="PS2 Game Drives"?(p.name.includes("PD")?"5 × 3 × 2 cm":"13 × 9 × 3 cm"):"See product photos");
  p.compatibility=compatibility[p.category]||"Confirm compatibility before ordering";
  p.features=categoryFeatures[p.category]||["Quality checked before dispatch","Secure packing","Support available"];
  p.gallery=[p.image];
  p.condition="New";
  p.policy="No Return, No Refund, No Replacement";
});
const black=products.find(p=>p.id==="pxn-v3-black"),orange=products.find(p=>p.id==="pxn-v3-orange");
if(black) black.gallery=["pxn-v3-pro-black.jpeg","pxn-v3-pro-orange.jpeg"];
if(orange) orange.gallery=["pxn-v3-pro-orange.jpeg","pxn-v3-pro-black.jpeg"];

window.GP_PRODUCTS=products;
