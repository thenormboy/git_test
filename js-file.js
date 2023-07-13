const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const heading = document.createElement('h3');
heading.textContent = "I'm a blue h3!";
heading.style.color = 'blue';

const section = document.createElement('div');
section.style.border = '2px solid black';
section.style.background = 'pink';

const divHeader = document.createElement('h1');
divHeader.textContent = "I'm in a div";

const divParagraph = document.createElement('p');
divParagraph.textContent = "ME TOO!";

section.appendChild(divHeader);
section.appendChild(divParagraph);

container.appendChild(paragraph);
container.appendChild(heading);
container.appendChild(section);