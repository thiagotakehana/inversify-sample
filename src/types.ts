// Define symbols for dependency injection to avoid string literals
const TYPES = {
    CustomerService: Symbol.for("CustomerService"),
    CustomerController: Symbol.for("CustomerController"),
    AuthService: Symbol.for("AuthService"),
};

export { TYPES };