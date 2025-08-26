import React, { useState,useEffect,useRef } from 'react';
import { Grid, List, Search, Share, MoreHorizontal, Menu, Heart, Star, Clock, Gift } from 'lucide-react';
import {useWishListStore,displayItems} from "../store/wishlistStore.js"
import { addToCart ,useCartStore} from '../store/cartStore.js';



export default () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef([]);
  

const products = useWishListStore((state) => state.wishList);
const cart = useCartStore((state) => state.cart);

  useEffect(() => {
      displayItems()
      console.log(products)
  },[])


const triggerTool = () => {

    // products.forEach(element => {
    //     if(element.id===ref.current.key){
    //   <Tooltip
    //      id={element.id}
    //      content="item added to cart"
    //      events={['click']}
    //   />
    //     }
    // });

    alert("item added to cart")
       
}


const handleChange = (product) => {
  let obj ={
      title:product.title,
      image:product.image,
      price:product.price,
      rating:product.rating.rate
  }
    addToCart(obj)

}
  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Your Lists</h2>
        </div>
        
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            <a href="#" className="bg-blue-50 text-blue-700 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
              <Heart className="text-blue-500 mr-3 h-5 w-5" />
              Your Wish List
            </a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
              <Star className="text-gray-400 mr-3 h-5 w-5" />
              Favorites
            </a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
              <Clock className="text-gray-400 mr-3 h-5 w-5" />
              Recently Viewed
            </a>
            <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
              <Gift className="text-gray-400 mr-3 h-5 w-5" />
              Gift Ideas
            </a>
          </div>
          
          <div className="mt-8">
            <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Shared Lists
            </h3>
            <div className="mt-2 space-y-1">
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                Family Wishlist
              </a>
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                Holiday List
              </a>
            </div>
          </div>
        </nav>
      </div>


      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}


      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">

        <div className="bg-white border-b border-gray-200 px-6 py-6">
          <div className="flex justify-between items-start">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 mr-4"
              >
                <Menu size={20} />
              </button>
              <div>
                <h1 className="text-3xl font-semibold text-gray-900 mb-1">Your Wish List</h1>
                <p className="text-sm text-gray-500">Public</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                <Share size={16} />
                Send list to others
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        </div>


        <div className="px-6 py-4 bg-white border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded border ${
                  viewMode === 'grid'
                    ? 'bg-gray-100 border-gray-300'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded border ${
                  viewMode === 'list'
                    ? 'bg-gray-100 border-gray-300'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <List size={18} />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search this list"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-80 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50 font-medium">
                Filter & Sort
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>


        <div className="p-6 flex-1 bg-gray-50 overflow-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.key}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-100"
              >
                <div className={viewMode === 'list' ? 'flex-shrink-0 mr-4' : ''}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`rounded-lg object-contain ${
                      viewMode === 'list' ? 'w-20 h-20' : 'w-full h-48 mb-4'
                    }`}
                  />
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 text-base mb-3 leading-5 line-clamp-4 min-h-[80px]">
                    {product.title}
                  </h3>
                  
                  <div className="text-xl font-bold text-gray-900 mb-4">
                    {product.price}
                  </div>
                  
                  <div>
                      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-4 rounded text-sm transition-colors duration-200"
                        onClick={() => handleChange(product)}
                      >
                        Add to Cart
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <p className="text-gray-500">No products found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};