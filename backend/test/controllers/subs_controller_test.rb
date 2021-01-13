require 'test_helper'

class SubsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @sub = subs(:one)
  end

  test "should get index" do
    get subs_url, as: :json
    assert_response :success
  end

  test "should create sub" do
    assert_difference('Sub.count') do
      post subs_url, params: { sub: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show sub" do
    get sub_url(@sub), as: :json
    assert_response :success
  end

  test "should update sub" do
    patch sub_url(@sub), params: { sub: {  } }, as: :json
    assert_response 200
  end

  test "should destroy sub" do
    assert_difference('Sub.count', -1) do
      delete sub_url(@sub), as: :json
    end

    assert_response 204
  end
end
