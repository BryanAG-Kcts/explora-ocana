
import OpenAI from 'openai';

const isLocal = process.env.USE_LOCAL_LLM === 'true';

export const openaiClient = new OpenAI(
  isLocal
    ? {
        // Ollama local — no necesita API key real
        baseURL: 'http://localhost:11434/v1',
        apiKey:  'ollama', // puede ser cualquier string, Ollama lo ignora
      }
    : {
        // OpenAI real — cuando tengas tu key
        apiKey: process.env.OPENAI_API_KEY,
      }
);

// Modelos según el entorno
export const MODELS = {
  embedding: isLocal ? 'nomic-embed-text' : 'text-embedding-3-small',
  chat:      isLocal ? 'llama3.2'         : 'gpt-4o-mini',
} as const;