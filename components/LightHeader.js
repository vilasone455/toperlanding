import React from 'react'

export default function LightHeader() {
    return (
        <div className="border-b border-gray-200">
        <div className="container mx-auto px-8">
                    <header
              className="flex flex-col sm:flex-row items-center justify-between py-2 relative border-top-4 border-blue-500">
             <h3 className="text-xl font-bold uppercase text-blue-900">Logo</h3>
              <nav className="hidden md:flex text-base">
                  <a href="#" className="text-gray-800 hover:text-purple-300 py-3 px-4">Home</a>
                  <a href="./Features" className="text-gray-800 hover:text-purple-300 py-3 px-6">Features</a>
                  <a href="./pricing" className="text-gray-800 hover:text-purple-300 py-3 px-6">Pricing</a>
                  <a href="./blog" className="text-gray-800 hover:text-purple-300 py-3 px-6">What new</a>
                  <a href="#" className="text-gray-800 hover:text-purple-300 py-3 px-6">FAQ</a>
                  <a href="#" className="bg-purple-200 hover:bg-purple-300 rounded-full uppercase text-purple-700 py-3 px-6">Sign Up</a>
              </nav>
              <button className="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5">
                  <span className="w-5 h-px mb-1 bg-orange-500"></span>
                  <span className="w-5 h-px mb-1 bg-orange-500"></span>
                  <span className="w-5 h-px mb-1 bg-orange-500"></span>
              </button>
            </header>
          </div>
        </div>
    )
}
