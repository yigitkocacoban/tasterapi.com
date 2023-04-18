const categoryButtons = document.querySelectorAll(".main-content-category");

for (let i = 0; i < categoryButtons.length; i++) {

    const button = categoryButtons[i];

    button.addEventListener('click', (event)=>{

        event.preventDefault();

        for (let j=0;j< categoryButtons.length; j++) {

            categoryButtons[j].classList.remove("selected");

        }

    button.classList.add('selected');

    });

}


var gallery = document.getElementById("gallery");
var images = gallery.getElementsByTagName("img");
var current = 0;
var opacity = 1;
var intervalTime = 2500; // Resimlerin değişim hızı (5 saniyede bir)

function changeImage() {
    opacity = 1;
    // Mevcut resmi görünmez yapar
    images[current].style.opacity = 0;
    // Mevcut resim numarasını artırır ve son resimden sonra yeniden başlatır
    current = (current + 1) % images.length;
    // Yeni resmi görünür hale getirir
    images[current].style.opacity = 1;
    // Belirli bir süre sonra işlemi tekrarlar
    setTimeout(changeImage, intervalTime);
  }

// Sayfa yüklendiğinde değişen resimleri başlatır
window.onload = function() {
    // İlk resmi görünür hale getirir
    images[current].style.opacity = 1;
    // Belirli bir süre sonra diğer resimlere geçer
    setTimeout(changeImage, intervalTime);
  };
  