window.onclick = (e) =>
{
    document.getElementById('screenYInfoClick').innerHTML = e.screenY;
    document.getElementById('screenXInfoClick').innerHTML = e.screenX;
    document.getElementById('pageYInfoClick').innerHTML = e.pageY;
    document.getElementById('pageXInfoClick').innerHTML = e.pageX;
    document.getElementById('clientYInfoClick').innerHTML = e.clientY;
    document.getElementById('clientXInfoClick').innerHTML = e.clientX;
    document.getElementById('movementYInfoClick').innerHTML = e.movementY;
    document.getElementById('movementXInfoClick').innerHTML = e.movementX;
    document.getElementById('offsetYInfoClick').innerHTML = e.offsetY;
    document.getElementById('offsetXInfoClick').innerHTML = e.offsetX;
}
window.onmousemove = (e) =>
{
    document.getElementById('screenYInfoMove').innerHTML = e.screenY;
    document.getElementById('screenXInfoMove').innerHTML = e.screenX;
    document.getElementById('pageYInfoMove').innerHTML = e.pageY;
    document.getElementById('pageXInfoMove').innerHTML = e.pageX;
    document.getElementById('clientYInfoMove').innerHTML = e.clientY;
    document.getElementById('clientXInfoMove').innerHTML = e.clientX;
    document.getElementById('movementYInfoMove').innerHTML = e.movementY;
    document.getElementById('movementXInfoMove').innerHTML = e.movementX;
    document.getElementById('offsetYInfoMove').innerHTML = e.offsetY;
    document.getElementById('offsetXInfoMove').innerHTML = e.offsetX;
}