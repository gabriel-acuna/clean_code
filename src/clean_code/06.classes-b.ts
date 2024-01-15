(() => {
    // Applaying SRP
    // Composition over Inheritance
    type Gender = 'M' | 'F';
    interface PersonProperties {
        birthdate: Date
        gender: Gender,
        name: string,
    }

    class Person {
        birthdate: Date;
        gender: Gender;
        name: string;

        constructor({ name, gender, birthdate }: PersonProperties) {
            this.name = name,
                this.gender = gender,
                this.birthdate = birthdate

        }
    }
    interface UserProperties {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string,
        role: string;
        lastAccess?: Date
    }
    class User extends Person {
        email: string
        lastAccess: Date
        role: string
        constructor(
            {
                birthdate,
                email,
                gender,
                name,
                role
            }: UserProperties
        ) {
            super({ birthdate, gender, name })
            this.email = email
            this.role = role
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }
    interface UserSettingProperties {
        birthdate: Date
        email: string,
        gender: Gender,
        lastOpenFolder: string,
        name: string,
        role: string,
        workingDirectory: string,
    }
    class UserSettings extends User {
        public workingDirectory: string
        public lastOpenFolder: string
        constructor(
            {
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory,
        }: UserSettingProperties
        ) {
            super({ email, role, name, gender, birthdate })
            this.lastOpenFolder = lastOpenFolder
            this.workingDirectory = workingDirectory
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date(),
        email:'user@email.com', 
        gender: 'M', 
        lastOpenFolder:'%USERPROLIFE%/Projects/clean-code',
        name: 'Gabriel', 
        role: 'Dev',
        workingDirectory:'%USERPROLIFE%/Projects',
    })
    console.log(userSettings)
})()