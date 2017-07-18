# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Notes

- `GET /api/notes`
  - Notes index/search
  - accepts `tag_name` query param to list notes by tag
  - accepts pagination params (if I get there)
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`
  - index of all notes for a notebook
  - accepts pagination params (if I get there)

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/tags`: create a new tag
- `DELETE /api/tags/:id`: remove tag by ID

### Taggings

- `POST /api/taggings` add a tag to an existing note by including the two tagging IDs (tag_id and note_id)
- `DELETE /api/taggings/:id` delete a tag from an existing note by including the two tagging IDs (tag_id and note_id)
