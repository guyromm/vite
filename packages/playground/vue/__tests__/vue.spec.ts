import { setupTest } from '@vitejs/test-utils'

setupTest(__dirname)

test('browser should be available', async () => {
  expect(await page.textContent('pre')).toMatch('loaded')
})