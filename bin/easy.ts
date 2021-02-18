#!/usr/bin/env node

import * as commandLineArgs from 'command-line-args';

const cpy = require('cpy');
 
(async () => {
  const optionDefinitions = [
    {
      name: 'component', alias: 'c', type: String, multiple: true
    },
  ];
  const options = commandLineArgs(optionDefinitions);
  
  console.log(options);

  await Promise.all(options.component.map(component => {
    return cpy(
      `easy-${component}/**/*`,
      `${process.cwd()}/src`,
      {
        cwd: `${__dirname}/../src/components/`,
        parents: true
      }
    );
  }));
})();

