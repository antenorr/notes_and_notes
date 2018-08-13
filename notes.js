 console.log('Starting notes.js');




module.exports.addNote = () => {
    console.log('addnote function called');
    return 'New Note';
}

const addNote = (title, body) => {
    console.log( "add this notes title: " + title, "---- and this body: " + body );
}

const getAll = ( ) => {
    console.log("go ahead and list all..");
}

const getNote = (title) => {
    console.log("We are GETTING: " + title);
}

const removeNote = (title) => {
    console.log("We are REMOVING note: " + title);
}


module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}







