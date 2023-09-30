class AddInstructorToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :instructor, :boolean
  end
end
