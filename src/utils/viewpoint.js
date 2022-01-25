export default function (element) {
    if (element.getBoundingClientRect) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < (window.innerHeight || document.documentElement.clientWidth) &&  
            rect.left < (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    return false
}