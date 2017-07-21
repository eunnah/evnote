export const fetchNotes = () => (
	$.ajax({
		method: 'GET',
		url: '/api/notes'
	})
);

export const fetchNote = id => (
	$.ajax({
		method: 'GET',
		url: `/api/notes/${id}`
	})
);

export const createNote = data => (
	$.ajax({
		method: 'POST',
		url: '/api/notes',
    data
	})
);

export const editNote = (id, note) => {
  return $.ajax({
    method: 'PUT',
    url: `api/notes/${id}`,
    data: note
  });
};

export const deleteNote = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/notes/${id}`
  });
};
