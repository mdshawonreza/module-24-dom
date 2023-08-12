const placeList=document.getElementById('places-list');
const li =document.createElement('li');
li.innerText='sadaban';
placeList.appendChild(li);


const mainContainer=document.getElementById('main-container');
const section=document.createElement('section');
mainContainer.appendChild(section);


const h1 =document.createElement('h1');
h1.innerText='my daily lunch';
section.appendChild(h1);


const ul =document.createElement('ul');
section.appendChild(ul);

const li1=document.createElement('li');
li1.innerText='kacchi biyarani';
ul.appendChild(li1);

const li2=document.createElement('li');
li2.innerText='borhani';
ul.appendChild(li2);

const li3=document.createElement('li');
li3.innerText='futika';
ul.appendChild(li3);

const li4=document.createElement('li');
li4.innerText='water';
ul.appendChild(li4);


const dressSection=document.createElement('section');
dressSection.innerHTML=`
<h1> my dress colection</h1>
<ul>
    <li>shirt</li>
    <li>pant</li>
    <li>t-shirt</li>
    <li>panjabi</li>
</ul>
`;
mainContainer.appendChild(dressSection);
