import React from 'react'
import Image from '../atomic/Image'

const About = () => {
    return (
        <section className="bg-white py-24 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Our Mission is to Empower Readers
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        We believe that knowledge should be accessible to all. Our platform helps readers connect with books, ideas, and communities that matter.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Whether you're a student, professional, or lifelong learner, our resources are here to support your journey. Join us and start exploring today.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition cursor-pointer">
                        Get Started
                    </button>
                </div>
                <div>
                    <img
                        src="https://www.neh.gov/sites/default/files/styles/medium/public/2018-06/openbooks.jpg?itok=kUdGYpx_"
                        alt="Library illustration"
                        className="rounded-lg shadow-lg max-w-128 object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default About