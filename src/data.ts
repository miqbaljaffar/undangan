import { CoupleInfo, LoveStoryEvent, EventDetail, GalleryItem, BankAccount } from './types';

// Set birthday date to 10 days in the future from July 7, 2026 -> July 17, 2026
export const coupleInfo: CoupleInfo = {
  groom: {
    fullName: "Mohammad Iqbal Jaffar",
    nickName: "Iqbal",
    fatherName: "Kekasih Hati Fahira",
    motherName: "Pemberi Kejutan Spesial",
    instagram: "https://instagram.com/mohammad_iqbal",
    photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  bride: {
    fullName: "Fahira Ainun Nissa",
    nickName: "Fahira",
    fatherName: "Ratu Hari Ini",
    motherName: "Pemilik Senyuman Terindah",
    instagram: "https://instagram.com/fahira_ainun",
    photo: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800"
  },
  weddingDate: "2026-07-17T19:00:00.000Z" // Fahira's Birthday Celebration Date
};

export const romanceQuote = {
  text: "“Aku bersyukur banget kamu lahir ke dunia ini. Selamat ulang tahun ya, Fahira. Makasih udah selalu jadi bagian paling indah dan menyenangkan di hidupku.”",
  source: "Iqbal"
};

export const loveStoryEvents: LoveStoryEvent[] = [
  {
    year: "2022",
    title: "Pertama Kali Ketemu",
    description: "Nggak sengaja ketemu pas ada kolaborasi seni di Bandung. Awalnya cuma kenalan biasa, tapi sore itu senyuman pertama kamu langsung bikin aku sadar kalau kamu itu beda.",
    image: "https://images.unsplash.com/photo-1517732359359-6112cfb7d953?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2024",
    title: "Mulai Jalan Bareng",
    description: "Setelah dua tahun sering cerita, berbagi mimpi, dan saling support, kita akhirnya mutusin buat komitmen jalanin hubungan ini dengan lebih serius.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2025",
    title: "Janji Bersama",
    description: "Hari paling berharga pas aku beraniin diri buat minta kamu nemenin sisa hidup aku selamanya. Dan pas kamu bilang 'Ya', rasanya jadi cowok paling beruntung.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
  }
];

export const weddingEvents: EventDetail[] = [
  {
    title: "Dinner Romantis",
    date: "Jumat, 17 Juli 2026",
    time: "19:00 - 21:00 WIB",
    venue: "The Peak Resort Dining",
    address: "Jl. Sersan Bajuri No.72, Lembang, Bandung",
    mapsUrl: "https://www.google.com/maps/search/The+Peak+Resort+Dining+Bandung",
    mapsEmbedUrl: "https://www.google.com/maps?q=The+Peak+Resort+Dining+Bandung&output=embed",
    icon: "Heart"
  },
  {
    title: "Piknik Santai",
    date: "Sabtu, 18 Juli 2026",
    time: "15:00 - 18:00 WIB",
    venue: "Orchid Forest Cikole",
    address: "Cikole, Lembang, Kabupaten Bandung Barat, Jawa Barat",
    mapsUrl: "https://www.google.com/maps/search/Orchid+Forest+Cikole",
    mapsEmbedUrl: "https://www.google.com/maps?q=Orchid+Forest+Cikole&output=embed",
    icon: "Sparkles"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=800",
    caption: "Waktu jalan-jalan sore di Bandung",
    category: "kita"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800",
    caption: "Senyuman manis favorit aku",
    category: "kamu"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    caption: "Nemenin kamu belanja",
    category: "kita"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1507504038482-76210374c270?auto=format&fit=crop&q=80&w=800",
    caption: "Pas kamu lagi foto estetik",
    category: "kamu"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    caption: "Ketawa lepas bareng kamu",
    category: "kita"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    caption: "Momen liburan singkat kita",
    category: "memori"
  }
];

export const digitalGifts: BankAccount[] = [
  {
    bankName: "GoPay / ShopeePay",
    accountNumber: "08123456789",
    accountHolder: "Fahira Ainun Nissa",
    icon: "CreditCard"
  },
  {
    bankName: "Rekening BCA",
    accountNumber: "2380998112",
    accountHolder: "Fahira Ainun Nissa",
    icon: "CreditCard"
  }
];
