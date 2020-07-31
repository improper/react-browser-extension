export type ExtensionIcon = {
    [pixelHeight: number]: string
};

export type Url = string;

type BackgroundAlignment = "bottom" | "center" | "left" | "right" | "top" | "center bottom" | "center center" |
    "center top" | "left bottom" | "left center" | "left top" | "right bottom" | "right center" | "right top";

type BackgroundTiling = "no-repeat" | "repeat" | "repeat-x" | "repeat-y";

export type ThemeProperties = {
    additional_backgrounds_alignment?: BackgroundAlignment | Array<BackgroundAlignment>,
    additional_backgrounds_tiling?: BackgroundTiling | Array<BackgroundTiling>,
}

export type ThemeColors = {
    bookmark_text?: string,
    button_background_active?: string,
    button_background_hover?: string,
    icons?: string|ExtensionIcon,
    icons_attention?: string,
    frame?: string,
    frame_interactive?: string,
    ntp_background?: string,
    ntp_text?: string,
    popup?: string,
    popup_border?: string,
    popup_highlight?: string,
    popup_highlight_text?: string,
    popup_text?: string,
    sidebar?: string,
    sidebar_border?: string,
    sidebar_highlight?: string,
    sidebar_highlight_text?: string,
    sidebar_text?: string,
    tab_background_separator?: string,
    tab_background_text?: string,
    tab_line?: string,
    tab_loading?: string,
    tab_selected?: string,
    tab_text?: string,
    textcolor?: string,
    tollbbar?: string,
    toolbar_bottom_separator?: string,
    toolbar_field?: string,
    toolbar_field_border?: string,
    toolbar_field_border_focus?: string,
    toolbar_field_focus?: string,
    toolbar_field_highlight?: string,
    toolbar_field_highlight_text?: string,
    toolbar_field_separator?: string,
    toolbar_field_text?: string,
    toolbar_field_text_focus?: string,
    toolbar_text?: string,
    toolbar_top_separator?: string,
    toolbar_vertical_separator?: string,
};

type StringPathToScript = string;

type StringPathToAsset = string;

export type ExtensionManifest = {
    name: string
    short_name?: string
    manifest_version: 2,
    version: string
    default_locale: string
    author?: string,
    background?: {
        scripts: Array<string>,
        persistent?: boolean,
    },
    browser_action?: {
        browser_style?: boolean,
        default_area?: string,
        default_icon?: string | ExtensionIcon,
        default_popup: string,
        default_title: string,
        theme_icons?: Array<{
            dark: string,
            light: string,
            size: number
        }>,
    },
    browser_specific_settings?: {
        [browserId: string]: {
            id?: string,
            strict_min_version: string,
            strict_max_version: string,
            update_url?: string,
            browser_action_next_to_addressbar?: string
        }
    },
    chrome_settings_overrides?: {
        homepage?: string,
        search_provider?: {
            name: string,
            search_url: string,
            keyword: string,
            favicon_url: string,
        }
    }
    chrome_url_overrides?: {
        bookmarks?: string,
        history?: string,
        newtab?: string,
    }
    commands?: {
        [commandName: string]: {
            suggested_key: {
                default: string,
                linux?: string,
                mac?: string,
                windows?: string,
                chromeos?: string,
                android?: string,
                ios?: string,
            },
            description: string
        }
    }
    content_scripts?: Array<{
        matches: Array<string>,
        js?: Array<string>,
        all_frames?: boolean,
        css?: Array<string>,
        exclude_globs?: Array<string>,
        exclude_matches?: Array<string>,
        include_globs?: Array<string>,
        match_about_blank?: boolean,
        run_at?: string,
    }>,
    content_security_policy?: string,
    description?: string,
    developer?: { name: string, url: string },
    devtools_page?: string,
    dictionaries?: {
        [locale: string]: string
    },
    externally_connectable?: { ids?: Array<string>, matches: Array<string> },
    homepage_url?: string,
    icons?: ExtensionIcon,
    incognito?: string,
    offline_enabled?: boolean,
    omnibox?: { keyword: string },
    optional_permissions?: Array<string>,
    options_page?: string,
    options_ui?: {
        browser_style?: boolean,
        open_in_tab?: boolean,
        page: string,
    },
    page_action?: {
        browser_style?: boolean,
        default_icon?: string | ExtensionIcon,
        default_popup?: string,
        default_title?: string,
        hide_matches?: Array<string>,
        show_matches?: Array<string>,
        pinned?: boolean,
    },
    permissions?: Array<string>,
    protocol_handlers?: Array<{
        protocol: string,
        name: string,
        uriTemplate: string,
    }>,
    sidebar_action?: {
        browser_style?: boolean,
        default_icon: string | ExtensionIcon,
        default_panel: string,
        default_title: string,
        open_at_install: boolean
    },
    storage?: {
        manage_schema: string
    },
    theme?: {
        images?: {
            theme_frame: string,
            additional_backgrounds?: Url | Array<Url>
        },
        colors: ThemeColors,
        properties: ThemeProperties
    },
    theme_experiment?: {},
    user_scripts?: { "api_script": StringPathToScript },
    version_name?: string,
    web_accessible_resources?: Array<StringPathToAsset>,
}
