# puts 'Seeding students'
# 10.times do User.create(username: Faker::GreekPhilosophers.name, email: Faker::Internet.email, instructor: false) end

# puts 'Seeding Teachers'
# 5.times do User.create(username: Faker::GreekPhilosophers.name, email: Faker::Internet.email, instructor: true) end

# puts 'seeding courses'

# 50.times do Course.create(title: Faker::Educator.course_name, content: Faker::Books::Lovecraft.paragraph_by_chars(characters: 500)) end

# puts 'seeding enrollments'

# 30.times do Enrollment.create(course_id: rand(1..50), user_id: rand(1..15), enrolled: true, created: false) end

# 30.times do Enrollment.create(course_id: rand(1..50), user_id: rand(1..15), enrolled: false, created: true) end

# puts 'seeded'
