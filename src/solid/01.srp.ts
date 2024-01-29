(() => {
  interface Product {
    id: number;
    name: string;
  }
  class ProductService {
    private httpAdapter: Object;

    getProduct(id: number) {
      console.log("Product: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Saving in database ", product);
    }
  }
  class EmailNotificationService {
    private masterEmail: string = "notifications@exmapledomain.com";
    sendEmail(
      emailList: string[],
      template: "to-clients" | "to-admins",
      content: string
    ) {
      console.log(`Sending email ${template.replace("-", " ")}`);
    }
  }

  // Usually, this is a class to control the view that is displayed to the user.
  // Remember that we can have many views that do this same job.
  class ProductBloc {
    constructor(
      private productService: ProductService,
      private emailNotificationService: EmailNotificationService
    ) {
      this.productService = productService;
      this.emailNotificationService = emailNotificationService;
    }
    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }
    notifyClients() {
      this.emailNotificationService.sendEmail(
        ["clients@exmapledomain.com"],
        "to-clients",
        ""
      );
    }
  }

  class CartBloc {
    private item: Object[] = [];
    onAddToCart(productId: number) {
      // Add to shopping cart
      console.log("Adding to cart ", productId);
    }
  }
  const productService = new ProductService();
  const emailNotificationService = new EmailNotificationService();
  const productBloc = new ProductBloc(productService, emailNotificationService);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);
})();
