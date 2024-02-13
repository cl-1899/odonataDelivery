"use strict";const buttonReplace=document.getElementById("buttonReplace"),places=document.getElementById("places"),calc=document.getElementById("calc"),maintitle=document.getElementById("mainTitle"),textTitle=maintitle.textContent,textButton=buttonReplace.innerHTML;buttonReplace.onclick=function(){!places.hasAttribute("hidden")&&calc.hasAttribute("hidden")?(places.setAttribute("hidden","hidden"),calc.removeAttribute("hidden"),maintitle.textContent="Калькулятор",buttonReplace.innerHTML="Открыть список"):places.hasAttribute("hidden")&&!calc.hasAttribute("hidden")&&(calc.setAttribute("hidden","hidden"),places.removeAttribute("hidden"),maintitle.textContent=textTitle,buttonReplace.innerHTML=textButton)};const startPricePerKm=1.3,finishPricePerKm=.5,startKmForCount=10,finishKmForCount=90,fixPriceForDelivery=5;let lastKmForCount,lastPricePerKm,totalPriceUpTo60,totalPriceFrom60UpTo80,totalPriceFrom80,distance,resultWithoutLastKm=0;function deliveryPrice(){let t=distance%10,e=distance-t;distance>=90?(lastKmForCount=distance-90,lastPricePerKm=.5):distance<=10?(lastKmForCount=0,lastPricePerKm=0):(lastKmForCount=t,lastPricePerKm=1.3-(e-10)/100);for(let t=10;t<e&&90!==t;t+=10)resultWithoutLastKm+=10*(1.3-(t-10)/100);distance<=7?(totalPriceFrom80=0,totalPriceFrom60UpTo80=0):distance>7&&distance<=10?(totalPriceFrom80=0,totalPriceFrom60UpTo80=2):(totalPriceFrom80=Math.round(resultWithoutLastKm+lastPricePerKm*lastKmForCount),totalPriceFrom60UpTo80=2+totalPriceFrom80),totalPriceUpTo60=5+totalPriceFrom60UpTo80}const city="г.",villageCity="гп.",agroCity="аг.",village="д.",farm="х.",other="",a0="10 / 45 / a0 / ",a="10 / 45 / a / ",b="9 / 33 / b / ",c0="7 / 36 / c0 / ",c="7 / 36 / c / ",d0="6 / 38 / d0 / ",d="6 / 38 / d / ",d1="6 / 38 / d1 / ",e0="17 / 41 / e0 / ",e="17 / 41 / e / ",e1="17 / 41 / e1 / ",e2="17 / 41 / e2 / ",f="27 / 53 / f / ",g0="30 / 49 / g0 / ",g="25 / 52 / g / ",g1="30 / 49 / g1 / ",hg="24 / 46 / hg / ",h0="24 / 46 / h0 / ",h="24 / 46 / h / ",h1="24 / 46 / h1 / ",districts={slonim:{title:"Слонимский",places:[{title:"Слоним",subtitle:"г.",distance:0,route:"- / - / - / "},{title:"Слоним (зелёная зона)",subtitle:"г.",distance:7,route:"- / - / - / "},{title:"Слоним (фиолет. зона)",subtitle:"г.",distance:10,route:"- / - / - / "},{title:"Слоним (мкр-н Чайка)",subtitle:"г.",distance:12,route:e1},{title:"Сомино (левада)",subtitle:"",distance:5,route:g0},{title:"Дачи за кладбищем",subtitle:"",distance:10,route:e2}],first:{title:"Василевичский",places:[{title:"Бабиничи",subtitle:"д.",distance:16,route:d1},{title:"Василевичи",subtitle:"аг.",distance:10,route:d1},{title:"Воробьевичи",subtitle:"д.",distance:9,route:d0},{title:"Гоньки (фиолет. зона)",subtitle:"д.",distance:10,route:d},{title:"Гоньки",subtitle:"д.",distance:11,route:d},{title:"Задворье",subtitle:"д.",distance:14,route:d1},{title:"Неростовичи",subtitle:"д.",distance:16,route:d},{title:"Новосёлки",subtitle:"д.",distance:18,route:d1},{title:"Поречье",subtitle:"д.",distance:11,route:d1},{title:"Розановщина",subtitle:"д.",distance:8,route:d0},{title:"Ходевичи",subtitle:"д.",distance:14,route:d}]},second:{title:"Деревновский",places:[{title:"Бояры",subtitle:"д.",distance:27,route:e1},{title:"Вишево",subtitle:"д.",distance:30,route:e1},{title:"Волчуны",subtitle:"д.",distance:23,route:e1},{title:"Высоцк",subtitle:"д.",distance:28,route:e1},{title:"Деревная",subtitle:"аг.",distance:20,route:e1},{title:"Загритьково",subtitle:"д.",distance:17,route:e1},{title:"Исаевичи",subtitle:"д.",distance:23,route:e1},{title:"Ковали",subtitle:"д.",distance:27,route:e1},{title:"Львовщина",subtitle:"д.",distance:24,route:e1},{title:"Малышевичи",subtitle:"д.",distance:22,route:e1},{title:"Нагуевичи",subtitle:"д.",distance:21,route:e1},{title:"Новосёлки",subtitle:"д.",distance:28,route:e1},{title:"Ошнаровичи",subtitle:"д.",distance:19,route:e1},{title:"Пироним",subtitle:"д.",distance:27,route:e1},{title:"Подгорная",subtitle:"д.",distance:31,route:e1},{title:"Полотница",subtitle:"д.",distance:27,route:f},{title:"Саковичи",subtitle:"д.",distance:18,route:e1},{title:"Хорошевичи",subtitle:"д.",distance:19,route:e1}]},third:{title:"Деревянчицкий",places:[{title:"Большие Шиловичи (фиолет. зона)",subtitle:"д.",distance:10,route:h},{title:"Большие Шиловичи",subtitle:"д.",distance:11,route:h},{title:"Браково",subtitle:"д.",distance:5,route:a0},{title:"Верболоты",subtitle:"д.",distance:17,route:h},{title:"Гловсевичи",subtitle:"д.",distance:13,route:a},{title:"Гуменики",subtitle:"д.",distance:15,route:a},{title:"Деревянчицы",subtitle:"аг.",distance:6,route:a0},{title:"Забулье",subtitle:"д.",distance:20,route:a},{title:"Капусты",subtitle:"д.",distance:17,route:a},{title:"Литва",subtitle:"д.",distance:18,route:h},{title:"Новая стража",subtitle:"д.",distance:13,route:g},{title:"Подмошье",subtitle:"д.",distance:16,route:a},{title:"Раховичи",subtitle:"д.",distance:16,route:a},{title:"Савичи",subtitle:"д.",distance:16,route:h},{title:"Сколдичи",subtitle:"д.",distance:7,route:h0},{title:"Суринка",subtitle:"аг.",distance:15,route:a},{title:"Тушевичи",subtitle:"д.",distance:7,route:h0},{title:"Чепелёво",subtitle:"д.",distance:10,route:hg},{title:"Шиловичи (спиртзавод)",subtitle:"д.",distance:9,route:h0},{title:"Якимовичи",subtitle:"д.",distance:15,route:f}]},forth:{title:"Жировичский",places:[{title:"Жировичи (фиолет. зона)",subtitle:"аг.",distance:10,route:h},{title:"Жировичи",subtitle:"аг.",distance:11,route:h},{title:"Завершье",subtitle:"д.",distance:15,route:h},{title:"Загорье",subtitle:"д.",distance:17,route:h},{title:"Залесье",subtitle:"д.",distance:15,route:h},{title:"Русаково",subtitle:"д.",distance:15,route:h},{title:"Стеневичи",subtitle:"д.",distance:18,route:h}]},fifth:{title:"Мижевичский",places:[{title:"Зосимовичи",subtitle:"д.",distance:32,route:b},{title:"Кривец",subtitle:"д.",distance:26,route:b},{title:"Лопухово",subtitle:"д.",distance:27,route:b},{title:"Мижевичи",subtitle:"аг.",distance:24,route:b},{title:"Мохначи",subtitle:"д.",distance:28,route:b},{title:"Николаевщина",subtitle:"д.",distance:25,route:b},{title:"Новая Переволка",subtitle:"д.",distance:31,route:b},{title:"Острово",subtitle:"аг.",distance:29,route:b},{title:"Смовжи",subtitle:"д.",distance:34,route:b},{title:"Старая Переволка",subtitle:"д.",distance:31,route:b},{title:"Хмельница",subtitle:"д.",distance:22,route:b}]},sixth:{title:"Новодевятковичский",places:[{title:"Болты",subtitle:"д.",distance:32,route:a},{title:"Боровики",subtitle:"д.",distance:22,route:h},{title:"Ветеневка",subtitle:"д.",distance:22,route:h},{title:"Голяны",subtitle:"д.",distance:19,route:a},{title:"Горбачи",subtitle:"д.",distance:25,route:a},{title:"Гринковщина",subtitle:"д.",distance:29,route:a},{title:"Заводный Лес",subtitle:"д.",distance:29,route:h},{title:"Кисели",subtitle:"д.",distance:27,route:a},{title:"Колосово",subtitle:"д.",distance:26,route:h},{title:"Кошловичи",subtitle:"д.",distance:21,route:a},{title:"Малый Галик",subtitle:"д.",distance:31,route:a},{title:"Масиловичи",subtitle:"д.",distance:23,route:a},{title:"Мизгири",subtitle:"д.",distance:31,route:a},{title:"Мирная",subtitle:"д.",distance:22,route:a},{title:"Новодевятковичи",subtitle:"аг.",distance:22,route:a},{title:"Окуниново",subtitle:"д.",distance:24,route:h},{title:"Партизановка",subtitle:"аг.",distance:25,route:h},{title:"Подлесье",subtitle:"д.",distance:24,route:a},{title:"Попки",subtitle:"д.",distance:25,route:a},{title:"Прихилы",subtitle:"д.",distance:25,route:a},{title:"Проделки",subtitle:"д.",distance:32,route:a},{title:"Серки",subtitle:"д.",distance:29,route:h},{title:"Сосновка",subtitle:"аг.",distance:31,route:a},{title:"Стародевятковичи",subtitle:"д.",distance:20,route:a},{title:"Урочь",subtitle:"д.",distance:28,route:a},{title:"Шиганы",subtitle:"д.",distance:20,route:a},{title:"Ярутичи",subtitle:"д.",distance:25,route:a}]},seventh:{title:"Озгиновичский",places:[{title:"Гринки",subtitle:"д.",distance:11,route:b},{title:"Кокощицы",subtitle:"д.",distance:18,route:b},{title:"Костени (фиолет. зона)",subtitle:"аг.",distance:10,route:b},{title:"Костени",subtitle:"аг.",distance:11,route:b},{title:"Мелькановичи",subtitle:"д.",distance:15,route:b},{title:"Новоорловичи",subtitle:"д.",distance:16,route:b},{title:"Озгиновичи",subtitle:"д.",distance:14,route:b},{title:"Особняки",subtitle:"д.",distance:10,route:b},{title:"Пасиничи",subtitle:"д.",distance:19,route:b},{title:"Сергеевичи",subtitle:"д.",distance:16,route:b},{title:"Соколово",subtitle:"д.",distance:10,route:b},{title:"Соленики",subtitle:"д.",distance:14,route:b},{title:"Чемеры (зелёная зона)",subtitle:"д.",distance:7,route:c0},{title:"Чемеры (фиолет. зона)",subtitle:"д.",distance:9,route:c}]},eights:{title:"Озерницкий",places:[{title:"Великая Кракота",subtitle:"д.",distance:31,route:b},{title:"Ветевичи",subtitle:"д.",distance:28,route:b},{title:"Волчки",subtitle:"д.",distance:29,route:b},{title:"Вороничи",subtitle:"д.",distance:21,route:b},{title:"Драпово",subtitle:"аг.",distance:25,route:b},{title:"Ермоловщина",subtitle:"д.",distance:23,route:c},{title:"Збочно",subtitle:"д.",distance:24,route:b},{title:"Клепачи",subtitle:"д.",distance:30,route:b},{title:"Мыслово",subtitle:"д.",distance:27,route:b},{title:"Озерница",subtitle:"аг.",distance:27,route:b},{title:"Плавские",subtitle:"д.",distance:25,route:c},{title:"Рудавка",subtitle:"д.",distance:33,route:b},{title:"Селявичи",subtitle:"аг.",distance:25,route:b},{title:"Юхновичи",subtitle:"д.",distance:23,route:b}]},ninth:{title:"Павловский",places:[{title:"Азаричи",subtitle:"д.",distance:19,route:e},{title:"Акачи",subtitle:"д.",distance:27,route:e},{title:"Амельники",subtitle:"д.",distance:22,route:e},{title:"Задворье",subtitle:"д.",distance:27,route:e},{title:"Милошевичи",subtitle:"д.",distance:27,route:e},{title:"Митьковичи",subtitle:"д.",distance:13,route:e},{title:"Новики",subtitle:"д.",distance:24,route:e},{title:"Новосёлки",subtitle:"аг.",distance:26,route:e},{title:"Павлово",subtitle:"д.",distance:26,route:e},{title:"Петраливичи I",subtitle:"д.",distance:8,route:e0},{title:"Петраливичи II",subtitle:"д.",distance:9,route:e0},{title:"Приречье",subtitle:"д.",distance:23,route:e},{title:"Тальковщина",subtitle:"д.",distance:10,route:e},{title:"Ферадки",subtitle:"д.",distance:19,route:e},{title:"Шундры",subtitle:"д.",distance:16,route:e}]},tenth:{title:"Сеньковщинский",places:[{title:"Байки",subtitle:"д.",distance:24,route:d},{title:"Бердовичи",subtitle:"д.",distance:23,route:d},{title:"Голи",subtitle:"д.",distance:25,route:d},{title:"Едначи",subtitle:"д.",distance:25,route:d1},{title:"Комлевичи",subtitle:"д.",distance:17,route:d1},{title:"Костровичи",subtitle:"д.",distance:22,route:d},{title:"Куцейки",subtitle:"д.",distance:19,route:d},{title:"Ломаши",subtitle:"д.",distance:21,route:d},{title:"Лыски",subtitle:"д.",distance:23,route:d},{title:"Милованье",subtitle:"д.",distance:23,route:d},{title:"Низ",subtitle:"д.",distance:19,route:d1},{title:"Павловичи",subtitle:"д.",distance:18,route:d1},{title:"Сеньковщина",subtitle:"аг.",distance:19,route:d},{title:"Шишки",subtitle:"д.",distance:22,route:d},{title:"Ягнещицы",subtitle:"д.",distance:20,route:d}]}},dyatlovo:{title:"Дятловский",places:[{title:"Вензовец",subtitle:"аг.",distance:45,route:e},{title:"Войневичи",subtitle:"аг.",distance:39,route:e}]},baranovichi:{title:"Барановичский",places:[{title:"Водохранилище Гать",subtitle:"",distance:35,route:g}],first:{title:"Жемчужненский",places:[{title:"Альбинки",subtitle:"д.",distance:71,route:g},{title:"Детковичи",subtitle:"д.",distance:74,route:g},{title:"Жемчужный",subtitle:"аг.",distance:59,route:g},{title:"Севрюки",subtitle:"д.",distance:65,route:g},{title:"Сосновая",subtitle:"д.",distance:71,route:g}]},second:{title:"Леснянский",places:[{title:"Берёзовка",subtitle:"д.",distance:35,route:g},{title:"Лесная",subtitle:"аг.",distance:41,route:g},{title:"Тартаки",subtitle:"д.",distance:31,route:g}]},third:{title:"Подгорновский",places:[{title:"Добрый Бор",subtitle:"д.",distance:45,route:g},{title:"Ежона",subtitle:"д.",distance:36,route:g},{title:"Колбовичи",subtitle:"д.",distance:43,route:g},{title:"Подгорная",subtitle:"аг.",distance:41,route:g}]},forth:{title:"Полонковский",places:[{title:"Перховичи",subtitle:"аг.",distance:36,route:e1},{title:"Полонка",subtitle:"д.",distance:69,route:g}]},fifth:{title:"Молчадский",places:[{title:"Мицкевичи",subtitle:"д.",distance:46,route:e1},{title:"Молчадь",subtitle:"д.",distance:42,route:e1}]}},pruzhany:{title:"Пружанский",places:[{title:"Ружанский санаторий",subtitle:"",distance:46,route:b}],first:{title:"Зеленевичский",places:[{title:"Осошники",subtitle:"д.",distance:57,route:b}]}},zelva:{title:"Зельвенский",places:[{title:'Кафе "Лесничовка"',subtitle:"",distance:12,route:c},{title:'Ферм. хоз. "Верес"',subtitle:"",distance:20,route:c}],first:{title:"Зельвенский",places:[{title:"Авдеевичи",subtitle:"д.",distance:54,route:c},{title:"Бережки",subtitle:"д.",distance:35,route:c},{title:"Бородичи",subtitle:"аг.",distance:41,route:c},{title:"Вишневка",subtitle:"д.",distance:47,route:c},{title:"Грицковичи",subtitle:"д.",distance:51,route:c},{title:"Забагонье",subtitle:"д.",distance:52,route:c},{title:"Зеленица",subtitle:"х.",distance:44,route:c},{title:"Конно",subtitle:"д.",distance:44,route:c},{title:"Кривоконно",subtitle:"д.",distance:45,route:c},{title:"Мадейки",subtitle:"д.",distance:51,route:c},{title:"Пасутичи",subtitle:"д.",distance:50,route:c},{title:"Савичи",subtitle:"д.",distance:53,route:c},{title:"Сухиничи",subtitle:"д.",distance:55,route:c},{title:"Холстово",subtitle:"д.",distance:42,route:c}]},second:{title:"Кремяницкий",places:[{title:"Князево",subtitle:"д.",distance:48,route:c},{title:"Ляховичи",subtitle:"д.",distance:50,route:c},{title:"Самаровичи",subtitle:"д.",distance:47,route:c}]},third:{title:"Сынковичский",places:[{title:"Дешковичи",subtitle:"д.",distance:23,route:c},{title:"Драповцы",subtitle:"д.",distance:29,route:c},{title:"Елка",subtitle:"д.",distance:17,route:c},{title:"Зелёная Роща",subtitle:"х.",distance:33,route:c},{title:"Козловичи",subtitle:"д.",distance:18,route:c},{title:"Ревтовичи",subtitle:"д.",distance:26,route:c},{title:"Сынковичи",subtitle:"д.",distance:15,route:c},{title:"Франково",subtitle:"д.",distance:29,route:c},{title:"Червоное Село",subtitle:"д.",distance:29,route:c},{title:"Шуляки",subtitle:"д.",distance:17,route:c},{title:"Ярнево",subtitle:"д.",distance:22,route:c}]}}},tablePlaces=document.getElementById("tablePlaces");for(let t in districts){let e=document.createElement("div");e.classList.add("district");let i=document.createElement("div");i.classList.add("district__name"),i.textContent=districts[t].title+" район",e.append(i),tablePlaces.append(e);const l=districts[t].places;l.forEach((e=>{e.district=districts[t].title,e.villagecouncil=null,distance=e.distance,deliveryPrice(),e.totalPriceUpTo60=totalPriceUpTo60,e.totalPriceFrom60UpTo80=totalPriceFrom60UpTo80,e.totalPriceFrom80=totalPriceFrom80,resultWithoutLastKm=0,totalPriceFrom60UpTo80=null,totalPriceFrom80=null}));for(let t of l){let i=document.createElement("div");i.classList.add("place");let l=document.createElement("span");l.textContent=t.subtitle+" "+t.title,i.append(l);let s=document.createElement("span");s.textContent=t.distance+" км",i.append(s);let n,c=document.createElement("span");c.textContent=t.totalPriceUpTo60+" р. / "+t.totalPriceFrom60UpTo80+" р. / "+t.totalPriceFrom80+" р.",i.append(c),n=t.distance>10?t.distance:"-";let a=document.createElement("span");a.textContent=t.route+n,i.append(a),e.append(i)}for(let i in districts[t]){if("title"===i||"places"===i)continue;let l=document.createElement("div");l.classList.add("selsovet__name"),l.textContent=districts[t][i].title+" сельсовет",e.append(l);const s=districts[t][i].places;s.forEach((e=>{e.district=districts[t].title,e.selsovet=districts[t][i].title,distance=e.distance,deliveryPrice(),e.totalPriceUpTo60=totalPriceUpTo60,e.totalPriceFrom60UpTo80=totalPriceFrom60UpTo80,e.totalPriceFrom80=totalPriceFrom80,resultWithoutLastKm=0,totalPriceFrom60UpTo80=null,totalPriceFrom80=null}));for(let t of s){let i=document.createElement("div");i.classList.add("place");let l=document.createElement("span");l.textContent=t.subtitle+" "+t.title,i.append(l);let s=document.createElement("span");s.textContent=t.distance+" км",i.append(s);let n,c=document.createElement("span");c.textContent=t.totalPriceUpTo60+" р. / "+t.totalPriceFrom60UpTo80+" р. / "+t.totalPriceFrom80+" р.",i.append(c),n=t.distance>10?t.distance:"-";let a=document.createElement("span");a.textContent=t.route+n,i.append(a),e.append(i)}}}const inputSearch=document.getElementById("inputSearch"),inputSearchPlaceholder=inputSearch.placeholder;function selection(t,e){let i=e.textContent.toLowerCase().replace(/ё/g,"е").indexOf(t.trim().toLowerCase().replace(/ё/g,"е")),l=t.trim().length,s=document.createElement("span"),n=document.createElement("span"),c=document.createElement("span");s.textContent=e.textContent.slice(0,i),n.textContent=e.textContent.substr(i,l),c.textContent=e.textContent.slice(i+l),e.textContent="",n.classList.add("selected"),e.append(s),e.append(n),e.append(c)}let valueSearch,numberOfHidden,totalAmount;inputSearch.addEventListener("focus",(function(t){inputSearch.placeholder=""})),inputSearch.addEventListener("blur",(function(t){inputSearch.placeholder=inputSearchPlaceholder}));const theadPlaces=document.getElementById("theadPlaces"),noResults=document.getElementById("noResults");inputSearch.addEventListener("input",(function(t){theadPlaces.classList.remove("none");for(let t of tablePlaces.children)if(t.classList.contains("district")){t.classList.remove("none");for(let e of t.children)if(e.classList.remove("none"),3===e.firstChild.childNodes.length){let t=e.firstChild,i=t.childNodes[0].textContent,l=t.childNodes[1].textContent,s=t.childNodes[2].textContent;t.removeChild(t.children[2]),t.removeChild(t.children[1]),t.removeChild(t.children[0]),t.textContent=i+l+s}}if(noResults.classList.add("none"),valueSearch=inputSearch.value,valueSearch){for(let t of tablePlaces.children)if(t.classList.contains("district")){for(let e of t.children){if(!e.classList.contains("place"))continue;let t=e.firstChild;t.textContent.toLowerCase().replace(/ё/g,"е").includes(valueSearch.trim().toLowerCase().replace(/ё/g,"е"))?selection(valueSearch,t):e.classList.add("none")}t:for(let e=1;e<t.children.length;e++){let i=t.children[e];if(i.classList.contains("selsovet__name")){totalAmount=0,numberOfHidden=0;for(let l=e+1;l<t.children.length;l++){let e,s=t.children[l],n=l+1;if(n<t.children.length&&(e=t.children[n]),!s.classList.contains("place")){i.classList.add("none");continue t}if(totalAmount++,s.classList.contains("none")&&numberOfHidden++,n===t.children.length||e.classList.contains("selsovet__name")){numberOfHidden===totalAmount&&i.classList.add("none");continue t}}}}totalAmount=0,numberOfHidden=0;for(let e=1;e<t.children.length;e++)totalAmount++,t.children[e].classList.contains("none")&&numberOfHidden++;numberOfHidden===totalAmount&&t.classList.add("none")}totalAmount=0,numberOfHidden=0;for(let t of tablePlaces.children)t.classList.contains("district")&&(totalAmount++,t.classList.contains("none")&&numberOfHidden++);numberOfHidden===totalAmount&&(noResults.classList.remove("none"),theadPlaces.classList.add("none"))}}));const resetSearch=document.getElementById("resetSearch");resetSearch.onclick=function(){inputSearch.value="",theadPlaces.classList.remove("none");for(let t of tablePlaces.children)if(t.classList.contains("district")){t.classList.remove("none");for(let e of t.children)if(e.classList.remove("none"),3===e.firstChild.childNodes.length){let t=e.firstChild,i=t.childNodes[0].textContent,l=t.childNodes[1].textContent,s=t.childNodes[2].textContent;t.removeChild(t.children[2]),t.removeChild(t.children[1]),t.removeChild(t.children[0]),t.textContent=i+l+s}}noResults.classList.add("none")};const inputCalc=document.getElementById("inputCalc"),buttonCalc=document.getElementById("buttonCalc"),resetCalc=document.getElementById("resetCalc"),theadCalc=document.getElementById("theadCalc"),tableCalc=document.getElementById("tableCalc");let totalResults=[];const inputCalcPlaceholder=inputCalc.placeholder;function checkKm(t){return t>="0"&&t<="9"||"ArrowLeft"==t||"ArrowRight"==t||"Delete"==t||"Backspace"==t}inputCalc.addEventListener("focus",(function(t){inputCalc.placeholder=""})),inputCalc.addEventListener("blur",(function(t){inputCalc.placeholder=inputCalcPlaceholder})),inputCalc.addEventListener("keyup",(function(t){13===t.keyCode&&(t.preventDefault(),buttonCalc.click())})),buttonCalc.onclick=function(){if(distance=+inputCalc.value,distance&&0!==totalResults.findIndex((t=>t.distance==distance+" км"))){inputCalc.value="",deliveryPrice(),distance+=" км",totalPriceUpTo60+=" р.",totalPriceFrom60UpTo80+=" р.",totalPriceFrom80+=" р.";let t=tableCalc.children.length;for(let e=1;e<t;e++)tableCalc.removeChild(tableCalc.lastElementChild);totalResults.find((t=>t.distance===distance))&&totalResults.splice(totalResults.findIndex((t=>t.distance==distance)),1);let e={distance:distance,totalPrice:totalPriceUpTo60+" / "+totalPriceFrom60UpTo80+" / "+totalPriceFrom80};totalResults.unshift(e);for(let t of totalResults){let e=document.createElement("div");e.classList.add("results");for(let i in t){let l=document.createElement("span");l.textContent=t[i],e.append(l)}tableCalc.append(e),theadCalc.classList.remove("none")}resultWithoutLastKm=0,distance=null,totalPriceUpTo60=null,totalPriceFrom60UpTo80=null,totalPriceFrom80=null,inputCalc.focus()}},resetCalc.onclick=function(){inputCalc.value="",totalResults.splice(0,totalResults.length);let t=tableCalc.children.length;for(let e=1;e<t;e++)tableCalc.removeChild(tableCalc.lastElementChild);theadCalc.classList.add("none")};