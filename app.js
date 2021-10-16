let appPHP = async()=>{
    let ajax = await fetch("https://pruebacofenalco.000webhostapp.com/app/app.php");
    let data = await ajax.json();
    return data;
}

export default appPHP;