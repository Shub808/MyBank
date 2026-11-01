/**
 * @format
 */
import 'react-native';
import React from 'react';
import {it, jest, expect, afterEach} from '@jest/globals';
import renderer, {act} from 'react-test-renderer';
import App from '../App';

afterEach(() => {
  jest.useRealTimers();
});

it('renders the splash screen without crashing', async () => {
  jest.useFakeTimers();
  let tree: renderer.ReactTestRenderer | undefined;
  await act(async () => {
    tree = renderer.create(<App />);
  });
  expect(tree?.toJSON()).not.toBeNull();
  // Unmount before the splash timer fires so it cannot navigate after teardown.
  await act(async () => {
    tree?.unmount();
  });
  jest.runOnlyPendingTimers();
});
