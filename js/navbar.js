function openNav(){
    document.getElementById('navbar').style.width = '300px';
    document.getElementById('content').style.width = 'calc(100vw - 300px )'
    document.getElementById('content').style.marginLeft = '300px'
}
function closeNav(){
    document.getElementById('navbar').style.width = '0px';
    document.getElementById('content').style.width = '100vw'
    document.getElementById('content').style.marginLeft = 'auto'
    
}
function mudarFonte(fonte) {
    //document.body.style.fontFamily = `'${fonte}', sans - serf`;
    document.body.style.fontFamily = `'${fonte}', sans-serif`;
    
}