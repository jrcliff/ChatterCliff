class ChatRoomsController < ApplicationController
  before_action :set_chat_room, only: [:show, :update, :destroy]

  # GET /chat_rooms
  def index
    @chat_rooms = ChatRoom.all

    render json: @chat_rooms, include: [:user, :users, :messages => {:include => :user}]
  end

  # GET /chat_rooms/1
  def show
    render json: @chat_room
  end

  # POST /chat_rooms
  def create
    @chat_room = ChatRoom.new(chat_room_params)

    if @chat_room.save
      # serialized_data = ActiveModelSerializers::Adapter::Json.new(
      #   ChatRoomSerializer.new(conversation)
      # ).serializable_hash
      # ActionCable.server.broadcast 'chat_rooms_channel', serialized_data
      # head :ok

      render json: @chat_room, include: [:user, :users, :messages]
    else
      render json: @chat_room.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /chat_rooms/1
  def update
    if @chat_room.update(chat_room_params)
      render json: @chat_room
    else
      render json: @chat_room.errors, status: :unprocessable_entity
    end
  end

  # DELETE /chat_rooms/1
  def destroy
    @chat_room.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_chat_room
      @chat_room = ChatRoom.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def chat_room_params
      params.require(:chat_room).permit!
    end
end
