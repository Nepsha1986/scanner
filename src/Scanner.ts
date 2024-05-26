import { WordGenerationService } from "./WordGenerationService/WordGenerationService.ts";
import { DomManager } from "./DomManager/DomManager.ts";

export class Scanner {
  images: HTMLImageElement[];
  #domManager: DomManager;
  #wordGenerator: WordGenerationService;
  constructor() {
    this.images = this.#getImages();
    this.#domManager = new DomManager();
    this.#wordGenerator = new WordGenerationService();
    this.#appendActions();
    void this.#generateAltTex();
    document.addEventListener("DOMNodeInserted", this.#handleNodeInserted);
  }

  #getImages() {
    return [...document.querySelectorAll<HTMLImageElement>("img")];
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

  #appendActions() {
    this.images.forEach((i) => {
      this.#domManager.appendEdit(i);
    });
  }

  // TODO: Cover all cases
  #handleNodeInserted = (event: Event): void => {
    const el = event.target as HTMLElement;

    if (el.tagName === "IMG") {
      this.#domManager.appendEdit(el as HTMLImageElement);
    }
  };
}
