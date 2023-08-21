import React from 'react'

const Header = () => {
  return (
    <header class="bg-blue-500 text-white p-4 flex justify-between items-center">
    <div class="text-2xl font-bold">Your Website</div>
    <nav>
      <ul class="flex space-x-4">
        <li><a href="#" class="hover:underline">Home</a></li>
        <li><a href="#" class="hover:underline">Products</a></li>
        <li><a href="#" class="hover:underline">About</a></li>
        <li><a href="#" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
    <div class="space-x-4">
      <a href="#" class="hover:underline">Login</a>
      <a href="#" class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white rounded-md px-4 py-2 transition duration-300">Register</a>
    </div>
  </header>
  )
}

export default Header