import { BookOpen, Code2, Database, ExternalLink, GraduationCap, Network, Shield, Smartphone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { FC } from 'react';

interface Project {
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  link: string;
  color: string;
}

const featuredProjects: Project[] = [
  {
    title: 'Web Development Lab 1',
    description: 'A foundation project covering core web-development concepts.',
    category: 'Web Development',
    icon: Network,
    link: 'https://laba-71p8.onrender.com',
    color: 'text-blue-400 bg-blue-400/10',
  },
  {
    title: 'Web Development Lab 2',
    description: 'A follow-up project focused on web-development fundamentals.',
    category: 'Web Development',
    icon: Database,
    link: 'https://lab-2-a0dj.onrender.com/',
    color: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    title: 'CertLedger',
    description: 'A Flask application for issuing, verifying, looking up, and revoking digital diplomas with a local blockchain ledger.',
    category: 'Blockchain',
    icon: Shield,
    link: 'https://github.com/DuyShiba/xay-dung-he-thong-xac-thuc-van-bang-so-dua-tren-blockchain',
    color: 'text-violet-400 bg-violet-400/10',
  },
  {
    title: 'Encrypted Traffic App Classifier',
    description: 'A Random Forest pipeline that classifies applications from encrypted TLS/HTTPS traffic without decrypting payloads.',
    category: 'Cybersecurity · Machine Learning',
    icon: Network,
    link: 'https://github.com/DuyShiba/Encrypted-Traffic-App-Classifier',
    color: 'text-rose-400 bg-rose-400/10',
  },
];

const upcomingAreas = [
  { name: 'Android projects', icon: Smartphone },
  { name: 'Coursework projects', icon: GraduationCap },
];

export const Projects: FC = () => (
  <section className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
    <div className="flex flex-col gap-2 mb-6 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-2xl font-semibold text-white flex items-center">
          <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
          Selected Projects
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          A selection of web, Android, and coursework projects.
        </p>
      </div>
      <span className="w-fit px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 text-xs font-medium">
        {featuredProjects.length} featured
      </span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {featuredProjects.map((project) => (
        <a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="group relative block bg-gray-700/50 rounded-lg p-5 border border-gray-600 hover:border-gray-500 hover:bg-gray-700/70 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start gap-4">
            <div className={`p-3 rounded-lg ${project.color} group-hover:scale-110 transition-transform duration-200`}>
              <project.icon className="w-6 h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h4>
                <ExternalLink className="w-4 h-4 shrink-0 text-gray-500 group-hover:text-gray-300" />
              </div>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{project.description}</p>
              <span className="inline-flex items-center mt-4 text-xs text-gray-500">
                <Code2 className="w-3.5 h-3.5 mr-1.5" />
                {project.category}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>

    <div className="mt-6 pt-5 border-t border-gray-700 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-gray-400">More work will be added as it is published.</p>
      <div className="flex flex-wrap gap-2">
        {upcomingAreas.map((area) => (
          <span key={area.name} className="inline-flex items-center px-3 py-1.5 bg-gray-700 rounded-full text-xs text-gray-300">
            <area.icon className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
            {area.name}
          </span>
        ))}
      </div>
    </div>
  </section>
);
