let appPHP = async()=>{
    let ajax = await fetch("https://juancarloscr17.000webhostapp.com/api/app.php");
    let data = await ajax.json();
    return data;
}

export default appPHP;