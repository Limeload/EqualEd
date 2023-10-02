class AddCreatedToEnrollment < ActiveRecord::Migration[6.1]
  def change
    add_column :enrollments, :created, :boolean
  end
end
