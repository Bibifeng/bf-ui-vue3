import MarkdownPage from './src/markdown-page.vue';
MarkdownPage.install = app => {
    app.component(MarkdownPage.name, MarkdownPage);
};
export default MarkdownPage;
