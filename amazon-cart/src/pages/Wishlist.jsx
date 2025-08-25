import  { useState } from 'react';
import { Grid, List, Search, Filter, Share, MoreHorizontal } from 'lucide-react';
import { useWishListStore ,displayItems } from '../store/wishlistStore';
const WishlistApp = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const products = useWishListStore((state) => state.wishList)

  // filter by search
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-white border-r border-gray-200 p-6 flex-shrink-0">
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Your Wish List</h2>
        <p className="text-sm text-gray-500">Default List</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 w-full">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">Your Wish List</h1>
              <p className="text-sm text-gray-500 mt-1">Public</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm">
                <Share size={16} />
                Send list to others
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="px-6 py-4 bg-white border-b border-gray-200 w-full">
          <div className="flex justify-between items-center">
            {/* Grid/List Toggle */}
            <div className="flex items-center gap-3">
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

            {/* Search + Filter */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search this list"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full w-64 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded text-sm hover:bg-gray-50">
                <Filter size={16} />
                Filter & Sort
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="p-6 flex-1">
          <div
            className={`${
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full'
                : 'space-y-4'
            }`}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
                  viewMode === 'list' ? 'flex items-center p-4' : 'p-6'
                }`}
              >
                {/* Product Image */}
                <div className={viewMode === 'list' ? 'flex-shrink-0 mr-4' : ''}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={`rounded-lg object-cover ${
                      viewMode === 'list' ? 'w-20 h-20' : 'w-full h-48 mb-4'
                    }`}
                  />
                </div>

                {/* Product Info */}
                <div className={viewMode === 'list' ? 'flex-grow' : ''}>
                  <h3
                    className={`font-medium text-gray-900 line-clamp-3 ${
                      viewMode === 'list' ? 'text-sm mb-2' : 'text-base mb-3'
                    }`}
                  >
                    {product.title}
                  </h3>

                  <div
                    className={`text-lg font-bold text-gray-900 ${
                      viewMode === 'list' ? 'mb-2' : 'mb-4'
                    }`}
                  >
                    {product.price}
                  </div>

                  {product.hasAction && (
                    <div className={viewMode === 'list' ? 'flex gap-2' : ''}>
                      {product.actionType === 'checkout' ? (
                        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded text-sm transition-colors duration-200">
                          Proceed to Checkout
                        </button>
                      ) : (
                        <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded text-sm transition-colors duration-200">
                          Add to Cart
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* No results */}
            {filteredProducts.length === 0 && (
              <p className="text-gray-500 text-sm">No products match your search.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistApp;
