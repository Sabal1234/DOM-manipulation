
    const fitImage = () => {
        const imagescontainer = document.querySelectorAll('.wrapper');
        imagescontainer.forEach((imagescontainer) => {
            imagescontainer.style.width = `17rem`;
            imagescontainer.style.margin = '0';
            imagescontainer.style.gap = '0';
       
        });

    }
    fitImage();
    const barbarianTitle = document.querySelector(".clash-card.barbarian>div:nth-child(3)");
    if (barbarianTitle) {
        barbarianTitle.style.color = "red";
        barbarianTitle.innerHTML = "Hello there"
        barbarianTitle.style.fontSize = "3rem"
        barbarianTitle.style.fontWeight = "normal"
    }
    document.querySelector(".clash-card__level.clash-card__level--barbarian").innerHTML = "Im strong";
    document.querySelector(".clash-card__unit-description").innerHTML = "My name is barbarian, i hold the sord, and i fight with enimies";
    document.querySelector(".clash-card__unit-description").style.color = "black";
document.querySelector(".clash-card.goblin .clash-card__unit-description").style.backgroundColor = "yellow";
document.querySelector(".clash-card.giant>div:nth-child(3)").innerHTML = "Character 3";
document.querySelector(".clash-card.archer>div:nth-child(3)").innerHTML = "Character 2";