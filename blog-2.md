Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

-Type guards help us determine and narrow down types at runtime, allowing TypeScript to recognize the exact type of a variable in a specific block of code.
-Type guards help prevent unexpected runtime errors by ensuring that a variable is of the expected type before accessing properties or methods specific to that type.

----The 'typeof' operator is one of the simplest and most commonly used type guards in TypeScript. It checks if a variable is of a specific primitive type, such as string, number, or boolean.

#Example 
const checkValue = (value: string | number): string | number | undefined => {
        
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return ` converted value to kg is  : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000
        }
        return undefined
    
    }

---- The 'instanceof' operator is used to check if an object is an instance of a particular class or constructor function. This is especially useful when working with classes and their instances.

#Example 

const isStudent = (user: Person): user is Student1 => {
        return user instanceof Student1
    }

    const checkPersonData = (user: Person) => {
        if (isStudent(user)) {
           user.studentWorking() 
        }
    }
    const studentInstance = new Student1(
      "Sayem",
      24,
      "Eindhoven",
      "Bangladesh"
    );
    checkPersonData(studentInstance);  

---- The 'in' operator checks if a property exists in an object. This is useful when working with objects that may or may not have certain properties.

#Example 

type NormlaUser = {
        name: string;
        
    }
    type AdminUser = {
        name: string
        role:string
    }
    const normalUser: NormlaUser = {
        name:"Normal User"
    }
    const adminUser: AdminUser = {
        name: "Admin user",
        role:"Admin"
    }

    const checkUser = (user: NormlaUser | AdminUser) => {
        if ('role' in user) {
            console.log(`You are logged in as an ${user.role}`)
        }
        else {
            console.log(`You're logged in as a normal user`);
        }
    }
    checkUser(normalUser)

Overview: Type guards are essential tools in TypeScript, enabling the language to manage its strong typing even in situations where types are not immediately clear.