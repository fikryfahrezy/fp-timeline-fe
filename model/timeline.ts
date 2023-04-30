type TimelineConstructorParams = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
};

class Timeline {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  description: string;

  constructor({ id, startDate, endDate, title, description }: TimelineConstructorParams) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
    this.title = title;
    this.description = description;
  }

  getId() {
    return this.id;
  }

  getStartDate() {
    return this.startDate;
  }

  getEndDate() {
    return this.endDate;
  }

  getTitle() {
    return this.title;
  }

  getDesciprtion() {
    return this.description;
  }
}

export default Timeline;
