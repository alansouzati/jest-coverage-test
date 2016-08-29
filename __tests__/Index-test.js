import React from 'react';
import renderer from 'react/lib/ReactTestRenderer';

import Index from '../src/js/Index';

describe('Index', () => {
  it('has correct default options', () => {
    const component = renderer.create(
      <Index />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
