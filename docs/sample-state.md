```js
{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy"
    }
  },
  errors: [],
  notes: {
    1: {
      id: 1,
      title: "Sample State",
      body: "is useful to plan",
      author_id: 1,
      notebook_id: 1
    }
  },
  tags: {
    1: {
      id: 1,
      name: "Coding"
    }
  },
  taggings: {
    1: {
      id: 1,
      tag_id: 1,
      note_id: 2
    }
  },
  notebooks: {
    1: {
      id: 1, 
      title: "Redux",
      author_id: 1,
      description: "is cool"
    }
  },
  tagFilter: [1, 7, 14], // Used to track selected Tags for filtering of notes (returns Taggings IDs)
  noteFilter: [1, 2, 3] // Used to track selected Tags for a single note (returns Taggings IDs)

}
```
