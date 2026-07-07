export interface LoveStoryEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}

export interface EventDetail {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  icon: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  caption: string;
  category: 'kita' | 'kamu' | 'memori';
}

export interface CoupleInfo {
  groom: {
    fullName: string;
    nickName: string;
    fatherName: string;
    motherName: string;
    instagram: string;
    photo: string;
  };
  bride: {
    fullName: string;
    nickName: string;
    fatherName: string;
    motherName: string;
    instagram: string;
    photo: string;
  };
  weddingDate: string; // ISO format
}

export interface RSVP {
  id: string;
  name: string;
  guests: number;
  status: 'hadir' | 'tidak_hadir';
  wish: string;
  createdAt: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrCode?: string;
  icon: string;
}
