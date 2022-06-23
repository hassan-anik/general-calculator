console.clear();
var textBox = document.querySelector("div .box");

var buttons =Array.from(document.querySelectorAll('#button'));

var sss, x ;
buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        buttonText = e.target.value;
        switch(buttonText){

            case 'c':
                textBox.value = '';
                break;

            case 'DEL':
                if(textBox.value)
                {
                    textBox.value = textBox.value.slice(0,-1);
                }
                break;
            case '=':
                var exp = textBox.value;
                if(exp)
                {
                    textBox.value = eval(exp);
                }

                break;
            
            case '+/-':
                if(textBox.value < 0)
                {
                    sss = textBox.value * (-1);
                    x = '+'+sss;
                    textBox.value = x;
                }
                else
                {
                    sss = textBox.value * (-1);
                    textBox.value = sss;
                }
                break;
            default:
                textBox.value += e.target.value;
        }
    })
})