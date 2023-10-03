class SummaryService
  attr_reader :text

  def initialize(text:)
    @text = text
  end

  def summarize
    response = client.edits(
      parameters: {
        model: "text-davinci-edit-001",
        input: text,
        instruction: "Summarize this in a way that is easily understood"
      }
    )
    response.dig("choices", 0, "message")
  end

  private

  def client
    @_client ||= OpenAI::Client.new
  end
end