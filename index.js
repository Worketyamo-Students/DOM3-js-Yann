

// 1. Boucles et DOM

// 1.1 Modifier une liste avec une boucle
let liElements = document.querySelectorAll('li');
liElements.forEach((li, index) => {
    li.innerText = `${index + 1}. ${li.innerText}`;
});

// 1.2 Créer plusieurs paragraphes dynamiquement
let container = document.getElementById('container'); 
for (let i = 1; i <= 10; i++) {
    let p = document.createElement('p');
    p.innerText = `Paragraphe ${i}`;
    container.appendChild(p);
}

// 1.3 Appliquer une couleur différente à chaque élément d’un tableau HTML
let tdElements = document.querySelectorAll('td');
tdElements.forEach(td => {
    td.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

// 1.4 Supprimer tous les éléments pairs d’une liste
let ul = document.getElementById('list');
let liItems = ul.querySelectorAll('li');
liItems.forEach((li, index) => {
    if (index % 2 === 0) {
        ul.removeChild(li);
    }
});

// 1.5 Générer une liste à partir d’un tableau
const fruits = ['Pomme', 'Banane', 'Orange'];
let ulFruits = document.createElement('ul');
fruits.forEach(fruit => {
    let li = document.createElement('li');
    li.innerText = fruit;
    ulFruits.appendChild(li);
});
document.body.appendChild(ulFruits);

// 2. Relations Parent / Enfant

// 2.1 Ajouter un enfant à chaque <div>
document.querySelectorAll('div').forEach(div => {
    let p = document.createElement('p');
    p.innerText = 'Enfant ajouté';
    div.appendChild(p);
});

// 2.2 Supprimer tous les enfants d’une <ul>
let ulToClear = document.getElementById('clearList'); 
while (ulToClear.firstChild) {
    ulToClear.removeChild(ulToClear.firstChild);
}

// 2.3 Remonter jusqu’à un parent spécifique
let span = document.querySelector('span');
while (span && span !== document.body) {
    console.log(span.parentElement);
    span = span.parentElement;
}

// 2.4 Remplacer un <div> par une <section>
let divToReplace = document.getElementById('replaceDiv');
let newSection = document.createElement('section');
divToReplace.replaceWith(newSection);

// 2.5 Ajouter plusieurs niveaux d’éléments imbriqués
let nestedDiv = document.createElement('div');
let nestedUl = document.createElement('ul');
nestedDiv.appendChild(nestedUl);
for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li');
    li.innerText = `Élément ${i}`;
    nestedUl.appendChild(li);
}
document.body.appendChild(nestedDiv);

// 3. Relations Siblings (Frères / Sœurs)

// 3.1 Modifier tous les frères d’un élément
let liTarget = document.getElementById('targetLi');
liTarget.previousElementSibling.style.background = 'blue';
liTarget.nextElementSibling.style.background = 'red';

// 3.2 Trouver le premier et le dernier frère d’un élément
let parentUl = liTarget.parentElement;
console.log(parentUl.firstElementChild, parentUl.lastElementChild);

// 3.3 Échanger la place de deux frères
let li1 = document.getElementById('li1');
let li2 = document.getElementById('li2');
li1.before(li2);

// 3.4 Supprimer un frère spécifique
document.getElementById('pToRemove').nextElementSibling.remove();

// 3.5 Copier un élément et l’ajouter après son frère
let pToCopy = document.getElementById('pToRemove');
let copy = pToCopy.cloneNode(true);
pToCopy.after(copy);

// 4. Tableaux et DOM

// 4.1 Créer une table HTML à partir d’un tableau
const data = [['Nom', 'Age'], ['Alice', 25], ['Bob', 30]];
let table = document.createElement('table');
data.forEach((row, index) => {
    let tr = document.createElement('tr');
    row.forEach(cell => {
        let cellElement = index === 0 ? document.createElement('th') : document.createElement('td');
        cellElement.innerText = cell;
        tr.appendChild(cellElement);
    });
    table.appendChild(tr);
});
document.body.appendChild(table);

// 4.2 Ajouter une ligne dans un tableau HTML
let newRow = document.createElement('tr');
newRow.innerHTML = '<td>Jean</td> <td>28</td>';
table.appendChild(newRow);

// 4.3 Trouver un élément dans une liste et le modifier
let ulABC = document.createElement('ul');
const letters = ['A', 'B', 'C'];
letters.forEach(letter => {
    let li = document.createElement('li');
    li.innerText = letter;
    if (letter === 'B') {
        li.style.fontWeight = 'bold';
    }
    ulABC.appendChild(li);
});
document.body.appendChild(ulABC);

// 4.4 Fusionner deux tableaux et les afficher en liste
const colors1 = ['Rouge', 'Vert'];
const colors2 = ['Bleu', 'Jaune'];
const mergedColors = [...colors1, ...colors2];
let ulColors = document.createElement('ul');
mergedColors.forEach(color => {
    let li = document.createElement('li');
    li.innerText = color;
    ulColors.appendChild(li);
});
document.body.appendChild(ulColors);

// 4.5 Modifier une liste d’objets et l’afficher dans le DOM
const people = [{nom: 'Alice', age: 25}, {nom: 'Bob', age: 30}];
let ulPeople = document.createElement('ul');
people.forEach(person => {
    let li = document.createElement('li');
    li.innerText = `${person.nom} (${person.age} ans)`;
    ulPeople.appendChild(li);
});
document.body.appendChild(ulPeople);
