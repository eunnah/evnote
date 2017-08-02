# Evnote

[Evnote live][app]

[app]: http://evnote.herokuapp.com

Evnote is a note-taking web application inspired by Evernote that uses Ruby on Rails on the backend, a PostgreSQL database, React.js, and a Redux architectural framework on the frontend.

## Features & Implementation

### Notes (Creating, Reading, Editing, and Deleting)

Notes are stored in a table with columns of 'id', 'title', 'body', 'author_id', 'notebook_id', 'created_at', and 'updated_at'. When the user logs in, an API call is made to the database, which fetches all the user's notes in the database, which are held in the store for the duration of the user's session.

Notes are rendered in two main components: a 'NoteIndex' component, which contains the title and first words of the note content in a column along the left-hand-side of the screen, and the 'NoteDetail' component, which provides the full note in a rich-text-editable format. Each of these two main components has several subcomponents. For example, the 'NoteIndex' component contains a 'NoteIndexHeader' that provides a count of all the notes and beneath it renders each 'NoteIndexItem,' which is the component that renders the title and snippet for each note.

![image of note index](wireframes/home-logged-in.png)

Note editing is implemented with the Quill.js library, which enables rich-text editing.

### Notebooks (Creating, Reading, Editing, and Deleting)

Notebooks also have their own table in the database, with columns corresponding to 'id', 'title', 'description', and 'author_id'. The 'notebook_id' column in the 'Note' table corresponds to the primary key 'id' of the Notebook table for the appropriate notebook.

Notebooks have a similar React component structure as Notes. The 'Notebook' component renders a list of all the notebooks belonging to the user. Each notebook links to additional components that render the notebook's notes in the 'NotebookNoteIndex', which contains 'NotebookNoteIndexItems', which are the note titles and snippets. Each of the 'NotebookNoteIndexItem's links to the editable 'NoteDetail' component, which also relies on the Quill.js library for rich-text editing.

To display the notes that correspond to a specific notebook, I used a separate API call, which fetches a notebook's notes from the Note database.

## Future Steps for Evnote

I plan to implement tagging notes, which will be stored in the database through a 'Tag' table and a join table called 'Taggings'.
