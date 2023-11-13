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

function logUserInfo(user: User): string {
    // write your statement here
    return ``;
}

export default logUserInfo;
  
  
  




