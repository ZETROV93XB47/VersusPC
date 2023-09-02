export class ClientRegistration {
    id: number;
    firstName: string;
    lastName: string;
    sex: string;
    birthDate: Date;
    address: string;
    email: string;
    password: string;

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        sex: string,
        birthDate: Date,
        address: string,
        email: string,
        password: string
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.sex = sex;
        this.birthDate = birthDate;
        this.address = address;
        this.email = email;
        this.password = password;
    }
}
