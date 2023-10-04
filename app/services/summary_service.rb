class SummaryService
  attr_reader :text

  def initialize(text)
    @text = text
  end

  def summarize
    response = client.chat(
    parameters: {
        model: "gpt-3.5-turbo", # Required.
        messages: [{ role: "user", content: "Can you summarize this in a way that is easily understood: #{text}"}], # Required.
        temperature: 0.7,
    })
    response.dig("choices", 0, "message", "content")
  end

  private

  def client
    @_client ||= OpenAI::Client.new
  end
end