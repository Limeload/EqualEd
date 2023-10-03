class TranslateService
  attr_reader :text
  attr_reader :lang

  def initialize(text:, lang:)
    @text = text
    @lang = lang
  end

  def translate
    response = client.edits(
      parameters: {
        model: "text-davinci-edit-001",
        input: text,
        instruction: "Translate it to #{lang}"
      }
    )
    response.dig("choices", 0, "message")
  end

  private

  def client
    @_client ||= OpenAI::Client.new
  end
end