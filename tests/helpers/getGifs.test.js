/* eslint-disable no-undef */
import { getGifs } from "../../src/helpers/getGifs"

describe('Testing the helper getGifs', () => {
  const testCategory = 'DBZ'
  test('should return an array of gif\'s images.', async () => {
    const gifs = await getGifs(testCategory)
    expect( gifs.length ).toBeGreaterThan(0)
    expect( gifs[0] ).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String)
    })
    
  })

})
