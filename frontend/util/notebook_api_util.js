
export const fetchNotebooks = () => {
	return $.ajax({
		method: 'GET',
		url: '/api/notebooks'
	});
};

export const fetchNotebook = id => (
	$.ajax({
		method: 'GET',
		url: `/api/notebooks/${id}`
	})
);

export const createNotebook = data => (
	$.ajax({
		method: 'POST',
		url: '/api/notebooks',
    data
	})
);

export const deleteNotebook = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/notebooks/${id}`
  });
};

export const fetchNotebookNotes = (id) => {
	return $.ajax({
    method: 'GET',
    url: `api/notebooks/${id}/notes`,
  });
};
