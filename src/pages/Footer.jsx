<footer className="bg-[#012D2D] text-white py-10">
  <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* About / Logo */}
    <div>
      <h2 className="text-2xl font-bold mb-2">Siri HP</h2>
      <p className="text-sm text-gray-300">
        I'm a passionate full-stack developer with a strong interest in frontend
        design, backend logic, and continuous learning.
      </p>
    </div>

    {/* Contact Details */}
    <div>
      <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
      <ul className="text-sm text-gray-300 space-y-1">
        <li>📞 +91 98765 43210</li>
        <li>📧 sirihp.dev@gmail.com</li>
        <li>📍 Bangalore, India</li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h2 className="text-xl font-semibold mb-2">Newsletter</h2>
      <div className="flex items-center bg-white rounded overflow-hidden">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="w-full p-2 text-black outline-none"
        />
        <button className="bg-[#014d4d] px-4 py-2 text-white font-bold">
          ➤
        </button>
      </div>
      <div className="flex gap-4 mt-4 text-white text-lg">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  </div>

  <hr className="my-6 border-gray-600" />

  {/* Copyright */}
  <div className="text-center text-sm text-gray-400">
    © {new Date().getFullYear()} Siri HP. All rights reserved.
  </div>
</footer>;
