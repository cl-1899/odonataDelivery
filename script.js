"use strict";const buttonReplace=document.getElementById("buttonReplace"),places=document.getElementById("places"),calc=document.getElementById("calc"),maintitle=document.getElementById("mainTitle"),textTitle=maintitle.textContent,textButton=buttonReplace.innerHTML;buttonReplace.onclick=function(){!places.hasAttribute("hidden")&&calc.hasAttribute("hidden")?(places.setAttribute("hidden","hidden"),calc.removeAttribute("hidden"),maintitle.textContent="Калькулятор",buttonReplace.innerHTML="Открыть список"):places.hasAttribute("hidden")&&!calc.hasAttribute("hidden")&&(calc.setAttribute("hidden","hidden"),places.removeAttribute("hidden"),maintitle.textContent=textTitle,buttonReplace.innerHTML=textButton)};const startPricePerKm=1.1,finishPricePerKm=.4,startKmForCount=10,finishKmForCount=90,fixPriceForDelivery=5;let lastKmForCount,lastPricePerKm,totalPriceFrom55,totalPriceUpTo55,distance,resultWithoutLastKm=0;function deliveryPrice(){let t=distance%10,e=distance-t;distance>=90?(lastKmForCount=distance-90,lastPricePerKm=.4):distance<=10?(lastKmForCount=0,lastPricePerKm=0):(lastKmForCount=t,lastPricePerKm=1.1-(e-10)/100);for(let t=10;t<e&&90!==t;t+=10)resultWithoutLastKm+=10*(1.1-(t-10)/100);totalPriceFrom55=10!==distance&11!==distance?Math.round(resultWithoutLastKm+lastPricePerKm*lastKmForCount):2,totalPriceUpTo55=totalPriceFrom55+5}const city="г.",villageCity="гп.",agroCity="аг.",village="д.",other="",districts={slonim:{title:"Слонимский",places:[{title:"Слоним",subtitle:"г.",distance:0},{title:"Левада",subtitle:"",distance:0}],first:{title:"Василевичский",places:[{title:"Бабиничи",subtitle:"д.",distance:16},{title:"Василевичи",subtitle:"аг.",distance:10},{title:"Воробьевичи",subtitle:"д.",distance:9},{title:"Гоньки",subtitle:"д.",distance:11},{title:"Задворье",subtitle:"д.",distance:14},{title:"Неростовичи",subtitle:"д.",distance:16},{title:"Новосёлки",subtitle:"д.",distance:18},{title:"Поречье",subtitle:"д.",distance:12},{title:"Розановщина",subtitle:"д.",distance:8},{title:"Ходевичи",subtitle:"д.",distance:14}]},second:{title:"Деревновский",places:[{title:"Бояры",subtitle:"д.",distance:27},{title:"Вишево",subtitle:"д.",distance:30},{title:"Волчуны",subtitle:"д.",distance:23},{title:"Высоцк",subtitle:"д.",distance:28},{title:"Деревная",subtitle:"аг.",distance:20},{title:"Загритьково",subtitle:"д.",distance:17},{title:"Исаевичи",subtitle:"д.",distance:23},{title:"Ковали",subtitle:"д.",distance:27},{title:"Львовщина",subtitle:"д.",distance:24},{title:"Малышевичи",subtitle:"д.",distance:22},{title:"Нагуевичи",subtitle:"д.",distance:21},{title:"Новосёлки",subtitle:"д.",distance:28},{title:"Ошнаровичи",subtitle:"д.",distance:19},{title:"Пироним",subtitle:"д.",distance:27},{title:"Подгорная",subtitle:"д.",distance:31},{title:"Полотница",subtitle:"д.",distance:27},{title:"Саковичи",subtitle:"д.",distance:18},{title:"Хорошевичи",subtitle:"д.",distance:19}]},third:{title:"Деревянчицкий",places:[{title:"Большие Шиловичи",subtitle:"д.",distance:10},{title:"Браково",subtitle:"д.",distance:5},{title:"Верболоты",subtitle:"д.",distance:17},{title:"Гловсевичи",subtitle:"д.",distance:13},{title:"Гуменики",subtitle:"д.",distance:15},{title:"Деревянчицы",subtitle:"аг.",distance:6},{title:"Забулье",subtitle:"д.",distance:20},{title:"Капусты",subtitle:"д.",distance:17},{title:"Литва",subtitle:"д.",distance:18},{title:"Новая стража",subtitle:"д.",distance:13},{title:"Подмошье",subtitle:"д.",distance:16},{title:"Раховичи",subtitle:"д.",distance:16},{title:"Савичи",subtitle:"д.",distance:16},{title:"Сколдичи",subtitle:"д.",distance:7},{title:"Суринка",subtitle:"аг.",distance:15},{title:"Тушевичи",subtitle:"д.",distance:7},{title:"Чепелёво",subtitle:"д.",distance:11},{title:"Шиловичи (спиртзавод)",subtitle:"д.",distance:9},{title:"Якимовичи",subtitle:"д.",distance:15}]},forth:{title:"Жировичский",places:[{title:"Жировичи",subtitle:"аг.",distance:10},{title:"Завершье",subtitle:"д.",distance:15},{title:"Загорье",subtitle:"д.",distance:17},{title:"Залесье",subtitle:"д.",distance:15},{title:"Русаково",subtitle:"д.",distance:15},{title:"Стеневичи",subtitle:"д.",distance:18}]},fifth:{title:"Мижевичский",places:[{title:"Зосимовичи",subtitle:"д.",distance:32},{title:"Кривец",subtitle:"д.",distance:26},{title:"Лопухово",subtitle:"д.",distance:27},{title:"Мижевичи",subtitle:"аг.",distance:24},{title:"Мохначи",subtitle:"д.",distance:28},{title:"Николаевщина",subtitle:"д.",distance:25},{title:"Новая Переволка",subtitle:"д.",distance:31},{title:"Острово",subtitle:"аг.",distance:29},{title:"Смовжи",subtitle:"д.",distance:34},{title:"Старая Переволка",subtitle:"д.",distance:31},{title:"Хмельница",subtitle:"д.",distance:22}]},sixth:{title:"Новодевятковичский",places:[{title:"Болты",subtitle:"д.",distance:32},{title:"Боровики",subtitle:"д.",distance:22},{title:"Ветеневка",subtitle:"д.",distance:22},{title:"Голяны",subtitle:"д.",distance:19},{title:"Горбачи",subtitle:"д.",distance:25},{title:"Гринковщина",subtitle:"д.",distance:29},{title:"Заводный Лес",subtitle:"д.",distance:29},{title:"Кисели",subtitle:"д.",distance:27},{title:"Колосово",subtitle:"д.",distance:26},{title:"Кошловичи",subtitle:"д.",distance:21},{title:"Малый Галик",subtitle:"д.",distance:31},{title:"Масиловичи",subtitle:"д.",distance:23},{title:"Мизгири",subtitle:"д.",distance:31},{title:"Мирная",subtitle:"д.",distance:22},{title:"Новодевятковичи",subtitle:"аг.",distance:22},{title:"Окуниново",subtitle:"д.",distance:24},{title:"Партизановка",subtitle:"аг.",distance:25},{title:"Подлесье",subtitle:"д.",distance:24},{title:"Попки",subtitle:"д.",distance:25},{title:"Прихилы",subtitle:"д.",distance:25},{title:"Проделки",subtitle:"д.",distance:32},{title:"Серки",subtitle:"д.",distance:29},{title:"Сосновка",subtitle:"аг.",distance:31},{title:"Стародевятковичи",subtitle:"д.",distance:20},{title:"Урочь",subtitle:"д.",distance:28},{title:"Шиганы",subtitle:"д.",distance:20},{title:"Ярутичи",subtitle:"д.",distance:25}]},seventh:{title:"Озгиновичский",places:[{title:"Гринки",subtitle:"д.",distance:11},{title:"Кокощицы",subtitle:"д.",distance:18},{title:"Костени",subtitle:"аг.",distance:10},{title:"Мелькановичи",subtitle:"д.",distance:15},{title:"Новоорловичи",subtitle:"д.",distance:16},{title:"Озгиновичи",subtitle:"д.",distance:14},{title:"Особняки",subtitle:"д.",distance:10},{title:"Пасиничи",subtitle:"д.",distance:19},{title:"Сергеевичи",subtitle:"д.",distance:16},{title:"Соколово",subtitle:"д.",distance:10},{title:"Соленики",subtitle:"д.",distance:14},{title:"Чемеры",subtitle:"д.",distance:9}]},eights:{title:"Озерницкий",places:[{title:"Великая Кракота",subtitle:"д.",distance:31},{title:"Ветевичи",subtitle:"д.",distance:28},{title:"Волчки",subtitle:"д.",distance:29},{title:"Вороничи",subtitle:"д.",distance:21},{title:"Драпово",subtitle:"аг.",distance:25},{title:"Ермоловщина",subtitle:"д.",distance:23},{title:"Збочно",subtitle:"д.",distance:24},{title:"Клепачи",subtitle:"д.",distance:30},{title:"Мыслово",subtitle:"д.",distance:27},{title:"Озерница",subtitle:"аг.",distance:27},{title:"Плавские",subtitle:"д.",distance:25},{title:"Рудавка",subtitle:"д.",distance:33},{title:"Селявичи",subtitle:"аг.",distance:25},{title:"Юхновичи",subtitle:"д.",distance:23}]},ninth:{title:"Павловский",places:[{title:"Азаричи",subtitle:"д.",distance:19},{title:"Акачи",subtitle:"д.",distance:27},{title:"Амельники",subtitle:"д.",distance:22},{title:"Задворье",subtitle:"д.",distance:27},{title:"Милошевичи",subtitle:"д.",distance:27},{title:"Митьковичи",subtitle:"д.",distance:13},{title:"Новики",subtitle:"д.",distance:24},{title:"Новосёлки",subtitle:"аг.",distance:26},{title:"Павлово",subtitle:"д.",distance:26},{title:"Петраливичи I",subtitle:"д.",distance:8},{title:"Петраливичи II",subtitle:"д.",distance:9},{title:"Приречье",subtitle:"д.",distance:23},{title:"Тальковщина",subtitle:"д.",distance:10},{title:"Ферадки",subtitle:"д.",distance:19},{title:"Шундры",subtitle:"д.",distance:16}]},tenth:{title:"Сеньковщинский",places:[{title:"Байки",subtitle:"д.",distance:24},{title:"Бердовичи",subtitle:"д.",distance:23},{title:"Голи",subtitle:"д.",distance:25},{title:"Едначи",subtitle:"д.",distance:25},{title:"Комлевичи",subtitle:"д.",distance:17},{title:"Костровичи",subtitle:"д.",distance:22},{title:"Куцейки",subtitle:"д.",distance:19},{title:"Ломаши",subtitle:"д.",distance:21},{title:"Лыски",subtitle:"д.",distance:23},{title:"Милованье",subtitle:"д.",distance:23},{title:"Низ",subtitle:"д.",distance:19},{title:"Павловичи",subtitle:"д.",distance:18},{title:"Сеньковщина",subtitle:"аг.",distance:19},{title:"Шишки",subtitle:"д.",distance:22},{title:"Ягнещицы",subtitle:"д.",distance:20}]}},dyatlovo:{title:"Дятловский",places:[{title:"Дятлово",subtitle:"г.",distance:52},{title:"Козловщина",subtitle:"гп.",distance:32},{title:"Новоельня",subtitle:"гп.",distance:65},{title:"Вензовец",subtitle:"аг.",distance:45},{title:"Войневичи",subtitle:"аг.",distance:39}]},baranovichi:{title:"Барановичский",places:[{title:"Барановичи",subtitle:"г.",distance:65},{title:"Водохранилище Гать",subtitle:"",distance:35}],first:{title:"Жемчужненский",places:[{title:"Альбинки",subtitle:"д.",distance:53},{title:"Детковичи",subtitle:"д.",distance:55},{title:"Жемчужный",subtitle:"аг.",distance:59},{title:"Севрюки",subtitle:"д.",distance:65},{title:"Сосновая",subtitle:"д.",distance:71}]},second:{title:"Леснянский",places:[{title:"Берёзовка",subtitle:"д.",distance:35},{title:"Лесная",subtitle:"аг.",distance:40},{title:"Тартаки",subtitle:"д.",distance:31}]},third:{title:"Подгорновский",places:[{title:"Добрый Бор",subtitle:"д.",distance:45},{title:"Ежона",subtitle:"д.",distance:36},{title:"Колбовичи",subtitle:"д.",distance:43},{title:"Подгорная",subtitle:"аг.",distance:41}]},forth:{title:"Полонковский",places:[{title:"Перховичи",subtitle:"аг.",distance:36},{title:"Полонка",subtitle:"д.",distance:69}]},fifth:{title:"Молчадский",places:[{title:"Мицкевичи",subtitle:"д.",distance:46},{title:"Молчадь",subtitle:"д.",distance:42}]}},ivatsevichi:{title:"Ивацевичский",places:[{title:"Ивацевичи",subtitle:"г.",distance:56},{title:"Коссово",subtitle:"г.",distance:65},{title:"Бытень",subtitle:"аг.",distance:29},{title:"Доманово",subtitle:"аг.",distance:36}]},pruzhany:{title:"Пружанский",places:[{title:"Пружаны",subtitle:"г.",distance:88},{title:"Ружаны",subtitle:"гп.",distance:40},{title:"Ружанский санаторий",subtitle:"",distance:46}],first:{title:"Зеленевичский",places:[{title:"Осошники",subtitle:"д.",distance:57}]}},zelva:{title:"Зельвенский",places:[{title:"Зельва",subtitle:"гп.",distance:38}],first:{title:"Сынковичский",places:[{title:"Елка",subtitle:"д.",distance:16},{title:"Сынковичи",subtitle:"д.",distance:14},{title:"Ярнево",subtitle:"д.",distance:22}]}}},tablePlaces=document.getElementById("tablePlaces");for(let t in districts){let e=document.createElement("div");e.classList.add("district");let i=document.createElement("div");i.classList.add("district__name"),i.textContent=districts[t].title+" район",e.append(i),tablePlaces.append(e);const l=districts[t].places;l.forEach((e=>{e.district=districts[t].title,e.villagecouncil=null,distance=e.distance,deliveryPrice(),e.totalPriceUpTo55=totalPriceUpTo55,e.totalPriceFrom55=totalPriceFrom55,resultWithoutLastKm=0,totalPriceFrom55=null}));for(let t of l){let i=document.createElement("div");i.classList.add("place");let l=document.createElement("span");l.textContent=t.subtitle+" "+t.title,i.append(l);let s=document.createElement("span");s.textContent=t.distance+" км",i.append(s);let n=document.createElement("span");n.textContent=t.totalPriceUpTo55+" р.",i.append(n);let c=document.createElement("span");c.textContent=t.totalPriceFrom55+" р.",i.append(c),e.append(i)}for(let i in districts[t]){if("title"===i||"places"===i)continue;let l=document.createElement("div");l.classList.add("selsovet__name"),l.textContent=districts[t][i].title+" сельсовет",e.append(l);const s=districts[t][i].places;s.forEach((e=>{e.district=districts[t].title,e.selsovet=districts[t][i].title,distance=e.distance,deliveryPrice(),e.totalPriceUpTo55=totalPriceUpTo55,e.totalPriceFrom55=totalPriceFrom55,resultWithoutLastKm=0,totalPriceFrom55=null}));for(let t of s){let i=document.createElement("div");i.classList.add("place");let l=document.createElement("span");l.textContent=t.subtitle+" "+t.title,i.append(l);let s=document.createElement("span");s.textContent=t.distance+" км",i.append(s);let n=document.createElement("span");n.textContent=t.totalPriceUpTo55+" р.",i.append(n);let c=document.createElement("span");c.textContent=t.totalPriceFrom55+" р.",i.append(c),e.append(i)}}}const inputSearch=document.getElementById("inputSearch"),inputSearchPlaceholder=inputSearch.placeholder;function selection(t,e){let i=e.textContent.toLowerCase().replace(/ё/g,"е").indexOf(t.trim().toLowerCase().replace(/ё/g,"е")),l=t.trim().length,s=document.createElement("span"),n=document.createElement("span"),c=document.createElement("span");s.textContent=e.textContent.slice(0,i),n.textContent=e.textContent.substr(i,l),c.textContent=e.textContent.slice(i+l),e.textContent="",n.classList.add("selected"),e.append(s),e.append(n),e.append(c)}let valueSearch,numberOfHidden,totalAmount;inputSearch.addEventListener("focus",(function(t){inputSearch.placeholder=""})),inputSearch.addEventListener("blur",(function(t){inputSearch.placeholder=inputSearchPlaceholder}));const theadPlaces=document.getElementById("theadPlaces"),noResults=document.getElementById("noResults");inputSearch.addEventListener("input",(function(t){theadPlaces.classList.remove("none");for(let t of tablePlaces.children)if(t.classList.contains("district")){t.classList.remove("none");for(let e of t.children)if(e.classList.remove("none"),3===e.firstChild.childNodes.length){let t=e.firstChild,i=t.childNodes[0].textContent,l=t.childNodes[1].textContent,s=t.childNodes[2].textContent;t.removeChild(t.children[2]),t.removeChild(t.children[1]),t.removeChild(t.children[0]),t.textContent=i+l+s}}if(noResults.classList.add("none"),valueSearch=inputSearch.value,valueSearch){for(let t of tablePlaces.children)if(t.classList.contains("district")){for(let e of t.children){if(!e.classList.contains("place"))continue;let t=e.firstChild;t.textContent.toLowerCase().replace(/ё/g,"е").includes(valueSearch.trim().toLowerCase().replace(/ё/g,"е"))?selection(valueSearch,t):e.classList.add("none")}t:for(let e=1;e<t.children.length;e++){let i=t.children[e];if(i.classList.contains("selsovet__name")){totalAmount=0,numberOfHidden=0;for(let l=e+1;l<t.children.length;l++){let e,s=t.children[l],n=l+1;if(n<t.children.length&&(e=t.children[n]),!s.classList.contains("place")){i.classList.add("none");continue t}if(totalAmount++,s.classList.contains("none")&&numberOfHidden++,n===t.children.length||e.classList.contains("selsovet__name")){numberOfHidden===totalAmount&&i.classList.add("none");continue t}}}}totalAmount=0,numberOfHidden=0;for(let e=1;e<t.children.length;e++)totalAmount++,t.children[e].classList.contains("none")&&numberOfHidden++;numberOfHidden===totalAmount&&t.classList.add("none")}totalAmount=0,numberOfHidden=0;for(let t of tablePlaces.children)t.classList.contains("district")&&(totalAmount++,t.classList.contains("none")&&numberOfHidden++);numberOfHidden===totalAmount&&(noResults.classList.remove("none"),theadPlaces.classList.add("none"))}}));const resetSearch=document.getElementById("resetSearch");resetSearch.onclick=function(){inputSearch.value="",theadPlaces.classList.remove("none");for(let t of tablePlaces.children)if(t.classList.contains("district")){t.classList.remove("none");for(let e of t.children)if(e.classList.remove("none"),3===e.firstChild.childNodes.length){let t=e.firstChild,i=t.childNodes[0].textContent,l=t.childNodes[1].textContent,s=t.childNodes[2].textContent;t.removeChild(t.children[2]),t.removeChild(t.children[1]),t.removeChild(t.children[0]),t.textContent=i+l+s}}noResults.classList.add("none")};const inputCalc=document.getElementById("inputCalc"),buttonCalc=document.getElementById("buttonCalc"),resetCalc=document.getElementById("resetCalc"),theadCalc=document.getElementById("theadCalc"),tableCalc=document.getElementById("tableCalc");let totalResults=[];const inputCalcPlaceholder=inputCalc.placeholder;function checkKm(t){return t>="0"&&t<="9"||"ArrowLeft"==t||"ArrowRight"==t||"Delete"==t||"Backspace"==t}inputCalc.addEventListener("focus",(function(t){inputCalc.placeholder=""})),inputCalc.addEventListener("blur",(function(t){inputCalc.placeholder=inputCalcPlaceholder})),inputCalc.addEventListener("keyup",(function(t){13===t.keyCode&&(t.preventDefault(),buttonCalc.click())})),buttonCalc.onclick=function(){if(distance=+inputCalc.value,distance&&0!==totalResults.findIndex((t=>t.distance==distance+" км"))){inputCalc.value="",deliveryPrice(),distance+=" км",totalPriceUpTo55+=" р.",totalPriceFrom55+=" р.";let t=tableCalc.children.length;console.log(t);for(let e=1;e<t;e++)tableCalc.removeChild(tableCalc.lastElementChild);totalResults.find((t=>t.distance===distance))&&totalResults.splice(totalResults.findIndex((t=>t.distance==distance)),1);let e={distance:distance,totalPriceUpTo55:totalPriceUpTo55,totalPriceFrom55:totalPriceFrom55};totalResults.unshift(e);for(let t of totalResults){let e=document.createElement("div");e.classList.add("results");for(let i in t){let l=document.createElement("span");l.textContent=t[i],e.append(l)}tableCalc.append(e),theadCalc.classList.remove("none")}resultWithoutLastKm=0,distance=null,totalPriceUpTo55=null,totalPriceFrom55=null,inputCalc.focus()}},resetCalc.onclick=function(){inputCalc.value="",totalResults.splice(0,totalResults.length);let t=tableCalc.children.length;for(let e=1;e<t;e++)tableCalc.removeChild(tableCalc.lastElementChild);theadCalc.classList.add("none")};