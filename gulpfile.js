'use strict';

const gulp = require('gulp');
const path = require('path');
const build = require('@microsoft/sp-build-web');
const webpack = require('webpack');

/**
 * Fixing the "5644:15-36 Critical dependency: the request of a dependency is an expression" warning
 * Linked to an existing bug/problem in Angular https://github.com/angular/angular/issues/11580
 */
build.configureWebpack.mergeConfig({ 
  additionalConfiguration: (generatedConfiguration) => {
    generatedConfiguration.plugins.push(
      new webpack.ContextReplacementPlugin(
        /angular(\\|\/)core/,
        path.resolve(__dirname, './src')
      )
    ); 
    // generatedConfiguration.module.rules = [
    //     // { test: /\.ts$/, loader: '@ngtools/webpack' },
    //     // {
    //     //     test: /\.scss$/,
    //     //     use: ['raw-loader', 'sass-loader']
    //     // },
    //     // {
    //     //     test: /\.css$/,
    //     //     loader: ['raw-loader', 'css-loader']
    //     // },
    //     // { test: /\.html$/, loader: 'raw-loader' },
    //     // {
    //     //   "enforce": "pre",
    //     //   "test": /\.js$/,
    //     //   "loader": "source-map-loader",
    //     //   "exclude": [
    //     //     // instead of /\/node_modules\//
    //     //     path.join(process.cwd(), 'node_modules')
    //     //   ]
    //     // }
    // ];
    return generatedConfiguration; 
  } 
});

build.initialize(gulp);
