const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const products = [
  { name: "Cylinder Block", image: "images/Cylinder Block.png", category: "Cylinder Block"   },
  { name: "CYL IR 1.75 (234)", image: "images/CYL IR 1.75 (234).png", category: "Cylinder Block"   },
  { name: "CYL IR 1.75 (2340)", image: "images/CYL IR 1.75 (2340).png", category: "Cylinder Block"   },
  { name: "CYL IR 2.5 (242)", image: "images/CYL IR 2.5 (242).png", category: "Cylinder Block"   },
  { name: "CYL IR 2.5 (2475)", image: "images/CYL IR 2.5 (2475).png", category: "Cylinder Block"  },
  { name: "CYL IR 2.75 (2545)", image: "images/CYL IR 2.75 (2545).png", category: "Cylinder Block"   },
  { name: "CYL IR 3 (234)", image: "images/CYL IR 3 (234).png", category: "Cylinder Block"   },
  { name: "CYL IR 3 (253) F Line", image: "images/CYL IR 3 (253) F Line.png", category: "Cylinder Block"   },
    { name: "CYL IR 3 (2340)", image: "images/Ir 3 2340.jpeg", category: "Cylinder Block"  },
  { name: "CYL IR 3 T Line", image: "images/CYL IR 3 T Line.png", category: "Cylinder Block"   },
  { name: "CYL IR 3.5", image: "images/CYL IR 3.5.png", category: "Cylinder Block"   },
  { name: "CYL IR 4 (242)", image: "images/CYL IR 4 (242).png", category: "Cylinder Block"   },
  { name: "CYL IR 4 (2475)", image: "images/CYL IR 4 (2475).png", category: "Cylinder Block"   },
  { name: "CYL IR 5 (253) F Line", image: "images/CYL IR 5 (253) F Line.png", category: "Cylinder Block"   },
  { name: "CYL IR 5 2545", image: "images/CYL IR 5 2545.png", category: "Cylinder Block"   },
  { name: "CYL IR 5 T Line", image: "images/CYL IR 5 T Line.png", category: "Cylinder Block"   },
  { name: "CYL IR 5.5", image: "images/CYL IR 5.5.png", category: "Cylinder Block"   },
   { name: "CYL KG 50", image: "images/B_KG50.jpeg", category: "Cylinder Block"  },
   { name: "CYL ELGI 50", image: "images/Elgi 60 & Elgi 50.jpeg", category: "Cylinder Block"  },
   { name: "CYL ELGI 60", image: "images/Elgi 60 & Elgi 50.jpeg", category: "Cylinder Block"  },
   { name: "CYL ELGI 60 2D", image: "images/Blank.png", category: "Cylinder Block"  },
   { name: "CYL ELGI 70", image: "images/Elgi 70 SL & Elgi 70.jpeg", category: "Cylinder Block"  },
   { name: "CYL ELGI 70 3D", image: "images/Elgi 70 3D.jpeg", category: "Cylinder Block"  },
   { name: "CYL ELGI 70 SHORT LENGTH", image: "images/Elgi 70 SL & Elgi 70.jpeg", category: "Cylinder Block"  },
   { name: "CYL KG 70 NL", image: "images/KG 70 NL.jpeg", category: "Cylinder Block"  },
   { name: "CYL KG 70", image: "images/KG 70.jpeg", category: "Cylinder Block"  },
   { name: "CYL CD170 70mm", image: "images/CD 170 & CD 175.jpeg", category: "Cylinder Block"  },
   { name: "CYL SWAN 70", image: "images/Swan 70.jpeg", category: "Cylinder Block"  },
   { name: "CYL VERSHA 74", image: "images/Versa 74.jpeg", category: "Cylinder Block"  },
   { name: "CYL CD175 70mm", image: "images/CD 170 & CD 175.jpeg", category: "Cylinder Block"  },
   { name: "CYL COMET 76", image: "images/Comet 76.jpeg", category: "Cylinder Block"  },
   { name: "CYL COMET 80", image: "images/B_Comet 80.jpeg", category: "Cylinder Block"  },
   { name: "CYL KIRLOSKAR AV1 80", image: "images/Blank.png", category: "Cylinder Block"  },
   { name: "CYL COMET 85", image: "images/Comet 85.jpeg", category: "Cylinder Block"  },
   { name: "CYL KIRLOSKAR JV1 85", image: "images/JV1 85.jpeg", category: "Cylinder Block"  },
   { name: "CYL APE BS2 86", image: "images/Ape 86 bs3.jpeg", category: "Cylinder Block"  },
  { name: "CYL APE BS3 86", image: "images/Ape 86 bs3.jpeg", category: "Cylinder Block"  },
  { name: "CYL TV1 87.5 NM", image: "images/Tv1 87.5 NM.jpeg", category: "Cylinder Block"  },
  { name: "CYL TV1 87.5 OM", image: "images/Tv1 87.5 OM.jpeg", category: "Cylinder Block"  },
  { name: "CYL TV1 87.5 NM (RED)", image: "images/Blank.png", category: "Cylinder Block"  },
  { name: "CYL ELGI 90 ", image: "images/Elgi 90.jpeg", category: "Cylinder Block"  },
  { name: "CYL KG 93.6 ", image: "images/KG 93.6.jpeg", category: "Cylinder Block"  },
  { name: "CYL AJIT 95", image: "images/Ajit 95.jpeg", category: "Cylinder Block"  },
  { name: "CYL ELGI 100 STRIP ", image: "images/Elgi 100 strip type.jpeg", category: "Cylinder Block"  },
  { name: "CYL ELGI 100 DISK", image: "images/Elgi 100 Disk type.jpeg", category: "Cylinder Block"  },
  { name: "CYL USHA 102", image: "images/Usha 102.jpeg", category: "Cylinder Block"  },
  { name: "CYL VOTA/DAF10 102 NM", image: "images/DAF10 102.jpeg", category: "Cylinder Block"  },
  { name: "CYL FM 102", image: "images/B_FM 102.jpeg", category: "Cylinder Block"  },
  { name: "CYL FM 102 (RED COLOR SPL) NM", image: "images/Blank.png", category: "Cylinder Block"  },
  { name: "CYL KG 105 NL", image: "images/Kg 105 NL.jpeg", category: "Cylinder Block"  },
  { name: "CYL KG 105", image: "images/Kg 105.jpeg", category: "Cylinder Block"  },
  { name: "CYL KIRLOSKAR 114.3", image: "images/Kirloskar 114.3.png", category: "Cylinder Block"  },
  { name: "CYL ATLAS COPCO 130 (2mm) ", image: "images/ATLAS 130 2mm 3mm.jpeg", category: "Cylinder Block"  },
  { name: "CYL ATLAS COPCO 130 (3mm) ", image: "images/ATLAS 130 2mm 3mm.jpeg", category: "Cylinder Block"  },
  { name: "CYL KG 130 ", image: "images/KG 130.jpeg", category: "Cylinder Block"  },
    { name: "CYL ATLAS COPCO 220 (2mm) ", image: "images/Atlas 220 2mm 3mm.jpeg", category: "Cylinder Block"  },
  { name: "CYL ATLAS COPCO 220 (3mm) ", image: "images/Atlas 220 2mm 3mm.jpeg", category: "Cylinder Block"  },
  { name: "CYL KG 225 ", image: "images/Kg 225.jpeg", category: "Cylinder Block"  },
{ name: "CYL RUSTON YMA MK-1 ", image: "images/Ruston ywa mk1.jpeg", category: "Cylinder Block"  },
  { name: "CYL RUSTON YMA MV ", image: "images/Ruston ywa MV.jpeg", category: "Cylinder Block"  },

  

   { name: "Piston", image: "images/Piston.png", category: "Piston"   },
  { name: "PISTON IR 1.75(234) (C.I.)", image: "images/PISTON IR 1.75(234) (C.I.).png", category: "Piston"    },
  { name: "PISTON IR 1.75(2340) (C.I.)", image: "images/PISTON IR 1.75(2340) (C.I.).png", category: "Piston"    },
  
  { name: "PISTON IR 2 (2+2) (Alu)", image: "images/PAISTON 2-2+2 ALU.png", category: "Piston"    },
  
  { name: "PISTON IR 2.5 (2475) (C.I.)", image: "images/PISTON IR 1.75(2340) (C.I.).png", category: "Piston"    },
  { name: "PISTON IR 2.5 (242) (C.I.)", image: "images/PISTON IR 2.5 (242) (C.I.).png", category: "Piston"    },
  { name: "PISTON IR 2.5 (242) (Alu)", image: "images/2.5 ALU.jpeg", category: "Piston"    },
  { name: "PISTON IR 2.5 NM (C.I.)", image: "images/PISTON IR 2.5 NM (C.I.).png", category: "Piston"    },
  
  { name: "PISTON 2.75 (2545) (C.I.)", image: "images/PISTON 2.75 (2545) (C.I.).png", category: "Piston"    },
  { name: "PISTON 2.75 (2600) (C.I.)", image: "images/PISTON 2.75 (2600) (C.I.).png", category: "Piston"    },
  
  { name: "PISTON IR 3 F-LINE 253 (C.I.)", image: "images/PISTON IR 3 F-LINE 253 (C.I.).png", category: "Piston"    },
  { name: "PISTON IR 3 NT(2340)", image: "images/PISTON IR 3 NT(2340).png", category: "Piston"    },
  { name: "Piston IR 3 OT(234) T-LINE (C.I.)", image: "images/Piston IR 3 OT(234) T-LINE (C.I.).png", category: "Piston"    },
  { name: "PISTON IR 3 OT(234)", image: "images/PISTON IR 3 OT(234).png", category: "Piston"    },  
  { name: "PISTON IR 3.5 (C.I)", image: "images/PISTON IR 3.5 (C.I).png", category: "Piston"    },
  
  { name: "PISTON IR 4 25T (C.I)", image: "images/PISTON IR 4 25T (C.I).png", category: "Piston"    },
  { name: "PISTON IR 4 NT (2475)", image: "images/PISTON IR 4 NT (2475).png", category: "Piston"    },
  { name: "PISTON IR 4 OT (242)", image: "images/PISTON IR 4 OT.png", category: "Piston"    },
  
  { name: "PISTON IR 5 NT (2545)", image: "images/PISTON IR 5 NT (2545).png", category: "Piston"    },
  { name: "PISTON IR 5 OT (25.4mm)", image: "images/PISTON IR 5 OT (25.4mm).png", category: "Piston"    },
  { name: "PISTON IR 5 OT (30mm)", image: "images/PISTON IR 5 OT (30mm).png", category: "Piston"    },
  { name: "PISTON IR 5.5", image: "images/PISTON IR 5.5.png", category: "Piston"    },

  { name: "PISTON KG 50 (3+1) STD", image: "images/Kg 50.jpeg", category: "Piston"    },
  { name: "PISTON KG 50 (3+1) 010", image: "images/Kg 50.jpeg", category: "Piston"    },
  { name: "PISTON KG 50 (3+1) 020", image: "images/Kg 50.jpeg", category: "Piston"    },
  { name: "PISTON KG 50 (3+1) 030", image: "images/Kg 50.jpeg", category: "Piston"    },
  { name: "PISTON KG 50 (3+1) 040", image: "images/Kg 50.jpeg", category: "Piston"    },
  
  { name: "PISTON ELGI 50 (2+2) STD", image: "images/Elgi 50.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 50 (2+2) 010", image: "images/Elgi 50.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 50 (2+2) 020", image: "images/Elgi 50.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 50 (2+2) 030", image: "images/Elgi 50.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 50 (2+2) 040", image: "images/Elgi 50.jpeg", category: "Piston"    },

  { name: "PISTON ANESTA I WATA 50 (2+1) STD", image: "images/Anesta 50.png", category: "Piston"    },

  { name: "PISTON HONDA GK 100 STD", image: "images/Honda 100.jpeg", category: "Piston"    },
    { name: "PISTON HONDA GK 52mm 100 (2+1) 010", image: "images/Honda 100.jpeg", category: "Piston"    },
    { name: "PISTON HONDA GK 52mm 100 (2+1) 020", image: "images/Honda 100.jpeg", category: "Piston"    },
    { name: "PISTON HONDA GK 52mm 100 (2+1) 030", image: "images/Honda 100.jpeg", category: "Piston"    },
    { name: "PISTON HONDA GK 52mm 100 (2+1) 040", image: "images/Honda 100.jpeg", category: "Piston"    },

    { name: "PISTON VILLIERS MK-12 55mm (2+1) STD OM", image: "images/Villiers mk 12-55 om.jpeg", category: "Piston"    },
      { name: "PISTON VILLIERS MK-12 55mm (2+1) STD NM", image: "images/Villiers mk 12-55 nm.jpeg", category: "Piston"    },
    { name: "PISTON VILLIERS MK-12 55mm (2+1) 010 OM", image: "images/Villiers mk 12-55 om.jpeg", category: "Piston"    },
      { name: "PISTON VILLIERS MK-12 55mm (2+1) 010 NM", image: "images/Villiers mk 12-55 nm.jpeg", category: "Piston"    },
      { name: "PISTON VILLIERS MK-12 55mm (2+1) 020 OM", image: "images/Villiers mk 12-55 om.jpeg", category: "Piston"    },
      { name: "PISTON VILLIERS MK-12 55mm (2+1) 020 NM", image: "images/Villiers mk 12-55 nm.jpeg", category: "Piston"    },
      { name: "PISTON VILLIERS MK-12 55mm (2+1) 030 OM", image: "images/Villiers mk 12-55 om.jpeg", category: "Piston"    },
      { name: "PISTON VILLIERS MK-12 55mm (2+1) 030 NM", image: "images/Villiers mk 12-55 nm.jpeg", category: "Piston"    },
      { name: "PISTON VILLIERS MK-12 55mm (2+1) 040 OM", image: "images/Villiers mk 12-55 om.jpeg", category: "Piston"    },
      { name: "PISTON VILLIERS MK-12 55mm (2+1) 040 NM", image: "images/Villiers mk 12-55 nm.jpeg", category: "Piston"    },

   { name: "PISTON AIR COMP. 57 (2+1) STD", image: "images/AC 57.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 57 (2+1) 010", image: "images/AC 57.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 57 (2+1) 020", image: "images/AC 57.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 57 (2+1) 030", image: "images/AC 57.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 57 (2+1) 040", image: "images/AC 57.png", category: "Piston"    },
 { name: "PISTON RAJDHANI 57.15 (2+1) STD", image: "images/Rajdhani 57.15.jpeg", category: "Piston"    },

   { name: "PISTON ELGI 60 (2+2) STD", image: "images/Elgi 60.jpeg", category: "Piston"    },
   { name: "PISTON ELGI 60 (2+2) 010", image: "images/Elgi 60.jpeg", category: "Piston"    },
   { name: "PISTON ELGI 60 (2+2) 020", image: "images/Elgi 60.jpeg", category: "Piston"    },
   { name: "PISTON ELGI 60 (2+2) 030", image: "images/Elgi 60.jpeg", category: "Piston"    },
   { name: "PISTON ELGI 60 (2+2) 040", image: "images/Elgi 60.jpeg", category: "Piston"    },

   { name: "PISTON AIR COMP. 63 (2+1) LONG LENGTH STD", image: "images/AC 63 LL.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 63 (2+1) LONG LENGTH 010", image: "images/AC 63 LL.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 63 (2+1) LONG LENGTH 020", image: "images/AC 63 LL.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 63 (2+1) LONG LENGTH 030", image: "images/AC 63 LL.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 63 (2+1) LONG LENGTH 040", image: "images/AC 63 LL.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 63 (2+1) SHORT LENGTH STD", image: "images/AC 63 SL.png", category: "Piston"    },
  { name: "PISTON AIR COMP. 63 (2+1) SHORT LENGTH 010", image: "images/AC 63 SL.png", category: "Piston"    },
  { name: "PISTON AIR COMP. 63 (2+1) SHORT LENGTH 020", image: "images/AC 63 SL.png", category: "Piston"    },
  { name: "PISTON AIR COMP. 63 (2+1) SHORT LENGTH 030", image: "images/AC 63 SL.png", category: "Piston"    },
  { name: "PISTON AIR COMP. 63 (2+1) SHORT LENGTH 040", image: "images/AC 63 SL.png", category: "Piston"    },

 { name: "PISTON ANESTA I WATA 65 (2+1) STD", image: "images/Anesta 65.png", category: "Piston"    },

  { name: "PISTON VILLIERS MK-25 70mm (3+1) STD NM", image: "images/Villiers MK25-70 NM.jpeg", category: "Piston"    },
   { name: "PISTON VILLIERS MK-25 70mm (3+1) 040 NM", image: "images/Villiers MK25-70 NM.jpeg", category: "Piston"    },
  { name: "PISTON SWAN 70mm (3+1) STD", image: "images/PSwan 70.jpeg", category: "Piston"    },
  { name: "PISTON AIR COMP. KRD 70mm (2+1) 040 NM", image: "images/Krd 70.jpeg", category: "Piston"    },

  { name: "PISTON KG 70 (2+2)NL STD", image: "images/NL70.jpeg", category: "Piston"    },
{ name: "PISTON KG 70 (3+1) STD", image: "images/Kg 70.jpeg", category: "Piston"    },
  { name: "PISTON KG 70 (3+1) 010", image: "images/Kg 70.jpeg", category: "Piston"    },
  { name: "PISTON KG 70 (3+1) 020", image: "images/Kg 70.jpeg", category: "Piston"    },
  { name: "PISTON KG 70 (3+1) 030", image: "images/Kg 70.jpeg", category: "Piston"    },
  { name: "PISTON KG 70 (3+1) 040", image: "images/Kg 70.jpeg", category: "Piston"    },
{ name: "PISTON ELGI 70 3D SHORT LENGTH (2+2) STD", image: "images/70 3DSL.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 70 (2+2) STD", image: "images/ELGI 70.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 70 (2+2) 010", image: "images/ELGI 70.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 70 (2+2) 020", image: "images/ELGI 70.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 70 (2+2) 030", image: "images/ELGI 70.jpeg", category: "Piston"    },
  { name: "PISTON ELGI 70 (2+2) 040", image: "images/ELGI 70.jpeg", category: "Piston"    },
{ name: "PISTON CD170 70mm (2+2) 040", image: "images/Cd70.png", category: "Piston"    },

  { name: "PISTON AIR COMP. 73 (3+1) STD", image: "images/AC 73.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 73 (3+1) 020", image: "images/AC 73.png", category: "Piston"    },
   { name: "PISTON AIR COMP. 73 (3+1) 040", image: "images/AC 73.png", category: "Piston"    },

   { name: "PISTON VERSHA. 74 (2+1) STD", image: "images/Versha 74.jpeg", category: "Piston"    },
   { name: "PISTON CD175 75 (3+1) STD", image: "images/Cd 75.png", category: "Piston"    },
 { name: "PISTON ANESTA I WATA 75 (2+1) STD", image: "images/Anesta 75.png", category: "Piston"    },
  
   { name: "PISTON COMET 76 (3+1) STD", image: "images/Comet 76.png", category: "Piston"    }, 
  { name: "PISTON COMET 80 (3+1) STD", image: "images/Comet 80.png", category: "Piston"    },
  { name: "PISTON COMET 80 CUB (2+1) STD", image: "images/Comet cub 80.jpeg", category: "Piston"    },
  { name: "PISTON AV1 80 (3+1) STD", image: "images/Av1 80.png", category: "Piston"    },
  { name: "PISTON LOMBARDINI 82 (3+1) STD", image: "images/Lombardini 82.jpeg", category: "Piston"    },
  { name: "PISTON JVI 85 (3+1) STD", image: "images/Jv1 85.jpeg", category: "Piston"    },
  { name: "PISTON COMET 85 (3+1) STD", image: "images/P_Comet 85.jpeg", category: "Piston"    },

  { name: "PISTON APE-KIT BS3 86 (2+1) STD", image: "images/BS3 86.png", category: "Piston"    },
   { name: "PISTON APE-KIT BS2 86 (2+1) STD", image: "images/BS2 86.png", category: "Piston"    },
   { name: "PISTON TVI 87.5 (3+1) SPL STD", image: "images/Tv1 87.5 spl.jpeg", category: "Piston"    },
     { name: "PISTON TVI 87.5 (3+1) OM STD", image: "images/Tv1 87.5 OM.png", category: "Piston"    },
{ name: "PISTON COMET 87.5 (2+2) STD", image: "images/Comet 87.5.png", category: "Piston"    },

  { name: "PISTON BAC 87.5 (2+2) STD", image: "images/BAC 87.5.png", category: "Piston"    },
  { name: "PISTON BAC 87.5 (2+2) 010", image: "images/BAC 87.5.png", category: "Piston"    },
  { name: "PISTON BAC 87.5 (2+2) 020", image: "images/BAC 87.5.png", category: "Piston"    },
  { name: "PISTON BAC 87.5 (2+2) 030", image: "images/BAC 87.5.png", category: "Piston"    },
  { name: "PISTON BAC 87.5 (2+2) 040", image: "images/BAC 87.5.png", category: "Piston"    },

  { name: "PISTON ANESTA I WATA 90 (2+1) STD", image: "images/Anesta 90.png", category: "Piston"    },
  { name: "PISTON ELGI 90 (2+2) STD", image: "images/ELGI 90.jpeg", category: "Piston"    },
  { name: "PISTON VST 92 (3+2) STD", image: "images/Vst 92.jpeg", category: "Piston"    },

  { name: "PISTON KG 93.6 (2+1) STD", image: "images/Kg 93.6.jpeg", category: "Piston"    },
  { name: "PISTON KG 93.6 (2+1) 010", image: "images/Kg 93.6.jpeg", category: "Piston"    },
  { name: "PISTON KG 93.6 (2+1) 020", image: "images/Kg 93.6.jpeg", category: "Piston"    },
  { name: "PISTON KG 93.6 (2+1) 030", image: "images/Kg 93.6.jpeg", category: "Piston"    },
  { name: "PISTON KG 93.6 (2+1) 040", image: "images/Kg 93.6.jpeg", category: "Piston"    },

  { name: "PISTON AJIT/FM 95 (3+2) STD", image: "images/Ajit 95.png", category: "Piston"    },
   { name: "PISTON KUBOTA 95 (2+2) NM STD", image: "images/Kubota 95.jpeg", category: "Piston"    },
   { name: "PISTON VST 130DI 95 (2+2) NM STD", image: "images/VST 130DI 95.jpeg", category: "Piston"    },
  { name: "PISTON KUBOTA 98 (3+1) STD", image: "images/Kubota 98.jpeg", category: "Piston"    },
{ name: "PISTON SHRACHI/KHAZANA 100 (3+1) STD", image: "images/Blank.png", category: "Piston"    },
{ name: "PISTON SHRACHI/KHAZANA 100 (3+2) STD", image: "images/Shrachi 100 3+2.jpeg", category: "Piston"    },  
  { name: "PISTON GRAVES 100 (2+1) STD", image: "images/Greaves 100.jpeg", category: "Piston"    },
  { name: "PISTON GANGA 100 (3+1) STD", image: "images/Ganga 100.jpeg", category: "Piston"    },

    { name: "PISTON ELGI 100 (3+2) STD", image: "images/ELGI 100.jpeg", category: "Piston"    },
   { name: "PISTON ELGI 100 (3+2) 010", image: "images/ELGI 100.jpeg", category: "Piston"    },
   { name: "PISTON ELGI 100 (3+2) 020", image: "images/ELGI 100.jpeg", category: "Piston"    },
   { name: "PISTON ELGI 100 (3+2) 030", image: "images/ELGI 100.jpeg", category: "Piston"    },
   { name: "PISTON ELGI 100 (3+2) 040", image: "images/ELGI 100.jpeg", category: "Piston"    },

    { name: "PISTON BAC 100 (2+2) STD", image: "images/BAC 100.png", category: "Piston"    },
  { name: "PISTON BAC 100 (2+2) 010", image: "images/BAC 100.png", category: "Piston"    },
  { name: "PISTON BAC 100 (2+2) 030", image: "images/BAC 100.png", category: "Piston"    },
  { name: "PISTON BAC 100 (2+2) 040", image: "images/BAC 100.png", category: "Piston"    },

   { name: "PISTON VOTA 102 (3+2) STD", image: "images/Vota 102.jpeg", category: "Piston"    },
   { name: "PISTON USHA 102 (3+1) STD", image: "images/PUsha 102.jpeg", category: "Piston"    },

  { name: "PISTON KG 105 (2+2)NL STD", image: "images/pKg 105 (2).jpeg", category: "Piston"    },
{ name: "PISTON KG 105 (3+1) STD", image: "images/pKg 105 (1).jpeg", category: "Piston"    },
  { name: "PISTON KG 105 (3+1) 010", image: "images/pKg 105 (1).jpeg", category: "Piston"    },
  { name: "PISTON KG 105 (3+1) 020", image: "images/pKg 105 (1).jpeg", category: "Piston"    },
  { name: "PISTON KG 105 (3+1) 030", image: "images/pKg 105 (1).jpeg", category: "Piston"    },
  { name: "PISTON KG 105 (3+1) 040", image: "images/pKg 105 (1).jpeg", category: "Piston"    },
  { name: "PISTON ANESTA I WATA 105 (2+1) STD", image: "images/Anesta 105.png", category: "Piston"    },

   { name: "PISTON LISTER 114.3 (3+2) STD", image: "images/Lister 114.3 3+2.jpeg", category: "Piston"    },
  { name: "PISTON KIRLOSKAR 114.3 (3+2) STD", image: "images/Kir 114.3 3+2.jpeg", category: "Piston"    },
  { name: "PISTON LISTER 120 (4+1) STD", image: "images/Lister 120.jpeg", category: "Piston"    },

  { name: "PISTON RETAINER CLOSE 130 STD", image: "images/Retainer close.jpeg", category: "Piston"    },
{ name: "PISTON RETAINER OPEN 130 STD", image: "images/Retainer open.jpeg", category: "Piston"    },

  { name: "PISTON KG 130 (2+2) STD", image: "images/Kg 130.jpeg", category: "Piston"    },
{ name: "PISTON KG 130 (2+2) 020", image: "images/Kg 130.jpeg", category: "Piston"    },

  { name: "PISTON ATLAS COPCO 220 (1+2) STD", image: "images/Atlas 220.jpeg", category: "Piston"    },

  { name: "PISTON KG 225 (2+2) STD", image: "images/pKg 225.jpeg", category: "Piston"    },
  
  { name: "Elgi Compressor Part", image: "images/Elgi Compressor Part.png", category: "Elgi Item"    },
  { name: "G-EAC-001  (ARMETO SC50 )", image: "images/G-EAC-001.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-001A  (ARMETO TC500 )", image: "images/G-EAC-001A.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-001B  (ARMETO 2D )", image: "images/G-EAC-001B.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-002  (ASSEMBLY 2D (60X60)", image: "images/002.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-003  (ASSEMBLY SC-100 (100X100)", image: "images/003.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-004  (ASSEMBLY SC-50 (70X70)", image: "images/004.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-005  (ASSEMBLY TC-1000 (100X100X60)", image: "images/005.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-005A  (ASSEMBLY TC-1000 (100X100X70)", image: "images/005A.jpeg", category: "Elgi Item"  },
  { name: "G-EAC-006  (ASSEMBLY TC-300 (70X50)", image: "images/006.jpeg", category: "Elgi Item"  },
  { name: "G-EAC-007  (ASSEMBLY TC-500 (100X60)", image: "images/007.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-008  (BEARING WASHER 3HP )", image: "images/G-EAC-008.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-009  (BEARING WASHER 5HP )", image: "images/G-EAC-009.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-010  (BREATHER VALVE )", image: "images/G-EAC-010.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-011  (BUSH 3HP. )", image: "images/G-EAC-011.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-012  (BUSH 5HP. )", image: "images/G-EAC-012.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-013  (CENTER PLATE 100MM )", image: "images/G-EAC-013.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-014  (CENTER PLATE 2D / 60S )", image: "images/Blank.png", category: "Elgi Item"  },
{ name: "G-EAC-015  (CENTER PLATE 50MM )", image: "images/G-EAC-015.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-016  (CENTER PLATE 60MM )", image: "images/G-EAC-016.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-017  (CENTER PLATE 70MM )", image: "images/G-EAC-017.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-018  (COPPER WASHER 3HP. )", image: "images/G-EAC-018.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-019  (COPPER WASHER 5HP. )", image: "images/G-EAC-019.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-020  (CRANK CASE 1.5HP. )", image: "images/020.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-021  (CRANK CASE 10HP. )", image: "images/021.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-022  (CRANK CASE 15HP. )", image: "images/022.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-023  (CRANK CASE 2HP. )", image: "images/023.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-024  (CRANK CASE 3HP. )", image: "images/G-EAC-024.png", category: "Elgi Item"  },
    { name: "G-EAC-025  (CRANK CASE 5HP. )", image: "images/G-EAC-025.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-026  (END DISK 3HP. )", image: "images/G-EAC-026.jpeg", category: "Elgi Item"  },
  { name: "G-EAC-027  (END DISK 5HP. )", image: "images/G-EAC-027.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-028  (FAN 2HP. )", image: "images/028.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-029  (FAN 3HP. )", image: "images/029.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-030  (FAN 5HP. & 10HP.)", image: "images/030.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-031  (INTER COOLER 2D )", image: "images/G-EAC-031.png", category: "Elgi Item"  },
{ name: "G-EAC-032  (INTER COOLER SC-100 )", image: "images/G-EAC-032.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-033  (INTER COOLER SC-50 )", image: "images/G-EAC-033.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-034  (INTER COOLER TC-300 )", image: "images/G-EAC-034.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-035  (INTER COOLER TC-500 )", image: "images/G-EAC-035.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-036  (KEY 3HP. )", image: "images/G-EAC-036.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-037  (KEY 5HP. )", image: "images/G-EAC-037.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-038  (NRV 1.5 )", image: "images/G-EAC-038.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-039  (NRV 3/4 )", image: "images/G-EAC-039.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-040  (NUT NIPPLE 2D )", image: "images/G-EAC-040.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-041  (NUT NIPPLE 3HP. / TC-300 )", image: "images/G-EAC-041.jpeg" , category: "Elgi Item" },
{ name: "G-EAC-042  (NUT NIPPLE 5HP. / TC-500 )", image: "images/G-EAC-042.jpeg" , category: "Elgi Item" },
    { name: "G-EAC-043  (PAKING KIT 10HP. )", image: "images/043.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-044  (PAKING KIT 3HP. )", image: "images/044.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-045  (PAKING KIT 5HP. )", image: "images/G-EAC-045.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-046  (PULLY 10HP. )", image: "images/046.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-047  (PULLY 15HP. )", image: "images/047.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-048  (PULLY 2HP. )", image: "images/048.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-049  (PULLY 3HP. )", image: "images/049.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-050  (PULLY 5HP. )", image: "images/050.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-051  (VALVE PATTI SS 100MM )", image: "images/G-EAC-051.jpeg", category: "Elgi Item"  },
  { name: "G-EAC-052  (VALVE PATTI SS 50MM )", image: "images/G-EAC-052.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-053  (VALVE PATTI SS 60MM )", image: "images/G-EAC-053.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-054  (VALVE PATTI SS 70MM )", image: "images/G-EAC-054.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-055  (AFTER COOLER PIPE SET SC-100 )", image: "images/055,56,57,58.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-056  (AFTER COOLER PIPE SET SC-50 )", image: "images/055,56,57,58.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-057  (AFTER COOLER PIPE SET TC-300 )", image: "images/055,56,57,58.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-058  (AFTER COOLER PIPE SET TC-500 )", image: "images/055,56,57,58.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-059  (ALFA PRESSURE CONTROL SWITCH PR 15 )", image: "images/059.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-060  (ALFA PRESSURE CONTROL SWITCH PR 15X )", image: "images/060.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-061  (ALFA PRESSURE CONTROL SWITCH PRV 15X )", image: "images/061.jpeg", category: "Elgi Item"  },
 { name: "G-EAC-061A  (ALFA PRESSURE CONTROL SWITCH PRV 15 )", image: "images/G-EAC-061A.jpeg", category: "Elgi Item"  }, 
{ name: "G-EAC-062  (BREATHER PIPE BLACK 3HP. )", image: "images/G-EAC-062.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-063  (DEMPING PIPE SET 10HP. )", image: "images/063.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-064  (END DISK BOLT 3HP )", image: "images/G-EAC-064.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-064A  (END DISK BOLT 5HP. )", image: "images/G-EAC-064A.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-065  (FILTER ASSEMBLY 3HP. )", image: "images/G-EAC-065.jpeg", category: "Elgi Item"  },
 { name: "G-EAC-066  (FILTER ASSEMBLY 5HP. )", image: "images/G-EAC-066.jpeg" , category: "Elgi Item" },
  { name: "G-EAC-067  (FILTER BODY 5HP. )", image: "images/G-EAC-067.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-068  (FILTER ELEMENT 5HP & 7.5 HP. )", image: "images/Blank.png", category: "Elgi Item"  },
{ name: "G-EAC-068A  (FILTER ELEMENT 3HP )", image: "images/G-EAC-068A.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-069  (L PIPE SET 10HP. )", image: "images/Blank.png", category: "Elgi Item"  },
{ name: "G-EAC-070  (OIL INDICATOR 2D )", image: "images/G-EAC-070.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-071  (OIL INDICATOR 3HP. )", image: "images/G-EAC-071.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-072  (OIL STOPPER 3HP. & 5HP. )", image: "images/G-EAC-072.jpeg", category: "Elgi Item"  },
    { name: "G-EAC-073  (S & U PIPE SET 10HP. )", image: "images/Blank.png", category: "Elgi Item"  },
    { name: "G-EAC-074  (S.Q CONNECTOR 1 )", image: "images/Blank.png", category: "Elgi Item"  },
{ name: "G-EAC-075  (SAFETY VALVE 1/2 )", image: "images/G-EAC-075.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-076  (SAFETY VALVE 1/4 )", image: "images/G-EAC-076.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-077  (SAFETY VALVE 3/4 )", image: "images/G-EAC-077.jpeg", category: "Elgi Item"  },
{ name: "G-EAC-078  (SAFETY VALVE 3/8 )", image: "images/G-EAC-078.jpeg", category: "Elgi Item"  },
{ name: "Head", image: "images/HEAD.png", category: "Head"  },
  { name: "ELGI HEAD 50", image: "images/ELGI HEAD 50.png", category: "Head"  },
  { name: "ELGI HEAD 60", image: "images/ELGI HEAD 60.png", category: "Head"  },
  { name: "ELGI HEAD 70", image: "images/ELGI HEAD 70.png", category: "Head"  },
  { name: "ELGI STRIP TYPE HEAD 100", image: "images/ELGI HEAD 100.png", category: "Head"  },
  { name: "ELGI DISK VALVE TYPE HEAD 100", image: "images/Head Disk valve type 100.jpeg", category: "Head"  },
  { name: "ATLAS HEAD 130", image: "images/Atlas head 130.jpeg", category: "Head"  },
  { name: "ATLAS HEAD 220", image: "images/Atlas head 220.jpeg", category: "Head"  },
  
 { name: "Pin", image: "images/PIN.png", category: "Pin"  },
  { name: "ELGI 100", image: "images/100 mm Pin.jpeg", category: "Pin"  },
  

{ name: "Piston Ring", image: "images/PISTON RING.png", category: "Piston Ring"  },  
  { name: "IR 1.75 M-TYPE / O.E-TYPE (2+2) STD", image: "images/1.75 & 2.jpeg", category: "Piston Ring"  },
  { name: "IR 1.75 KADA/PLAIN TYPE (2+2) STD/020", image: "images/2 & 1.75 plain type.jpeg", category: "Piston Ring"  },
    { name: "IR 2 M-TYPE / O.E-TYPE (2+2),(2+1) STD/020", image: "images/1.75 & 2.jpeg", category: "Piston Ring"  },
    { name: "IR 2 KADA/PLAIN TYPE (2+2),(2+1) STD/020/040", image: "images/2 & 1.75 plain type.jpeg", category: "Piston Ring"  },
   { name: "IR 2.50 M-TYPE / O.E-TYPE (2+2),(2+1) STD/020", image: "images/2.5 & 2.75.jpeg", category: "Piston Ring"  },
   { name: "IR 2.50 PLAIN TYPE (2+2) STD/020/040", image: "images/2.5 & 2.75 & 3 plain type.jpeg", category: "Piston Ring"  },
   { name: "IR 2.50 THIN TYPE NM (2+1) STD", image: "images/2.5 & 2.75 NM.jpeg", category: "Piston Ring"  },
   { name: "IR 2.75 M-TYPE / O.E-TYPE (2+2),(2+1) STD", image: "images/2.5 & 2.75.jpeg", category: "Piston Ring"  },
   { name: "IR 2.75 KADA/PLAIN TYPE (2+2) STD", image: "images/2.5 & 2.75 & 3 plain type.jpeg", category: "Piston Ring"  },
   { name: "IR 2.75 THIN TYPE NM 2545 (2+1) STD", image: "images/2.5 & 2.75 NM.jpeg", category: "Piston Ring"  },
   { name: "IR 3 M-TYPE / O.E-TYPE (2+2),(2+1) STD", image: "images/3 & 3.5.jpeg", category: "Piston Ring"  },
   { name: "IR 3 KADA/PLAIN TYPE (2+2) STD", image: "images/2.5 & 2.75 & 3 plain type.jpeg", category: "Piston Ring"  },
   { name: "IR 3.5 M-TYPE / O.E-TYPE (2+2),(2+1) STD", image: "images/3 & 3.5.jpeg", category: "Piston Ring"  },
   { name: "IR 3.5 KADA/PLAIN TYPE (2+2) STD", image: "images/3.5 & 4 plain type.jpeg", category: "Piston Ring"  },
   { name: "IR 4 M-TYPE / O.E-TYPE (2+2),(2+1) STD", image: "images/4.jpeg", category: "Piston Ring"  },
   { name: "IR 4 KADA/PLAIN TYPE (2+2) STD", image: "images/3.5 & 4 plain type.jpeg", category: "Piston Ring"  },
   { name: "IR 4 THIN TYPE NM (2+1) STD", image: "images/4 & 5 NM.jpeg", category: "Piston Ring"  },
   { name: "IR 5 M-TYPE / O.E-TYPE (2+2),(2+1) STD", image: "images/5 & 5.5.jpeg", category: "Piston Ring"  },
   { name: "IR 5 KADA/PLAIN TYPE (2+2) STD", image: "images/5 & 5.5 plain type.jpeg", category: "Piston Ring"  },
   { name: "IR 5 THIN TYPE NM (2+1) STD", image: "images/4 & 5 NM.jpeg", category: "Piston Ring"  },  
    { name: "IR 5.5 M-TYPE / O.E-TYPE (2+2),(2+1) STD", image: "images/5 & 5.5.jpeg", category: "Piston Ring"  },
    { name: "IR 5.5 KADA/PLAIN TYPE (2+2) STD", image: "images/5 & 5.5 plain type.jpeg", category: "Piston Ring"  },

{ name: "OIL SEAL.png", image: "images/OIL SEAL.png", category: "Oil Seal"  },  
{ name: "32x45x7", image: "images/32x45x7.jpeg", category: "Oil Seal"  },
  { name: "45x60x12", image: "images/45-60-12.jpeg", category: "Oil Seal"  }, 
  { name: "60x85x10", image: "images/60x85x10.jpeg", category: "Oil Seal"  },
  { name: "89x130x12.7", image: "images/89x130x12.7.jpeg", category: "Oil Seal"  },
  { name: "275x375x50", image: "images/275x375x50.jpeg", category: "Oil Seal"  },

  { name: "IR PART.png", image: "images/Blank.png", category: "IR Item"  }, 
  { name: "Coming Soon", image: "images/Blank.png", category: "IR Item"  },

  

 ];

function displayProducts(productList) {
  gallery.innerHTML = "";
  productList.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
    `;
    gallery.appendChild(div);
  });
}

function filterProducts() {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(searchQuery);
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchName && matchCategory;
  });

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Initial load
displayProducts(products);

displayProducts(products);
