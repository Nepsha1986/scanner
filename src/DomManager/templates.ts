interface TemplateAnchors {
  dialog: string;
  input: string;
  closeBtn: string;
  saveBtn: string;
}

interface Template {
  anchors: TemplateAnchors;
  html: () => string;
}

export const templates: Record<string, Template> = {
  editAltAttributePopup: {
    anchors: {
      dialog: "sc_dialog",
      input: "sc_input",
      closeBtn: "sc_close_btn",
      saveBtn: "sc_save_btn",
    },
    html: function (): string {
      const { closeBtn, saveBtn, dialog, input } = this.anchors;
      return `
        <dialog id="${dialog}" class="sc-dialog">
          <label class="sc-label" for="${input}">Edit Alt Text:</label>
          <input class="sc-input" type="text" id="${input}" />
          <div class="sc-button-group">
            <button class="sc-button sc-button__primary" id="${saveBtn}" tabindex="0">Apply</button>
            <button class="sc-button" id="${closeBtn}" tabindex="0">Cancel</button>
          </div>
        </dialog>
      `;
    },
  },
};

export type TemplateName = keyof typeof templates;
