function Footer() {
    return (
      <footer className="bg-primary text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PITSTOP</h3>
              <p className="text-gray-300">
                Your one-stop shop for premium automotive parts and accessories.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/shop" className="text-gray-300 hover:text-white">Shop</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>123 Auto Street</li>
                <li>Mumbai, India</li>
                <li>Phone: +91 1234567890</li>
                <li>Email: info@pitstop.com</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded bg-white text-black"
                />
                <button className="bg-secondary text-white px-6 py-2 rounded hover:bg-opacity-90">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Pitstop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;