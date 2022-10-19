function sayHello() {
    const text = document.getElementById('my-text').value;
    cont titleElement = document.getElementById('title');
    titleElement.textContent = textElement.value;
    console.log(text);
    textElement.value = '';
}