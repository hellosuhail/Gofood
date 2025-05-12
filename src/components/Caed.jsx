import { useNavigate } from "react-router-dom";

export default function Card({item}) {
  const Navigate = useNavigate();
    const handleOrderClick = () => {
    Navigate('/food-order', { state: { name: item.name, price: item.price } });
  };
    return (
        <div className="card bg-gradient-to-br from-white to-gray-50 w-56 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden font-body">
        <figure className="px-2 pt-6 relative group">
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10 animate-pulse">
            Best Seller
          </div>
          <div className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
            Fresh
          </div>
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={item.image}
            alt={item.name}
            className="rounded-xl h-40 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </figure>
        <div className="card-body items-center text-center p-4">
          <h2 className="font-heading text-red-500 text-xl font-bold mb-2 hover:text-red-600 transition-colors">{item.name}</h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <p className="font-bold text-2xl text-green-600">{item.price}Rs</p>
            <span className="text-sm text-gray-500 line-through">₹{item.price + 50}Rs</span>
          </div>
          <div className="card-actions w-full">
        
            <button onClick={handleOrderClick} className="btn w-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white font-semibold px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg transform hover:-translate-y-1">
              Order Now
            </button>
          </div>
        </div>
      </div>
    );
  }
  