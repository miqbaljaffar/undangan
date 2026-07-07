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
    fatherName: "Sang Ratu Hari Ini",
    motherName: "Pemilik Senyuman Terindah",
    instagram: "https://instagram.com/fahira_ainun",
    photo: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800"
  },
  weddingDate: "2026-07-17T19:00:00.000Z" // Fahira's Birthday Celebration
};

export const romanceQuote = {
  text: "“Aku mencintaimu bukan hanya karena siapa dirimu saat bersamaku, melainkan karena keindahan hidup yang kurasakan bersamamu. Setiap pertambahan usiamu adalah anugerah terindah bagiku, dan aku bersyukur kepada Tuhan atas kelahiranmu di bumi.”",
  source: "Iqbal untuk Fahira"
};

export const loveStoryEvents: LoveStoryEvent[] = [
  {
    year: "2022",
    title: "Pertemuan Pertama",
    description: "Takdir mempertemukan kami dalam sebuah kolaborasi seni di Bandung. Senyum pertamanya di sore hari yang teduh mengawali getaran indah yang terus tumbuh hingga hari ini.",
    image: "https://images.unsplash.com/photo-1517732359359-6112cfb7d953?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2024",
    title: "Ikatan Komitmen",
    description: "Setelah dua tahun merangkai tawa, berbagi impian, dan saling menguatkan dalam doa, kami memutuskan berkomitmen menyatukan cita-cita demi hubungan yang diredhai-Nya.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2025",
    title: "Lamaran Penuh Haru",
    description: "Di bawah cahaya hangat temaram keemasan, Iqbal melamar Fahira untuk bersamanya selamanya. Dengan air mata kebahagiaan dan kepastian hati, jawaban 'Ya' terucap tulus dari lubuk jiwa.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
  }
];

export const weddingEvents: EventDetail[] = [
  {
    title: "Romantic Dinner",
    date: "Jumat, 17 Juli 2026",
    time: "19:00 - 21:00 WIB",
    venue: "The Peak Resort Dining",
    address: "Jl. Sersan Bajuri No.72, Lembang, Bandung",
    mapsUrl: "https://www.google.com/maps/search/The+Peak+Resort+Dining+Bandung",
    mapsEmbedUrl: "https://www.google.com/maps?q=The+Peak+Resort+Dining+Bandung&output=embed",
    icon: "Heart"
  },
  {
    title: "Birthday Gathering",
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
    caption: "Cahaya Hari Kemenangan",
    category: "prewedding"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800",
    caption: "Anggun dalam Balutan Kesucian",
    category: "romantic"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
    caption: "Dekapan Hangat Keabadian",
    category: "romantic"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1507504038482-76210374c270?auto=format&fit=crop&q=80&w=800",
    caption: "Tanda Ikatan Janji Suci",
    category: "ceremony"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
    caption: "Tawa yang Tertaut Sempurna",
    category: "prewedding"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    caption: "Ruang Rayuan Pesta Cinta",
    category: "ceremony"
  }
];

export const digitalGifts: BankAccount[] = [
  {
    bankName: "Bank Central Asia (BCA)",
    accountNumber: "2380998112",
    accountHolder: "Fahira Ainun Nissa",
    icon: "CreditCard"
  },
  {
    bankName: "Bank Mandiri",
    accountNumber: "1420019283733",
    accountHolder: "Fahira Ainun Nissa",
    icon: "CreditCard"
  }
];
