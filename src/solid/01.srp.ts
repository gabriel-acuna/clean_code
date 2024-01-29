(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    // Usually, this is a class to control the view that is displayed to the user.
    // Remember that we can have many views that do this same job.
    class ProductBloc {
    
        loadProduct( id: number ) {
            // Carry out a process to obtain the product and return it
            console.log('Product: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Make a request to save in the database 
            console.log('Saving in database ', product );
        }
    
        notifyClients() {
            console.log('Sending email to clients');
        }
    
        onAddToCart( productId: number ) {
            // Add to shopping cart
            console.log('Adding to cart ', productId );
        }
    
    }
    


    const productBloc = new ProductBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    productBloc.onAddToCart(10);








})();