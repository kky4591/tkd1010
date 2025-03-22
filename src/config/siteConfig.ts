export const siteConfig = {
  name: '伝統武道道場',
  description: '規律、強さ、集中力を身につける本格的な武道トレーニングを体験してください',
  contact: {
    postalCode: '〒100-0001',
    address: '東京都千代田区1-1-1',
    phone: '03-1234-5678',
  },
  hours: {
    weekday: '6:00 - 21:00',
    saturday: '8:00 - 18:00',
    sunday: '9:00 - 16:00',
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
    {
      title: '護身術プログラム',
      image: 'https://images.unsplash.com/photo-1599474924450-3031914c4152?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: '実践的な護身術を学びます',
    },
    {
      title: '伝統武道クラス',
      image: 'https://images.unsplash.com/photo-1599474924524-23b205b4ae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: '伝統的な武道技術の習得',
    },
  ],
  instructors: [
    {
      name: '山田 健一',
      role: '師範',
      image: 'https://images.unsplash.com/photo-1599474924939-721c5d8b7f76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: '鈴木 美咲',
      role: '指導員',
      image: 'https://images.unsplash.com/photo-1599474924918-7d95b5f8e9ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    },
  ],
  stats: [
    { number: '45', label: '優勝者輩出' },
    { number: '39', label: '大会出場' },
    { number: '56', label: '生徒数' },
    { number: '08', label: 'メダル獲得' },
  ],
  articles: [
    {
      title: '昇級・昇段試験の学習ガイド',
      image: 'https://images.unsplash.com/photo-1599474924480-c9d5c14c8e18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: '次の試験に向けた準備方法を学ぶ',
    },
    {
      title: '武道初心者のためのアドバイス',
      image: 'https://images.unsplash.com/photo-1599474924508-0d7a50d59a3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      excerpt: '武道の正しい始め方を解説',
    },
  ],
  navigation: [
    { label: 'プログラム', href: '#' },
    { label: 'スケジュール', href: '#' },
    { label: '道場案内', href: '#' },
    { label: 'お問い合わせ', href: '#' },
  ],
} as const;