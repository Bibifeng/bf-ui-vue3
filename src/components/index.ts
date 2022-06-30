import MarkdownPage from './markdown-page';

const components = [MarkdownPage];

const install = app => {
    components.forEach(component => {
        app.use(component);
    });
};

export default {
    install,
}
