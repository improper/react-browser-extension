import {ExtensionManifest} from "./manfiest";

const devConnectSource = `ws: localhost:300`;
export default (isEnvProduction: boolean): ExtensionManifest => ({
        name: `Create React App Browser Extension [${isEnvProduction ? 'PRODUCTION' : 'DEVELOPMENT'}]`,
        manifest_version: 2,
        short_name: `React App [${isEnvProduction ? 'PRODUCTION' : 'DEVELOPMENT'}]`,
        version: '1.0.0',
        default_locale: 'en',
        icons: {16: 'favicon.ico'},
        author: "My Name",
        description: `This extension is in [${isEnvProduction ? 'PRODUCTION' : 'DEVELOPMENT'}] mode.`,
        browser_action: {
            default_title: "Pop-up title",
            default_popup: "index.html"
        },
        background: {
            scripts: [
                'static/js/background-job-1.js',
                'static/js/background-job-2.js',
            ],
            persistent: false,
        },
        content_security_policy: [
            "default-src 'self'",
            `connect-src 'self' ${!isEnvProduction ? devConnectSource : ''}`,
            "script-src 'self'",
            "style-src * 'unsafe-inline'",
            "img-src https://accounts.platform.sh/ 'self' data:",
        ].join('; ')
    }
)
