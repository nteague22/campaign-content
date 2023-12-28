const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const { glob } = require("glob");

module.exports =
    /**
     * @param {{ production: boolean }} env
     * @param {import("webpack-cli").ConfigOptions} opts
     * @returns {import("webpack").Configuration}
     */
    async function (env, opts) {
        const images = (await glob("**/*", { cwd: path.resolve(__dirname, "images"), nodir: true, nocase: true, })).map(i => `./images/${i.replace(/\\/, '/')}`);
        return {
            context: __dirname,
            devtool: env?.production && "cheap-source-map" || "inline-source-map",
            entry: {
                main: path.resolve(__dirname, "src/index.js"),
                images: images
            },
            output: {
                asyncChunks: true,
                compareBeforeEmit: true,
                filename: "[name]-[contenthash].js",
                assetModuleFilename: "[file]",
                clean: opts?.watch ?? true,
                path: path.resolve(__dirname, "build"),
                publicPath: "/",
            },
            optimization: {
                sideEffects: true
            },
            module: {
                rules: [
                    {
                        test: /\.html$/,
                        loader: "html-loader",
                    },
                    {
                        test: /\.jsx?$/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.png|\.jpg|\.jpeg|\.webp$/,
                        type: "asset/resource"
                    }
                ],
            },
            resolve: {
                extensions: [".jsx", ".json", ".js"],
            },
            plugins: [
                new HtmlPlugin({
                    hash: true,
                    showErrors: !opts.mode?.production,
                    template: "src/index.html",
                }),
            ],
        };
    };
