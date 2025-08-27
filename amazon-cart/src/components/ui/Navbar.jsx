import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export default  () => {
  let navigate = useNavigate();
  return (
    <div className="bg-gray-900 text-white px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <button onClick={() =>navigate("/")} ><h1 className="text-2xl font-bol">amazon.in</h1></button>
        </div>
        
        <div className="flex items-center gap-6">
          <span className="text-sm">Hello, User</span>
          <div className="relative">
            <button onClick={() => navigate("/cart") }><ShoppingCart size={24} className='shopping-icon'/></button>
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
//add shopping cart icon in image
//also add notification count as the items in the cart increases
// user-cred will take dynamic name maybe if you add auth 