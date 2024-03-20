export interface IUser {
    name: string;
    age: number;
    height: number;
    nationality: "Brazilian" | "Unknown";
}

export class User {
    name: string;
    age: number;
    height: number;
    nationality: "Brazilian" | "Unknown";
    constructor({name, age, height, nationality}: IUser) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.nationality = nationality;
    }
}
