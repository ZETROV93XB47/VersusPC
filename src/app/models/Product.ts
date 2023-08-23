export class Product {
  name: string;
  description: string;
  photo: string;
  ssd: string;
  connectivite: string;
  cpu: string;
  gpu: string;
  hardDrive: string;
  stock: number;
  diagonale: number;
  price: number;
  os: string;
  dalle: string;
  ram: string;
  brand: string;
  category: string;

  constructor(
    name: string,
    description: string,
    photo: string,
    ssd: string,
    connectivite: string,
    cpu: string,
    gpu: string,
    hardDrive: string,
    stock: number,
    diagonale: number,
    price: number,
    os: string,
    dalle: string,
    ram: string,
    brand: string,
    category: string
    ) {
    this.name = name;
    this.description = description;
    this.photo = photo;
    this.ssd = ssd;
    this.connectivite = connectivite;
    this.cpu = cpu;
    this.gpu = gpu;
    this.hardDrive =hardDrive;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.ram = ram;
    this.diagonale = diagonale;
    this.price = price;
    this.os = os;
    this.dalle = dalle;
  }
}
