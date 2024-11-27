import React from "react";
import axios from "axios";

const ContactPage = () => {
    
    // const [formData, setFormData] = useState({
    //   name: "",
    //   phone: "",
    //   email: "",
    //   message: "",
    // });
  
    // const [status, setStatus] = useState("");
  
    // const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const response = await axios.post("http://localhost:5000/send-email", formData);
    //     setStatus("Message sent successfully!");
    //   } catch (error) {
    //     console.error(error);
    //     setStatus("Failed to send the message. Please try again.");
    //   }
    // };

  return (
    <div className="bg-white text-gray-900">
      {/* Header Section */}
      <div className="text-center py-10 bg-gray-100">
        <h1 className="text-3xl md:text-5xl font-bold uppercase">#Keep In Touch With Us</h1>
        <div className="mt-2 w-16 h-1 bg-red-500 mx-auto"></div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Call Us */}
        <div className="transition-transform transform hover:scale-105 hover:bg-gray-100 p-5 rounded-md shadow-lg">
          <div className="text-3xl text-green-500 mb-3">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h2 className="font-bold text-lg mt-2">CONTACT US</h2>
          <p className="text-1xl mt-2">+91 93918 59517</p>
        </div>

        <div className="transition-transform transform hover:scale-105 hover:bg-gray-100 p-5 rounded-md shadow-lg">
          <div className="text-3xl text-green-500 mb-3">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h2 className="font-bold text-lg mt-2">LOCATED</h2>
          <p className="text-1xl mt-2">
            H NO 15-5-667/1, Ashok Bazar Road, Afzal Gunj,
            <br />
            Hyderabad, Telangana 500012
          </p>
        </div>

        {/* Email */}
        <div className="transition-transform transform hover:scale-105 hover:bg-gray-100 p-5 rounded-md shadow-lg">
          <div className="text-3xl text-green-500 mb-3">
            <i className="fas fa-envelope"></i>
          </div>
          <h2 className="font-bold text-lg mt-2">EMAIL AT</h2>
          <p className="text-2xl mt-2">info@bhadracottage.com</p>
        </div>
      
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-5">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 uppercase">
            We would love to hear from you
          </h2>
          <form
            className="max-w-xl mx-auto bg-white p-5 shadow-md rounded-md space-y-5"
            onSubmit={(e) => {
              e.preventDefault(); // Prevent default form submission
              // Add logic to send form data here
              alert("Your message has been sent successfully!");
            }}
          >
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Enter your message"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
