const allNotes =[
    {
        id: 1,
        title: 'title 1',
        text: 'text 1',
        color: 'blue',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },

    {
        id: 2,
        title: 'title 2',
        text: 'text 2',
        color: 'white',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },

    {
        id: 3,
        title: 'title 3',
        text: 'text 3',
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },
    {
        id: 4,
        title: 'title 3',
        text: 'text 3',
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },

    {
        id: 4,
        title: 'title 3',
        text: 'text 3',
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },

    {
        id: 4,
        title: 'title 3',
        text: 'text 3',
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },

    {
        id: 4,
        title: 'title 3',
        text: 'text 3',
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    },

    {
        id: 5,
        title: 'title 3',
        text: 'text 3',
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }

    }
];


function creatNote(title, text) {
    const note={
        id: getId(),
        title: title,
        text: text,
        color: 'pink',
        idPinned: false,
        isDeleted: false,
        timestamp: {
            created: '',
            updated: '',
        }
    };

    allNotes.push(note);
}

function getId() {
    return (Math.random()*10e10).toFixed(0)
}

function findById(id){
    return allNotes.find((item) => (item.id===id));
}

//const notesElement = document.getElementById("notes")
//const myDiv = document.createElement("div")
//myDiv.innerText = 'Salam'
//notesElement.append(myDiv)

function renderAllNotes(){
    const parent=document.getElementById("notes");
    parent.innerHTML='';

    for (let i=0; i<allNotes.length; i+=1){
        parent.append(renderNote(allNotes[i]))
    }
}

function renderNote(note) {
    const noteElement = document.createElement('div');

    noteElement.classList.add('card')
    const  innerHTML = `<h2 class="card__title">${note.title}</h2>
                            <p class="card__text">${note.text}</p>`

    noteElement.innerHTML = innerHTML;
    return noteElement;

}

renderAllNotes();

const noteForm= document.getElementById("noteForm");

noteForm.addEventListener("submit",handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const title = document.getElementById('noteTitle').value
    const text = document.getElementById('noteText').value

    creatNote(title,text)
    renderAllNotes()

}


//const myBtn= document.getElementById('myBtn')
//myBtn.addEventListener("click", changeText)
//function changeText(){
//    myBtn.innerText="salam"
//    alert("you clicked me:)") }


