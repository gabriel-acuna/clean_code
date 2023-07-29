(() => {

    // function to get information of a movie by Id
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }

    // function to get information about the actors in a movie - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }

    // function to get the bio of the actor by the id
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crate a movie
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    // Create an actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // asynx task to verify name
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();

