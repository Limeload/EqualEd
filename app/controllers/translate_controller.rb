class TranslateController < ApplicationController
  skip_before_action :authorize
  wrap_parameters format: []

  def translate_text
    translation = TranslateService.new(text: params[:text], lang: params[:lang])
    response = translation.translate
    render json: response, status: :ok
  end

end
