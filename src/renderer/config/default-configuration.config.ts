export const defaultConfiguration: {[key in DefaultConfigKey]: any} = {
    "theme": "os",
    "language": window.navigator.language.length <= 2 ? `${window.navigator.language}-${window.navigator.language.toLocaleUpperCase()}` : window.navigator.language,
    "supported_languages": ["en-US", "en-EN", "fr-FR"],
    "default_mods": ["laConfrerieDesTraducteurs","NexusModsManager"]
}

export type DefaultConfigKey = "theme" | "language" | "supported_languages" | "default_mods";

export type ThemeConfig = "dark" | "light" | "os"