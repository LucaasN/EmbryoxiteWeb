import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Play, 
  CheckCircle, 
  Star,
  ArrowRight,
  Microscope,
  Brain,
  Shield,
  Zap,
  Users,
  Award,
  TrendingUp,
  Activity,
  Target,
  BarChart3,
  Clock,
  Heart,
  Lightbulb
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Advanced Image Analysis",
      description: "State-of-the-art computer vision algorithms analyze embryo morphology with unprecedented precision."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Predictions",
      description: "Machine learning models trained on thousands of successful IVF cycles predict implantation success."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Non-Invasive Technology",
      description: "Completely safe analysis that doesn't interfere with natural embryo development processes."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Results",
      description: "Get instant analysis results to make time-critical decisions during your IVF cycle."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Reproductive Endocrinologist",
      content: "Embryoxite has revolutionized how we select embryos. Our success rates have improved by 23% since implementation.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "IVF Patient",
      content: "After three failed cycles, Embryoxite helped us identify the right embryo. We're now proud parents of twins!",
      rating: 5
    },
    {
      name: "Dr. Michael Thompson",
      role: "Fertility Clinic Director",
      content: "The precision and reliability of Embryoxite's AI analysis has made it an indispensable tool in our clinic.",
      rating: 5
    }
  ];

  const stats = [
    { number: "94.8%", label: "Prediction Accuracy" },
    { number: "50,000+", label: "Embryos Analyzed" },
    { number: "200+", label: "Partner Clinics" },
    { number: "15,000+", label: "Successful Pregnancies" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#00B8C4] via-[#FF6B5A] to-[#FF8A65] overflow-hidden">
        {/* Spline 3D Background Animation */}
        <div className="absolute inset-0 z-0">
          <Spline 
            scene="https://prod.spline.design/IZm43Bq6sFw2ragx/scene.splinecode"
            className="w-full h-full opacity-40"
          />
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF8A65] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-[#FF6B5A] rounded-full mix-blend-multiply filter blur-xl opacity-35 animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#00B8C4] rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#FF8A65] rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#00B8C4] rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-bounce-slow"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            {/* Left Column - Text Content */}
            <div className="text-white max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
                <Lightbulb className="w-4 h-4 mr-2 text-[#F37B55]" />
                Revolutionary AI Technology
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Data-Driven
                <span className="block bg-gradient-to-r from-[#F37B55] to-[#0095A0] bg-clip-text text-transparent">
                  Hope
                </span>
                for IVF
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Revolutionizing IVF success through non-invasive AI-powered embryo analysis. 
                Building hope through precision science.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group bg-gradient-to-r from-[#F37B55] to-[#E35F50] hover:from-[#E35F50] hover:to-[#F37B55] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Your Journey
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-[#F37B55] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div
          className={`transition-all duration-500 rounded-full backdrop-blur-md border ${
          scrollY > 100
            ? 'bg-white/95 border-[#0095A0]/20 shadow-lg'
            : 'bg-white/10 border-white/20'
        }`}
        >
          <div className="flex items-center justify-between px-6 py-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 ml-4">
              <img 
                src="/brand Logo Embryoxite 1-12.png" 
                alt="Embryoxite Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {['Platform', 'Science', 'Results', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${
                    scrollY > 100
                      ? 'text-gray-700 hover:text-[#0095A0]'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button className="bg-gradient-to-r from-[#F37B55] to-[#E35F50] hover:from-[#E35F50] hover:to-[#F37B55] text-white px-4 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                scrollY > 100 ? 'text-gray-900' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200/20 px-6 py-4 space-y-4">
              {['Platform', 'Science', 'Results', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`block font-medium ${
                    scrollY > 100 ? 'text-gray-700' : 'text-white/90'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-[#F37B55] to-[#E35F50] text-white px-6 py-2 rounded-full font-medium">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Features Section */}
      <section id="platform" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Precision Meets Compassion
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with deep understanding 
              of the IVF journey to maximize your chances of success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-[#0095A0]/10 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-[#0095A0] mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#0095A0]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              See Embryoxite in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience how our platform transforms embryo selection with intuitive interfaces and powerful AI insights.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#0095A0] to-[#E35F50] px-8 py-6">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-white font-medium">Embryoxite Platform</div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Sample Screenshots */}
                <div className="space-y-4">
                  <img 
                    src="/screen1.jpg" 
                    alt="Embryo Analysis Interface" 
                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900">Analysis Interface</h3>
                    <p className="text-sm text-gray-600">Real-time embryo evaluation</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <img 
                    src="/screen2.jpg" 
                    alt="AI Predictions Dashboard" 
                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900">AI Predictions</h3>
                    <p className="text-sm text-gray-600">Success probability scoring</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <img 
                    src="/screen4.jpg" 
                    alt="Results Tracking" 
                    className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  />
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900">Results Tracking</h3>
                    <p className="text-sm text-gray-600">Comprehensive reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="results" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Leading Fertility Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the doctors and patients who have experienced the transformative power of Embryoxite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0095A0]/10 to-[#F37B55]/10 p-8 rounded-2xl border border-[#0095A0]/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F37B55] fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0095A0] via-[#E35F50] to-[#F37B55] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#0095A0]/20 to-[#F37B55]/20"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IVF Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of couples and fertility clinics who have already discovered 
            the power of AI-driven embryo selection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-[#F37B55] to-[#E35F50] hover:from-[#E35F50] hover:to-[#F37B55] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Schedule a Demo
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 border-2 border-white/30 hover:border-white/50 text-white rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10">
              Learn More
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/brand Logo Embryoxite 1-12.png" 
                  alt="Embryoxite Logo" 
                  className="w-10 h-10 object-contain"
                />
                <span className="font-bold text-2xl">Embryoxite</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Revolutionizing IVF success through non-invasive AI-powered embryo analysis. 
                Building hope through precision science.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Platform</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Embryoxite. All rights reserved. | Transforming lives through AI innovation.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-15px) translateX(10px); }
          66% { transform: translateY(-25px) translateX(-5px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 7s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default App;