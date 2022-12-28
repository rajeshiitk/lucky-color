
const zodiac = document.getElementById("zodiac");
const backGround = document.getElementsByClassName("container")
// console.log(backGround[0]);

const changeBackground = () => {
    // backGround[0].style.backgroundColor = 'blue';
    // console.log(zodiac.value);

    switch (zodiac.value) {
        case "aries":
            backGround[0].style.backgroundColor = '#9db1c9';
            break;

        case "aries":
            backGround[0].style.backgroundColor = 'blue';
            break;

        case "tarus":
            backGround[0].style.backgroundColor = 'yellow';
            break;

        case "gemini":
            backGround[0].style.backgroundColor = '#5dc275';
            break;

        case "cancer":
            backGround[0].style.backgroundColor = '#f78474';
            break;

        case "leo":
            backGround[0].style.backgroundColor = '#33ff7e';
            break;

        case "virgo":
            backGround[0].style.backgroundColor = '#6448e9';
            break;

        case "libra":
            backGround[0].style.backgroundColor = '#6be8e0';
            break;

            case "scorpio":
            backGround[0].style.backgroundColor= '#33ffcf';
            break;

            case "sagittarius":
            backGround[0].style.backgroundColor= 'orange';
            break;

            case "aqurius":
            backGround[0].style.backgroundColor= 'pink';
            break;

            case "capricon":
            backGround[0].style.backgroundColor= 'red';
            break;

            case "pisces":
            backGround[0].style.backgroundColor= 'violet';
            break;

            default:
            backGround[0].style.backgroundColor= 'aliceblue';
            break;
    }
};