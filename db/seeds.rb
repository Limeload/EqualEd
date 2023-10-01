puts "Clearing database..."

Enrollment.destroy_all
User.destroy_all
Course.destroy_all

puts 'Seeding students'
10.times do User.create(username: Faker::Fantasy::Tolkien.character, email: Faker::Internet.email, instructor: false, password: "hotdogs123") end

puts 'Seeding Teachers'
5.times do User.create(username: Faker::Fantasy::Tolkien.character, email: Faker::Internet.email, instructor: true, password: "hotdogs123") end

puts 'seeding courses'

50.times do Course.create(title: Faker::Educator.course_name, content: Faker::Books::Lovecraft.paragraph_by_chars(characters: 500)) end

puts 'seeding enrollments'

15.times do Enrollment.create(course_id: rand(1..50), user_id: rand(1..15), enrolled: true, created: false) end

15.times do Enrollment.create(course_id: rand(1..50), user_id: rand(11..15), enrolled: false, created: true) end

puts 'seeded'
