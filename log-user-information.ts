type User = {
    id: number;
    fullName: {
        firstName: string;
        lastName: string;
    };
    age: number;
    contact: {
        email: string;
        phone: {
            countryCode: string;
            number: string;
        };
    };
    address: {
        street: string;
        city: string;
        zipCode: string;
    };
    hobbies: string[];
};

export function logUserInfo(user: User): string {
    // write your statement here
    return ``;
}
  
  
  




