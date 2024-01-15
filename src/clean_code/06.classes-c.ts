(() => {
    // Object as properties
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
        email: string;
        role: string;
        lastAccess?: Date
    }
    class User {
        email: string
        lastAccess: Date
        person: Person
        role: string
        constructor(
            {
                email,
                role
            }: UserProperties
        ) {

            this.email = email
            this.role = role
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }
    interface SettingProperties {
        lastOpenFolder: string,
        workingDirectory: string,
    }
    class Settings {
        public workingDirectory: string
        public lastOpenFolder: string
        constructor(
            {
            lastOpenFolder,
            workingDirectory,
        }: SettingProperties
        ) {
            this.lastOpenFolder = lastOpenFolder
            this.workingDirectory = workingDirectory
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
    class UserSettings {
        person: Person
        user: User
        settings: Settings
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
        ){
            this.person = new Person({ gender, name, birthdate })
            this.user = new User({ email, role })
            this.settings = new Settings({ lastOpenFolder, workingDirectory})
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