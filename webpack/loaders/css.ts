const path = require('path');
const cssnano = require('cssnano');
const postcssShort = require('postcss-short');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssPreCss = require('precss');
const postcssPresetEnv = require('postcss-preset-env');
const postcssUtilities = require('postcss-utilities');
const postcssEasyImport = require('postcss-easy-import');
const postcssCustomMedia = require('postcss-custom-media');
const postcssAutoprefixer = require('autoprefixer');
const postcssImportAliasResolver = require('postcss-import-alias-resolver');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { IS_DEV, SRC_DIR } = require('../env');

export default {
    client: {
        test: /\.css$/,
        use: [
            IS_DEV && 'css-hot-loader',
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    sourceMap: true,
                    plugins: [
                        postcssImport({
                            resolve: postcssImportAliasResolver({
                                alias: path.resolve(SRC_DIR, 'client', 'styles'),
                                mergeExtensions: 'extend',
                            }),
                        }),
                        postcssEasyImport({
                            path: [path.resolve(SRC_DIR, 'client')],
                        }),
                        postcssShort(),
                        postcssImport(),
                        postcssNested(),
                        postcssPreCss(),
                        postcssUtilities(),
                        postcssPresetEnv(),
                        postcssCustomMedia(),
                        postcssAutoprefixer(),
                        !IS_DEV && cssnano({ preset: 'default' }),
                    ].filter(Boolean),
                },
            },
        ].filter(Boolean),
    },
    server: {
        test: /\.css$/,
        loader: 'null-loader',
    },
};
