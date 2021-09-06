module.exports = {
    extends: ['plugin:mew/vue'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        es6: true
    },
    rules: {
        'babel/camelcase': 0,
        'import/extensions': 0,
        'vue/require-prop-types': 0,
        'max-lines': 0,
        'vue/require-default-prop': 0
    }
};
