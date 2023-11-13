# TypeScript Problem: User Information Logger

### Problem Statement:

Create a TypeScript function that takes a user object as a parameter by using destructering object and return a personalized message.

The user object has the following structure:

```typescript
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
```

# Example Result

### Code:
```typescript
console.log(logUserInfo({
  id: 6,
  fullName: { 
    firstName: "Sophia", 
    lastName: "Lee" },
  age: 27,
  contact: { 
    email: "sophia.lee@example.com", 
    phone: { 
      countryCode: "82", 
      number: "777-8888" } },
  address: { 
    street: "890 Willow Blvd", 
    city: "Greenville", 
    zipCode: "98765" },
  hobbies: ["dancing", "coding", "traveling", "cooking"]
}));
```

### Output:
```
User 6: Sophia Lee is 27 years old. Contact: sophia.lee@example.com, 82-777-8888. Address: 890 Willow Blvd, Greenville. Hobbies: dancing and coding.
```







