const path = require('path');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');
const postcssImportAliasResolver = require('postcss-import-alias-resolver');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');

const ResolverFactory = require('enhanced-resolve/lib/ResolverFactory');
const NodeJsInputFileSystem = require('enhanced-resolve/lib/NodeJsInputFileSystem');
const CachedInputFileSystem = require('enhanced-resolve/lib/CachedInputFileSystem');

const CACHED_DURATION = 60000;
const fileSystem = new CachedInputFileSystem(new NodeJsInputFileSystem(), CACHED_DURATION);


const { IS_DEV, SRC_DIR } = require('../env');

const resolverOptions = {
    alias: { styles: path.resolve(SRC_DIR, 'client', 'styles') },
    mergeExtensions: 'extend',
};

export default {
    client: {
        test: /\.css$/,
        use: [
            IS_DEV && 'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        postcssImport({
                            resolve: postcssImportAliasResolver(
                                resolverOptions
                            ),
                        }),
                        postcssCustomMedia(),
                        postcssNested(),
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
