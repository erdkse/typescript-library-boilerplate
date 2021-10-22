module.exports = {
    singleQuote: true,
    trailingComma: 'none',
    tabWidth: 4,
    singleQuote: true,
    printWidth: 80,
    semi: true,
    bracketSpacing: false,
    trailingComma: 'all',
    overrides: [
        {
            files: '*.ts',
            options: {
                parser: 'typescript',
            },
        },
    ],
};
