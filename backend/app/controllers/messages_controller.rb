class MessagesController < ApplicationController
  before_action :set_message, only: [:show, :update, :destroy]

  # GET /messages
  def index
    @messages = Message.all

    render json: @messages, include: [:chat_room, :user ]
  end

  # GET /messages/1
  def show
    render json: @message, include: [:user, :chat_room => {:include => :subs}]
  end

  # POST /messages
  def create
    @message = Message.new(message_params)
    chat_room = ChatRoom.find_by(id: message_params['chat_room_id'])
    if @message.save
    #   ChatRoomsChannel.broadcast_to(chat_room, {
    #     chat_room: ChatRoomSerializer.new(chat_room),
    #     users: UserSerializer.new(chat_room.users),
    #     messages: MessageSerializer.new(chat_room.messages)
    #   })
    render json: @message, include: [:user, :chat_room]
      
    end
  end

  # PATCH/PUT /messages/1
  def update
    if @message.update(message_params)
      render json: @message
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # DELETE /messages/1
  def destroy
    @message.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_message
      @message = Message.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def message_params
      params.require(:message).permit!
    end
end
