## Component Hierarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
- Home (renders Sidebar, NotesIndex, and NodeDetail)
 - Sidebar

**NoteDetailContainer**
+ NoteDetail
  + NoteTools
  - NotebookSearch
  - Tags
    - Tag
  * Note

**NotebookContainer**
 - NotebookHeader
  + NoteIndex

**SearchResultsContainer**
 - Search
 - NoteIndex

**TagContainer**
 - NotebookHeader
  + NoteIndex

**NoteIndex**
- NoteIndexHeader
 - NoteIndexItem

**NewNoteContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**Search**

**NewNotebook**
 - NewNotebook

**NewTag**
 - NewTag

**NotebookSearch**
 + AutoSearch
 * AutoSearchResults

**TagsSearch**
 + AutoSearch
 * AutoSearchResults

## Routes

|Path   | Component   |
|-------|-------------|
| "/signup" | "AuthFormContainer" |
| "/login" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/note/:noteId" | "NotesContainer" |
| "/home/notebook/:notebookId/note/:noteId" | "NotebookContainer" |
| "/home/tag/:tagId/note/:notedId" | "TagContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-note" | "NewNoteContainer" |
| "/search" | "Search" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/notebook-search" | "NotebookSearch" |
