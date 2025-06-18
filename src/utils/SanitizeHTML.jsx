export const sanitizeHTML = (dirty) => {
    return DOMPurify.sanitize(dirty);
};