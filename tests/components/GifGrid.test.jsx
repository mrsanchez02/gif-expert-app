/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Test for the component <GifGrid />', () => {

  const testCategory = 'One punch'

  test('should show loading on first load', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })
    render(<GifGrid category={testCategory}/>);

    expect(screen.getByText('Please wait...')).toBeTruthy()
    expect(screen.getByText(testCategory)).toBeTruthy()

  })

  test('should show items when images get loaded by the useFetchGifs hook', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'http://amazon.com'
      },
      {
        id: '123',
        title: 'DBZ',
        url: 'http://google.com'
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={testCategory}/>);
    expect( screen.getAllByRole('img').length ).toBe(2)

  })
  
})