class Api::NotesController < ApplicationController

  def index
    if params.has_key?(:notebook_id)
      notes = Note.where(notebook_id: params[:notebook_id], author_id: current_user.id)
    else
      notes = Note.where(author_id: current_user.id)
    end
    @notes = notes.includes(:taggings)
    render :index
  end

  def show
    @note = Note.find(params[:id], author_id: current_user.id)
    @tagging_ids = Tagging.where(note_id: @note.id).pluck(:id)
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note.update_attributes(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])
    if @note.destroy
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end

end
