# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(username: "guest", password: "password")
Note.create!(title: "title1", body: "body1", author_id: 1, notebook_id: 1)
Notebook.create!(title: "Notebook1", author_id: 1, description: "yay")
