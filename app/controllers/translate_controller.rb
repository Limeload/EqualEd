class TranslateController < ApplicationController
  skip_before_action :authorize

  def translate
    translation = TranslateService.new(translate_params)
    response = translation.translate
    render json: response, status: :ok
  end

  private

  def translate_params
    params.permit(:text, :lang)
  end

end
