// homeInterfaces.ts

export namespace HomeInterfaces {
    export interface Button {
        text: string;
        links: string;
        variant: keyof typeof ButtonVariant;
    }

    export interface Image {
        alternativeText: string;
        url: string;
    }

    export interface Hero {
        hello: string;
        name: string;
        description: string;
        image: {
            data: {
                attributes: Image;
            };
        };
        button: Button[];
    }

    enum ButtonVariant {
        // Define your button variants here
    }
}
