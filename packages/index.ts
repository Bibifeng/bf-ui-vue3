import Button from './button';
import Switch from './switch';

const components = [Button, Switch];

const install = app => {
    components.forEach(component => {
        app.use(component);
    });
};

export default {
    install,
};
