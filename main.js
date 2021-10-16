import appPHP from './app.js';

addEventListener("DOMContentLoaded", async()=>{
    let json = await appPHP();
    let fragmen = new DocumentFragment();
    fragmen.appendChild(document.querySelector("p"));
    for(let [identificar,datos] of Object.entries(json)){
        let strong = document.createElement("STRONG");
        let mark = document.createElement("MARK");
        strong.insertAdjacentText("beforeend", `${identificar}: `);
        mark.insertAdjacentText("beforeend", datos);
        fragmen.children[0].insertAdjacentElement("beforeend", strong);
        fragmen.children[0].insertAdjacentElement("beforeend", mark);
        fragmen.children[0].insertAdjacentHTML("beforeend", "<br>");
    }
    document.body.appendChild(fragmen);
});