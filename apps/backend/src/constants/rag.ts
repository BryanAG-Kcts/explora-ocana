export const RAG_CONSTANTS = {
  // Modelo de embeddings — nomic produce vectores de 768 dimensiones
  EMBEDDING_MODEL:  'nomic-embed-text',
  EMBEDDING_DIMS:   768,

  // Modelo de chat local
  CHAT_MODEL: 'llama3.2',

  // Chunking
  CHUNK_SIZE:    150,   // palabras por chunk (óptimo para nomic-embed-text)
  CHUNK_OVERLAP: 30,    // palabras de overlap entre chunks

  // Búsqueda semántica
  TOP_K:              5,     // cuántos chunks recuperar por consulta
  MIN_SIMILARITY:     0.60,  // umbral mínimo — ajusta según tus pruebas

  // URL de Ollama local
  OLLAMA_BASE_URL: 'http://localhost:11434/v1',
} as const;