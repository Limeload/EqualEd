class AddCreatedToEnrollment < ActiveRecord::Migration[6.1]
  def change
    add_column :enrollments, :created, :string
  end
end
