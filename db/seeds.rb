# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



User.create!(username: "guest", password: "password")
Note.create!(title: "title1", body: "body1", author_id: 1, notebook_id: 1)
Note.create!(title: "title2", body: "body2", author_id: 1, notebook_id: 1)
Note.create!(title: "title3", body: "body3", author_id: 1, notebook_id: 1)
Note.create!(title: "title4", body: "body4", author_id: 1, notebook_id: 2)
Note.create!(title: "title5", body: "body5", author_id: 1, notebook_id: 2)
Note.create!(title: "title6", body: "body6", author_id: 1, notebook_id: 2)
Note.create!(title: "title7", body: "body7", author_id: 1, notebook_id: 3)
Note.create!(title: "title8", body: "body8", author_id: 1, notebook_id: 4)
Note.create!(title: "title9", body: "body9", author_id: 1, notebook_id: 5)
Note.create!(title: "title10", body: "body10", author_id: 1, notebook_id: 6)
Notebook.create!(title: "Notebook1", author_id: 1, description: "yay")
Notebook.create!(title: "Notebook2", author_id: 1, description: "yay2")
Notebook.create!(title: "Notebook3", author_id: 1, description: "yay3")
Notebook.create!(title: "Notebook4", author_id: 1, description: "yay4")
Notebook.create!(title: "Notebook5", author_id: 1, description: "yay5")
Notebook.create!(title: "Notebook6", author_id: 1, description: "yay6")
Notebook.create!(title: "Notebook7", author_id: 1, description: "yay7")
Notebook.create!(title: "Notebook8", author_id: 1, description: "yay8")
Notebook.create!(title: "Notebook9", author_id: 1, description: "yay9")
Notebook.create!(title: "Notebook10", author_id: 1, description: "yay10")
