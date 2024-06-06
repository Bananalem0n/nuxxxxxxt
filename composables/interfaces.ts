// homeInterfaces.ts
import { ButtonVariant } from "./button-variant";

// Global

export interface NavLinks {
    id?: string | any;
    text: string;
    links: string;
}

export interface Navbar {
    title: string;
    image: {
        data: Image
    }
}

export interface Button {
    text: string;
    links: string;
    variant: keyof typeof ButtonVariant;
}

export interface Image {
    attributes: {
        alternativeText: string;
        url: string | any;
    }
}


// Home

export interface Hero {
    hello: string;
    name: string;
    description: string;
    image: {
        data: Image
    };
    button: Button[];
}

export interface Section {
    title: string;
    details: string;
    iconGroup: {
        title: string;
        image: {
            data: Image[]
        }
    }
}

// projects

export interface ProjectOverview {
    id: number,
    attributes: {
        title: string | undefined;
        slug: string | undefined;
        cover: {
            text: string | undefined;
            image: {
                data: Image
            };
            project_category: ProjectCategory
        };
    }
}

export interface ProjectCategory {
    data: {
        attributes: {
            category: string;
        }
    }
}

export interface Author {
    name: string
    email?: string
    gender: string
    image?: {
        data: Image;
    }
    description?: string
}