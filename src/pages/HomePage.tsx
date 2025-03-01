import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Users, Globe2, Heart, Calendar } from 'lucide-react';
import MainLayout from '../layouts/MainLayout';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      icon: <Globe2 className="w-12 h-12 text-waladom-green" />,
      title: 'Global Community',
      description: 'Connect with Sudanese people worldwide through our platform.'
    },
    {
      icon: <Heart className="w-12 h-12 text-waladom-green" />,
      title: 'Support Network',
      description: 'Access resources and support from community members.'
    },
    {
      icon: <Calendar className="w-12 h-12 text-waladom-green" />,
      title: 'Cultural Events',
      description: 'Participate in events celebrating Sudanese culture.'
    }
  ];

  const handleJoinCommunity = () => {
    navigate('/login');
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-waladom-green">Waladom</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('home.subtitle', 'Connecting Sudanese Communities Worldwide')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleJoinCommunity}
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-full shadow-lg text-white bg-waladom-green hover:bg-waladom-green-dark transition-all duration-200"
            >
              <Users className="w-5 h-5 mr-2" />
              {t('home.joinButton', 'Join Our Community')}
            </button>
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-full shadow-lg text-waladom-green bg-white hover:bg-gray-50 border-2 border-waladom-green transition-all duration-200"
            >
              {t('home.learnMore', 'Learn More')}
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('home.featuresTitle', 'Why Join Waladom?')}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-waladom-green py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            {t('home.ctaTitle', 'Ready to Join Our Community?')}
          </h2>
          <button
            onClick={handleJoinCommunity}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full shadow-lg text-waladom-green bg-white hover:bg-gray-50 transition-all duration-200"
          >
            {t('home.getStarted', 'Get Started')}
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;