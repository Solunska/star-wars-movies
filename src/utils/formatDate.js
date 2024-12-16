export function formatDate(dateString, locale = 'en-US', options = { year: 'numeric', month: 'long', day: 'numeric' }) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, options).format(date);
}
