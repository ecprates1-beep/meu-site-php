export type PortfolioCase = {
  id: string
  name: string
  role: string
  year: string
  bgColor: string
  image: string
  imagePlaceholder: string
}

export const cases: PortfolioCase[] = [
  {
    id: 'marina-silva',
    name: 'Marina Silva',
    role: 'Senadora',
    year: '2026',
    bgColor: '#004433',
    image: '/images/cases/marina.jpg',
    imagePlaceholder: 'MS',
  },
  {
    id: 'nabil-bonduki',
    name: 'Nabil Bonduki',
    role: 'Vereador',
    year: '2022',
    bgColor: '#961C49',
    image: '/images/cases/nabil.jpg',
    imagePlaceholder: 'NB',
  },
  {
    id: 'luna-zarattini',
    name: 'Luna Zarattini',
    role: 'Federal',
    year: '2026',
    bgColor: '#963E01',
    image: '/images/cases/luna.jpg',
    imagePlaceholder: 'LZ',
  },
  {
    id: 'eduardo-zanatta',
    name: 'Eduardo Zanatta',
    role: 'Federal',
    year: '2026',
    bgColor: '#003C86',
    image: '/images/cases/zanatta.jpg',
    imagePlaceholder: 'EZ',
  },
  {
    id: 'paulo-teixeira',
    name: 'Paulo Teixeira',
    role: 'Federal',
    year: '2026',
    bgColor: '#907A00',
    image: '/images/cases/paulo.jpg',
    imagePlaceholder: 'PT',
  },
  {
    id: 'ze-dirceu',
    name: 'Zé Dirceu',
    role: 'Federal',
    year: '2026',
    bgColor: '#A1142D',
    image: '/images/cases/ze.jpg',
    imagePlaceholder: 'ZD',
  },
  {
    id: 'simao-pedro',
    name: 'Simão Pedro',
    role: 'Estadual',
    year: '2026',
    bgColor: '#008A40',
    image: '/images/cases/simao.jpg',
    imagePlaceholder: 'SP',
  },
  {
    id: 'dilma-rousseff',
    name: 'Dilma Rousseff',
    role: 'Presidência',
    year: '2014',
    bgColor: '#A1143C',
    image: '/images/cases/dilma.jpg',
    imagePlaceholder: 'DR',
  },
  {
    id: 'fernando-haddad',
    name: 'Fernando Haddad',
    role: 'Presidência',
    year: '2018',
    bgColor: '#002C8D',
    image: '/images/cases/haddad.jpg',
    imagePlaceholder: 'FH',
  },
  {
    id: 'sonia-guajajara',
    name: 'Sonia Guajajara',
    role: 'Federal',
    year: '2026',
    bgColor: '#00493C',
    image: '/images/cases/guajajara.jpg',
    imagePlaceholder: 'SG',
  },
]
