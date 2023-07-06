let counter = 0;

function bite() {
    let image = document.getElementById('biteImg')

    console.log(image.src);
    console.log("hello !");
    
    // if (counter==0) {
    //     image.src = '../img/bite_img/sandwich_bite1';
    //             console.log('i did it');
    //             counter++;    
    // }
    
    switch (counter) {
        case 0:
            image.src = '../img/bite_img/sandwich_bite1.png'
            console.log(counter);
            counter++;
            break;
        case 1:
            image.src = '../img/bite_img/sandwich_bite2.png'
            console.log(counter);
            counter++;
            break;
        case 2:
            image.src = '../img/bite_img/sandwich_bite3.png'
            console.log(counter);
            counter++;
            break;
        case 3:
            image.src = '../img/bite_img/sandwich_bite4.png'
            console.log(counter);
            counter++;
            break;
        case 4:
            image.src = '../img/bite_img/sandwich_bite_final.png'
            console.log(counter);
            counter++;
            alert("Yuummy!!")
            break;
        default:
            image.src = '../img/bite_img/pngwing.com.png';
            counter = 0; 
            break;
    }    
}