class SubsController < ApplicationController
  before_action :set_sub, only: [:show, :update, :destroy]

  # GET /subs
  def index
    @subs = Sub.all

    render json: @subs, include: [:user, :chat_room]
  end

  # GET /subs/1
  def show
    render json: @sub
  end

  # POST /subs
  def create
    @sub = Sub.new(sub_params)

    if @sub.save
      render json: @sub, status: :created, location: @sub
    else
      render json: @sub.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /subs/1
  def update
    if @sub.update(sub_params)
      render json: @sub
    else
      render json: @sub.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subs/1
  def destroy
    @sub.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sub
      @sub = Sub.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sub_params
      params.fetch(:sub, {})
    end
end
