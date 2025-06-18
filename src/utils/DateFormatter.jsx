export const DateFormatter = (isoDate) => {
    if (!isoDate) return 'Invalid Date';
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};