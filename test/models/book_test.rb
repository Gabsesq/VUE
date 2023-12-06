require "test_helper"

class BookTest < ActiveSupport::TestCase
  test 'should not save without title' do
    book = Book.new(isbn: 'ISBN 978-0-306-40615')
    assert_not book.save, 'Saved book without a title'
  end
  test 'should not save book with invalid isbn format' do
    book = Book.new(title: 'Sample', isbn: 'invalid ISBN format', person_id: Person.first.id)
    assert_not book.save, 'Saved book with invalid ISBN format'
    assert_not_empty book.errors[:isbn], 'No validation error for ISBN format'
  end
end
