import Main from "_pages/public/main";
import Gallery from "_pages/public/gallery";

export const mapRoutes = [
    {
        "path": "/",
        "component": Main,
        "data": {
            "title": "start page",
        },
        "exact": true,
    },
    {
        "path": "/gallery",
        "component": Gallery,
        "data": {
            "title": "gallery page",
        },
        "exact": true,
    }
];
