class AddAgeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :age, :int, :default => 0
  end
end
