let input = document.getElementById('inputBox'); 
let buttons = document.querySelectorAll('button');     
       
let string = "";      
let arr = Array.from(buttons);                  
arr.forEach(button => {            
    button.addEventListener('click', (e) =>{             
                   
        if(e.target.innerHTML == '='){           
            string = eval(string);       
            input.value = string;      
        }   
   
        else if(e.target.innerHTML == 'AC'){ 
            string = ""; 
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })

})

:root {
  --bg-color: #1e1e1e;
  --text-color: #fff;
  --btn-bg: #333;
  --btn-hover: #444;
  --operator-bg: #ff9500;
  --operator-hover: #e08900;
}

body.light {
  --bg-color: #f4f4f4;
  --text-color: #000;
  --btn-bg: #ddd;
  --btn-hover: #ccc;
  --operator-bg: #0078d4;
  --operator-hover: #005a9e;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
  font-family: "Segoe UI", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  width: 100%;
  max-width: 360px;
  background: var(--btn-bg);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.calculator {
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#themeToggle {
  background: none;
  border: none;
  font-size: 1.4em;
  color: var(--text-color);
  cursor: pointer;
}

#inputBox {
  width: 100%;
  height: 60px;
  background: transparent;
  border: none;
  text-align: right;
  font-size: 2em;
  color: var(--text-color);
  margin-top: 10px;
  margin-bottom: 20px;
  outline: none;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.button {
  width: 22%;
  height: 60px;
  border: none;
  border-radius: 8px;
  font-size: 1.2em;
  cursor: pointer;
  background: var(--btn-bg);
  color: var(--text-color);
  transition: 0.2s;
}

.button:hover {
  background: var(--btn-hover);
}

.operator {
  background: var(--operator-bg);
}

.operator:hover {
  background: var(--operator-hover);
}

.equalBtn {
  background: var(--operator-bg);
  color: #fff;
}

.history {
  margin-top: 20px;
}

.history h4 {
  margin-bottom: 5px;
}

#historyList {
  list-style: none;
  max-height: 100px;
  overflow-y: auto;
  font-size: 0.9em;
  padding-left: 0;
}

#historyList li {
  margin-bottom: 5px;
  color: #aaa;
}














































































































