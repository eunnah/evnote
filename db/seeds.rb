# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



guest_user = User.create!(username: "guest", password: "password")
notebook1 = Notebook.create!(title: "Notebook1", author_id: guest_user.id, description: "yay")
Notebook.create!(title: "Notebook2", author_id: guest_user.id, description: "yay2")
Notebook.create!(title: "Notebook3", author_id: guest_user.id, description: "yay3")
Notebook.create!(title: "Notebook4", author_id: guest_user.id, description: "yay4")
Notebook.create!(title: "Notebook5", author_id: guest_user.id, description: "yay5")
Notebook.create!(title: "Notebook6", author_id: guest_user.id, description: "yay6")
Notebook.create!(title: "Notebook7", author_id: guest_user.id, description: "yay7")
Notebook.create!(title: "Notebook8", author_id: guest_user.id, description: "yay8")
Notebook.create!(title: "Notebook9", author_id: guest_user.id, description: "yay9")
Notebook.create!(title: "Notebook10", author_id: guest_user.id, description: "yay10")
Note.create!(title: "title1", body: "body1", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title2", body: "body2", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title3", body: "body3", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title4", body: "body4", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title5", body: "body5", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title6", body: "body6", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title7", body: "body7", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title8", body: "body8", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title9", body: "body9", author_id: guest_user.id, notebook_id: notebook1.id)
Note.create!(title: "title10", body: "body10", author_id: guest_user.id, notebook_id: notebook1.id)
Tag.create!(name: "food")
Tagging.create!(tag_id: Tag.first.id, note_id: Note.first.id)
