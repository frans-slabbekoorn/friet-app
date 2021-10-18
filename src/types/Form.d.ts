export interface FormData {
    id?: string;
    name: string;
    location: string;
    stars: number;
    image_url: string | null;
    positives: string[];
    negatives: string[];
}
