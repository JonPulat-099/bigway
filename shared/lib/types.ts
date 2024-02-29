export type TContacts = {
    title: string;
    type: number
};

export type Tmenu = {
    id: number;
    ordering: number;
    slug: string;
    translation: {
        title: string;
        lang_id: number;
        menu_id: number;
    };
}

export type TSocial_media = {
    title: string;
    url: string;
}

export type TProduct = {
    id: number,
    product_id: number,
    lang_id: number,
    title: string,
    photo: string,
    description: string,
    created_at: string,
    updated_at: string,
    slug: string
    laravel_through_key: number
}

export type TSeoData = {
    title: string;
    description: string;
    photo: string;
}