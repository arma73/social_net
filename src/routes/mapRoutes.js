import Main from "_pages/public/main";
import SelfProfile from "_pages/public/selfprofile";

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
        "path": "/self",
        "component": SelfProfile,
        "data": {
            "title": "SelfProfile page",
        },
        "exact": true,
    },
];
