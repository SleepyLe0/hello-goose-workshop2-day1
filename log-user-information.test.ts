import logUserInfo from "./log-user-information";

const userInfo1 = {
    id: 1,
    fullName: { firstName: "John", lastName: "Doe" },
    age: 25,
    contact: { email: "john.doe@example.com", phone: { countryCode: "1", number: "555-1234" } },
    address: { street: "123 Main St", city: "Anytown", zipCode: "12345" },
    hobbies: ["reading", "coding", "gaming"]
};

const userInfo2 = {
    id: 2,
    fullName: { firstName: "Alice", lastName: "Smith" },
    age: 30,
    contact: { email: "alice.smith@example.com", phone: { countryCode: "44", number: "777-4567" } },
    address: { street: "456 Oak Ave", city: "Someville", zipCode: "54321" },
    hobbies: ["traveling", "photography", "cooking", "hiking"]
};

const userInfo3 = {
    id: 3,
    fullName: { firstName: "Bob", lastName: "Johnson" },
    age: 28,
    contact: { email: "bob.johnson@example.com", phone: { countryCode: "33", number: "999-7890" } },
    address: { street: "789 Maple St", city: "Otherburg", zipCode: "98765" },
    hobbies: ["swimming", "coding", "music"]
};

const userInfo4 = {
    id: 4,
    fullName: { firstName: "Emma", lastName: "Miller" },
    age: 35,
    contact: { email: "emma.miller@example.com", phone: { countryCode: "81", number: "333-5678" } },
    address: { street: "567 Pine Rd", city: "Cityville", zipCode: "76543" },
    hobbies: ["reading", "yoga", "gardening", "traveling"]
};

const userInfo5 = {
    id: 5,
    fullName: { firstName: "Charlie", lastName: "Williams" },
    age: 22,
    contact: { email: "charlie.williams@example.com", phone: { countryCode: "49", number: "444-6789" } },
    address: { street: "678 Cedar Lane", city: "Villagetown", zipCode: "54321" },
    hobbies: ["painting", "running", "movies"]
};

test('Test#1', () => { 
    expect(logUserInfo(userInfo1)).toBe("User 1: John Doe is 25 years old. Contact: john.doe@example.com, 1-555-1234. Address: 123 Main St, Anytown. Hobbies: reading and coding.");
});

test('Test#2', () => { 
    expect(logUserInfo(userInfo2)).toBe("User 2: Alice Smith is 30 years old. Contact: alice.smith@example.com, 44-777-4567. Address: 456 Oak Ave, Someville. Hobbies: traveling and photography.");
});

test('Test#3', () => { 
    expect(logUserInfo(userInfo3)).toBe("User 3: Bob Johnson is 28 years old. Contact: bob.johnson@example.com, 33-999-7890. Address: 789 Maple St, Otherburg. Hobbies: swimming and coding.");
});

test('Test#4', () => { 
    expect(logUserInfo(userInfo4)).toBe("User 4: Emma Miller is 35 years old. Contact: emma.miller@example.com, 81-333-5678. Address: 567 Pine Rd, Cityville. Hobbies: reading and yoga.");
});

test('Test#5', () => { 
    expect(logUserInfo(userInfo5)).toBe("User 5: Charlie Williams is 22 years old. Contact: charlie.williams@example.com, 49-444-6789. Address: 678 Cedar Lane, Villagetown. Hobbies: painting and running.");
});

