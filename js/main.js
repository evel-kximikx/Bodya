function createFallingItem() {
    const items = [
        'https://cdn-icons-png.flaticon.com/128/1077/1077086.png',  // Серце
        'https://cdn-icons-png.flaticon.com/128/9813/9813271.png', // Нова квітка
        'https://cdn-icons-png.flaticon.com/128/8316/8316446.png'  // Нова цукерка
    ];
    const item = document.createElement('img');
    item.src = items[Math.floor(Math.random() * items.length)];
    item.classList.add('falling-item');
    item.style.left = Math.random() * window.innerWidth + 'px';
    item.style.width = '50px';
    item.style.height = '50px';
    document.body.appendChild(item);
    setTimeout(() => item.remove(), 6000);
}
setInterval(createFallingItem, 300);

document.getElementById('greeting').addEventListener('click', function() {
    this.textContent = 'Нехай весна принесе щастя та любов!';
    this.style.color = '#ffffff';
    setTimeout(() => {
        this.textContent = 'З 8 Березня!';
        this.style.color = '#ffffff';
    }, 3000);
});