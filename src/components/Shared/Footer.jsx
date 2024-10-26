const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-20">
          <img src="https://i.ibb.co.com/MPjV4nP/logo-footer.png" alt="Cricket Logo" className="size-44" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l bg-white text-gray-900" />
              <button className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-r hover:opacity-90">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-16 py-8 border-t border-gray-800 text-center text-gray-400">
          <p>@2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
