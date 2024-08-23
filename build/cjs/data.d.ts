export declare const novelty: string[];
export declare const veryLowQuality: string[];
export type TGender = "female" | "male" | "nonbinary";
export type TQuality = "veryLow" | "low" | "normal" | "high" | "veryHigh";
export interface IRecommended {
    label: string;
    name: string;
    altNames?: string[];
    language: string;
    gender?: TGender | undefined;
    age?: string | undefined;
    quality: TQuality[];
    recommendedPitch?: number | undefined;
    recommendedRate?: number | undefined;
    localizedName: string;
}
export declare const recommended: Array<IRecommended>;
export declare const quality: {
    ca: {
        normal: string;
        high: string;
    };
    cs: {
        normal: string;
        high: string;
    };
    da: {
        normal: string;
        high: string;
    };
    de: {
        normal: string;
        high: string;
    };
    en: {
        normal: string;
        high: string;
    };
    es: {
        normal: string;
        high: string;
    };
    fi: {
        normal: string;
        high: string;
    };
    fr: {
        normal: string;
        high: string;
    };
    hu: {
        normal: string;
        high: string;
    };
    hr: {
        normal: string;
        high: string;
    };
    it: {
        normal: string;
        high: string;
    };
    ja: {
        normal: string;
        high: string;
    };
    nb: {
        normal: string;
        high: string;
    };
    nl: {
        normal: string;
        high: string;
    };
    pl: {
        normal: string;
        high: string;
    };
    pt: {
        normal: string;
        high: string;
    };
    ro: {
        normal: string;
        high: string;
    };
    sk: {
        normal: string;
        high: string;
    };
    sl: {
        normal: string;
        high: string;
    };
    sv: {
        normal: string;
        high: string;
    };
    tr: {
        normal: string;
        high: string;
    };
};
export declare const defaultRegion: {
    ca: string;
    "cs-CZ": string;
    da: string;
    de: string;
    en: string;
    es: string;
    eu: string;
    fi: string;
    fr: string;
    gl: string;
    "hr-HR": string;
    "hu-HU": string;
    it: string;
    "ja-JP": string;
    nb: string;
    nl: string;
    "pl-PL": string;
    pt: string;
    "ro-RO": string;
    "sk-SK": string;
    "sl-SI": string;
    sv: string;
    "tr-TR": string;
};