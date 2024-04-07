
    
const display = document.querySelector('.output');
const toggle = document.querySelector('.toggle');
const body = document.querySelector('body');
const slider = document.querySelector('.slider');
const ball = document.querySelector('#ball');

let variable = '';

// adding of commas
function formatDisplay(value) {
    let formattedValue = value.toString();
    let parts = formattedValue.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join('.');
}

function check(value) {
    variable += value;
    display.value = formatDisplay(variable);
}

function calculate() {
    try {
        const result = math.evaluate(variable);
        display.value = result;
        variable = '';
    } catch (error) {
        display.value = 'werey!';
    }
}
function clearall() {
    variable = '';
    display.value = '';
}

function clearone() {
    variable = variable.slice(0, -1); 
    display.value = variable;
}

  

//! Observe the stored\initial preferred theme and use accordingly
function observeTheme() {
    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const plt = window.matchMedia("(prefers-color-scheme: light)");
    // const storedTheme = localStorage.getItem("theme");
  
    // if (storedTheme === "light") {
    //     body.classList.add("light");
    //   body.classList.remove("default")
    //   ball.style.transform = 'translateX(25px)';
    // }
  
    // if (storedTheme === "purple") {
    //     body.classList.add("purple");
    //   body.classList.remove("default")
    //   ball.style.transform = 'translateX(55px)';
    // }
    
    if  (prefersDarkTheme.matches){
        body.classList.add("purple");
      body.classList.remove("default")
      ball.style.transform = 'translateX(55px)';
      }
      if (plt.matches) {
        body.classList.add("light");
        body.classList.remove("default")
        ball.style.transform = 'translateX(25px)';
      }
    
  }

// change theme on toggle
function changetheme() {
    if (body.classList.contains("default")) {
        ball.style.transform = 'translateX(25px)';
        body.classList.remove("default");
        body.classList.add("light");
        // localStorage.setItem('theme', 'light');
    } else if (body.classList.contains("light")) {
        ball.style.transform = 'translateX(55px)';
        body.classList.remove("light");
        body.classList.add("purple");
        // localStorage.setItem('theme', 'purple');
    } else {
        ball.style.transform = 'translateX(0px)';
        body.classList.remove("purple");
        body.classList.add("default");
        // localStorage.setItem('theme', 'default');
    }
}



observeTheme();