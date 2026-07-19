import { Github, Mail, Send } from 'lucide-react';
import type { FC } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  avatar: string;
  description: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ name, title, avatar, description }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-xl overflow-hidden mb-4 ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-800">
          <img 
            src={avatar} 
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
        <p className="text-purple-400 text-sm font-medium mb-3">{title}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">{description}</p>
        
        <div className="flex space-x-4">
          <a href="https://github.com/duyweb/web" target="_blank" rel="noreferrer" aria-label="GitHub repository" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/anh-duy-38aa42422/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/anh.linh.263037" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};
