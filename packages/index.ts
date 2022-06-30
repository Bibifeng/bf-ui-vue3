import Switch from './switch';

const components = [Switch];

const install = app => {
    components.forEach(component => {
        app.use(component);
    });
};

export default {
    install,
};
