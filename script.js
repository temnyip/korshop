function script(event)
{
    event.preventDefault();
    fetch("result.php", {method: "POST", body: new FormData(document.forms[0])})
        .then(response => response.text())
        .then(text => {document.querySelector('#output').innerHTML = text});
}