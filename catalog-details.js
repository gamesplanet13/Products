/* Rich per-product detail data. Runs after products.js and catalog-extra.js. */
(function(){
  const byPrefix={
    p5:{hardware:["AOKO / ARM based retro gaming chip","256MB RAM","HDMI 720p / 1080p output","2 × 2.4GHz wireless controllers","USB powered"],software:["Embedded Linux retro gaming system","MAME, Arcade, CPS1/2/3, NEOGEO, NES, SNES, SEGA MD, GBA"],box:["GPZ GameStick Pro P5","2 × wireless controllers","Gamepad receiver","HDMI extension cable","USB power cable","64GB SD card"]},
    m33:{hardware:["ARM Cortex-A based processor","Mali series GPU","2GB DDR3 RAM","HDMI 720p / 1080p","2 × wireless controllers"],software:["Linux retro gaming OS","PS1, PSP (analog only), N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["GPZ M33 GameStick","2 × wireless controllers","USB receiver","HDMI cable","TF card as selected","User manual"]},
    m22:{hardware:["ARM Cortex-A based processor","Mali series GPU","2GB DDR3 RAM","HDMI 720p / 1080p","USB powered"],software:["Optimized Linux retro gaming OS","PS1, PSP (analog only), N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["GPZ M22 V3 GameStick","2 × wireless controllers","USB receiver","HDMI cable","TF card as selected","User manual"]},
    "gs5-mini":{hardware:["Amlogic based gaming processor","Mali series GPU","2GB DDR3 RAM","USB-C powered","HDMI 720p / 1080p"],software:["Linux retro gaming OS","PS1, PSP (analog only), N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["GPZ GS5 Mini console","2 × wireless controllers","USB receiver","HDMI cable","TF card as selected","User manual"]},
    "gs5-pro":{hardware:["ARM Cortex-A based processor","Mali series GPU","2GB DDR3 RAM","2 × 2.4GHz wireless controllers","HDMI 720p / 1080p","USB 5V 1.5A–2A power"],software:["Vayava V3 OS (Linux based)","Save and load support","Multiple languages","PS1, PSP (analog only), N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["GS5 Pro GameStick","2 × wireless controllers","USB wireless receiver","HDMI extension cable","TF card as selected","User manual"]},
    m66:{hardware:["ARM based gaming processor","Mali series GPU","2GB DDR3 RAM","HDMI 720p / 1080p","USB powered"],software:["Linux retro gaming OS","PS1, PSP (analog only), N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["GPZ M66 GameStick","2 × wireless controllers","USB receiver","HDMI cable","TF card as selected","USB power cable","User manual"]},
    r35s:{hardware:["Rockchip RK3326 quad-core Cortex-A35","Mali-G31 MP2 GPU","1GB DDR3 RAM","3.5-inch IPS 640×480 display","3500mAh battery","Type-C charging","HDMI TV output"],software:["Linux retro gaming OS","PS1, PSP, N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["R35S handheld console","TF card as selected","Type-C charging cable","User manual"]},
    r36s:{hardware:["Rockchip RK3326 quad-core Cortex-A35","Mali-G31 MP2 GPU","1GB DDR3 RAM","3.5-inch IPS display","Rechargeable battery","Type-C charging","HDMI TV output"],software:["Linux retro gaming OS","PS1, PSP, N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["R36S handheld console","TF card as selected","Type-C charging cable","User manual"]},
    "r36-ultra":{hardware:["Rockchip RK3566 quad-core Cortex-A55","Mali-G52 GPU","2GB DDR4 RAM","3.5-inch IPS display","Type-C charging","HDMI TV output"],software:["Linux retro gaming OS","PS1, PSP, N64, Dreamcast, NDS, MAME, Arcade, NEOGEO and classic systems"],box:["R36 Ultra handheld console","64GB TF card","Type-C charging cable","User manual"]},
    g90:{hardware:["ARM based processor","Integrated GPU","1GB RAM","Built-in LCD","Rechargeable battery","Type-C charging","HDMI output"],software:["Linux retro gaming OS","PSP, PS1, N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["G90 handheld console","64GB TF card","USB charging cable","HDMI cable","User manual"]},
    g11:{hardware:["Amlogic S905 series CPU","Mali-G31 MP2 GPU","2GB DDR3 RAM","4GB internal ROM","Wi-Fi","HDMI 1080p / 4K"],software:["Dual boot Android TV + game-console mode","PS1, PSP, N64, Dreamcast, MAME, Arcade, NEOGEO and classic systems"],box:["GameBox G11 Pro","2 × microSD cards","USB controller receiver","2 × wireless controllers","HDMI cable","Power cable","User manual"]},
    "g11-special":{hardware:["Amlogic S905 series CPU","Mali-G31 MP2 GPU","2GB DDR3 RAM","4GB internal ROM","Wi-Fi","2 × rechargeable P3 Bluetooth controllers"],software:["Dual boot Android TV + game-console mode","PS1, PSP, N64, Dreamcast, MAME, Arcade, NEOGEO and classic systems"],box:["G11 Pro Special Edition","TF card","USB receiver","2 × P3 Bluetooth controllers","HDMI cable","12V adapter","IR remote","User manual"]},
    gd35:{hardware:["ARM Cortex-A based processor","Mali series GPU","2GB DDR3 RAM","HDMI 720p / 1080p","2 × wireless controllers"],software:["Linux retro gaming OS","PS1, PSP (analog only), N64, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["Vayava GD35 GameStick","2 × wireless controllers","USB receiver","HDMI cable","TF card as selected","USB power cable","User manual"]},
    gd10:{hardware:["ARM Cortex-A based processor","Integrated ARM GPU","1GB DDR3 RAM","HDMI 720p / 1080p","2 × wireless gamepads"],software:["Linux retro gaming OS","PS1, limited PSP, MAME, Arcade, NEOGEO, GBA/GBC/GB, NES, SNES, SEGA MD, CPS1/2/3"],box:["Vayava GD10 GameStick","2 × wireless gamepads","USB receiver","HDMI connector","64GB TF card","User manual"]},
    g10:{hardware:["ARM Cortex-A based processor","Integrated ARM GPU","2GB DDR3 RAM","HDMI up to 4K TV support","2 × wireless controllers"],software:["Linux retro gaming OS","35,000+ games","PS1, PSP, N64, Dreamcast, MAME, Arcade, NEOGEO and classic systems"],box:["GameBox Plus G10","2 × wireless controllers","USB receiver","HDMI cable","Power adapter","64GB TF card","User manual"]},
    "sega-umd":{hardware:["Compact 16-bit mini console","2 × wired classic controllers","AV video output","External power adapter"],software:["Built-in 16-bit retro game collection","Plug-and-play embedded system"],box:["16-bit UMD Mini console","2 × wired controllers","AV cable","Power adapter"]},
    "black-hawk":{hardware:["3.5-inch IPS handheld display","Dual analog controls","Rechargeable battery","Type-C charging"],software:["Linux based multi-system retro gaming interface","Supports common arcade and classic-console emulators"],box:["Black Hawk handheld console","Charging cable","User manual"]}
  };
  const defaults={
    PS2:{hardware:["Compatible PlayStation 2 accessory","Model-specific fit or connection","Approximate weight and size shown in product information"],software:["No software unless stated","Compatibility confirmation recommended"],box:["Selected PS2 product","Protective packing"]},
    "PS2 Game Drives":{hardware:["Selected USB/SSD/HDD storage","Prepared for compatible PS2 USB setup"],software:["PS2 game-drive setup","Top or optional game selection as stated"],box:["Selected storage drive","Prepared game data"]},
    PS3:{hardware:["Compatible PS3 accessory","Connection/charging hardware as stated"],software:["No bundled software unless stated"],box:["Selected PS3 product"]},
    PS4:{hardware:["Compatible PS4 accessory","Connection/charging hardware as stated"],software:["No bundled software unless stated"],box:["Selected PS4 product"]},
    PS5:{hardware:["Compatible PS5 accessory","Connector type as stated"],software:["No bundled software"],box:["Selected PS5 product"]},
    Cables:{hardware:["Cable/connectors shown in product photos","Continuity tested where applicable"],software:["No software required"],box:["Selected cable"]},
    "Electrical Items":{hardware:["Electrical/workshop item as shown","Ratings and size as stated"],software:["No software required"],box:["Selected product"]},
    "Batteries & Charger":{hardware:["Battery/charger pack as stated","Surface delivery restriction may apply"],software:["No software required"],box:["Selected battery or charger pack"]},
    Consoles:{hardware:["Console hardware as selected","Controller and cables according to listing"],software:["System software according to selected console"],box:["Selected console","Included controller/cables as stated"]}
  };
  const keys=Object.keys(byPrefix).sort((a,b)=>b.length-a.length);
  window.GP_PRODUCTS.forEach(p=>{
    const key=keys.find(k=>p.id.startsWith(k+"-"));
    const d=byPrefix[key]||defaults[p.category]||{hardware:["Product hardware as shown"],software:["Software/support as stated"],box:["Selected product"]};
    p.hardware=d.hardware;p.software=d.software;p.boxContents=d.box;
    p.specifications=[
      `Category: ${p.category}`,`Variant: ${p.name.split(" — ").slice(1).join(" — ")||"Standard"}`,
      `Approx. weight: ${p.weight}g`,`Approx. pack size: ${p.dimensions}`,`Compatibility: ${p.compatibility}`
    ];
    p.technicalDetails=[
      ...d.hardware,
      `Product/variant: ${p.name}`,
      `Compatibility: ${p.compatibility}`,
      `Approximate product weight: ${p.weight}g`,
      `Approximate packed dimensions: ${p.dimensions}`,
      `Power/battery restriction: ${p.battery?"Battery item — surface delivery only":"As stated in hardware details"}`
    ];
  });
})();
