// ============================================================
//  SHARED PROCESSOR DATABASE
//  Used by: ranks.html, compare.html, index.html
// ============================================================

const processorDB = [

  // ── APPLE ──────────────────────────────────────────────────

  { name:"Apple A19 Pro",      company:"Apple",    cpu:99,  gpu:99,  battery:96, nanoScore:100, antutu:1890000, process:"3nm",
    pros:["World's fastest mobile chip","Console-level GPU","Industry-leading neural engine"] },

  { name:"Apple A18 Pro",      company:"Apple",    cpu:98,  gpu:98,  battery:95, nanoScore:99,  antutu:1580000, process:"3nm",
    pros:["Best mobile CPU","Console level GPU","Top-tier efficiency"] },

  { name:"Apple A17 Pro",      company:"Apple",    cpu:97,  gpu:97,  battery:93, nanoScore:98,  antutu:1360000, process:"3nm",
    pros:["Console level gaming","Industry leading CPU","First 3nm mobile chip"] },

  { name:"Apple A16 Bionic",   company:"Apple",    cpu:96,  gpu:95,  battery:92, nanoScore:96,  antutu:1280000, process:"4nm",
    pros:["Excellent efficiency","Strong GPU","Best-in-class single-core"] },

  { name:"Apple A15 Bionic",   company:"Apple",    cpu:94,  gpu:93,  battery:92, nanoScore:94,  antutu:950000,  process:"5nm",
    pros:["Very powerful GPU","Great efficiency","Excellent multi-core"] },

  { name:"Apple A14 Bionic",   company:"Apple",    cpu:92,  gpu:90,  battery:91, nanoScore:91,  antutu:740000,  process:"5nm",
    pros:["First 5nm chip","Great power efficiency","Strong GPU"] },

  { name:"Apple A13 Bionic",   company:"Apple",    cpu:90,  gpu:88,  battery:90, nanoScore:89,  antutu:490000,  process:"7nm",
    pros:["Excellent efficiency","Strong Neural Engine"] },

  { name:"Apple A12 Bionic",   company:"Apple",    cpu:88,  gpu:86,  battery:88, nanoScore:87,  antutu:360000,  process:"7nm",
    pros:["Strong neural engine","Good gaming"] },

  { name:"Apple A11 Bionic",   company:"Apple",    cpu:85,  gpu:83,  battery:86, nanoScore:84,  antutu:220000,  process:"10nm",
    pros:["First neural engine","Solid performance"] },

  { name:"Apple A10 Fusion",   company:"Apple",    cpu:80,  gpu:78,  battery:84, nanoScore:78,  antutu:130000,  process:"16nm",
    pros:["Good efficiency","Reliable performance"] },

  { name:"Apple A9",           company:"Apple",    cpu:75,  gpu:73,  battery:82, nanoScore:73,  antutu:90000,   process:"16nm",
    pros:["Solid performance","Good battery"] },

  { name:"Apple A8",           company:"Apple",    cpu:70,  gpu:68,  battery:80, nanoScore:68,  antutu:60000,   process:"20nm",
    pros:["Reliable chip","Efficient design"] },

  // ── QUALCOMM SNAPDRAGON FLAGSHIP ───────────────────────────

  { name:"Snapdragon 8 Elite", company:"Qualcomm", cpu:99,  gpu:99,  battery:94, nanoScore:99,  antutu:1810000, process:"3nm",
    pros:["Next-gen flagship","Extreme gaming power","AI optimized"] },

  { name:"Snapdragon 8 Gen 3", company:"Qualcomm", cpu:97,  gpu:98,  battery:91, nanoScore:97,  antutu:1600000, process:"4nm",
    pros:["Flagship performance","Excellent gaming","Efficient design"] },

  { name:"Snapdragon 8 Gen 2", company:"Qualcomm", cpu:95,  gpu:96,  battery:90, nanoScore:95,  antutu:1380000, process:"4nm",
    pros:["Great gaming","Stable thermals","Strong ISP"] },

  { name:"Snapdragon 8 Gen 1", company:"Qualcomm", cpu:92,  gpu:93,  battery:85, nanoScore:91,  antutu:1080000, process:"4nm",
    pros:["Powerful GPU","Good flagship performance"] },

  { name:"Snapdragon 888 Plus",company:"Qualcomm", cpu:91,  gpu:92,  battery:84, nanoScore:90,  antutu:1000000, process:"5nm",
    pros:["Strong gaming","High clock speeds"] },

  { name:"Snapdragon 888",     company:"Qualcomm", cpu:90,  gpu:91,  battery:83, nanoScore:89,  antutu:980000,  process:"5nm",
    pros:["Flagship CPU","Good camera ISP"] },

  { name:"Snapdragon 870",     company:"Qualcomm", cpu:89,  gpu:88,  battery:88, nanoScore:88,  antutu:860000,  process:"7nm",
    pros:["Very stable","Good thermals","Efficient flagship"] },

  { name:"Snapdragon 865 Plus",company:"Qualcomm", cpu:88,  gpu:87,  battery:86, nanoScore:87,  antutu:780000,  process:"7nm",
    pros:["Great gaming","Reliable performance"] },

  { name:"Snapdragon 865",     company:"Qualcomm", cpu:87,  gpu:86,  battery:87, nanoScore:86,  antutu:760000,  process:"7nm",
    pros:["Efficient flagship","Good modem"] },

  { name:"Snapdragon 860",     company:"Qualcomm", cpu:86,  gpu:85,  battery:86, nanoScore:85,  antutu:700000,  process:"7nm",
    pros:["Refined Snapdragon 855+","Good thermals"] },

  { name:"Snapdragon 855 Plus",company:"Qualcomm", cpu:84,  gpu:85,  battery:84, nanoScore:84,  antutu:680000,  process:"7nm",
    pros:["Strong gaming","Good optimization"] },

  { name:"Snapdragon 855",     company:"Qualcomm", cpu:83,  gpu:84,  battery:83, nanoScore:83,  antutu:660000,  process:"7nm",
    pros:["Balanced flagship chip"] },

  { name:"Snapdragon 845",     company:"Qualcomm", cpu:80,  gpu:81,  battery:82, nanoScore:80,  antutu:420000,  process:"10nm",
    pros:["Smooth performance","Reliable chip"] },

  { name:"Snapdragon 835",     company:"Qualcomm", cpu:76,  gpu:75,  battery:80, nanoScore:75,  antutu:280000,  process:"10nm",
    pros:["Efficient older flagship"] },

  { name:"Snapdragon 821",     company:"Qualcomm", cpu:72,  gpu:70,  battery:75, nanoScore:70,  antutu:145000,  process:"14nm",
    pros:["Improved 820","Fast CPU"] },

  { name:"Snapdragon 820",     company:"Qualcomm", cpu:70,  gpu:68,  battery:74, nanoScore:68,  antutu:130000,  process:"14nm",
    pros:["First Kryo CPU"] },

  { name:"Snapdragon 810",     company:"Qualcomm", cpu:60,  gpu:58,  battery:60, nanoScore:58,  antutu:70000,   process:"20nm",
    pros:["Early 64-bit flagship"] },

  { name:"Snapdragon 808",     company:"Qualcomm", cpu:58,  gpu:56,  battery:62, nanoScore:56,  antutu:55000,   process:"20nm",
    pros:["Lower power 810 alternative"] },

  { name:"Snapdragon 805",     company:"Qualcomm", cpu:55,  gpu:54,  battery:60, nanoScore:54,  antutu:45000,   process:"28nm",
    pros:["Strong GPU for its era"] },

  { name:"Snapdragon 801",     company:"Qualcomm", cpu:52,  gpu:50,  battery:58, nanoScore:50,  antutu:35000,   process:"28nm",
    pros:["Very popular flagship chip"] },

  // ── QUALCOMM SNAPDRAGON MIDRANGE ───────────────────────────

  { name:"Snapdragon 8s Gen 3",company:"Qualcomm", cpu:93,  gpu:92,  battery:91, nanoScore:92,  antutu:1220000, process:"4nm",
    pros:["Near-flagship performance","Great gaming"] },

  { name:"Snapdragon 7+ Gen 3",company:"Qualcomm", cpu:92,  gpu:92,  battery:91, nanoScore:92,  antutu:580000,  process:"4nm",
    pros:["Near flagship performance","Great gaming"] },

  { name:"Snapdragon 7 Gen 3", company:"Qualcomm", cpu:89,  gpu:88,  battery:90, nanoScore:88,  antutu:560000,  process:"4nm",
    pros:["Efficient midrange","Good AI"] },

  { name:"Snapdragon 7 Gen 1", company:"Qualcomm", cpu:86,  gpu:85,  battery:87, nanoScore:85,  antutu:480000,  process:"4nm",
    pros:["Good camera support","Efficient"] },

  { name:"Snapdragon 780G",    company:"Qualcomm", cpu:87,  gpu:86,  battery:88, nanoScore:86,  antutu:500000,  process:"5nm",
    pros:["Flagship-like efficiency"] },

  { name:"Snapdragon 778G",    company:"Qualcomm", cpu:85,  gpu:84,  battery:88, nanoScore:84,  antutu:520000,  process:"6nm",
    pros:["Great balance","Good gaming"] },

  { name:"Snapdragon 768G",    company:"Qualcomm", cpu:82,  gpu:81,  battery:86, nanoScore:81,  antutu:320000,  process:"7nm",
    pros:["Good gaming midrange"] },

  { name:"Snapdragon 765G",    company:"Qualcomm", cpu:80,  gpu:79,  battery:87, nanoScore:79,  antutu:290000,  process:"7nm",
    pros:["Integrated 5G"] },

  { name:"Snapdragon 750G",    company:"Qualcomm", cpu:79,  gpu:78,  battery:86, nanoScore:78,  antutu:260000,  process:"8nm",
    pros:["Affordable 5G"] },

  { name:"Snapdragon 732G",    company:"Qualcomm", cpu:78,  gpu:77,  battery:85, nanoScore:77,  antutu:240000,  process:"8nm",
    pros:["Stable gaming"] },

  { name:"Snapdragon 730G",    company:"Qualcomm", cpu:77,  gpu:76,  battery:85, nanoScore:76,  antutu:220000,  process:"8nm",
    pros:["Good GPU"] },

  { name:"Snapdragon 720G",    company:"Qualcomm", cpu:75,  gpu:74,  battery:86, nanoScore:74,  antutu:200000,  process:"8nm",
    pros:["Efficient gaming chip"] },

  { name:"Snapdragon 710",     company:"Qualcomm", cpu:73,  gpu:72,  battery:84, nanoScore:72,  antutu:180000,  process:"10nm",
    pros:["First AI midrange"] },

  { name:"Snapdragon 695",     company:"Qualcomm", cpu:72,  gpu:70,  battery:88, nanoScore:70,  antutu:440000,  process:"6nm",
    pros:["Very efficient","Good 5G"] },

  { name:"Snapdragon 690",     company:"Qualcomm", cpu:71,  gpu:69,  battery:87, nanoScore:69,  antutu:240000,  process:"8nm",
    pros:["Budget 5G"] },

  // ── QUALCOMM SNAPDRAGON BUDGET ─────────────────────────────

  { name:"Snapdragon 680",     company:"Qualcomm", cpu:68,  gpu:65,  battery:89, nanoScore:66,  antutu:230000,  process:"6nm",
    pros:["Very power efficient"] },

  { name:"Snapdragon 675",     company:"Qualcomm", cpu:70,  gpu:68,  battery:83, nanoScore:68,  antutu:220000,  process:"11nm",
    pros:["Good CPU cores"] },

  { name:"Snapdragon 670",     company:"Qualcomm", cpu:69,  gpu:67,  battery:83, nanoScore:67,  antutu:210000,  process:"10nm",
    pros:["Efficient design"] },

  { name:"Snapdragon 665",     company:"Qualcomm", cpu:66,  gpu:65,  battery:85, nanoScore:65,  antutu:200000,  process:"11nm",
    pros:["Long battery life"] },

  { name:"Snapdragon 662",     company:"Qualcomm", cpu:64,  gpu:63,  battery:84, nanoScore:63,  antutu:190000,  process:"11nm",
    pros:["Good budget efficiency"] },

  { name:"Snapdragon 660",     company:"Qualcomm", cpu:65,  gpu:64,  battery:83, nanoScore:64,  antutu:180000,  process:"14nm",
    pros:["Popular budget chip"] },

  { name:"Snapdragon 650",     company:"Qualcomm", cpu:63,  gpu:62,  battery:80, nanoScore:62,  antutu:170000,  process:"28nm",
    pros:["Good CPU performance"] },

  { name:"Snapdragon 636",     company:"Qualcomm", cpu:61,  gpu:60,  battery:82, nanoScore:60,  antutu:160000,  process:"14nm",
    pros:["Stable performance"] },

  { name:"Snapdragon 632",     company:"Qualcomm", cpu:59,  gpu:58,  battery:81, nanoScore:58,  antutu:150000,  process:"14nm",
    pros:["Budget efficiency"] },

  { name:"Snapdragon 630",     company:"Qualcomm", cpu:57,  gpu:56,  battery:80, nanoScore:56,  antutu:140000,  process:"14nm",
    pros:["Power efficient"] },

  { name:"Snapdragon 625",     company:"Qualcomm", cpu:55,  gpu:54,  battery:85, nanoScore:54,  antutu:130000,  process:"14nm",
    pros:["Legendary battery life"] },

  { name:"Snapdragon 620",     company:"Qualcomm", cpu:52,  gpu:50,  battery:78, nanoScore:50,  antutu:120000,  process:"28nm",
    pros:["Early 64-bit midrange"] },

  { name:"Snapdragon 617",     company:"Qualcomm", cpu:52,  gpu:50,  battery:80, nanoScore:50,  antutu:110000,  process:"28nm",
    pros:["Entry level SoC"] },

  { name:"Snapdragon 615",     company:"Qualcomm", cpu:50,  gpu:48,  battery:78, nanoScore:48,  antutu:100000,  process:"28nm",
    pros:["Affordable 64-bit"] },

  { name:"Snapdragon 480",     company:"Qualcomm", cpu:62,  gpu:60,  battery:83, nanoScore:60,  antutu:95000,   process:"8nm",
    pros:["Budget 5G chip"] },

  { name:"Snapdragon 460",     company:"Qualcomm", cpu:58,  gpu:56,  battery:82, nanoScore:56,  antutu:90000,   process:"11nm",
    pros:["Efficient budget chip"] },

  { name:"Snapdragon 450",     company:"Qualcomm", cpu:54,  gpu:52,  battery:81, nanoScore:52,  antutu:85000,   process:"14nm",
    pros:["Good battery"] },

  { name:"Snapdragon 439",     company:"Qualcomm", cpu:50,  gpu:48,  battery:80, nanoScore:48,  antutu:80000,   process:"12nm",
    pros:["Entry efficiency"] },

  { name:"Snapdragon 430",     company:"Qualcomm", cpu:46,  gpu:44,  battery:79, nanoScore:44,  antutu:75000,   process:"28nm",
    pros:["Basic performance"] },

  { name:"Snapdragon 425",     company:"Qualcomm", cpu:44,  gpu:42,  battery:78, nanoScore:42,  antutu:70000,   process:"28nm",
    pros:["Budget LTE"] },

  { name:"Snapdragon 415",     company:"Qualcomm", cpu:42,  gpu:40,  battery:77, nanoScore:40,  antutu:65000,   process:"28nm",
    pros:["Low-end 8-core"] },

  { name:"Snapdragon 410",     company:"Qualcomm", cpu:40,  gpu:38,  battery:76, nanoScore:38,  antutu:60000,   process:"28nm",
    pros:["Entry LTE"] },

  { name:"Snapdragon 400",     company:"Qualcomm", cpu:38,  gpu:36,  battery:75, nanoScore:36,  antutu:55000,   process:"28nm",
    pros:["Basic smartphone chip"] },

  { name:"Snapdragon 212",     company:"Qualcomm", cpu:34,  gpu:32,  battery:74, nanoScore:32,  antutu:50000,   process:"28nm",
    pros:["Ultra-low power"] },

  // ── MEDIATEK DIMENSITY FLAGSHIP ────────────────────────────

  { name:"Dimensity 9500",     company:"MediaTek", cpu:99,  gpu:98,  battery:94, nanoScore:99,  antutu:1780000, process:"3nm",
    pros:["Extreme flagship power","Top efficiency"] },

  { name:"Dimensity 9400+",    company:"MediaTek", cpu:98,  gpu:97,  battery:93, nanoScore:98,  antutu:1710000, process:"3nm",
    pros:["Near-peak performance","Great gaming"] },

  { name:"Dimensity 9400",     company:"MediaTek", cpu:97,  gpu:97,  battery:94, nanoScore:99,  antutu:1680000, process:"3nm",
    pros:["Extreme flagship power","Great AI"] },

  { name:"Dimensity 9300+",    company:"MediaTek", cpu:95,  gpu:95,  battery:90, nanoScore:95,  antutu:1540000, process:"4nm",
    pros:["Strong GPU","All-big-core design"] },

  { name:"Dimensity 9300",     company:"MediaTek", cpu:94,  gpu:94,  battery:90, nanoScore:94,  antutu:1500000, process:"4nm",
    pros:["Powerful CPU cluster","Great gaming"] },

  { name:"Dimensity 9200+",    company:"MediaTek", cpu:93,  gpu:93,  battery:90, nanoScore:93,  antutu:1180000, process:"4nm",
    pros:["Strong GPU","Efficient"] },

  { name:"Dimensity 9200",     company:"MediaTek", cpu:92,  gpu:92,  battery:90, nanoScore:92,  antutu:1060000, process:"4nm",
    pros:["Great gaming","Efficient flagship"] },

  { name:"Dimensity 9000+",    company:"MediaTek", cpu:91,  gpu:91,  battery:89, nanoScore:91,  antutu:900000,  process:"4nm",
    pros:["Flagship class","Good thermals"] },

  { name:"Dimensity 9000",     company:"MediaTek", cpu:90,  gpu:90,  battery:89, nanoScore:90,  antutu:870000,  process:"4nm",
    pros:["Efficient flagship"] },

  // ── MEDIATEK DIMENSITY MIDRANGE ────────────────────────────

  { name:"Dimensity 8300 Ultra",company:"MediaTek",cpu:89, gpu:88,  battery:91, nanoScore:88,  antutu:540000,  process:"4nm",
    pros:["Excellent midrange gaming"] },

  { name:"Dimensity 8200",     company:"MediaTek", cpu:88,  gpu:88,  battery:91, nanoScore:88,  antutu:840000,  process:"4nm",
    pros:["Excellent midrange gaming"] },

  { name:"Dimensity 8100",     company:"MediaTek", cpu:87,  gpu:87,  battery:92, nanoScore:87,  antutu:820000,  process:"5nm",
    pros:["Great efficiency","Strong CPU"] },

  { name:"Dimensity 8000",     company:"MediaTek", cpu:86,  gpu:86,  battery:91, nanoScore:86,  antutu:800000,  process:"5nm",
    pros:["Good performance"] },

  { name:"Dimensity 7200",     company:"MediaTek", cpu:82,  gpu:80,  battery:89, nanoScore:81,  antutu:480000,  process:"4nm",
    pros:["Efficient midrange"] },

  { name:"Dimensity 7050",     company:"MediaTek", cpu:82,  gpu:80,  battery:90, nanoScore:81,  antutu:460000,  process:"6nm",
    pros:["Efficient midrange"] },

  { name:"Dimensity 7020",     company:"MediaTek", cpu:80,  gpu:78,  battery:89, nanoScore:79,  antutu:420000,  process:"6nm",
    pros:["Good battery life"] },

  { name:"Dimensity 1300",     company:"MediaTek", cpu:86,  gpu:85,  battery:89, nanoScore:85,  antutu:700000,  process:"6nm",
    pros:["Strong gaming"] },

  { name:"Dimensity 1200",     company:"MediaTek", cpu:85,  gpu:84,  battery:88, nanoScore:84,  antutu:640000,  process:"6nm",
    pros:["Flagship killer"] },

  { name:"Dimensity 1100",     company:"MediaTek", cpu:84,  gpu:83,  battery:88, nanoScore:83,  antutu:620000,  process:"6nm",
    pros:["Good performance"] },

  { name:"Dimensity 1000+",    company:"MediaTek", cpu:82,  gpu:82,  battery:86, nanoScore:82,  antutu:500000,  process:"7nm",
    pros:["Early flagship chip"] },

  { name:"Dimensity 920",      company:"MediaTek", cpu:80,  gpu:78,  battery:88, nanoScore:78,  antutu:420000,  process:"6nm",
    pros:["Good balance"] },

  { name:"Dimensity 900",      company:"MediaTek", cpu:78,  gpu:76,  battery:87, nanoScore:76,  antutu:400000,  process:"6nm",
    pros:["Affordable 5G"] },

  { name:"Dimensity 810",      company:"MediaTek", cpu:72,  gpu:70,  battery:86, nanoScore:70,  antutu:260000,  process:"6nm",
    pros:["Budget 5G"] },

  { name:"Dimensity 700",      company:"MediaTek", cpu:68,  gpu:66,  battery:86, nanoScore:66,  antutu:250000,  process:"7nm",
    pros:["Budget 5G choice"] },

  // ── MEDIATEK DIMENSITY BUDGET ──────────────────────────────

  { name:"Dimensity 6080",     company:"MediaTek", cpu:74,  gpu:72,  battery:88, nanoScore:72,  antutu:300000,  process:"6nm",
    pros:["Budget 5G"] },

  { name:"Dimensity 6020",     company:"MediaTek", cpu:72,  gpu:70,  battery:88, nanoScore:70,  antutu:280000,  process:"6nm",
    pros:["Affordable 5G"] },

  // ── MEDIATEK HELIO ─────────────────────────────────────────

  { name:"Helio G99",          company:"MediaTek", cpu:78,  gpu:76,  battery:90, nanoScore:77,  antutu:380000,  process:"6nm",
    pros:["Very efficient gaming chip"] },

  { name:"Helio G96",          company:"MediaTek", cpu:76,  gpu:74,  battery:86, nanoScore:74,  antutu:360000,  process:"12nm",
    pros:["Budget gaming"] },

  { name:"Helio G95",          company:"MediaTek", cpu:75,  gpu:73,  battery:85, nanoScore:73,  antutu:340000,  process:"12nm",
    pros:["Good GPU"] },

  { name:"Helio G90T",         company:"MediaTek", cpu:74,  gpu:72,  battery:84, nanoScore:72,  antutu:320000,  process:"12nm",
    pros:["Popular gaming chip"] },

  { name:"Helio G88",          company:"MediaTek", cpu:72,  gpu:70,  battery:88, nanoScore:70,  antutu:300000,  process:"12nm",
    pros:["Efficient budget gaming"] },

  { name:"Helio G85",          company:"MediaTek", cpu:71,  gpu:69,  battery:87, nanoScore:69,  antutu:290000,  process:"12nm",
    pros:["Stable gaming"] },

  { name:"Helio G80",          company:"MediaTek", cpu:69,  gpu:67,  battery:87, nanoScore:67,  antutu:280000,  process:"12nm",
    pros:["Good battery life"] },

  { name:"Helio G70",          company:"MediaTek", cpu:67,  gpu:65,  battery:86, nanoScore:65,  antutu:270000,  process:"12nm",
    pros:["Entry gaming"] },

  // ── SAMSUNG EXYNOS ─────────────────────────────────────────

  { name:"Exynos 2500",        company:"Samsung",  cpu:97,  gpu:97,  battery:92, nanoScore:97,  antutu:1600000, process:"3nm",
    pros:["Next-gen Samsung flagship","Advanced GPU"] },

  { name:"Exynos 2400",        company:"Samsung",  cpu:95,  gpu:95,  battery:90, nanoScore:95,  antutu:1240000, process:"4nm",
    pros:["AMD GPU","Great AI performance"] },

  { name:"Exynos 2200",        company:"Samsung",  cpu:92,  gpu:91,  battery:87, nanoScore:91,  antutu:920000,  process:"4nm",
    pros:["RDNA2 GPU","Good gaming"] },

  { name:"Exynos 2100",        company:"Samsung",  cpu:90,  gpu:88,  battery:85, nanoScore:88,  antutu:720000,  process:"5nm",
    pros:["Improved thermals","Strong CPU"] },

  { name:"Exynos 1380",        company:"Samsung",  cpu:84,  gpu:82,  battery:89, nanoScore:83,  antutu:480000,  process:"5nm",
    pros:["Great midrange chip"] },

  { name:"Exynos 1330",        company:"Samsung",  cpu:80,  gpu:78,  battery:88, nanoScore:79,  antutu:460000,  process:"5nm",
    pros:["Efficient 5G"] },

  { name:"Exynos 1280",        company:"Samsung",  cpu:81,  gpu:79,  battery:88, nanoScore:80,  antutu:440000,  process:"5nm",
    pros:["Balanced chip"] },

  { name:"Exynos 1080",        company:"Samsung",  cpu:86,  gpu:85,  battery:88, nanoScore:85,  antutu:500000,  process:"5nm",
    pros:["Strong midrange"] },

  { name:"Exynos 990",         company:"Samsung",  cpu:83,  gpu:81,  battery:82, nanoScore:81,  antutu:480000,  process:"7nm",
    pros:["Flagship chip"] },

  { name:"Exynos 9825",        company:"Samsung",  cpu:81,  gpu:79,  battery:83, nanoScore:79,  antutu:380000,  process:"7nm",
    pros:["Good flagship"] },

  { name:"Exynos 9810",        company:"Samsung",  cpu:78,  gpu:76,  battery:82, nanoScore:76,  antutu:280000,  process:"10nm",
    pros:["Strong CPU"] },

  { name:"Exynos 8895",        company:"Samsung",  cpu:74,  gpu:72,  battery:80, nanoScore:72,  antutu:200000,  process:"10nm",
    pros:["Efficient design"] },

  { name:"Exynos 8890",        company:"Samsung",  cpu:71,  gpu:69,  battery:78, nanoScore:69,  antutu:170000,  process:"14nm",
    pros:["Good performance"] },

  { name:"Exynos 850",         company:"Samsung",  cpu:60,  gpu:58,  battery:82, nanoScore:58,  antutu:42000,   process:"8nm",
    pros:["Efficient budget chip"] },

  { name:"Exynos 7904",        company:"Samsung",  cpu:56,  gpu:54,  battery:80, nanoScore:54,  antutu:40000,   process:"14nm",
    pros:["Budget 4G chip"] },

  { name:"Exynos 7420",        company:"Samsung",  cpu:68,  gpu:66,  battery:77, nanoScore:66,  antutu:120000,  process:"14nm",
    pros:["First 14nm chip"] },

  { name:"Exynos 5433",        company:"Samsung",  cpu:63,  gpu:61,  battery:75, nanoScore:61,  antutu:80000,   process:"20nm",
    pros:["Early flagship"] },

  // ── GOOGLE TENSOR ──────────────────────────────────────────

  { name:"Tensor G4",          company:"Google",   cpu:92,  gpu:90,  battery:90, nanoScore:90,  antutu:850000,  process:"4nm",
    pros:["AI focused flagship","Best Google AI"] },

  { name:"Tensor G3",          company:"Google",   cpu:88,  gpu:87,  battery:89, nanoScore:88,  antutu:900000,  process:"4nm",
    pros:["Great AI processing","Strong camera AI"] },

  { name:"Tensor G2",          company:"Google",   cpu:86,  gpu:85,  battery:88, nanoScore:86,  antutu:800000,  process:"5nm",
    pros:["Good camera AI","Efficient"] },

  { name:"Tensor (Gen 1)",     company:"Google",   cpu:84,  gpu:83,  battery:86, nanoScore:84,  antutu:700000,  process:"5nm",
    pros:["First Google AI chip"] },

  // ── HUAWEI KIRIN ───────────────────────────────────────────

  { name:"Kirin 9000",         company:"Huawei",   cpu:91,  gpu:89,  battery:90, nanoScore:90,  antutu:600000,  process:"5nm",
    pros:["Integrated 5G modem","Great AI","Efficient 5nm"] },

  { name:"Kirin 820",          company:"Huawei",   cpu:75,  gpu:72,  battery:87, nanoScore:73,  antutu:38000,   process:"7nm",
    pros:["Good midrange 5G"] },

  { name:"Kirin 810",          company:"Huawei",   cpu:73,  gpu:70,  battery:86, nanoScore:71,  antutu:36000,   process:"7nm",
    pros:["Efficient midrange"] },

  { name:"Kirin 710A",         company:"Huawei",   cpu:66,  gpu:63,  battery:83, nanoScore:63,  antutu:34000,   process:"14nm",
    pros:["Budget 4G chip"] },

  { name:"Kirin 659",          company:"Huawei",   cpu:58,  gpu:55,  battery:80, nanoScore:55,  antutu:32000,   process:"16nm",
    pros:["Popular budget chip"] },

  { name:"Kirin 650",          company:"Huawei",   cpu:54,  gpu:51,  battery:78, nanoScore:51,  antutu:30000,   process:"16nm",
    pros:["Decent budget performance"] },

];

// ── Helper: build lookup map by name ───────────────────────

const processorMap = {};
processorDB.forEach(p => { processorMap[p.name] = p; });

// ── Helper: sorted rankings (by nanoScore desc, then antutu) ─

const rankedProcessors = [...processorDB].sort((a, b) => {
  if (b.nanoScore !== a.nanoScore) return b.nanoScore - a.nanoScore;
  return b.antutu - a.antutu;
}).map((p, i) => ({ ...p, rank: i + 1 }));
