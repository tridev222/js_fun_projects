const getColor = () => {
    const randomNumber = Math.floor(Math.random()*16777215);                                 //multiplyingn with 16777215 to convert it into hexadecimal later
    const randomCode = "#"+randomNumber.toString(16);                            //hex transformmation 16 define hex
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
} 
document.getElementById("btn").addEventListener(
    "click",
    getColor
);
getColor();