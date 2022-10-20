export interface Title {
    title: string;
    headingTwo?: string;
  }

export interface CardItems {
    product:{
      id: string
      title : string ,
      price: string,
      description: string
    }
    counter(data : any): any
  }
  