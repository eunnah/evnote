class Api::NotebooksController < ApplicationController

  before_action :require_logged_in

  def index
    notebooks = Notebook.all
    @notebooks = notebooks
    render :index
  end

  def show
    @notebook = Notebook.find(params[:id])
    render :show
  end

  def create
    @notebook = Notebook.new(notebook_params)

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = Notebook.find(params[:id])
    if @notebook.update_attributes(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])
    if @notebook.destroy
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  private

  def notebook_params
    params.require(:notebook).permit(:title, :author_id, :description)
  end


end
