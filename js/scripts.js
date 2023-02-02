{
    const welcome = () => {
        console.log("Cześć!")
    }
    
    const changeCharacterElement = document.querySelector(".js-changeCharacter");
    
    const onChangeCharacterElementClick = () => {
        
        const genderElement = document.querySelector(".js-gender");
        const imageElement = document.querySelector(".js-image");

        switch (imageElement.alt) {
            case "Postać żeńska":
                imageElement.src = "https://static1.millenium.org/articles/1/37/73/41/@/1473695-assassins-creed-valhalla-ordre-des-ancien-1-article_m-1.jpg";
                imageElement.alt = "Postać męska";
                genderElement.innerText = "Postać żeńska";
                break;
    
            case "Postać męska":
                imageElement.src = "https://www.actina.pl/wp-content/uploads/2022/05/AC-Valhalla-key-art.jpg";
                imageElement.alt = "Postać żeńska";
                genderElement.innerText = "Postać męska";
                break;
        } 
    };
    changeCharacterElement.addEventListener("click", onChangeCharacterElementClick);
    
    const minimumElement = document.querySelector(".js-minimum");
    const recommendedElement = document.querySelector(".js-recommended");
    const ultraElement = document.querySelector(".js-ultra");
    const requirementsElement = document.querySelector(".js-requirements");

    const onMinimumElementClick = () => {
        requirementsElement.innerText = "Intel Core i5-4460 3.2 GHz / AMD Ryzen 3 1200 3.1 GHz 8 GB RAM karta grafiki 4 GB GeForce GTX 960 / Radeon R9 380 lub lepsza 160 GB HDD Windows 10 64-bit";
    };
    minimumElement.addEventListener("click", onMinimumElementClick);
    

    const onRecommendedElementClick = () => {
        requirementsElement.innerText = "Intel Core i7-4790 3.6 GHz / AMD Ryzen 5 1600 3.2 GHz 8 GB RAM karta grafiki 6 GB GeForce GTX 1060 / 8 GB Radeon RX 570 lub lepsza 160 GB SSD Windows 10 64-bit";
    };
    recommendedElement.addEventListener("click", onRecommendedElementClick);
    

    const onUltraElementClick = () => {
        requirementsElement.innerText = "(4K / 30 fps) Intel Core i7-9700K 3.6 GHz / AMD Ryzen 7 3700X 3.6 GHz 16 GB RAM karta grafiki 8 GB GeForce RTX 2080 / Radeon RX 5700 XT lub lepsza 160 GB SSD Windows 10 64-bit";
    };
    ultraElement.addEventListener("click", onUltraElementClick);
    
    welcome();
}