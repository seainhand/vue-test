module.exports = {
    moduleFileExtensions: [
        'js',
        'ts',
        'json',
        // 告诉 Jest 处理 `*.vue` 文件
        'vue'
    ],
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
        // 用 `ts-jest` 处理 `*.ts` 文件
        '^.+\\.tsx?$': 'ts-jest'
    },
};
