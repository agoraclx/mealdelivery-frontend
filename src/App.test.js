import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect'

import fetchMock from "jest-fetch-mock";

import App from './App';

fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('renders Opening day and loading text', () => {
  render(<App />);
  const Element = screen.getByText(/Opening days/i);
  expect(Element).toBeInTheDocument();
  expect(screen.getByText("Loading ...")).toBeInTheDocument();
});

// fail
it("list restaurant", async () => {
  fetch.mockResponseOnce(JSON.stringify({ data: { name: "Orange House" } }));

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    `https://limitless-plains-59505.herokuapp.com/api/restaurants`
  );
});