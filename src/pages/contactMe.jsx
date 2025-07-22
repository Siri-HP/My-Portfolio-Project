import React from "react";

export default function ContactMe({ id }) {
  return (
    <section id={id} className="bg-[#f7fdfd] py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-md shadow-md">
          <p className="text-sm text-teal-600 font-semibold mb-2">Contact</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>

          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Name :
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email :
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Write Message :
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-900 hover:bg-teal-800 text-white font-medium py-2 rounded-full transition-colors"
            >
              CONTACT US
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-md overflow-hidden shadow-md">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1974593638492!2d77.65933575502777!3d13.02309416016884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae10d3da0fb2b3%3A0xdbae648ed26986fb!2s13%2C%201st%20Cross%20Rd%2C%20Amar%20Regency%2C%20Munireddy%20Layout%2C%20Horamavu%2C%20Bengaluru%2C%20Karnataka%20560043!5e0!3m2!1sen!2sin!4v1752836833792!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="min-h-[400px] w-full border-none"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
