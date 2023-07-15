export interface MenuItem {
  id: number;
  label: string;
  route: string;
  subMenu?: MenuItem;
}

export const menuData = [
  {
    id: 1,
    route: 'Front End',
    label: 'Front End',
    subMenu: [
      {
        id: 1,
        route: 'angular',
        label: 'Agnular',
        subMenu: [
          {
            id: 1,
            route: 'angular/view-child',
            label: 'View Child',
          },
          {
            id: 2,
            route: 'angular/two-way-binding',
            label: 'Two way binding',
          },
          {
            id: 3,
            route: 'angular/directive',
            label: 'Directive',
          },
          {
            id: 4,
            route: 'view-child',
            label: 'pipes',
          },
          {
            id: 5,
            route: 'imp-links',
            label: 'Important links',
          },
        ],
      },
      { id: 2, route: 'react', label: 'React' },
      { id: 3, route: 'svelte', label: 'Svelte' },
      { id: 4, route: 'view', label: 'View' },
      { id: 5, route: 'next', label: 'Next' },
      { id: 6, route: 'css', label: 'Css' },
      { id: 7, route: 'html', label: 'Html' },
    ],
  },
  {
    id: 2,
    route: 'Back',
    label: 'Backend',
    subMenu: [
      { id: 1, route: 'nodejs', label: 'Node Js' },
      { id: 2, route: 'Java', label: 'Java' },
      { id: 3, route: 'Python', label: 'Python' },
      { id: 4, route: 'perl', label: 'Perl' },
    ],
  },
  {
    id: 3,
    route: 'database',
    label: 'Database',
    subMenu: [
      { id: 1, route: 'sql', label: 'SQL' },
      { id: 1, route: 'sql', label: 'MY SQL' },
      { id: 2, route: 'mssql', label: 'MS Sql' },
      { id: 3, route: 'postgresql', label: 'PostgreSQL' },
      { id: 4, route: 'mongodb', label: 'Mongo DB' },
    ],
  },
  {
    id: 4,
    route: 'devOps',
    label: 'DevOps',
    subMenu: [
      {
        id: 1,
        route: 'docker',
        label: 'Docker',
        subMenu: [
          {
            id: 1,
            route: 'create-docker-file',
            label: 'Create Docker File',
          },
          {
            id: 2,
            route: 'create-docker-file',
            label: 'Create Docker File',
          },
          {
            id: 3,
            route: 'create-docker-file',
            label: 'Create Docker File',
          },
        ],
      },
      { route: 'kubernetes', label: 'kubernetes' },
      { route: 'jenkins', label: 'Jenkins' },
      { route: 'View Child', label: 'Github Actions' },
      { route: 'View Child', label: 'Azure Pipeline' },
      { route: 'View Child', label: 'AWS DevOps' },
      { route: 'View Child', label: 'Bitbucket Pipeline' },
    ],
  },
  {
    id: 5,
    route: 'cloud',
    label: 'Cloud',
    subMenu: [
      {
        id: 1,
        route: 'gcp',
        label: 'Google Cloud Platform',
      },
      {
        id: 2,
        route: 'aws',
        label: 'AWS',
      },
      {
        id: 3,
        route: 'azure/azure',
        label: 'Azure',
      },
    ],
  },
  {
    id: 6,
    route: 'Software',
    label: 'software',
    subMenu: [
      {
        id: 1,
        route: 'solid',
        label: 'SOLID',
      },
      {
        id: 2,
        route: 'solid',
        label: 'Desgin Patterns',
        subMenu: [
          {
            id: 1,
            label: 'Creational',
            route: 'creational',
          },
          {
            id: 2,
            label: 'Behavioural',
            route: 'Behavioural',
          },
        ],
      },
    ],
  },
];
