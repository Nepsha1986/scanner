import { WordGenerationService } from "./WordGenerationService.ts";

export class Scanner {
  images: HTMLImageElement[];
  #wordGenerator: WordGenerationService;
  constructor() {
    this.images = this.#getImages();
    this.#wordGenerator = new WordGenerationService();
    void this.#generateAltTex();
  }

  #getImages() {
    const images = [...document.querySelectorAll<HTMLImageElement>("img")];
    return images.filter((i) => !i.getAttribute("alt"));
  }

  async #generateAltTex() {
    let altText = [];
    try {
      altText = await this.#wordGenerator.getWords(this.images.length);
    } catch (e) {
      throw new Error("Can not generate alt text");
    }

    altText.forEach((item, index) => {
      this.images[index].setAttribute("alt", item);
    });
  }
}
