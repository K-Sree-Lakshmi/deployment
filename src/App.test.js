import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./testUtils/testUtils";
import App from "./App";

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

test('App component name', () => {
    const wrapper = setup({})
    const title = findByTestAttr(wrapper,"app-title")
    expect(title.length).toBe(1)
})
