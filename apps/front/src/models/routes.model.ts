const getBackRoutes = () => {
    const base = '/';

    const Static = {
        posts: base + 'posts',
        seed: base + 'seed'
    };

    return { Static };
};

export const backRoutes = getBackRoutes()