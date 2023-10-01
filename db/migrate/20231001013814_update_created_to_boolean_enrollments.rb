class UpdateCreatedToBooleanEnrollments < ActiveRecord::Migration[6.1]
  def change
    change_column :enrollments, :created, :boolean
  end
end
