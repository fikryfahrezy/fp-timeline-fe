class Timeline {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  description: string;

  constructor(id: number, startDate: string, endDate: string, title: string, description: string) {
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
    return new Date(this.startDate).toDateString();
  }

  getEndDate() {
    return new Date(this.endDate).toDateString();
  }

  getTitle() {
    return this.title;
  }

  getDesciprtion() {
    return this.description;
  }
}

export default Timeline;
