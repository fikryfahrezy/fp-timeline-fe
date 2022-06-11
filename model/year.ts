class Year {
  id: number;
  date: string;

  constructor(id: number, date: string) {
    this.id = id;
    this.date = date;
  }

  getId() {
    return this.id;
  }

  getDate() {
    return this.date;
  }
}

export default Year;
