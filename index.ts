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

function logUserInfo( user:User ) {
    // write your statement here
}

// test
logUserInfo({
    id: 1,
    fullName: { firstName: "John", lastName: "Doe" },
    age: 25,
    contact: { email: "john.doe@example.com", phone: { countryCode: "1", number: "555-1234" } },
    address: { street: "123 Main St", city: "Anytown", zipCode: "12345" },
    hobbies: ["reading", "coding", "gaming"]
});



