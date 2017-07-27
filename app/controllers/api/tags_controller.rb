class Api::TagsController < ApplicationController

  def index
    tags = Tag.all
    @tags = tags.includes(:taggings)
    render :index
  end

  def show
    @tag = Tag.find(params[:id])
    @tagging_ids = Tagging.where(tag_id: @tag.id).pluck(:id)
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag.destroy
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  private

  def tag_params
    params.require(:tag).permit(:name)
  end

end
