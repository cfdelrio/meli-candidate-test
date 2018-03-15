import React from 'react';
import { isArray, each } from 'lodash';

let result = [];

const parser = arr => {
    each(
        arr,
        function(element){
            if(_.isArray(element)){
              return parser(element);

            } else {
                result.push(element);
            }
        }
    );

  return result;
}

export default parser;