export class WordGenerationService {
  #src = "https://random-word-api.herokuapp.com/word";

  async getWords(count: number): Promise<string[]> {
    try {
      const response = await fetch(`${this.#src}?number=${count}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    } catch (error) {
      console.error("Failed to fetch words:", error);
      throw error;
    }
  }
}
