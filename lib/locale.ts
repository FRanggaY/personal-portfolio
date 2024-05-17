import { DataLocale } from "@/types/data_locale";

const engData = {
  navbar: {
    title: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
    },
  },
  landing: {
    title: {
      position: "Software & Data Engineer",
      solution: 'Solutions',
      skill: 'Skills'
    },
    description: 'I am a passionate learner in application development.',
  },
  about: {
    title: {
      hero: 'About',
      skill: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    description: '',
    now: 'Now',
  }
}

const indData = {
  navbar: {
    title: {
      home: 'Beranda',
      about: 'Tentang',
      projects: 'Proyek',
    },
  },
  landing: {
    title: {
      position: "Software & Data Engineer",
      solution: 'Solusi',
      skill: 'Kemampuan'
    },
    description: 'Memiliki minat dalam pengembangan aplikasi.',
  },
  about: {
    title: {
      hero: 'Tentang',
      skill: 'Kemampuan',
      experience: 'Pengalaman',
      education: 'Edukasi',
      contact: 'Kontak',
    },
    description: '',
    now: 'Saat ini',
  }
}

export const dataLocale: DataLocale = {
  en: engData,
  id: indData
};


export const validLocale = (locale: string) => {
  return locale === 'en' || locale === 'id' ? locale : 'en'
} 
