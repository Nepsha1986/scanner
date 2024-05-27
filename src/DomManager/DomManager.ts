import { TemplateName, templates } from "./templates.ts";

export class DomManager {
  constructor() {
    this.#initializeTemplate("editAltAttributePopup", "sc_edit_alt_popup");
  }

  #initializeTemplate(name: TemplateName, id: string) {
    const template = document.createElement("template");
    template.id = id;
    template.innerHTML = templates[name].html();
    document.body.appendChild(template);
  }

  appendEdit(el: HTMLImageElement) {
    el.classList.add("sc-image");
    el.setAttribute("tabindex", "0");

    const editHandler = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      this.#editImageAlt(el);
    };

    el.addEventListener("click", editHandler);
    el.addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        editHandler(e);
      }
    });
  }

  #editImageAlt(img: HTMLImageElement) {
    const template = document.getElementById(
      "sc_edit_alt_popup",
    ) as HTMLTemplateElement;

    const clone = document.importNode(template.content, true);
    document.body.appendChild(clone);

    const { dialog, input, saveBtn, closeBtn } =
      templates.editAltAttributePopup.anchors;

    const dialogEl = document.getElementById(dialog) as HTMLDialogElement;
    const inputEl = document.getElementById(input) as HTMLInputElement;
    const saveButtonEl = document.getElementById(saveBtn) as HTMLButtonElement;
    const closeButtonEl = document.getElementById(
      closeBtn,
    ) as HTMLButtonElement;

    inputEl.value = img.alt;

    const closeDialog = () => {
      dialogEl.close();
      dialogEl.remove();
    };

    saveButtonEl.addEventListener("click", () => {
      img.alt = inputEl.value;
      closeDialog();
    });

    closeButtonEl.addEventListener("click", closeDialog);

    dialogEl.showModal();
  }
}
