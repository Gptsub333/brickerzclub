import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20" id="Pricing">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
       <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
         {" "}
         Contact Us
       </span>
     </h2>
     
      <div className="">
      
      <div className="bg-[#121212] flex items-center justify-center h-fit p-12">

        <form
        
          className="bg-transparent backdrop-blur-sm rounded-2xl w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
  
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white focus:outline-none focus:border-[#FF5C00] transition-colors"
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-white focus:outline-none focus:border-[#FF5C00] transition-colors resize-none"
              placeholder="Your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#FF5C00] to-[#FF8A00] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Send Message
            
          </button>
        </form>
      </div>
        
      </div>
    </div>



  );
};

export default Pricing;
