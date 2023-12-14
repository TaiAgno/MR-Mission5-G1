#!/usr/bin/env node

// all packages and dependencies imported
const program = require('commander');
const { seedProducts } = require('./index.js');

// version controlled tool
program
    .version('1.0.0')
    .description('Products Seeder System')

// command to seed database with products sample data
program
    .command('seed')
    .alias('s') 
    .description('Seed products')
    .action(() => seedProducts());

program.parse(process.argv);