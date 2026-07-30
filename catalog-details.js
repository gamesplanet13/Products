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
  const commonEmulators=["PS1","PSP (Analog Only)","N64","MAME","Arcade","NEOGEO","GBA","GBC","GB","NES","SNES","SEGA MD","CPS1","CPS2","CPS3"];
  const commonPolicy=["3 Days Replacement Only","1 Month Software Support","1-side courier charge by customer","No Physical Warranty","No Return","No Refund","Broken, burned or physically damaged items are not covered","Seal tampering makes support void"];
  const rich={
    m88:{
      subtitle:"Powerful 2D / 3D Gaming • 20,000+ Games Preloaded • HDMI Plug & Play",
      description:"GPZ M88 ek powerful retro GameStick hai jo PS2, PSP aur kai 3D ported games ko support karta hai. Optimized firmware aur stable performance ke saath smooth gameplay provide karta hai. Buy karne se pehle demo video zaroor dekhein aur expectations video ke according rakhein.",
      features:["20,000+ games preloaded","PS2 / PSP / 3D games supported","Plug & Play easy setup","2 wireless controllers with in-built rechargeable battery","Works on all HDMI TVs"],
      emulators:["PS1","PS2","PSP","N64","Dreamcast","MAME","Arcade","NEOGEO","GBA","GBC","GB","NES","SNES","SEGA MD"],
      technical:[["CPU","Octa-Core Processor (2× Cortex-A75 + 6× Cortex-A55)"],["GPU","Mali Series Integrated Graphics"],["RAM","2GB LPDDR4"],["ROM / OS","Linux Based Retro Gaming OS"],["Storage Support","TF Card"],["Storage Included","128GB TF Card (Pre-Installed)"],["TV Output","HDMI 720p / 1080p"],["TV Support","Smart / Android / Non-Smart / 4K HDMI TVs"],["Controllers","2× Wireless Rechargeable Controllers"],["Charging","Type-C"],["Lighting","RGB Dual-Color Light"]],
      box:["GPZ M88 GameStick","2× wireless controllers","USB receiver","HDMI cable","128GB TF card inserted","Type-C charging cable","User manual"],
      policy:["3 Days Replacement Only","1 Month Software Support","Courier charges by customer","No Physical Warranty","No Return","No Refund"],
      notes:["Main price ₹6,799; current discounted price ₹6,299","Demo video must be watched before buying","Graphics quality depends on the TV","Expectations should match the demo video"]
    },
    m22:{
      subtitle:"OG Performance • Fast & Smooth Retro Gaming • HDMI Plug & Play",
      description:"GPZ M22 v3 ek OG-performance GameStick hai jo stable firmware ke saath smooth 2D aur selected 3D retro gaming experience deta hai. HDMI ke through TV par direct connect hota hai aur Plug & Play design ki wajah se setup bilkul easy hai.",
      features:["OG performance and smooth gameplay","Plug & Play easy setup","Wireless game controllers included","Works on all HDMI TVs","Stable and optimized firmware"],
      emulators:commonEmulators,
      technical:[["CPU","ARM Cortex-A Based Gaming Processor"],["GPU","Mali Series GPU"],["RAM","2GB DDR3"],["ROM","Linux Based System"],["Storage Support","TF Card 64GB / 128GB / 256GB"],["Storage Included","As per selected variant"],["OS","Linux Retro Gaming OS"],["TV Output","HDMI 720p / 1080p"],["TV Support","Smart / Android / Non-Smart / 4K HDMI TVs"],["Controllers","2× Wireless Game Controllers"],["Power","USB Powered; 5V 1.5–2A recommended; adapter not included"]],
      box:["GPZ M22 v3 GameStick","2× wireless game controllers","USB receiver","HDMI cable","TF card pre-installed as selected","User manual"],policy:commonPolicy
    },
    m33:{
      subtitle:"Fast OG Performance • Smooth & Stable Retro Gaming",
      description:"GPZ M33 ek fast aur stable OG GameStick hai jo smooth 2D aur selected 3D retro games support karta hai. HDMI ke through direct TV par connect hota hai aur Plug & Play design ki wajah se setup simple hai.",
      features:["Fast OG performance","Smooth retro gameplay","Plug & Play easy setup","Wireless controllers included","Works on all HDMI TVs"],emulators:commonEmulators,
      technical:[["CPU","ARM Cortex-A Based Gaming Processor"],["GPU","Mali Series GPU"],["RAM","2GB DDR3"],["ROM","Linux Based System"],["Storage Support","TF Card 64GB / 128GB / 256GB"],["Storage Included","As per selected variant"],["OS","Linux Retro Gaming OS"],["TV Output","HDMI 720p / 1080p"],["TV Support","All HDMI TVs including 4K"],["Controllers","2× Wireless Game Controllers"],["Power","USB Powered; 5V 1.5–2A; adapter not included"]],
      box:["GPZ M33 GameStick","2× wireless controllers","USB receiver","HDMI cable","TF card as selected","User manual"],policy:commonPolicy
    },
    m66:{
      subtitle:"Smooth 2D / 3D Gaming • HDMI Output • 2 Wireless Controllers",
      description:"GPZ M66 ek retro GameStick gaming console hai jo HDMI ke through TV par smooth 2D aur selected 3D games run karta hai. Plug & Play design aur 2 wireless controllers ke saath kids se adults tak sabke liye gaming experience deta hai.",
      features:["Smooth retro gaming","Plug & Play easy setup","2 wireless controllers included","Works on all HDMI TVs","Compact and lightweight"],emulators:commonEmulators,
      technical:[["CPU","ARM Based Gaming Processor"],["GPU","Mali Series GPU"],["RAM","2GB DDR3"],["ROM","Linux Based System"],["Storage Support","TF Card 64GB / 128GB / 256GB"],["Storage Included","As per selected variant"],["OS","Linux Retro Gaming OS"],["TV Output","HDMI 720p / 1080p"],["TV Support","All HDMI TVs including 4K"],["Controllers","2× Wireless Controllers"],["Power","USB Powered; adapter not included"]],
      box:["GPZ M66 GameStick","2× wireless controllers","USB receiver","HDMI cable","TF card as selected","USB power cable","User manual"],policy:commonPolicy
    },
    "gs5-mini":{
      subtitle:"Compact & Powerful • 2D / 3D Retro Gaming • USB-C Power",
      description:"GPZ GS5 Mini ek compact retro gaming console hai jo classic 2D games ke saath selected 3D games support karta hai. HDMI se direct TV par connect hota hai aur Plug & Play design ke कारण gaming तुरंत शुरू होती है.",
      features:["Compact retro gaming console","Selected 3D game support","Plug & Play","Wireless controllers included","Works on all HDMI TVs"],emulators:commonEmulators,
      technical:[["CPU","Amlogic Based Gaming Processor"],["GPU","Mali Series GPU"],["RAM","2GB DDR3"],["ROM","Linux Based System"],["Storage Support","TF Card 64GB / 128GB / 256GB"],["Storage Included","As per selected variant"],["OS","Linux Retro Gaming OS"],["TV Output","HDMI 720p / 1080p"],["TV Support","All HDMI TVs including 4K"],["Controllers","2× Wireless Controllers"],["Power","USB-C Powered; 5V 1.5–2A; adapter not included"]],
      box:["GPZ GS5 Mini Console","2× wireless controllers","USB receiver","HDMI cable","TF card as selected","User manual"],policy:commonPolicy
    },
    "gs5-pro":{
      subtitle:"Vayava V3 OS • Premium Performance • Fast & Smooth Gaming",
      description:"GS5 Pro ek premium retro gaming GameStick hai jo Vayava V3 OS ke saath smooth 2D aur selected 3D retro gaming experience provide karta hai. HDMI ke through kisi bhi TV par direct connect hota hai aur Plug & Play design se turant gaming start hoti hai.",
      features:["Vayava V3 OS","Smooth optimized performance","Plug & Play","2× wireless controllers included","Stable firmware","Save and load progress","Multiple languages"],emulators:commonEmulators,
      technical:[["CPU","ARM Cortex-A Based Gaming Processor"],["GPU","Mali Series GPU"],["RAM","2GB DDR3"],["Storage","TF Card 64GB / 128GB / 256GB"],["Operating System","Vayava V3 OS (Linux Based)"],["TV Output","HDMI 720p / 1080p"],["TV Support","Smart / Android / LED / 4K HDMI TVs"],["Controllers","2× 2.4GHz Wireless Controllers"],["Power","USB Powered; 5V 1.5A–2A recommended"]],
      box:["GS5 Pro GameStick","2× wireless controllers","USB wireless receiver","HDMI extension cable","TF card as selected","User manual"],policy:commonPolicy,
      notes:["Before dispatch: prepaid and COD advance are fully refundable","After dispatch/rejection: prepaid refund after ₹300 deduction","After dispatch COD advance is non-refundable and adjusted against courier/COD/handling charges"]
    },
    p5:{
      subtitle:"AOKO 2024 Edition • Ultra Budget • HDMI Plug & Play",
      description:"GPZ GameStick Pro P5 ek entry-level retro gaming console hai jo HDMI ke through direct TV me lagta hai. Classic arcade aur retro games ke liye bana hai. Buying se pehle demo video zaroor dekhein.",
      features:["Ultra budget retro console","Plug & Play","2× wireless gamepads","Works on all HDMI TVs","Lightweight and portable"],emulators:["MAME","Arcade","CPS1","CPS2","CPS3","NEOGEO","NES","SNES","SEGA MD","GBA"],
      technical:[["CPU","AOKO / ARM Based Retro Gaming Chip"],["GPU","Integrated GPU"],["RAM","256MB"],["OS","Embedded Linux Retro Gaming System"],["Storage Support","SD Card"],["Storage Included","64GB SD Card Pre-Installed"],["TV Output","HDMI 720p / 1080p"],["TV Support","Smart / Android / Non-Smart HDMI TVs"],["Controllers","2× 2.4GHz Wireless Gamepads"],["Power","USB Powered"],["Batteries","Not Included"]],
      box:["GPZ GameStick Pro P5","2× wireless controllers","Gamepad receiver","HDMI extension cable","USB power cable","64GB SD card"],policy:["3 Days Replacement Only","1 Month Software Reinstallation Support","Both-side courier charges by customer","No Physical Warranty","No Return","No Refund","Physical damage and seal tampering not covered"]
    },
    g90:{
      subtitle:"Powerful Handheld • PSP Support • HDMI TV Output",
      description:"G90 ek powerful handheld retro gaming console hai jo PSP games support karta hai. HDMI output se big-screen gaming aur rechargeable battery ke saath portable use support karta hai.",
      features:["Portable handheld","PSP support","HDMI TV output","Built-in display and speaker","Plug & Play"],emulators:["PSP","PS1","N64","MAME","Arcade","NEOGEO","GBA","GBC","GB","NES","SNES","SEGA MD","CPS1","CPS2","CPS3"],
      technical:[["CPU","ARM Based Gaming Processor"],["GPU","Integrated GPU"],["RAM","1GB"],["ROM / OS","Linux Based Retro Gaming OS"],["Storage Support","TF Card"],["Storage Included","64GB TF Card Pre-Installed"],["Display","Built-in LCD Screen"],["TV Output","HDMI Supported"],["Audio","Built-in Speaker + 3.5mm Headphone Jack"],["Battery","Rechargeable Lithium Battery"],["Charging","Type-C USB"]],
      box:["G90 handheld console","64GB TF card","USB charging cable","HDMI cable","User manual"],policy:commonPolicy,notes:["External controllers are not included with handheld consoles"]
    },
    gd35:{
      subtitle:"Premium Retro Gaming • Smooth 2D / Selected 3D Performance",
      description:"VAYAVA GD35 ek premium retro GameStick hai jo powerful hardware aur optimized firmware ke saath smooth 2D aur selected 3D games run karta hai. HDMI direct connection aur Plug & Play setup deta hai.",
      features:["Premium performance","Smooth 2D and selected 3D gaming","Plug & Play","2× wireless controllers","All HDMI TV support"],emulators:commonEmulators,
      technical:[["CPU","ARM Cortex-A Based Gaming Processor"],["GPU","Mali Series GPU"],["RAM","2GB DDR3"],["ROM / OS","Linux Based Retro Gaming OS"],["Storage Support","TF Card 64GB / 128GB / 256GB"],["Storage Included","As selected"],["TV Output","HDMI 720p / 1080p"],["TV Support","All HDMI TVs including 4K"],["Controllers","2× Wireless Controllers"],["Power","USB Powered; adapter not included"]],
      box:["VAYAVA GD35 GameStick","2× wireless controllers","USB receiver","HDMI cable","TF card as selected","USB power cable","User manual"],policy:commonPolicy
    },
    g11:{
      subtitle:"Dual Boot Android TV + Retro Gaming • HDMI up to 4K",
      description:"GameBox G11 Pro ek all-in-one retro gaming console hai jo Android TV Box aur gaming-console dono modes me kaam karta hai. Classic 2D aur selected 3D games ke साथ smooth HDMI output deta hai.",
      features:["Dual boot Android TV + gaming","Wireless controllers","Smooth 2D / 3D gaming","Plug & Play","All HDMI TV support"],emulators:["PS1","PSP","N64","Dreamcast","MAME","Arcade","NEOGEO","GBA","GBC","GB","NES","SNES","SEGA MD","CPS1","CPS2","CPS3"],
      technical:[["CPU","Amlogic S905 Series"],["GPU","Mali-G31 MP2"],["RAM","2GB DDR3"],["ROM","4GB Internal"],["Storage Support","TF Card 64GB / 128GB / 256GB"],["Storage Included","As selected"],["OS","Android TV OS + Game Console Mode"],["TV Output","HDMI 1080p / 4K"],["Controllers","2× Wireless Gamepads"],["Connectivity","Wi-Fi Inbuilt"]],
      box:["G11 Pro console","2× microSD cards","USB controller receiver","2× wireless controllers","HDMI cable","Power cable","User manual"],policy:commonPolicy
    },
    "g11-special":{
      subtitle:"Premium Dual Boot • Android TV + Gaming • P3 Bluetooth Controllers",
      description:"G11 Pro Special Edition premium dual-boot console hai. High-quality rechargeable P3 Bluetooth controllers aur smoother performance ke साथ Android TV aur retro gaming modes provide karta hai.",
      features:["Dual boot Android TV + gaming","Premium rechargeable Bluetooth controllers","Smooth 2D / 3D gaming","Plug & Play","All HDMI TV support"],emulators:["PS1","PSP","N64","Dreamcast","MAME","Arcade","NEOGEO","GBA","GBC","GB","NES","SNES","SEGA MD","CPS1","CPS2","CPS3"],
      technical:[["CPU","Amlogic S905 Series"],["GPU","Mali-G31 MP2"],["RAM","2GB DDR3"],["ROM","4GB Internal"],["Storage Support","TF Card 64GB / 128GB / 256GB"],["Storage Included","As selected"],["OS","Android TV OS + Game Console Mode"],["TV Output","HDMI 1080p / 4K"],["Controllers","2× P3 Bluetooth Rechargeable Gamepads"],["Connectivity","Wi-Fi Inbuilt"]],
      box:["G11 Pro Special Edition console","TF card inserted","USB receiver","2× P3 Bluetooth controllers","HDMI cable","12V adapter","IR TV remote","User manual"],policy:commonPolicy
    },
    "r36-ultra":{
      subtitle:"Powerful RK3566 Handheld • HDMI Output • 2D / 3D Gaming",
      description:"R36 Ultra advanced handheld retro console hai jo powerful hardware ke saath smooth 2D aur selected 3D games run karta hai. Portable design aur HDMI TV output support included hai.",
      features:["Powerful handheld performance","Smooth 2D / 3D gaming","Plug & Play","HDMI output","Travel friendly"],emulators:["PS1","PSP","N64","Dreamcast","NDS","MAME","Arcade","NEOGEO","GBA","GBC","GB","NES","SNES","SEGA MD","CPS1","CPS2","CPS3"],
      technical:[["CPU","Rockchip RK3566 Quad-Core Cortex-A55"],["GPU","Mali-G52"],["RAM","2GB DDR4"],["ROM / OS","Linux Based System"],["Storage Support","TF Card"],["Storage Included","64GB TF Card"],["Display","3.5-inch IPS"],["Battery","Built-in Rechargeable"],["Charging","Type-C"],["TV Output","HDMI Supported"],["Controls","Built-in; no external controllers"]],
      box:["R36 Ultra handheld","Type-C charging cable","User manual"],policy:commonPolicy
    },
    r36s:{
      subtitle:"Compact RK3326 Handheld • HDMI Output • Long Battery Backup",
      description:"R36S compact handheld retro console hai jo smooth 2D aur selected 3D gaming, portable use aur HDMI TV output support karta hai.",
      features:["Compact handheld","Smooth retro performance","Plug & Play","HDMI output","Rechargeable battery"],emulators:commonEmulators,
      technical:[["CPU","Rockchip RK3326 Quad-Core Cortex-A35"],["GPU","Mali-G31 MP2"],["RAM","1GB DDR3"],["ROM / OS","Linux Based System"],["Storage","64GB TF Card"],["Display","3.5-inch IPS 640×480"],["Battery","Built-in Rechargeable"],["Charging","Type-C"],["TV Output","HDMI Supported"],["Controls","Built-in; no external controllers"]],
      box:["R36S handheld","Type-C charging cable","User manual"],policy:commonPolicy
    },
    r35s:{
      subtitle:"2024 Handheld • 15,000+ Games • HDMI TV Output",
      description:"R35S powerful handheld retro console hai jo portable design ke saath classic 2D aur selected 3D games support karta hai. Travel, kids aur nostalgic gaming ke लिए suitable hai.",
      features:["15,000+ preloaded games","Portable handheld","Plug & Play","HDMI output","Long battery backup"],emulators:commonEmulators,
      technical:[["CPU","Rockchip RK3326 Quad-Core Cortex-A35"],["GPU","Mali-G31 MP2"],["RAM","1GB DDR3"],["ROM / OS","Linux Based System"],["Storage","64GB TF Card"],["Display","3.5-inch IPS 640×480"],["Battery","3500mAh; approx. 8–10 hours"],["Charging","Type-C 5V/2A"],["Audio","3.5mm Headphone Jack"],["TV Output","HDMI Supported"],["Controls","Built-in; no external controllers"]],
      box:["R35S handheld","Type-C charging cable","User manual"],policy:commonPolicy
    },
    "black-hawk":{
      subtitle:"X9 Handheld • 5.5-inch HD Display • 4,000 Retro Games",
      description:"Black Hawk X9 ek portable retro handheld console hai jisme 4,000 preloaded games, multiple emulators, built-in controls aur TV connection support milta hai.",
      features:["4,000 preloaded games","5.5-inch HD display","9 emulator support","TV connection","Dual analog controls","Portable rechargeable design"],
      emulators:["Capcom Play","MAME","Arcade and other supported classic systems"],
      technical:[["Display","5.5-inch HD screen"],["Games","Approx. 4,000 preloaded"],["Emulators","9 supported emulator groups"],["Storage","TF card expansion supported"],["TV Output","Supported"],["Battery","1500mAh rechargeable"],["Charging","USB Type-C"],["Controls","Built-in D-pad, action buttons and dual analog sticks"]],
      box:["Black Hawk X9 handheld console","Charging cable","User manual"],policy:commonPolicy
    },
    "sega-umd":{
      subtitle:"Super Mini U-Box MD • 16-Bit Retro TV Game Console",
      description:"Super Mini U-Box MD compact 16-bit plug-and-play TV game console hai. Classic 16-bit game collection, two controllers aur direct TV connection ke साथ family retro gaming ke लिए बनाया गया है.",
      features:["16-bit retro gaming","Built-in classic games","Two-player support","Compact plug-and-play console","TV connection"],
      emulators:["Built-in 16-bit game system"],
      technical:[["Console Type","16-bit Mini U-Box MD"],["Games","Built-in classic 16-bit game collection; batch may vary"],["Video Output","TV output; supplied connection according to batch"],["Controllers","2 included controllers"],["Multiplayer","2-player supported"],["Power","External power supply"]],
      box:["Super Mini U-Box MD console","2× controllers","TV connection cable","Power supply"],policy:commonPolicy
    },
    "pxn-v3":{
      subtitle:"180° USB Racing Wheel • Dual Vibration • Pedals & Shifter",
      description:"PXN V3 Pro entry-level racing wheel set hai jisme 180-degree steering, dual vibration feedback, accelerator/brake pedals, paddle shifting aur sequential shifter milte hain.",
      features:["180° steering rotation","260mm rubber-coated wheel","Dual vibration motors","Accelerator and brake pedals","Paddle and sequential shifting","USB Plug & Play"],
      emulators:["Racing games on compatible PC and consoles"],
      technical:[["Rotation","180°"],["Wheel Diameter","260mm"],["Grip","Rubber coated"],["Feedback","Dual vibration motors; no force feedback"],["Pedals","Foldable accelerator and brake"],["Shifting","Paddle shifters + sequential shifter"],["Connection","USB wired 2m"],["Power","DC 5V via USB"],["Compatibility","PC, PS3, PS4, Xbox One, Xbox Series X|S, Nintendo Switch"],["Approx. Product Size","260 × 320 × 245mm"],["Approx. Net Weight","2360g"]],
      box:["PXN V3 Pro steering wheel","Pedal set","Sequential shifter","Connection cables","Mounting accessories","User manual"],policy:commonPolicy
    }
  };
  const keys=[...new Set([...Object.keys(byPrefix),...Object.keys(rich)])].sort((a,b)=>b.length-a.length);
  window.GP_PRODUCTS.forEach(p=>{
    const key=keys.find(k=>p.id.startsWith(k+"-"));
    const d=byPrefix[key]||defaults[p.category]||{hardware:["Product hardware as shown"],software:["Software/support as stated"],box:["Selected product"]};
    const r=rich[key];
    p.hardware=d.hardware;p.software=d.software;p.boxContents=d.box;
    if(r){
      p.subtitle=r.subtitle;p.fullDescription=r.description;p.keyFeatures=r.features;
      p.emulators=r.emulators;p.technicalTable=r.technical;p.boxContents=r.box;
      p.policyItems=r.policy;p.notes=r.notes||[];
      if(key==="m88")p.mrp=6799;
    }
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
