class Api::NotesController < ApplicationController

  def index
    notes = Note.all
    @notes = notes.includes(:taggings)
    render :index
  end

  def show
    @note = Note.find(params[:id])
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
    @note.destroy
    render :index
  end

  private

  def note_params
    params.require(:note).permit(:title, :body, :author_id, :notebook_id)
  end

end