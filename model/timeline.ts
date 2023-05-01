type TimelineConstructorParams = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
};

class Timeline {
  #id = 0;
  #startDate = '';
  #endDate = '';
  #title = '';
  #description = '';

  constructor({ id, startDate, endDate, title, description }: TimelineConstructorParams) {
    this.#id = id;
    this.#startDate = startDate;
    this.#endDate = endDate;
    this.#title = title;
    this.#description = description;
  }

  get id() {
    return this.#id;
  }

  get startDate() {
    return this.#startDate;
  }

  set startDate(startDate: string) {
    this.#startDate = startDate;
  }

  get endDate() {
    return this.#endDate;
  }

  set endDate(endDate: string) {
    this.#endDate = endDate;
  }

  get title() {
    return this.#title;
  }

  set title(title: string) {
    this.#title = title;
  }

  get description() {
    return this.#description;
  }

  set description(description: string) {
    this.#description = description;
  }
}

export default Timeline;
