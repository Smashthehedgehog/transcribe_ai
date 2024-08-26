'use client';
// This is v30

import React, { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

const TranscribeAI: React.FC = () => {
  const [file, setFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [isSignIn, setIsSignIn] = useState(true)
  const [modalClosing, setModalClosing] = useState(false)

  const featuresRef = useRef<HTMLElement>(null)
  const howItWorksRef = useRef<HTMLElement>(null)
  const reviewsRef = useRef<HTMLElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile && selectedFile.type === 'audio/wav') {
      setFile(selectedFile);
    } else {
      alert('Please select a valid WAV file.');
      event.target.value = '';
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (file) {
      setIsProcessing(true)
      // Simulating processing time
      setTimeout(() => {
        setIsProcessing(false)
        alert('Your MIDI file is ready for download!')
      }, 3000)
    }
  }

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop - 20,
        behavior: 'smooth'
      })
    }
  }

  const handleLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsSignIn(true) // Ensure we're showing the login section
    setShowLoginModal(true)
  }

  const closeModal = () => {
    setModalClosing(true)
    setTimeout(() => {
      setShowLoginModal(false)
      setModalClosing(false)
    }, 300) // This should match the animation duration
  }

  useEffect(() => {
    // Add animation classes after component mount
    const elements = document.querySelectorAll('.animate-on-mount')
    elements.forEach((el) => {
      el.classList.add('animate-fade-in-up')
    })
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 text-white font-sans">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCA1TDUgMFpNNiA0TDQgNlpNLTEgMUw1IC01WiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1vcGFjaXR5PSIwLjIiLz4KPC9zdmc+')] opacity-30"></div>
      
      <header className="sticky top-0 z-50 bg-blue-800 bg-opacity-90 shadow-lg backdrop-filter backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-white">TranscribeAI</div>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection(featuresRef); }} className="text-sky-200 hover:text-white transition duration-300 cursor-pointer">Features</a></li>
                <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection(howItWorksRef); }} className="text-sky-200 hover:text-white transition duration-300 cursor-pointer">How It Works</a></li>
                <li><a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection(reviewsRef); }} className="text-sky-200 hover:text-white transition duration-300 cursor-pointer">Reviews</a></li>
                <li><a href="#" onClick={handleLogin} className="text-sky-200 hover:text-white transition duration-300 cursor-pointer">Login</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-6 py-12">
        <section className="text-center mb-20 animate-on-mount">
          <h1 className="text-4xl font-bold mb-6 text-white">Transform Your Audio into MIDI</h1>
          <p className="text-xl mb-10 text-sky-200">Upload your audio and let our AI turn it into a professional-grade MIDI file.</p>
          <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md">
            Get Started
          </Button>
        </section>

        <section id="features" ref={featuresRef} className="mb-20 animate-on-mount">
          <h2 className="text-3xl font-semibold mb-10 text-center text-white">Why Choose TranscribeAI?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-sky-400 rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-sky-300">Cutting-Edge AI</h3>
                <p className="text-sky-100">Our advanced AI algorithms ensure accurate transcription of your audio to MIDI.</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-sky-400 rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-sky-300">Lightning Fast</h3>
                <p className="text-sky-100">Get your MIDI files in minutes, not hours. Our system is optimized for speed.</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-sky-400 rounded-lg overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-sky-300">Professional Quality</h3>
                <p className="text-sky-100">Receive studio-grade MIDI files ready for your next production.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="how-it-works" ref={howItWorksRef} className="mb-20 animate-on-mount">
          <h2 className="text-3xl font-semibold mb-10 text-center text-white">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
            {[
              { title: "Upload Your Audio", description: "Select and upload your WAV audio file." },
              { title: "AI Processing", description: "Our AI analyzes and transcribes your audio into MIDI." },
              { title: "Download MIDI", description: "Receive your professional-grade MIDI file, ready to use." }
            ].map((step, index) => (
              <div key={index} className="flex-1 text-center">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center text-white text-xl font-semibold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-sky-300">{step.title}</h3>
                <p className="text-sky-100">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="reviews" ref={reviewsRef} className="mb-20 animate-on-mount">
          <h2 className="text-3xl font-semibold mb-10 text-center text-white">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { review: "TranscribeAI has revolutionized my workflow. The MIDI files are incredibly accurate and save me hours of work!", author: "Sarah J., Music Producer" },
              { review: "I was skeptical at first, but the results blew me away. It's like having a professional transcriber at your fingertips.", author: "Mark T., Composer" }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-sky-400 rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <p className="text-sky-100 mb-4 italic">"{testimonial.review}"</p>
                  <p className="font-semibold text-sky-300">- {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-20 animate-on-mount">
          <Card className="bg-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg border border-sky-400 rounded-lg overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-3xl font-semibold mb-6 text-center text-white">Ready to Transform Your Audio?</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    type="file" 
                    onChange={handleFileChange} 
                    accept=".wav" 
                    className="w-full bg-blue-700 bg-opacity-50 text-white placeholder-sky-300 border-sky-400 rounded-md" 
                  />
                </div>
                <div className="text-center">
                  <Button 
                    type="submit" 
                    disabled={!file || isProcessing} 
                    className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md"
                  >
                    {isProcessing ? 'Processing...' : 'Upload and Process'}
                  </Button>
                </div>
                <p className="text-sm text-sky-200 text-center">
                  Please note: Only WAV files are accepted. Processing may take a few minutes depending on the file size and complexity.
                </p>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="relative z-10 bg-blue-800 bg-opacity-50 py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-white">TranscribeAI</h3>
            <p className="text-sky-200">Transforming audio into MIDI with AI</p>
          </div>
          <ul className="flex justify-center space-x-6 mb-4">
            <li><a href="#" className="text-sky-200 hover:text-white transition duration-300">Privacy Policy</a></li>
            <li><a href="#" className="text-sky-200 hover:text-white transition duration-300">Terms of Service</a></li>
            <li><a href="#" className="text-sky-200 hover:text-white transition duration-300">Contact Us</a></li>
          </ul>
          <div className="text-sky-200 text-sm">
            © 2023 TranscribeAI. All rights reserved.
          </div>
        </div>
      </footer>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className={`bg-white text-gray-800 p-8 rounded-lg shadow-xl w-96 relative ${modalClosing ? 'modal-zoom-out' : 'modal-zoom-in'}`}>
            <h2 className="text-2xl font-bold mb-6 text-center">{isSignIn ? 'Sign In' : 'Create Account'}</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                <Input id="username" type="text" placeholder="Enter your username" className="mt-1" />
              </div>
              {!isSignIn && (
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" className="mt-1" />
                </div>
              )}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <Input id="password" type="password" placeholder="Enter your password" className="mt-1" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                {isSignIn ? 'Sign In' : 'Create Account'}
              </Button>
              <div className="text-center">
                <button 
                  onClick={() => setIsSignIn(!isSignIn)} 
                  className="text-sm text-blue-600 hover:underline"
                >
                  {isSignIn ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                </button>
              </div>
            </div>
            <button 
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </Card>
        </div>
      )}
    </div>
  )
}

export default TranscribeAI