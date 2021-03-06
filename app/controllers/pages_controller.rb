class PagesController < ApplicationController
  def index
  end

  def home
    @posts = Post.order(:created_at).select { |post| current_user.following?(User.find(post.user_id)) || post.user_id == current_user.id}
    @newPost = Post.new
    @profile = 'user/' + current_user.username;
  end

  def profile
    if (User.find_by_username(params[:id]))
      @username = params[:id]
    else
      redirect_to root_path, :notice=> "User not found."
    end

    @posts = Post.all.where("user_id = ?", User.find_by_username(params[:id]).id)
    @newPost = Post.new
  end

  def search
    @name = params[:name]
    @users = User.all.where("username like ?", '%' + @name + '%')
  end
end