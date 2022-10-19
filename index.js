const $ = (Selector) => document.querySelector(Selector);

const info = [
   {
      img: "./fondo.jpg",
      name: "OmegTroy",
      profecion: "Programador",
      descrip:
         "Ichigo Kurosaki es un estudiante de preparatoria ordinario, hasta que su familia es atacada",
   },
   {
      img: "./_fa__fallen_god_orochi_by_leleilerin_dfa4aks-fullview.jpg",
      name: "Natsu",
      profecion: "Aventurero",
      descrip:
         "Lucy seguirá siendo Lucy, incluso si todo lo que queda de ella es su cabeza, pero habría",
   },
   {
      img: "./_fanart__cyberpunk___lucy_by_sugargh0ul_dfflnk1-fullview.jpg",
      name: "Lucy",
      profecion: "Diseñador",
      descrip:
         "Suzuki Iruma ha sido vendido al demonio por sus padres irresponsables a cambio de dinero. ",
   },
   {
      img: "./lucy_by_soleilrune_dfe7yei-fullview.jpg",
      name: "soleir",
      profecion: "Gamer",
      descrip:
         "Ichigo Kurosaki es un estudiante de preparatoria ordinario, hasta que su familia es atacada por un",
   },
   {
      img: "./xingqiu_by_cain269_dfffqwm-fullview.jpg",
      name: "loreley",
      profecion: "Alto mando",
      descrip:
         "Ichigo Kurosaki es un estudiante de preparatoria ordinario, hasta que su familia es atacada por un",
   },
   {
      img: "./xingqiu_by_cain269_dfffqwm-fullview.jpg",
      name: "lore",
      profecion: "Alto mando",
      descrip:
         "Ichigo Kurosaki es un estudiante de preparatoria ordinario, hasta que su familia es atacada por un",
   },
   {
      img: "./xingqiu_by_cain269_dfffqwm-fullview.jpg",
      name: "ley",
      profecion: "Alto mando",
      descrip:
         "Ichigo Kurosaki es un estudiante de preparatoria ordinario, hasta que su familia es atacada por un",
   },
   {
      img: "./xingqiu_by_cain269_dfffqwm-fullview.jpg",
      name: "l",
      profecion: "Alto mando",
      descrip:
         "Ichigo Kurosaki es un estudiante de preparatoria ordinario, hasta que su familia es atacada por un",
   },
];

// elementos de html
let $img = $("#img");
let $name = $("#name");
let $profecion = $("#profecion");
let $descri = $("#descrip");
let $left = $("#left");
let $right = $("#right");
let $random = $("#random");
let elementos = 0;

$img.src = info[elementos].img;
$name.innerText = info[elementos].name;
$profecion.innerText = info[elementos].profecion;
$descri.innerText = info[elementos].descrip;

// pasar para la izquierda
$left.addEventListener("click", () => {
   $img.src = info[elementos].img;
   $name.innerText = info[elementos].name;
   $profecion.innerText = info[elementos].profecion;
   $descri.innerText = info[elementos].descrip;
   elementos--;
   if (elementos == -1) {
      elementos = info.length - 1;
   }
});
// pasar para la derecha
$right.addEventListener("click", () => {
   $img.src = info[elementos].img;
   $name.innerText = info[elementos].name;
   $profecion.innerText = info[elementos].profecion;
   $descri.innerText = info[elementos].descrip;
   elementos++;
   if (elementos == info.length) {
      elementos = 0;
   }
});

$random.addEventListener("click", () => {
   let elementos = info.length;
   let random = Math.floor(Math.random() * elementos);
   $img.src = info[random].img;
   $name.innerText = info[random].name;
   $profecion.innerText = info[random].profecion;
   $descri.innerText = info[random].descrip;
});
