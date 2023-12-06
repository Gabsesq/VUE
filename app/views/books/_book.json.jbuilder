json.extract! book, :id, :title, :isbn, :person_id, :created_at, :updated_at
json.url book_url(book, format: :json)
