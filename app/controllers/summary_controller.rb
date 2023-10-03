class SummaryController < ApplicationController
  skip_before_action :authorize

  def summarize
    summary = SummaryService.new(summary_params)
    response = summary.summarize
    render json: response, status: :ok
  end

  private

  def summary_params
    params.permit(:text)
  end

end