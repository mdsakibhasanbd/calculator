document.addEventListener('DOMContentLoaded', () => {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.calculator-buttons > div');
    let expression = '';
    let isCalculatorOn = true;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText;

            if (!isCalculatorOn) {
                return; // Calculator is off, do nothing
            }

            if (buttonText === 'C') {
                expression = '';
            } else if (buttonText === 'AC') {
                expression = '';
                screen.value = '';
            } else if (buttonText === '=' && expression) {
                try {
                    const result = eval(expression);
                    screen.value = result;
                    expression = result.toString();
                } catch (error) {
                    screen.value = 'Error';
                }
            } else if (buttonText === '⇦') {
                expression = expression.slice(0, -1);
            } else {
                expression += buttonText;
            }

            screen.value = expression;
        });
    });

    const modeButton = document.querySelector('.blackkey1');
    modeButton.addEventListener('click', () => {
        isCalculatorOn = !isCalculatorOn;
        if (isCalculatorOn) {
            // Calculator is ON
            modeButton.style.backgroundColor = 'black'; // Change button color to indicate it's on
            buttons.forEach(button => {
                button.style.pointerEvents = 'auto';
                button.style.opacity = '1';
            });
            screen.value = 'ON';
        } else {
            // Calculator is OFF
            modeButton.style.backgroundColor = 'red'; // Change button color to indicate it's off
            buttons.forEach(button => {
                button.style.pointerEvents = 'none';
                button.style.opacity = '0.5';
            });
            screen.value = 'OFF';
        }
    });
});