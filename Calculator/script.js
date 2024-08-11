document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let buttonValue = button.textContent;
            if (buttonValue === 'AC') {
                display.value = 0;
            }
            else if (buttonValue === 'C') {
                display.value = display.value.slice(0, -1);
                if (display.value === '') display.value = 0;
            }
            else if (buttonValue === '×') {
                display.value += '*';
            }
            else if (buttonValue === '÷') {
                display.value += '/';
            }
            else if (buttonValue === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Error';
                }
            }
            else {
                if (display.value === '0') {
                    display.value = buttonValue;
                } else {
                    display.value += buttonValue;
                }
            }
        });
    });
});
