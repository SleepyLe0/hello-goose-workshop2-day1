# TypeScript Problem: User Information Logger

### Problem Statement:

Create a TypeScript function that takes a user object as a parameter and logs a personalized message.

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