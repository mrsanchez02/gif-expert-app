import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

/* eslint-disable no-undef */
describe('Testing the hook useFetchGifs', () => {
  const testCategory = 'One Punch'

  test('should return the initialState', () => {
    const { result } = renderHook(() => useFetchGifs(testCategory))

    const {images, isLoading} = result.current;

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()

   })

  test('should return an array of images and the isLoading in false', async () => {
    const { result } = renderHook(() => useFetchGifs(testCategory))
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    )
    const {images, isLoading} = result.current;

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()

   })
   
})