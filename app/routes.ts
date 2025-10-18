import { type RouteConfig, route, layout, index } from "@react-router/dev/routes";

export default [
    layout('routes/admin/admin-layout.tsx', [
        index('routes/admin/dashboard.tsx'), // Home page (/) shows dashboard
        route('all-users', 'routes/admin/all-users.tsx'),
        route('ai-trips', 'routes/admin/ai-trips.tsx')
    ])
] satisfies RouteConfig;