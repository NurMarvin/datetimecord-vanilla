import './style.css';

const formatSelect = document.querySelector('#format') as HTMLSelectElement;
const dateSelect = document.querySelector('#date') as HTMLInputElement;
const timeSelect = document.querySelector('#time') as HTMLInputElement;
const output = document.querySelector('#output') as HTMLDivElement;

dateSelect.valueAsDate = new Date();
timeSelect.valueAsDate = new Date();

formatSelect.addEventListener('change', () => {
  updateOutput();
});

dateSelect.addEventListener('change', () => {
  updateOutput();
});

timeSelect.addEventListener('change', () => {
  updateOutput();
});

const updateOutput = () => {
  const date = dateSelect.valueAsNumber;
  const time = timeSelect.valueAsNumber;

  const realDate = new Date(date + time);

  output.innerText = `<t:${Math.floor(realDate.getTime() / 1000)}:${
    formatSelect.value
  }>`;
};

updateOutput();
