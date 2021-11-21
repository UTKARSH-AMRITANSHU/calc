let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);
        if (buttonText == '×') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "0";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            answer = "answer = ";
            screenValue = eval(screenValue);
            screen.value = (answer + screenValue);
            check = true;
        }
        
        else if(buttonText == '←'){
            screenValue = screen.value;
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }
        else {
            if(screenValue == 0){
                screenValue = buttonText;
            }
            else{
                screenValue += buttonText;
            }
            screen.value = screenValue;
        }
    

    });
}