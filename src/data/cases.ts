export type PortfolioCase = {
  id: string
  name: string
  role: string
  year: string
  bgColor: string
  image: string
  imagePlaceholder: string
  href?: string
}

export const cases: PortfolioCase[] = [
  {
    id: 'marina-silva',
    name: 'Marina Silva',
    role: 'Senadora',
    year: '2026',
    bgColor: '#004433',
    image: '/images/cases/marina.png',
    imagePlaceholder: 'MS',
    href: '/marina',
  },
  {
    id: 'nabil-bonduki',
    name: 'Nabil Bonduki',
    role: 'Vereador',
    year: '2012/2024',
    bgColor: '#961C49',
    image: '/images/cases/nabil.png',
    imagePlaceholder: 'NB',
    href: '/nabil',
  },
  {
    id: 'luna-zarattini',
    name: 'Luna Zarattini',
    role: 'Federal',
    year: '2026',
    bgColor: '#963E01',
    image: '/images/cases/luna.png',
    imagePlaceholder: 'LZ',
    href: '/luna',
  },
  {
    id: 'eduardo-zanatta',
    name: 'Eduardo Zanatta',
    role: 'Federal',
    year: '2026',
    bgColor: '#003C86',
    image: '/images/cases/zanatta.png',
    imagePlaceholder: 'EZ',
    href: '/zanatta',
  },
  {
    id: 'paulo-teixeira',
    name: 'Paulo Teixeira',
    role: 'Federal',
    year: '2026',
    bgColor: '#907A00',
    image: '/images/cases/paulo.png',
    imagePlaceholder: 'PT',
    href: '/paulo',
  },
  {
    id: 'ze-dirceu',
    name: 'Zé Dirceu',
    role: 'Federal',
    year: '2026',
    bgColor: '#A1142D',
    image: '/images/cases/ze.png',
    imagePlaceholder: 'ZD',
    href: '/ze',
  },
  {
    id: 'simao-pedro',
    name: 'Simão Pedro',
    role: 'Estadual',
    year: '2026',
    bgColor: '#008A40',
    image: '/images/cases/simao.png',
    imagePlaceholder: 'SP',
  },
  {
    id: 'dilma-rousseff',
    name: 'Dilma Rousseff',
    role: 'Presidência',
    year: '2014',
    bgColor: '#A1143C',
    image: '/images/cases/dilma.png',
    imagePlaceholder: 'DR',
    href: '/dilma',
  },
  {
    id: 'fernando-haddad',
    name: 'Fernando Haddad',
    role: 'Presidência',
    year: '2018',
    bgColor: '#002C8D',
    image: '/images/cases/haddad.png',
    imagePlaceholder: 'FH',
    href: '/haddad',
  },
  {
    id: 'congresso-do-povo',
    name: 'Congresso do Povo',
    role: 'Movimento',
    year: '2026',
    bgColor: '#3E1E6E',
    image: '/images/cases/congresso.png',
    imagePlaceholder: 'CP',
    href: '/congresso',
  },
  {
    id: 'sonia-guajajara',
    name: 'Sonia Guajajara',
    role: 'Federal',
    year: '2026',
    bgColor: '#00493C',
    image: '/images/cases/guajajara.png',
    imagePlaceholder: 'SG',
    href: '/guajajara',
  },
]
