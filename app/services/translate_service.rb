class TranslateService
  attr_reader :text
  attr_reader :lang

  def initialize(text:, lang:)
    @text = text
    @lang = lang
  end

  def translate
    response = client.chat(
    parameters: {
        model: "gpt-3.5-turbo", # Required.
        messages: [{ role: "user", content: "Translate this into #{lang} for me: #{text}"}], # Required.
        temperature: 0.7,
    })
  response.dig("choices", 0, "message", "content")
  end

  private

  def client
    @_client ||= OpenAI::Client.new
  end
end