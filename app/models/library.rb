class Library < ApplicationRecord
  belongs_to :County, optional: true
end
