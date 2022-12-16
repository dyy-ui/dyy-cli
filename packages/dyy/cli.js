#!/usr/bin/env node
console.log(process.argv)
require('.')(process.argv.slice(2))
