

//default behaviour
enum Direction{
    up,down, left, right
}
console.log(Direction.up, Direction.down, Direction.left, Direction.right);

/***************************Numeric Enum ***************************/

//with custom value 
enum Status{
    resolve = 1,
    pending = 2
}
console.log(Status.pending, Status.resolve);



enum OrderStatus {
    Pending,     
    Shipped,     
    Delivered,   
    Cancelled    
  }
  
  // Function to check order status
  function getOrderStatus(status: OrderStatus) {
    if (status === OrderStatus.Pending) {
      console.log("Your order is pending.");
    } else if (status === OrderStatus.Shipped) {
      console.log("Your order has been shipped.");
    } else if (status === OrderStatus.Delivered) {
      console.log("Your order has been delivered.");
    } else {
      console.log("Your order was cancelled.");
    }
  }
  
  let product_status = OrderStatus.Shipped;
  console.log(product_status); // 1
  getOrderStatus(product_status); // Your order has been shipped.


/******************** String Enum ********************************/

enum Colors{
    Red = "Red",
    yellow = "yellow",
    green = "green"
}

enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

// Function to check user role
function checkAccess(role: UserRole) {
    if (role === UserRole.Admin) {
      console.log("Welcome Admin! You have full access.");
    } else if (role === UserRole.User) {
      console.log("Welcome User! You have limited access.");
    } else {
      console.log("Welcome Guest! Please log in for more features.");
    }
  }
  
  let role = UserRole.User;
  console.log(role);
  checkAccess(role);