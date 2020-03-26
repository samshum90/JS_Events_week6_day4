document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('#button');
  button.addEventListener('click', handleButtonClick)

  const inputText = document.querySelector('#input');
  inputText.addEventListener('input', handleInput);

  const select = document.querySelector('#select');
  select.addEventListener('change', handleSelectChange);

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);
});

const handleButtonClick = function(){
  const resultParagraph = document.querySelector('#button-result')
  resultParagraph.textContent = "This button has been clicked!";
};

const handleInput = function(event){
//  get the value from the input 
const resultParagraph = document.querySelector('#input-result');
// update the paragraph
resultParagraph.textContent = `I typed ${event.target.value}`;
};

const handleSelectChange = function(event){
  const resultParagraph = document.querySelector('#select-result')
  resultParagraph.textContent = `you have chosen ${event.target.value}`;
};

const handleFormSubmit = function(event){
  event.preventDefault();
  const resultParagraph = document.querySelector('#form-result');
  resultParagraph.textContent = `Your name is :${this.first_name.value} ${event.target.last_name.value}`
}