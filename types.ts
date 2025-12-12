export enum SlideType {
  TITLE = 'TITLE',
  CONTENT = 'CONTENT',
  SECTION = 'SECTION',
  CASE_STUDY = 'CASE_STUDY',
}

export interface SlideData {
  id: string;
  type: SlideType;
  title: string;
  subtitle?: string; // Used for secondary text or on-screen text
  sectionTitle?: string;
  bullets?: string[]; // Used for additional text lines if needed
  speakerNotes: string;
}
