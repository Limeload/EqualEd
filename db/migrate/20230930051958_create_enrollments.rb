class CreateEnrollments < ActiveRecord::Migration[6.1]
  def change
    create_table :enrollments do |t|
      t.integer :course_id
      t.integer :user_id
      t.boolean :enrolled

      t.timestamps
    end
  end
end
