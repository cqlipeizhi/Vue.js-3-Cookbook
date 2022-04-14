export enum FoodChainType{
    Carnivorous = 'carnivorous',
    Herbivorous = 'herbivorous',
    Omnivorous = 'omnivorous',
}

interface IAnimal{
    name:string;
    sound:string;
    family:string;
    foodChainType:FoodChainType;
}

interface IAnimalConstructor extends IAnimal{

}

interface IBasicAnimal extends IAnimal{
    whoAmI:()=>void;
    makeSound:()=>void;
}

export class Animal implements IBasicAnimal{
    name: string;
    sound: string;
    family: string;
    foodChainType: FoodChainType;
    
    constructor(params:IAnimalConstructor){
        this.name=params.name;
        this.sound=params.sound||'';
        this.family=params.family;
        this.foodChainType=params.foodChainType;
    }

    public whoAmI(): void{
        console.log(`I am a ${this.name}, my family is ${this.family}. My diet is ${this.foodChainType}.`);
        if(this.sound){
            console.log([...Array(2).fill(this.sound)].join(', '));
        }
    }
    public makeSound(): void{
        console.log(this.sound);
    }
}