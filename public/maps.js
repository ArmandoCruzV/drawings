var img = new Image();
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPNKN_EX89XdrQmY2M_4dE8oCWpTF5DDAyQ&usqp=CAU";
var door = new Image();
door.src = "https://cdn-icons-png.flaticon.com/512/3590/3590920.png";
var man = new Image();
man.src = "https://media.istockphoto.com/vectors/man-icon-aztec-vector-id914486772?b=1&k=6&m=914486772&s=170667a&w=0&h=5_8nY6lHPNy9obQ5-vfwvDjRgCVcjUnQl8tgdWgidp4=";
var way = new Image();
way.src = "https://thumbs.dreamstime.com/b/cells-seamless-pattern-hand-drawn-cracked-black-white-stones-background-vector-illustration-repeating-stone-texture-elegant-200034573.jpg";
var nopal = new Image();
nopal.src = "https://media.istockphoto.com/vectors/edible-nopal-pad-vector-color-icon-design-mexican-giant-cactus-on-vector-id1321709681?b=1&k=20&m=1321709681&s=612x612&w=0&h=kGRDDXGTshj2WjNK-XGvpf0_ZltlE82qZDSFkSxT6NE=";
var maguey = new Image();
maguey.src = "https://us.123rf.com/450wm/magicleaf/magicleaf2006/magicleaf200600089/148162059-objeto-aislado-de-icono-de-agave-y-tequila-elemento-web-de-agave-e-icono-azul-para-stock-.jpg?ver=6";
var eat = new Image();
eat.src = "https://cdn-icons-png.flaticon.com/512/3831/3831048.png";


const images = {
    'M': maguey,
    'N': nopal,
    '-': way,
    'O': door,
    'X': img,
    'I': eat,
    'PLAYER': man,
    'BOMB_COLLISION': 'ðŸ”¥',
    'GAME_OVER': 'ðŸ‘Ž',
    'WIN': 'ðŸ†',
    'H':'🌽',
  };
  
  const maps = [];
  maps.push(`
    MMNXNXXXXM
    ----MXXXNX
    -XX-IMXXNX
    -NXXXNXXXX
    -XXXXNXXXX
    -XXXNXXNXX
    -NXNXXXMXX
    -XXXXXXNXX
    -MXXXNXXXX
    OXNXMXXMXX
  `);
  maps.push(`
    N--MXXXNXN
    X--X----MX
    XX--ONX-NX
    X--MX---XX
    M-XXX--XNX
    X-XNXX-XXX
    XN--XX--XX
    XX--XXX-NX
    XMXN---IMX
    MXXNNXXXMX
    `);
  maps.push(`
    N-----XNXM
    M-XMX-XNXX
    NIN---XXNX
    XNM-XNXXXX
    XM-----XXX
    NXMXN-XXXN
    MX-----NXX
    NM-XXNXMNX
    XN-----OXX
    MXNXXMNNXM
  `);