const images = ["cat.jpg","dog.jpg","dog_2.jpg"];

let guess = 2;
let latestIndex;
let html;
let html1;
let html2;

const game = () => {
    if(guess!==0){
        let index = Math.floor(Math.random()*images.length);
        if(latestIndex === index){
            index = (index+1)%images.length;
        }
        const image = images[index];
        latestIndex = index;
        html = document.getElementById("img_0").src=image; 
        if(images[0] === image){
            document.getElementById("fieldId").innerHTML="You won! Congratulations :) If you want to play a new game, you can enter it <span class='link' onclick='document.location.reload(true);'>here</span>.";
        }
        guess-=1;
    }else{
        document.getElementById("fieldId").innerHTML="You lost :( If you want to play a new game, you can click <span class='link' onclick='document.location.reload(true);'>here</span>.";
    }
}

const game_1 = () => {
    if(guess!==0){
        let index1 = Math.floor(Math.random()*images.length);
        if(latestIndex === index1){
            index1 = (index1+1)%images.length;
        }
        const image1 = images[index1];
        latestIndex = index1;

        html1 = document.getElementById("img_1").src=image1; 
        if(images[0] === image1){
            document.getElementById("fieldId").innerHTML="You won! Congratulations :) If you want to play a new game, you can enter it <span class='link' onclick='document.location.reload(true);'>here</span>.";
        } 
        guess-=1;
    }else{
        document.getElementById("fieldId").innerHTML="You lost :( If you want to play a new game, you can click <span class='link' onclick='document.location.reload(true);'>here</span>.";
    }
}
const game_2 = () => {
    if(guess!==0){
        let index2 = Math.floor(Math.random()*images.length);
        if(latestIndex === index2){
            index2 = (index2+1)%images.length;
        }
        const image2 = images[index2];
        latestIndex = index2;    
        html2 = document.getElementById("img_2").src=image2; 
        if(images[0] === image2){
            document.getElementById("fieldId").innerHTML="You won! Congratulations :) If you want to play a new game, you can enter it <span class='link' onclick='document.location.reload(true);'>here</span>.";
        } 
        guess-=1;
    }else{
        document.getElementById("fieldId").innerHTML="You lost :( If you want to play a new game, you can click <span class='link' onclick='document.location.reload(true);'>here</span>.";
    }
}