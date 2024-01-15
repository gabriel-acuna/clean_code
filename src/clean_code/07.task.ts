(() => {
  //* Apply the single responsibility principle
  //* Prioritize composition over inheritance

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public placeholder: string, public value: string) {
      this.placeholder = placeholder;
      this.value = value;
    }
  }

  class InputEvents {
    constructor() {}
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea for the new class InputElement
  class InputElement {
    attributes: InputAttributes;
    element: HtmlElement;
    events: InputEvents;
    constructor(value: string, placeholder: string, id: string) {
      this.attributes = new InputAttributes(placeholder, value);
      this.element = new HtmlElement(id, "input");
      this.events = new InputEvents();
    }
  }

  const nameField = new InputElement("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
