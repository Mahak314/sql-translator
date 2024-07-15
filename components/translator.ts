const translateToSQL = async (query, apiKey, tableSchema = "") => {
  // ... (existing code)

  const response = await fetch("https://api.openai.com/v1/completions", {
    // ... (existing fetch options)
  });

  const data = await response.json();
  if (!response.ok) {
    console.error("API Error:", response.status, data);
    // Specific error details are now logged for better debugging
    throw new Error(data.error || "Error translating to SQL. Further details logged in the console.");
  }

  return data.choices[0].text.trim();
};

export default translateToSQL;