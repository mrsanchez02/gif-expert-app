/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Testing the component <GiftItem />', () => {
  const testTitle = 'One Punch Man GIF'
  const testUrl = 'https://media4.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=c22cd8075zljsjfdmiwo01vkl0vz9uivabbu7dsruxtkvgpi&ep=v1_gifs_search&rid=giphy.gif&ct=g'

  test('should match with Snapshot', () => {
    const { container } = render(<GifItem title={testTitle} url={testUrl} />)
    expect(container).toMatchSnapshot();
  })

  test('should show the image using the URL and the ALT.', () => {
    render(<GifItem title={testTitle} url={testUrl} />)
    // screen.debug();
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(testUrl)
    expect(alt).toBe(testTitle)

  })

  test('should show the title in the component', () => {
    render(<GifItem title={testTitle} url={testUrl} />)
    expect(screen.getByText(testTitle)).toBeTruthy()
    
  })

})
