import { AnimalClass } from './animal-class.enum';

export class Animal {
    name: string;
    printName: string;
    class: AnimalClass;
    desc: string;
    childrenName?: string;
    femaleName?: string;
    soundName?: string;
}