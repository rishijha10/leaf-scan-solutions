import React from 'react'
import image from './../assets/disease-hero.png'

const Login = () => {
  return (
		<>
			<div className="flex justify-center items-center h-screen">
				<div class="mr-10">
					<img src={image} />
				</div>
				<div>
					<div>
						<h1 class="font-bold text-4xl text-gray-700 mb-6">LeafScanSolutions</h1>
					</div>
					<div>
						<h2 class="text-xl mb-6">An AI tool to detect plant diseases and <br/>provide remedies</h2>
					</div>
					<div class="mb-4">
						<button class="w-full bg-gray-200 text-gray-700 hover:text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded transition-colors duration-300">
							Sign Up
						</button>
					</div>
					<div>
						<button class="w-full bg-gray-200 text-gray-700 hover:text-white hover:bg-gray-700 font-semibold py-2 px-4 rounded transition-colors duration-300">
							Login
						</button>
					</div>
				</div>
    	</div>
		</>
  )
}

export default Login