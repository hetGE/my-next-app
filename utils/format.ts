/**
 * Format a number as currency
 */
export function formatCurrency(
    amount: number,
    currency: string = "USD",
    locale: string = "en-US"
): string {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(amount);
}

/**
 * Format a date to a readable string
 */
export function formatDate(
    date: Date | string | number,
    options?: Intl.DateTimeFormatOptions,
    locale: string = "en-US"
): string {
    const dateObj = date instanceof Date ? date : new Date(date);
    
    const defaultOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
        ...options,
    };
    
    return new Intl.DateTimeFormat(locale, defaultOptions).format(dateObj);
}

/**
 * Format a date to a relative time string (e.g., "2 hours ago")
 */
export function formatRelativeTime(
    date: Date | string | number,
    locale: string = "en-US"
): string {
    const dateObj = date instanceof Date ? date : new Date(date);
    const now = new Date();
    const diffMs = now.getTime() - dateObj.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
    
    if (diffDays > 0) {
        return rtf.format(-diffDays, "day");
    } else if (diffHours > 0) {
        return rtf.format(-diffHours, "hour");
    } else if (diffMins > 0) {
        return rtf.format(-diffMins, "minute");
    } else {
        return rtf.format(-diffSecs, "second");
    }
}

/**
 * Format a number with thousand separators
 */
export function formatNumber(
    num: number,
    options?: Intl.NumberFormatOptions,
    locale: string = "en-US"
): string {
    return new Intl.NumberFormat(locale, options).format(num);
}

/**
 * Format bytes to human readable format
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
    if (bytes === 0) return "0 Bytes";
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

/**
 * Truncate text to a specified length
 */
export function truncateText(text: string, maxLength: number, suffix: string = "..."): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Format a phone number
 */
export function formatPhoneNumber(phoneNumber: string): string {
    const cleaned = phoneNumber.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    
    return phoneNumber;
}

/**
 * Convert a string to title case
 */
export function toTitleCase(str: string): string {
    return str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

/**
 * Convert a string to slug format
 */
export function toSlug(str: string): string {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}