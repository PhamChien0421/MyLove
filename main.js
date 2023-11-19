let titleLove = document.getElementsByClassName('title-love');
setInterval(function() {
    titleLove[0].classList.toggle('animate__animated');
    titleLove[0].classList.toggle('animate__heartBeat');
},2000);
function submitLove () {
    let passLove = document.getElementById('pass-love').value;
    if (passLove == '26012018') {
        let showGift = document.getElementsByClassName('gift-love');
        showGift[0].classList.remove('hide');
        let notiLove = document.getElementsByClassName('noti-love');
        setTimeout(function() {
            notiLove[0].innerHTML = 'Cảm ơn em đã kiên nhẫn nghe hết tâm tư của anh. Click để mở quà nhé!!!'
            let giftLove = document.getElementById('gift-love');
            let openGift = document.getElementsByClassName('open-gift');
            openGift[0].classList.remove('hide');
            giftLove.addEventListener('click', function () {
                notiLove[0].innerHTML = "";
                let formLove = document.getElementById('form-love');
                let formMess = document.getElementById('form-mess');
                formLove.classList.add('hide');
                formMess.classList.remove('hide');
                let itemMess = document.getElementById('mess-love');
                let itemImage = document.getElementById('img-love');
                let i = 0;
                setTimeout(function() {
                    giftLove.src = 'https://media.tenor.com/FeDZZ1ICA4IAAAAM/secret-santa-surprised-face.gif';
                },1000);
                setTimeout(function() {
                    giftLove.style.width = '100%';
                    giftLove.src = 'https://i.pinimg.com/originals/cb/ed/22/cbed22142397d6cdce5582f006713510.gif';
                },2000);
                setInterval(function() {
                    if (i >= listMess.length) {
                        i = 0;
                    }
                    itemMess.innerHTML = listMess[i];
                    console.log(itemMess);
                    i++;
                },5000)
                setInterval(function() {
                    if (i >= listImage.length) {
                        i = 0;
                    }
                    itemImage.src = listImage[i];
                    i++;
                },2000)
            })
        },150000);
        setInterval(function() {
            notiLove[0].classList.toggle('animate__animated');
            notiLove[0].classList.toggle('animate__heartBeat');
        },2000);
    }
}

let listImage = [
    'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/177849802_2958848141060699_7724422057601461887_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=kShlSmmZ2-UAX-y9gFj&_nc_ht=scontent.fhan5-8.fna&oh=00_AfDqEmdDc5-1hZt1ut8QWe89OlfjpgKHl_AHsBT0KRsW1Q&oe=6581DA69',
    'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/73061227_458977318053546_1282152431978807296_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_ohc=SF-USWqIVlMAX9ZJfmw&_nc_ht=scontent.fhan5-6.fna&oh=00_AfBYiflYAMQEeXEopPfOCWgIjjyE7AJRDcu6kGveV3T-Dw&oe=6581F266',
    'https://scontent.fhan5-11.fna.fbcdn.net/v/t1.6435-9/72704183_458977568053521_6249260613491490816_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=E-Gd70TxQzgAX8qm-1s&_nc_ht=scontent.fhan5-11.fna&oh=00_AfB2jbFDgAPzCsk4WstDl_EwOL3nVBLc5A9xQk2uE-dPpw&oe=6581F9E8',
    'https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/129290656_733285697289372_8614039228290769050_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_ohc=6lxG1r6jrr8AX8IZY4F&_nc_ht=scontent.fhan5-6.fna&oh=00_AfDS0PhOUkNyhHg9tn8C_PNchCHYcnBYvbO1Lba_WItECQ&oe=6581D57D',
    'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/301307654_1103473983603873_1276615415109732699_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=g9iQW-zcIrsAX9FkjvR&_nc_ht=scontent.fhan5-8.fna&oh=00_AfAGp5vusjP8H7aXnruIlXtrrtltT8EiuL6lJDE5q134yQ&oe=655F97B4'
]

let listMess = [
    'Mỗi ngày ở bên em được thấy Nụ Cười của em là niềm hạnh phúc đối với anh.',
    'Anh luôn biết ơn vì có em, Bảo Bối của anh.',
    'Mong cho tình yêu của chúng ta luôn ngọt ngào, mãi bền chặt vượt qua mọi thăng trầm.',
    'Chúc Bảo Bối của anh có một ngày đặc biệt, tràn đầy niềm vui và hạnh phúc.',
    'Anh Yêu Em nhiều lắm!'
]