class BooksController < ApplicationController
  def index
  	@books = Book.all
  end
  
  def create
  @book = Book.new(book_params)
    if @book.save
      respond_to do |format|
        format.html { redirect_to books_path }
        format.js
      end
    end
  end

  private

  def book_params
    params.permit(:title, :author)
  end
end
