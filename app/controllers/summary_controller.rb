class SummaryController < ApplicationController
  skip_before_action :authorize
  wrap_parameters format: []

  def summarize_text
    summary = SummaryService.new(summary_params).summarize
    render json: summary.to_json, status: :ok
  end

  private

  def summary_params
    params.permit(:text)
  end

end