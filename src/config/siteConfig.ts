export const siteConfig = {
  name: '北千住道場',
  description: '初めての方でも\n体力、精神力を身につけるトレーニングを体験',
  contact: {
    postalCode: '〒120-0026',
    address: '東京都足立区千住旭町42-2　北千住駅ビル 「ルミネ」9階',
  },
  hours: {
    sunday: '17:30 - 19:00',
  },
  features: [
    {
      title: '全レベル対応',
      description: '初心者から上級者まで対応したプログラム',
      icon: 'Shield',
    },
    {
      title: '熟練指導者',
      description: '有段者の資格を持つ指導者が指導',
      icon: 'Users',
    },
    {
      title: '伝統的価値観',
      description: '規律、礼節、人格形成を重視',
      icon: 'Trophy',
    },
    {
      title: '柔軟なスケジュール',
      description: 'ライフスタイルに合わせた練習時間',
      icon: 'Timer',
    },
  ],
  programs: [
    {
      title: '子供空手教室',
      image: 'https://images.unsplash.com/photo-1599474924997-7b9da1b478e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: '武道を通じて自信と規律を育てます',
    },
/*     {
      title: 'XXXプログラム',
      image: 'image',
      description: '',
    },
*/
  ],
  instructors: [
    {
      name: '垣屋',
      role: '副師範',
      image: 'https://www.ync.ne.jp/kouza/images/202204-102-11291301.jpg',
    },
  ],
  stats: [
/*     
    { number: '45', label: '優勝者輩出' },
    { number: '39', label: '大会出場' },
    { number: '56', label: '生徒数' },
    { number: '08', label: 'メダル獲得' }, 
*/
  ],
  //最新記事
  articles: [
/*     {
      title: '昇級・昇段試験の学習ガイド',
      image: 'https://images.unsplash.com/photo-1599474924480-c9d5c14c8e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: '次の試験に向けた準備方法を学ぶ',
    },
    {
      title: '武道初心者のためのアドバイス',
      image: 'https://images.unsplash.com/photo-1599474924508-0d7a50d59a3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: '武道の正しい始め方を解説',
    },
*/  
  ],
  navigation: [
    { label: 'プログラム', href: '#' },
    { label: 'スケジュール', href: '#' },
    { label: '道場案内', href: '#' },
    { label: 'お問い合わせ', href: '#' },
  ],
} as const;