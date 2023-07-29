(() => {

    const filesToEvaluate = [
        { id: 1, isDeleteable: false },
        { id: 2, isDeleteable: false },
        { id: 3, isDeleteable: true },
        { id: 4, isDeleteable: false },
        { id: 5, isDeleteable: false },
        { id: 7, isDeleteable: true },
    ]; 
    
    const filesToDelete = filesToEvaluate.map( file => file.isDeleteable );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Hint
    class User { };
    interface User { };
    // Todo:
    const currentDate = new Date();
    
    const elapsedDays: number = 23;
    
    const filesInDirectory = 33;

    const firstName = 'Gabriel';
    
    const lastName = 'Acuña';

    const daysSinceLastModification = 12;

    const maxClassPerStudent = 6;


})();
