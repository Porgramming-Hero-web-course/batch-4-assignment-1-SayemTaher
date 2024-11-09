
# Type Guards in TypeScript

Type guards are essential tools in TypeScript that enable the language to manage its strong typing even in situations where types are not immediately clear. They prevent unexpected runtime errors and improve the overall reliability of the code by ensuring that a variable is of the expected type before accessing properties or methods specific to that type.

---

## Table of Contents

- [Why Are Type Guards Necessary?](#why-are-type-guards-necessary)
- [The `typeof` Operator](#the-typeof-operator)
- [The `instanceof` Operator](#the-instanceof-operator)
- [The `in` Operator](#the-in-operator)
- [Overview](#overview)

---

## Why Are Type Guards Necessary?

Type guards in TypeScript help us narrow down types at runtime, allowing the compiler to determine the exact type of a variable in a specific block of code. They ensure safer, more predictable code and help avoid runtime errors by enforcing type checks.

---

## The `typeof` Operator

The `typeof` operator is one of the simplest and most commonly used type guards in TypeScript. It checks if a variable is of a specific primitive type, such as `string`, `number`, or `boolean`.

### Example

```typescript
const checkValue = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return `Converted value to kg is: ${convertedValue}`;
    }
    if (typeof value === "number") {
        return value * 1000;
    }
    return undefined;
};
```

In this example, the `typeof` operator checks if the `value` parameter is of type `string` or `number`. If it’s a `string`, it converts the value to a number and performs a calculation. If it’s already a `number`, it performs the calculation directly. This ensures that each block only operates on the expected type, preventing errors.

---

## The `instanceof` Operator

The `instanceof` operator is used to check if an object is an instance of a particular class or constructor function. This type guard is particularly useful when working with classes and their instances, allowing you to narrow down the type to a specific class.

### Example

```typescript
class Student1 {
    constructor(
        public name: string,
        public age: number,
        public city: string,
        public country: string
    ) {}

    studentWorking() {
        console.log(`${this.name} is working.`);
    }
}

class Person {}

const isStudent = (user: Person): user is Student1 => {
    return user instanceof Student1;
};

const checkPersonData = (user: Person) => {
    if (isStudent(user)) {
        user.studentWorking();
    } else {
        console.log("Not a student instance.");
    }
};

const studentInstance = new Student1("Sayem", 24, "Eindhoven", "Bangladesh");
checkPersonData(studentInstance);
```

In this example, `isStudent` uses the `instanceof` operator to check if `user` is an instance of `Student1`. If true, the specific `Student1` method `studentWorking` can be called safely.

---

## The `in` Operator

The `in` operator checks if a property exists in an object. This type guard is particularly useful when working with objects that may or may not have certain properties.

### Example

```typescript
type NormlaUser = {
    name: string;
};

type AdminUser = {
    name: string;
    role: string;
};

const normalUser: NormlaUser = { name: "Normal User" };
const adminUser: AdminUser = { name: "Admin User", role: "Admin" };

const checkUser = (user: NormlaUser | AdminUser) => {
    if ('role' in user) {
        console.log(`You are logged in as an ${user.role}`);
    } else {
        console.log("You're logged in as a normal user");
    }
};

checkUser(normalUser);
```

In this example, the `in` operator checks if the `role` property exists in the `user` object. If it does, `user` is treated as an `AdminUser`; otherwise, it's treated as a `NormlaUser`. This ensures that only valid properties are accessed based on the object's type.

---

## Overview

Type guards are essential tools in TypeScript, enabling the language to manage its strong typing even in situations where types are not immediately clear. By narrowing down types, TypeScript ensures safer and more predictable code, allowing developers to prevent unexpected runtime errors and maintain clean, type-safe codebases.
