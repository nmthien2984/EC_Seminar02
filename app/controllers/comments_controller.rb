class CommentsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.build(comment_params)
    @comment.user_id = params[:user_id]
    @comment.save

     redirect_to params[:url]
  end

  private
    def comment_params
      params.require(:comment).permit(:post_id, :content)
    end
end
