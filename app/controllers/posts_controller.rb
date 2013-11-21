class PostsController < ApplicationController
  respond_to :json

  def index
    respond_to do |format|
      format.html
      format.json { render json: Post.all }
    end
  end

  def create
    respond_with Post.create(secure_params)
  end

  private
  def secure_params
    params.require(:post).permit(:title, :body)
  end
end