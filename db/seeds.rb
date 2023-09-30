# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts 'Seeding users'
# user1 = User.create(
#   username: 'user1',
#   email: 'user1@example.com',
#   user_type: 'Student',
#   password: 'password123',
#   password_confirmation: 'password123'
# )

# user2 = User.create(
#   username: 'user2',
#   email: 'user2@example.com',
#   user_type: 'Educator',
#   password: 'password123',
#   password_confirmation: 'password123'
# )

user3 = User.create(
  username: 'user3',
  email: 'user3@example.com',
  user_type: 'Educator',
  instructor: true,
  password: 'password123',
  password_confirmation: 'password123'
)

puts 'seeding courses'

# course1 = Course.create(
#   title: 'Introduction to Algebra',
#   content: 'This course provides a comprehensive introduction to algebra concepts.'
# )

# course2 = Course.create(
#   title: 'History of Ancient Civilizations',
#   content: 'Explore the history of ancient civilizations from around the world.'
# )

puts 'seeding enrollments'

# e1 = Enrollment.create(user_id: 1, course_id: 1, enrolled: true)
# e2 = Enrollment.create(user_id: 1, course_id: 2, enrolled: true)
# e3 = Enrollment.create(user_id: 2, course_id: 2, enrolled: true)
e4 = Enrollment.create(user_id: 2, course_id: 2, enrolled: false)

puts 'seeded'
