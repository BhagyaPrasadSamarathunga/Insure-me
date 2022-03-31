import React from 'react';
import TestRenderer from 'react-test-renderer';

import Button from '../../src/components/Button';

test('Button component snapshot testing', () => {
    const component = TestRenderer.create(
            <Button onButtonPress={()=>console.log("button press")}/>,
        );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot(); 
  });
