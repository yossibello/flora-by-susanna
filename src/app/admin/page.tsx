'use client';

import Link from 'next/link';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm mb-2">Total Orders</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm mb-2">Total Customers</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm mb-2">Total Flowers</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm mb-2">Total Reviews</h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
          </div>
        </div>

        {/* Management Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Manage Flowers</h2>
            <p className="text-gray-600 mb-6">
              Add, edit, or remove flowers from your inventory
            </p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
              Manage Flowers
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">View Orders</h2>
            <p className="text-gray-600 mb-6">
              Track and manage customer orders
            </p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
              View Orders
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Database</h2>
            <p className="text-gray-600 mb-6">
              View and manage customer information
            </p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
              View Customers
            </button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Reviews</h2>
            <p className="text-gray-600 mb-6">
              Monitor customer reviews and feedback
            </p>
            <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition">
              View Reviews
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-pink-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition">
              Add New Flower
            </button>
            <button className="bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition">
              Create Order
            </button>
            <button className="bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition">
              Add Customer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
