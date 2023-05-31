// creo l'array di oggetti
let info = [ 

    {
        'name' : 'Wayne Barret',
        'role' : 'Founfer & CEO',
        'image' : 'wayne-barnett-founder-ceo.jpg'

    },

    {
        'name' : 'Angela Caroll',
        'role' : 'Chief Editor',
        'image' : 'angela-caroll-chief-editor.jpg'


    },
    {
        'name' : 'Walter Gordon',
        'role' : 'Office Manager',
        'image' : 'walter-gordon-office-manager.jpg'


    },
    {
        'name' : 'Angela Lopez',
        'role' : 'Social Media Manager',
        'image' : 'angela-lopez-social-media-manager.jpg'


    },
    {
        'name' : 'Scott Estrada',
        'role' : 'Developer',
        'image' : 'scott-estrada-developer.jpg'


    },
    {
        'name' : 'Barbara Ramos',
        'role' : 'Graphic Designer',
        'image' : 'barbara-ramos-graphic-designer.jpg'


    },
];

console.log(info);
// recupero il contenitore dove inserire le info nel dom
let card_content= document.getElementById('print-info');
// creo cliclo for per passare in rassegna i vari oggetti nell'array
for (let i = 0; i<info.length; i++) {
    let infoLog = info[i];
    // stampo il nome
    console.log(infoLog.name);
    // stampo il ruolo 
    console.log(infoLog.role);
    // stampo la stringa dell'img
    console.log(infoLog.image);

    // creo l'elemento del dom dove inserire le info
    let card= `<div class="card">
    <div> ${infoLog.name}</div>
    <div> ${infoLog.role}</div>
    <div> ${infoLog.image}</div>
    </div>`;

    // stampo le info nel dom
    card_content.innerHTML += card;




};

