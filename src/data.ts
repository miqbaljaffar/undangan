import { CoupleInfo, LoveStoryEvent, EventDetail, GalleryItem, BankAccount } from './types';

export const coupleInfo: CoupleInfo = {
  groom: {
    fullName: "Raga Samudra, S.T.",
    nickName: "Raga",
    fatherName: "Bpk. Laksmana Samudra",
    motherName: "Ibu Kencana Kirana",
    instagram: "https://instagram.com/raga_samudra",
    photo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  },
  bride: {
    fullName: "Nirmala Citra, S.I.Kom.",
    nickName: "Citra",
    fatherName: "Bpk. Handoko Wirawan",
    motherName: "Ibu Arum Sekarwangi",
    instagram: "https://instagram.com/nirmala_citra",
    photo: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&q=80&w=800"
  },
  weddingDate: "2026-10-10T09:00:00.000Z" // October 10, 2026
};

export const romanceQuote = {
  text: "“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.”",
  source: "QS. Ar-Rum: 21"
};

export const loveStoryEvents: LoveStoryEvent[] = [
  {
    year: "2022",
    title: "Pertemuan Pertama",
    description: "Takdir mempertemukan kami dalam sebuah kolaborasi seni di Jakarta. Senyum pertamanya di sore hari yang teduh mengawali getaran indah yang terus tumbuh hingga hari ini.",
    image: "https://images.unsplash.com/photo-1517732359359-6112cfb7d953?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2024",
    title: "Ikatan Rasa",
    description: "Setelah dua tahun merangkai tawa, berbagi impian, dan saling menguatkan dalam doa, kami memutuskan untuk berkomitmen melangkah ke jenjang yang lebih serius demi menyatukan cita-cita.",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=800"
  },
  {
    year: "2025",
    title: "Sebuah Lamaran",
    description: "Di bawah cahaya hangat temaram keemasan, raga melamar Citra untuk bersamanya selamanya. Dengan air mata kebahagiaan dan kepastian hati, jawaban 'Ya' terucap tulus dari lubuk jiwa.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
  }
];

export const weddingEvents: EventDetail[] = [
  {
    title: "Akad Nikah",
    date: "Sabtu, 10 Oktober 2026",
    time: "08:00 - 10:00 WIB",
    venue: "Bimasena Lobby, The Dharmawangsa Jakarta",
    address: "Jl. Brawijaya Raya No. 26, Kebayoran Baru, Jakarta Selatan",
    mapsUrl: "https://maps.app.goo.gl/uXv7d6p9C7J2c4N39",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.195007323719!2d106.804899575389!3d-6.241198593747196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f143ae3f892b%3A0xe7a505bdfd80760a!2sThe%20Dharmawangsa%20Jakarta!5e0!3m2!1sen!2sid!4v1716422400000!5m2!1sen!2sid",
    icon: "Heart"
  },
  {
    title: "Resepsi Pernikahan",
    date: "Sabtu, 10 Oktober 2026",
    time: "11:00 - 14:00 WIB",
    venue: "The Grand Ballroom, The Dharmawangsa Jakarta",
    address: "Jl. Brawijaya Raya No. 26, Kebayoran Baru, Jakarta Selatan",
    mapsUrl: "https://maps.app.goo.gl/uXv7d6p9C7J2c4N39",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.195007323719!2d106.804899575389!3d-6.241198593747196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f143ae3f892b%3A0xe7a505bdfd80760a!2sThe%20Dharmawangsa%20Jakarta!5e0!3m2!1sen!2sid!4v1716422400000!5m2!1sen!2sid",
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
    accountHolder: "Nirmala Citra",
    icon: "CreditCard"
  },
  {
    bankName: "Bank Mandiri",
    accountNumber: "1420019283733",
    accountHolder: "Raga Samudra",
    icon: "CreditCard"
  }
];
