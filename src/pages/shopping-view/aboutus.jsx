// import React from "react";

// const AboutPage = () => {
//   return (
//     <div className="flex flex-col items-center bg-white py-12 px-4 sm:px-6 lg:px-8">
//       {/* Header */}
//       <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center">
//         ABOUT BHADRA COTTAGE INDUSTRIES.
//       </h1>
//       {/* Divider */}
//       <div className="w-16 h-1 bg-green-500 rounded-full mb-12"></div>

//       {/* Content Section */}
//       <div className="max-w-6xl text-center">
//         {/* <p className="text-3g text-gray-1300 mb-6 leading-relaxed">
//           Bhadra Cottage Industries, is a wholesale marketplace & one-stop shop for all
//           disposable eco-friendly cutlery products, fancy disposable products,
//           housekeeping products,, bakery confectionery
//           products, and many more...
//         </p> */}
//         <p className="text-3g text-gray-1300 mb-6 leading-relaxed">
//           Bhadra Cottage Industries, is a trusted name in the wholesale marketplace,
//           renowned as a one-stop shop for all disposable eco-friendly cutlery products, 
//           fancy disposable items, housekeeping products, birthday party essentials, 
//           bakery confectionery supplies, and much more. With a legacy of excellence and 
//           innovation, we strive to provide products that are not only of the highest quality 
//           but also environmentally responsible.
//         </p>
//         {/* <p className="text-3g text-gray-1300 leading-relaxed">
//           Our experienced staff members are always ready to help bring our
//           merchandise directly to you. By dealing directly with the consumers,
//           we’re able to offer our products at unheard-of prices. We know every
//           penny counts, so we’re making sure you get the most for your money!
//         </p> */}
//         <p className="text-3g text-gray-1300 mb-6 leading-relaxed">
//           At Bhadra Cottage Industries, our experienced staff members are 
//           committed to bringing the best products directly to you, ensuring a 
//           seamless and reliable shopping experience. By eliminating unnecessary 
//           intermediaries, we pass the cost savings to you, offering competitive 
//           pricing that helps you get the best value for your money. Customer satisfaction 
//           and trust have been the cornerstone of our business since its inception.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutPage;



import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center bg-white py-16 px-6 sm:px-12 lg:px-20">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-1300 mb-6 text-center">
        ABOUT BHADRA COTTAGE INDUSTRIES
      </h1>
      {/* Divider */}
      <div className="w-20 h-2 bg-green-500 rounded-full mb-8"></div>

      {/* Content Section */}
      <div className="max-w-5xl text-center">
        {/* Paragraph 1 */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
          Welcome to **Bhadra Cottage Industries**, 
          your trusted wholesale marketplace and one-stop 
          destination for eco-friendly disposable products, 
          housekeeping essentials, bakery confectionery items, 
          and a variety of party supplies. We take pride in 
          offering high-quality products at competitive prices 
          that cater to both businesses and individuals.
        </p>

        {/* Paragraph 2 */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
          Explore our extensive range of products, view detailed descriptions, and 
          check the latest prices directly on our website. Once you’ve found what 
          you need, placing an order is simple—just contact us with your requirements! 
          We are always ready to assist you and ensure that your shopping experience 
          with us is seamless, transparent, and hassle-free.
        </p>

        {/* Paragraph 3 */}
        <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
          To place an order or inquire about our products, you can contact us directly. Here’s how to reach us:
        </p>

        {/* Contact Information */}
        <div className="text-lg text-gray-800 font-bold">
          <p>Name: Bhadra Cottage Industries</p>
          <p>Email: <a href="mailto:info@bhadracottage.com" className="text-green-500 hover:underline">info@bhadracottage.com</a></p>
          <p>Phone: <a href="tel:+919876543210" className="text-green-500 hover:underline">+91 93918 59517</a></p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
