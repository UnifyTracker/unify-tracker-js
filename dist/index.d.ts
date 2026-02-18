interface UniTrackerConfig {
    analyticsHost: string;
    siteId: string;
    debounce?: number;
    skipPatterns?: string[];
    maskPatterns?: string[];
    debug?: boolean;
    replayPrivacyConfig?: {
        maskAllInputs?: boolean;
        maskTextSelectors?: string[];
    };
}
type PropertyValue = string | number | boolean;
interface TrackProperties {
    [key: string]: PropertyValue | PropertyValue[];
}
type PageChangeCallback = (pathname: string, previousPathname: string) => void;
interface UniTrackerAPI {
    init: (config: UniTrackerConfig) => Promise<void>;
    pageview: (path?: string) => void;
    event: (name: string, properties?: TrackProperties) => void;
    outbound: (url: string, text?: string, target?: string) => void;
    identify: (userId: string) => void;
    clearUserId: () => void;
    getUserId: () => string | null;
    cleanup: () => void;
    captureError: (error: Error | ErrorEvent, context?: TrackProperties) => void;
    onPageChange: (callback: PageChangeCallback) => () => void;
    startSessionReplay: () => void;
    stopSessionReplay: () => void;
    isSessionReplayActive: () => boolean;
}

declare const uniTracker: UniTrackerAPI;

export { uniTracker as default };
