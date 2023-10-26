import essays from './essays.js'

const titleBox = document.getElementById('essay');
const essay = document.getElementById('essay-content')

console.log(essays.length)

const titles = []
const thisEssayTitle = 'wildlife conservation'

for (let i = 0; i < essays.length; i++) {
    titles.push(essays[i].title)
}

console.log(titles)

const index = titles.indexOf(thisEssayTitle)

console.log(index)

const theEssay = essays[index];


titleBox.appendChild(document.createElement('h3')).innerHTML = theEssay.title;
titleBox.appendChild(document.createElement('p')).innerHTML = theEssay.prompt;
titleBox.appendChild(document.createElement('p')).innerHTML = theEssay.question;

console.log(theEssay.essay.length + ' paragraphs')

for (let i = 0; i < theEssay.essay.length; i++) {
    essay.appendChild(document.createElement('p')).innerHTML = theEssay.essay[i]
}




