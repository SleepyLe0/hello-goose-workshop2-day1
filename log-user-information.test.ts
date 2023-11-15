import logUserInfo from "./log-user-information";

const userInfo1 = {
    id: 1,
    fullName: { firstName: "John", lastName: "Doe" },
    age: 25,
    contact: { email: "john.doe@example.com", phone: { countryCode: "1", number: "555-1234" } },
    address: { street: "123 Main St", city: "Anytown", zipCode: "12345" },
    hobbies: ["reading", "coding", "gaming"]
};

test('Test#1', () => { 
    expect(logUserInfo(userInfo1)).toBe("User 1: John Doe is 25 years old. Contact: john.doe@example.com, 1-555-1234. Address: 123 Main St, Anytown. Hobbies: reading and coding.");
});

