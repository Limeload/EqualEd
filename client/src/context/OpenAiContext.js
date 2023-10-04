import React from 'react'

const OpenAiContext = React.createContext();

function OpenAiProvider({ children }) {

  const requestSummary = async (text) => {
    const r = await fetch("/api/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        text: text,
      })
    });
    const data = await r.json();
    return data;
  }

  const requestTranslation = async (query) => {
    const r = await fetch("/api/translate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        text: query.text,
        lang: query.lang
      })
    });
    const data = await r.json();
    return data;
  }

  return (
    <OpenAiContext.Provider
      value={{
        requestSummary,
        requestTranslation
      }}>
      {children}
    </OpenAiContext.Provider>
  )
}

export { OpenAiContext, OpenAiProvider }
