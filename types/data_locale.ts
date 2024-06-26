interface Navbar {
  title: {
    home: string,
    about: string,
    projects: string,
    copyright: string,
  },
}

interface Landing {
  title: {
    position: string,
    solution: string,
    skill: string,
  },
  description: string,
}

interface About {
  title: {
    hero: string,
    skill: string,
    experience: string,
    education: string,
    contact: string,
  },
  description: string,
  now: string,
}

interface Projects {
  title: {
    hero: string,
  },
  description: string,
}

interface Project {
  title: {
    stack: string,
    preview: string,
  },
  description: string,
}

export interface DataLocale {
  [key: string]: {
    navbar: Navbar,
    landing: Landing,
    about: About,
    projects: Projects,
    project: Project,
  };
}
