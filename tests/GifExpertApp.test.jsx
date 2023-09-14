/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Testing the component <GifExpertApp />', () => {
  test('should show the title of the inital gif request ', () => { 
    render(<GifExpertApp />)
    expect(screen.findByRole('heading', {level: 3})).toBeTruthy()
   })

   
})
