import React from 'react';

export interface InsertItem {
    name: string;
    location: string;
    stars: number;
    image_url: string | null;
    positives: string[];
    negatives: string[];
}

export type Items = {
    id: string;
    name: string;
    location: string;
    stars: number;
    image_url: string | null;
}[];

export interface Item {
    id: string;
    name: string;
    location: string;
    stars: number;
    image_url: string | null;
    positives: string[];
    negatives: string[];
}

export interface ItemContextProps {
    items: Items;
    setItems: (items: Items) => void;
}
