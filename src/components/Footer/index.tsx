import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import FooterSection from './FooterSection';
import Logo from '../Logo';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            <Logo className="h-10 w-10" />
            <span className="text-2xl font-bold text-waladom-green">Waladom</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterSection title={t('footer.about')}>
            <p className="mt-4 text-gray-400">
              {t('footer.aboutText')}
            </p>
          </FooterSection>

          <FooterSection title={t('footer.quickLinks')}>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-waladom-green">{t('nav.home')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-waladom-green">{t('nav.about')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-waladom-green">{t('nav.events')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-waladom-green">{t('nav.contact')}</a></li>
            </ul>
          </FooterSection>

          <FooterSection title={t('footer.contact')}>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-5 h-5" />
                <span>contact@waladom.org</span>
              </li>
            </ul>
          </FooterSection>

          <FooterSection title={t('footer.social')}>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-waladom-green">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-waladom-green">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-waladom-green">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </FooterSection>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Waladom. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;