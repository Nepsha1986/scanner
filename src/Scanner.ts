import { WordGenerationService } from "./WordGenerationService/WordGenerationService.ts";
import { DomManager } from "./DomManager/DomManager.ts";

import "./style.css";

export class Scanner {
  #domManager: DomManager;
  #wordGenerator: WordGenerationService;
  constructor() {
    this.#domManager = new DomManager();
    this.#wordGenerator = new WordGenerationService();
    document.addEventListener("DOMNodeInserted", this.#handleNodeInserted);
    this.#init();
  }

  #init() {
    const images: HTMLImageElement[] = [
      ...document.querySelectorAll<HTMLImageElement>("img"),
    ];
    this.#appendActions(images);
    void this.#changeAltText(images);
  }

  async #changeAltText(images: HTMLImageElement[]) {
    let altText = [];
    try {
      altText = await this.#wordGenerator.getWords(images.length);
    } catch (e) {
      throw new Error("Can not generate alt text");
    }

    altText.forEach((item, index) => {
      images[index].setAttribute("alt", item);
    });
  }

  #appendActions(images: HTMLImageElement[]) {
    images.forEach((i) => {
      this.#domManager.appendEdit(i);
    });
  }

  #handleNodeInserted = async (event: Event): Promise<void> => {
    const el = event.target as HTMLElement;
    const newImages =
      el.tagName === "IMG"
        ? ([el] as HTMLImageElement[])
        : [...el.querySelectorAll<HTMLImageElement>("img")];

    this.#appendActions(newImages);

    try {
      await this.#changeAltText(newImages);
    } catch (e) {
      throw new Error("Can not change alt text");
    }
  };
}
