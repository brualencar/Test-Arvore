export interface VolumeItem {
  volumeInfo: {
    id: string;
    title: string;
    authors: string[];
    categories: string[];
    imageLinks?: {
      thumbnail: string;
    };
    saleInfo?: {
      saleability: string;
      retailPrice: {
        amount: number;
      };
    };
    accessInfo: {
      epub: {
        isAvailable: boolean;
      };
      pdf: {
        isAvailable: boolean;
      };
    };
  };
}

export interface Volume {
  items: VolumeItem[];
}
