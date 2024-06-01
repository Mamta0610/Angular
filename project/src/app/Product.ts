import { Category } from "./category";

export class Product{
    constructor(
        public pId:number,
        public name:string,
        public description:string,
        public price:number,
        public category:any
    ){}
}