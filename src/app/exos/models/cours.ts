export class Cours {
    title: string;
    description: string;
    isActive: boolean;
  
    constructor(title: string, decription: string, isActive: boolean = false) {
      this.title = title;
      this.description = decription;
      this.isActive = isActive;
    }
  }
