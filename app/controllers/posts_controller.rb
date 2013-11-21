class PostsController < ApplicationController
  respond_to :json

  def index
    render json: Post.all
  end

  def create
    render json: Post.create(secure_params)
  end

  private
  def secure_params
    params.require(:post).permit(:title, :body)
  end
end